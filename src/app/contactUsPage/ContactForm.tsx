"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles, MessageSquare, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getWhatsAppUrl = () => {
    const text = `Hello Eduecho Team,\n\nI would like to enquire about admission guidance.\n\n*Name:* ${formData.name || "N/A"}\n*Phone:* ${formData.phone || "N/A"}\n*Email:* ${formData.email || "N/A"}\n*Message:* ${formData.message || "N/A"}`;
    return `https://wa.me/917411605384?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    setIsError(false);

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

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const result = await response.json().catch(() => ({}));

      setStatus("Message sent successfully! We will contact you shortly.");
      setIsError(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("Email submission service is temporarily unavailable.");
      setIsError(true);
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
          className="relative z-10 w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white py-3 rounded-xl text-sm font-semibold disabled:opacity-50 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-orange-500/25 transition-shadow cursor-pointer"
        >
          {submitting ? "Sending..." : <><Send className="w-4 h-4" /> Submit</>}
        </motion.button>

        {status && (
          <div className="relative z-10 flex flex-col gap-2 mt-1">
            <div className={`flex items-center justify-center gap-2 text-sm text-center font-medium ${isError ? "text-red-600" : "text-green-600"}`}>
              {isError && <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />}
              <span>{status}</span>
            </div>

            {isError && (
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Inquiry via WhatsApp</span>
              </a>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
