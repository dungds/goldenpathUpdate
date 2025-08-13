"use client";

import { useState } from "react";
import { Paragraph, Button, H3 } from "@/components/ui";
export default function ContactFormPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    from: "",
  });
  const [status, setStatus] = useState<{
    message: string;
    type: "success" | "error" | null;
    data?: {
      name: string;
      email: string;
      phone: string | null;
      message: string;
      from: string | null;
    };
  }>({
    message: "",
    type: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ message: "", type: null }); // Reset status

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
      const formDataWithFrom = {
        ...form,
        from: "Contact Page",
        status: "uncheck",
      }; // Set from to "Contact Page"
      const response = await fetch(`${apiUrl}/api/contacts`, {
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
      setForm({ name: "", email: "", phone: "", message: "", from: "" });
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
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 pb-10  bg-background-neutral"
      >
        <div>
          <H3 className="text-text-primary text-3xl md:pb-4 md:text-5xl md:font-medium">
            Get in touch
          </H3>
          <Paragraph className="text-lg md:text-xl pb-6">
            Contact us and someone from our team of experts will contact you
          </Paragraph>
        </div>
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
          onChange={handleChange}
          placeholder="Name"
          name="name"
          required
          value={form.name}
          className="w-full bg-background-light p-2 border border-gray-300  focus:border-primary focus:outline-none text-text-primary"
        />
        <input
          name="email"
          onChange={handleChange}
          placeholder="Email*"
          required
          type="email"
          value={form.email}
          className="w-full bg-background-light  p-2  border border-gray-300  focus:border-primary focus:outline-none"
        />
        <input
          onChange={handleChange}
          placeholder="Phone"
          name="phone"
          value={form.phone}
          className="w-full bg-background-light  p-2  border border-gray-300  focus:border-primary focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
          required
          value={form.message}
          className="bg-background-light p-2 w-full h-40  border border-gray-300  focus:border-primary focus:outline-none "
        />

        <Button type="submit" className="bg-primary px-12 py-2">
          Submit
        </Button>
      </form>
    </div>
  );
}
