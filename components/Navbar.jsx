"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const links = ["Home", "About", "Capabilities", "Highlights", "Contact"];
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = links.map((link) =>
        document.getElementById(link.toLowerCase())
      );

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop - 200) {
          setActive(links[i].toLowerCase());
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-[#111]/80 backdrop-blur-md border border-[#222] rounded-full px-8 py-3 flex gap-6 text-sm z-50 shadow-lg">
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className={`transition-colors duration-300 font-medium ${
            active === link.toLowerCase()
              ? "text-[#ff7b00]"
              : "text-gray-300 hover:text-[#ff7b00]"
          }`}
        >
          {link}
        </a>
      ))}
    </nav>
  );
}

