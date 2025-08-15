"use client";
import { useState } from "react";
import { Paragraph, Button, H3 } from "@/components/ui";

export default function ConsultationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    origin_page: "",
  });
  const [status, setStatus] = useState<{
    message: string;
    type: "success" | "error" | null;
    data?: {
      name: string;
      email: string;

      origin_page: string | null;
    };
  }>({
    message: "",
    type: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // chặn reload trang

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
      const formDataWithFrom = {
        ...form,
        origin_page: "consultant Page",
        status: "uncheck",
      }; // Set from to "Contact Page"
      const response = await fetch(`${apiUrl}/api/customers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataWithFrom),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Thank! The form was submitted successfully."
        );
      }
      console.log(result.message);
      setStatus({
        message:
          result.message || "Thank! The form was submitted successfully.",
        type: "success",
        data: result.data,
      });
      setForm({ name: "", email: "", origin_page: "" });
    } catch (error) {
      setStatus({
        message: error instanceof Error ? error.message : "An error occurred",
        type: "error",
      });
    }
  };

  const clearFeedback = () => {
    setStatus({ message: "", type: null });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-background-neutral px-4 py-6  "
    >
      {status.message && (
        <div
          className={`p-4 rounded-md ${
            status.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          <Paragraph className="text-lg font-medium">
            {status.message}
          </Paragraph>
        </div>
      )}

      <input
        name="name"
        onChange={handleChange}
        placeholder="Name"
        required
        value={form.name}
        className="w-full bg-background-light p-2 border border-gray-300  focus:border-primary focus:outline-none text-text-primary"
      />
      <input
        name="email"
        required
        onChange={handleChange}
        placeholder="Email*"
        value={form.email}
        className="w-full bg-background-light  p-2  border border-gray-300  focus:border-primary focus:outline-none"
      />

      <Button type="submit" variant="dark" className=" px-12 py-2 ">
        Submit
      </Button>
    </form>
  );
}
