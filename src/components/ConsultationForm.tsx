"use client";
import { useState } from "react";
import { Button } from "./ui";
export default function ConsultationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // chặn reload trang
    console.log("Send contact:", form); // kiểm tra kết quả
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-background-neutral px-4 py-6  "
    >
      <input
        name="name"
        onChange={handleChange}
        placeholder="Name"
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

      <Button type="submit" variant="dark" className=" px-12 py-2 ">
        Submit
      </Button>
    </form>
  );
}
