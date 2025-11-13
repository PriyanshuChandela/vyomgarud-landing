"use client";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

export default function Capabilities() {
  const items = [
    { title: "Surveillance Drones", desc: "Long-endurance systems for real-time aerial monitoring." },
    { title: "Tactical UAVs", desc: "Compact and mission-ready drones for quick deployment." },
    { title: "Custom Payloads", desc: "Adaptable sensors and communication modules for diverse missions." },
    { title: "Control Systems", desc: "Advanced ground control and telemetry management interfaces." },
  ];

  return (
    <section
      id="capabilities"
      className="min-h-screen flex flex-col justify-center items-center bg-[#0d0d0d] px-6 py-20"
    >
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#ff7b00]">
          Our Capabilities
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }} // 👈 smoother stagger
              whileHover={{
                y: -6,
                boxShadow: "0px 10px 25px rgba(255,123,0,0.35)",
                transition: { duration: 0.15 }, // 👈 instant hover response
              }}
              className="bg-[#1a1a1a] p-6 rounded-2xl transition border border-[#222]"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#ff7b00]">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
