"use client";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-[#0b0b0b] px-6 py-20 border-t border-[#222]"
    >
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-[#ff7b00] mb-8 text-center">
          Contact Us
        </h2>

        <form className="max-w-md w-full mx-auto flex flex-col gap-5">
          <input
            type="text"
            placeholder="Name"
            className="p-3 bg-[#1a1a1a] rounded-lg border border-[#222] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff7b00]"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 bg-[#1a1a1a] rounded-lg border border-[#222] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff7b00]"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="p-3 bg-[#1a1a1a] rounded-lg border border-[#222] text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff7b00]"
          />
          <button
            type="submit"
            className="bg-[#ff7b00] py-3 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>

        <p className="mt-12 text-gray-500 text-sm text-center">
          © 2025 VyomGarud. All rights reserved.
        </p>
      </ScrollReveal>
    </section>
  );
}

