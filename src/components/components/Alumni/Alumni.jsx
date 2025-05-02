import React from "react";
import FloatingBalloonsCanvas from "./FloatingBalloonsCanvas";

export default function Alumni

() {
  return (
    <section
  className="relative w-full rounded-2xl py-20 px-4 overflow-hidden font-mono text-white"
  aria-labelledby="code-crafters-heading"
  role="region"
>
  {/* Background Glowing Effects */}
  <div
    aria-hidden="true"
    className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[600px] z-0 pointer-events-none"
  />
  <div
    aria-hidden="true"
    className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[600px] bg-blue-500/20 blur-[120px] z-0 pointer-events-none"
  />
  <div
    aria-hidden="true"
    className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-black via-gray-800 to-transparent opacity-30 blur-[200px] pointer-events-none z-0"
  />

  {/* Main Content Area */}
  <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-stretch">
    {/* Left Column: Balloons Canvas */}
    <div
      className="w-full md:w-1/2 backdrop-blur-md bg-green-600/5 shadow-2xl rounded-2xl flex items-center justify-center min-h-[250px] overflow-hidden"
      role="presentation"
      aria-hidden="true"
    >
      <div className="w-full h-full">
        <FloatingBalloonsCanvas />
      </div>
    </div>

    {/* Right Column: Text Content */}
    <div
      className="w-full md:w-1/2 p-6 md:p-10 rounded-2xl flex flex-col justify-center items-center md:items-start text-center md:text-left bg-gradient-to-br from-black to-gray-900 shadow-lg"
    >
      <h2
        id="code-crafters-heading"
        className="text-2xl md:text-4xl font-bold text-orange-400 mb-4 flex items-center flex-wrap gap-2 justify-center md:justify-start"
      >
        Meet the <br />
        <code className="px-3 py-1 bg-gray-900 text-green-400 font-mono text-xl md:text-2xl">
          <span className="text-green-400 text-xl">&lt;</span>
          Code Crafters
          <span className="text-green-400 text-xl">/&gt;</span>
        </code>
      </h2>

      <p className="text-gray-300 leading-relaxed text-base md:text-lg max-w-md">
        These are the architects of our digital world, blending{" "}
        <span className="text-cyan-400 font-semibold">logic</span> and{" "}
        <span className="text-pink-400 font-semibold">creativity</span>.
        <br className="hidden sm:block" />
        <span className="text-yellow-400">Hover</span> over their avatars to
        uncover their coding journey 💻✨.
      </p>
    </div>
  </div>
</section>

  );
}
