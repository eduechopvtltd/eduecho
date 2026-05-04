"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      _subject: "New Inquiry from Eduecho Website",
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/help@eduecho.in", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(dataToSubmit),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus(`Error: ${result.message || "Something went wrong."}`);
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full flex text-black bg-white flex-col gap-5">
      <div className="flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-orange-500" />
        <h2 className="text-2xl md:text-3xl font-bold">
          Get in touch with us
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full rounded-2xl border border-gray-200 p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden"
      >
        {[
          { id: "name", label: "Name", type: "text", required: true, placeholder: "Your full name" },
          { id: "phone", label: "Phone", type: "tel", required: false, placeholder: "+91 XXXX XXXX XX" },
          { id: "email", label: "Email", type: "email", required: true, placeholder: "you@example.com" },
        ].map((field) => (
          <div key={field.id} className="relative z-10">
            <label htmlFor={field.id} className="block text-sm font-medium mb-1.5 text-gray-700">
              {field.label} {field.required && <span className="text-orange-500">*</span>}
            </label>
            <input
              id={field.id}
              type={field.type}
              name={field.id}
              value={formData[field.id as keyof typeof formData]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 bg-gray-50 hover:bg-white"
            />
          </div>
        ))}

        <div className="relative z-10">
          <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-gray-700">
            Message <span className="text-orange-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements..."
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm min-h-[100px] focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={submitting}
          className="relative z-10 w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white py-3 rounded-xl text-sm font-semibold disabled:opacity-50 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-orange-500/25 transition-shadow"
        >
          {submitting ? "Sending..." : <><Send className="w-4 h-4" /> Submit</>}
        </motion.button>

        {status && (
          <p className="relative z-10 text-center text-sm mt-1 text-green-600">
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
