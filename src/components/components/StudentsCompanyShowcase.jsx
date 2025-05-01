import React from "react";
import placements from "../../data/placements";


export default function StudentsCompanyShowcase() {
  return (
   <section className="flex justify-center items-center">
     <div className="relative max-w-7xl py-20 px-4 overflow-hidden bg-transparent text-white">
      {/* Glowing Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-pink-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-10 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-3">
          Our Students Have Been Placed At
        </h2>
        <p className="text-orange-200 text-sm md:text-base mb-6">
          From Big Tech to Startups — they’re shaping the future with code.
        </p>
        <div className="w-20 mx-auto h-1 bg-blue-500 rounded-full mb-8"></div>
      </div>

      {/* Scrolling Cards with Gradient Mask */}
      <div className="overflow-hidden w-[95%] xs:w-[80%] mx-auto py-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] relative z-10">
        <div className="flex min-w-max animate-marquee-infinite gap-6">
          {[...placements, ...placements].map((item, index) => (
            <div
              key={index}
              className="bg-[#1f2233] px-6 py-4 rounded-2xl text-sm md:text-base flex-shrink-0 border border-blue-600/30 hover:scale-105 hover:border-blue-400/70 transition duration-300 shadow-xl backdrop-blur-md"
            >
              <div className="text-orange-100 font-semibold">{item.student}</div>
              <div className="text-blue-400 text-sm">{item.role}</div>
              <div className="text-orange-400 text-xs mt-1">at {item.company}</div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
   </section>
  );
}
