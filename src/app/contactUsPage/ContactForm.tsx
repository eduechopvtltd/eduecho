"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/help@eduecho.in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className=" text-3xl md:text-4xl font-bold font-['Khula']">
        Get in touch with us ✨
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full bg-white rounded-lg border border-gray-200 p-6 md:p-8 flex flex-col gap-4"
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-1">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            className="w-full px-3 py-2 border rounded-md text-sm min-h-[100px] focus:outline-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-indigo-900 text-white py-2 rounded-md text-sm font-medium disabled:opacity-50"
        >
          {submitting ? "Sending..." : "Submit"}
        </button>

        {/* Status Message */}
        {status && (
          <p className="text-center text-sm text-green-600 mt-2">
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
