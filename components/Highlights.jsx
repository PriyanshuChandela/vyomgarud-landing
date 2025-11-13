"use client"; 
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

export default function Highlights() {
  const features = [
    { title: "Precision Engineering", desc: "Built for endurance, accuracy, and mission-critical operations." },
    { title: "Autonomous Intelligence", desc: "AI-driven systems ensuring superior navigation and control." },
    { title: "Military-Grade Reliability", desc: "Tested for extreme environments and demanding missions." },
  ];

  return (
    <ScrollReveal className="py-20 bg-[#111] px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#ff7b00] mb-10">
        Key Highlights
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.25 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(255,123,0,0.3)" }}
            className="p-6 bg-[#1a1a1a] rounded-xl"
          >
            <h3 className="text-xl font-semibold text-[#ff7b00] mb-3">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </ScrollReveal>
  );
}
