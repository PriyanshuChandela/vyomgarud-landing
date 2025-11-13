import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Highlights from "@/components/Highlights";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0d0d0d] text-white font-poppins overflow-x-hidden scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <Highlights />
      <Contact />
    </main>
  );
}
