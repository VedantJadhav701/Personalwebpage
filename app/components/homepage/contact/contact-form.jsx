"use client";
import { useState } from "react";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("https://submit-form.com/5BxX74bPr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#1b203e] border border-[#464c6a] p-6 rounded-lg flex flex-col gap-4">
      <p className="text-lg font-semibold text-white">Contact with me</p>
      <p className="text-sm text-[#d3d8e8]">If you have any questions or opportunities, feel free to reach out!</p>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        required
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        required
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
      />

      <textarea
        name="message"
        rows="4"
        placeholder="Your Message"
        value={formData.message}
        required
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
      />

      {submitted && (
        <p className="text-green-400 font-medium">✅ Message sent successfully!</p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-2 text-white rounded-full hover:scale-105 transition"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default ContactForm;
