"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles } from "lucide-react";

export default function EnquireNowForm({ onClose }: { onClose: () => void }) {
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
    const dataToSubmit = { ...formData, _captcha: "false", _template: "table", _subject: "New Quote Request via Enquire Now" };
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
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center overflow-y-auto px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white p-7 rounded-2xl w-full max-w-md relative max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 overflow-hidden"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:rotate-90 transition-all duration-300 w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center z-20">
          <X className="w-5 h-5" />
        </button>

        <div className="w-full flex flex-col gap-5 relative z-10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl md:text-3xl font-bold text-black">Get in touch</h2>
          </div>
          <p className="text-gray-500 text-sm">We&apos;d love to hear from you. Fill out the form below.</p>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            {[
              { id: "name", label: "Name", type: "text", required: true, placeholder: "Your full name" },
              { id: "phone", label: "Phone", type: "tel", required: false, placeholder: "+91 XXXX XXXX XX" },
              { id: "email", label: "Email", type: "email", required: true, placeholder: "you@example.com" },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-sm font-medium mb-1.5 text-gray-700">{field.label} {field.required && <span className="text-orange-500">*</span>}</label>
                <input id={field.id} type={field.type} name={field.id} value={formData[field.id as keyof typeof formData]} onChange={handleChange} placeholder={field.placeholder} required={field.required}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 bg-gray-50 hover:bg-white" />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-gray-700">Message <span className="text-orange-500">*</span></label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your requirements..." required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm min-h-[100px] focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 bg-gray-50 hover:bg-white resize-none" />
            </div>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={submitting}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white py-3 rounded-xl text-sm font-semibold disabled:opacity-50 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-orange-500/25 transition-shadow">
              {submitting ? "Sending..." : <><Send className="w-4 h-4" /> Submit</>}
            </motion.button>
            {status && <p className={`text-center text-sm mt-1 ${status.includes("Error") ? "text-red-500" : "text-green-600"}`}>{status}</p>}
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}
