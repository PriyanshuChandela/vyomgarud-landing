"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToCapabilities = () => {
    const el = document.getElementById("capabilities");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60 z-10" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff7b0020,transparent_70%)] z-20"
      />

      {/* Foreground content */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold relative z-30 text-white"
      >
        VyomGarud
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl mt-4 max-w-2xl text-gray-300 relative z-30"
      >
        Engineering the Future of Autonomous Flight
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={scrollToCapabilities}
        className="mt-8 bg-[#ff7b00] text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition relative z-30"
      >
        Explore Our Systems
      </motion.button>
    </section>
  );
}
