"use client";

import { useState } from "react";
import { Paragraph, Button, H3 } from "@/components/ui";
export default function ContactFormPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // chặn reload trang
    console.log("Send contact:", form); // kiểm tra kết quả
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

        <input
          onChange={handleChange}
          placeholder="Name"
          name="name"
          value={form.name}
          className="w-full bg-background-light p-2 border border-gray-300  focus:border-primary focus:outline-none text-text-primary"
        />
        <input
          name="email"
          onChange={handleChange}
          placeholder="Email*"
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
