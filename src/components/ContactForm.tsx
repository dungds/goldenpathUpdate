"use client";
import { useState } from "react";
import { Paragraph, Button, H3 } from "@/components/ui";

export default function ContactForm() {
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
      phone: string;
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
    <section className="bg-[url(/img/bg-contact.jpg)] bg-no-repeat bg-cover md:py-10 ">
      <div className="grid grid-cols-1 md:gap-10 lg:gap-20 md:grid-cols-2 section-container py-12">
        <div className="text-text-on-dark  py-10 pt-0  md:py-8 lg:py-20">
          <H3 className="font-semibold uppercase text-2xl md:text-4xl lg:text-5xl">
            CONTACT US NOW!
          </H3>
          <Paragraph className="md:text-xl lg:text-2xl font-bold pt-2 pb-3">
            We&apos;d love to hear from you
          </Paragraph>
          <Paragraph className="lg:text-xl lg:font-light">
            Need trusted business consultants in Dubai? Connect with us today
            and explore what our team can offer.
          </Paragraph>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 px-4 py-8 md:py-10 lg:py-12 md:px-6 lg:px-12 bg-background rounded-md"
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
            value={form.name}
            required
            className="w-full bg-background-light p-2   focus:border-primary focus:outline-none"
          />
          <input
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="Email*"
            value={form.email}
            required
            className="w-full bg-background-light  p-2    focus:border-primary focus:outline-none"
          />
          <input
            name="phone"
            onChange={handleChange}
            placeholder="Phone"
            value={form.phone}
            className="w-full bg-background-light  p-2    focus:border-primary focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
            value={form.message}
            required
            className="bg-background-light p-2 w-full h-40    focus:border-primary focus:outline-none "
          />

          <Button type="submit" className="bg-primary px-12 py-3 w-full">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
