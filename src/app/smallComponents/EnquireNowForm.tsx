"use client";

import { useState } from "react";

export default function EnquireNowForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const dataToSubmit = {
      ...formData,
      _captcha: "false",
      _template: "table",
      _subject: "New Quote Request via Enquire Now",
    };

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/help@eduecho.in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(dataToSubmit),
        }
      );

      const result = await response.json();
      console.log("FormSubmit Response:", result);

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(`Error: ${result.message || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center overflow-y-auto px-4">
      <div className="bg-white dark:bg-neutral-900 p-6 rounded-xl w-full max-w-md relative max-h-[90vh] overflow-y-auto">
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl text-black dark:text-white"
        >
          ✕
        </button>
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-3xl text-black md:text-4xl font-bold font-['Khula']">
            Get in touch with us ✨
          </h2>

          <form
            onSubmit={handleSubmit}
            className="w-full rounded-lg border border-gray-200 p-6 md:p-8 flex flex-col gap-4"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name *
              </label>
              <input
                id="name"
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
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email *
              </label>
              <input
                id="email"
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
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message *
              </label>
              <textarea
                id="message"
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

            {/* Status */}
            {status && (
              <p className="text-center text-sm text-green-600 mt-2">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
