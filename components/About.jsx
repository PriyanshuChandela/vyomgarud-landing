"use client";

export default function About() {
  return (
    <section
      id="about"
      className="h-screen relative flex flex-col justify-center items-center text-center snap-start overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/videos/about.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ff7b00] mb-6">
          About VyomGarud
        </h2>

        <p className="max-w-5xl mx-auto text-gray-200 leading-relaxed">
          VyomGarud pioneers unmanned aerial systems built for defense,
          intelligence, and industrial excellence.
          <br />
          With a focus on precision engineering, autonomy, and reliability,
          we deliver next-generation UAV solutions.
        </p>
      </div>
    </section>
  );
}

