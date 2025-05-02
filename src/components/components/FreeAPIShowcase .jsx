import React from 'react';

const FreeAPIShowcase = () => {
  return (
    <section className="relative bg-gradient-to-b from-black via-zinc-900 to-black rounded-3xl px-6 sm:px-10 md:px-16 py-20 overflow-hidden font-mono text-white">
    {/* Glowing Background */}
    <div className="absolute -top-64 -right-64 w-[700px] h-[700px] bg-indigo-500 opacity-20 rounded-full blur-[200px]" aria-hidden="true"></div>
  
    {/* Top Fade */}
    <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
  
    {/* Main Content */}
    <div className="relative z-20 max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-orange-600 to-orange-300">
        FreeAPI – Your Open Source API Powerhouse
      </h2>
  
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Unlock Your Potential with Our API Hub
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed font-sans">
            Practice API integration like a real-world dev! Whether you're building with React, Next.js, or Flutter, FreeAPI is your sandbox playground. ⚡
          </p>
  
          {/* Terminal-style Code Box */}
          <div
            className="bg-black border border-zinc-800 p-4 rounded-lg text-left shadow-inner"
            aria-describedby="code-description"
          >
            <p className="text-green-400 overflow-auto">fetch https://freeapi/public/quotes/quote/random</p>
            <p className="text-blue-400">[200] → {'{ "data": [...] }'}</p>
          </div>
        </div>
  
        {/* Video Embed */}
        <div>
          <div
            className="aspect-video w-full rounded-2xl overflow-hidden border border-zinc-700 shadow-lg"
            aria-labelledby="video-description"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/xJq0EQMFGyg?si=ivEGWrNKsX6vYyTy"
              title="FreeAPI Demo Video"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
  
      {/* CTA Button */}
      <div className="mt-16 flex justify-center">
        <a
          href="https://freeapi.hashnode.space/api-guide/apireference/getARandomQuote"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-400 hover:bg-orange-500 text-black font-semibold px-8 py-4 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          aria-label="Explore FreeAPI documentation and API reference"
          role="link"
          tabIndex="0"
        >
          📚 Explore FreeAPI Docs
        </a>
      </div>
    </div>
  </section>
  
  );
};

export default FreeAPIShowcase;
