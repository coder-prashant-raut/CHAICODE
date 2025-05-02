import React from 'react';

const CommunitySection = () => {
  const discordLink = 'https://discord.com/invite/WDrH3zuWFb'; // Replace with your link

  return (
    <section
    className="relative py-28 px-6 md:px-16 text-white"
    aria-labelledby="connect-title"
  >
    {/* Background Animation */}
    <div
      className="absolute inset-0 z-0 opacity-60 blur-sm animate-pulse"
      aria-hidden="true"
    ></div>
  
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center text-center">
      {/* Main Title */}
      <h2
        id="connect-title"
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 mb-8 leading-tight tracking-tight"
      >
        Connect. Build. Code. Innovate.
      </h2>
  
      {/* Description */}
      <p className="max-w-2xl text-xl md:text-2xl mb-12 leading-relaxed transform-gpu transition duration-300 ease-in-out hover:scale-105 text-orange-200">
        Join a thriving community of passionate developers, share ideas, collaborate, and build amazing projects together. Let's create something extraordinary!
      </p>
  
      {/* Join Discord Button */}
      <a
        href={discordLink}
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        aria-label="Join our Discord community"
        className="inline-flex items-center gap-4 px-8 py-4 text-white font-semibold text-lg md:text-xl bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        Join Our Discord
      </a>
  
      {/* Animated Code Snippet */}
      <div
        className="mt-20 w-full max-w-4xl bg-black/30 border border-white/20 backdrop-blur-xl p-8 rounded-xl shadow-2xl text-left overflow-x-auto transform transition-all duration-500 hover:scale-105"
        role="region"
        aria-label="Community code snippet"
      >
        <pre className="font-mono text-lg md:text-xl text-white leading-relaxed whitespace-pre-wrap">
          <code>
            <span className="text-green-400">const </span>
            <span className="text-cyan-400">community </span>
            <span className="text-pink-400">= </span>
            <span className="text-white">&#123;</span>
            <br />
            &nbsp;&nbsp;<span className="text-orange-400">name</span>: <span className="text-emerald-400">"We Write Code"</span>,<br />
            &nbsp;&nbsp;<span className="text-orange-400">platform</span>: <span className="text-emerald-400">"Discord"</span>,<br />
            &nbsp;&nbsp;<span className="text-orange-400">members</span>: <span className="text-emerald-400">"82.4K+"</span>,<br />
            &nbsp;&nbsp;<span className="text-orange-400">mission</span>: <span className="text-emerald-400">"Code. Collaborate. Create."</span>,<br />
            &nbsp;&nbsp;<span className="text-orange-400">join</span>: <span className="text-pink-400">() =&gt; </span><span className="text-white">&#123; return </span><span className="text-emerald-400">"🚀 Let's code the future!"</span>; <span className="text-white">&#125;</span>
            <br />
            <span className="text-white">&#125;;</span>
          </code>
        </pre>
      </div>
  
      {/* Floating Discord Icon */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10 opacity-25"
        aria-hidden="true"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png"
          alt="Discord logo"
          className="w-32 md:w-40 transition-transform duration-500 hover:scale-110 hover:rotate-12 cursor-pointer"
        />
      </div>
    </div>
  </section>
  
  );
};

export default CommunitySection;
