import React from 'react';

const CommunitySection = () => {
  const discordLink = 'https://discord.com/invite/WDrH3zuWFb'; // Replace with your link

  return (
    <section className="relative py-28 px-6 md:px-16  text-white">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0  opacity-60 blur-sm animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Main Title */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 mb-8 leading-tight tracking-tight">
          Connect. Build. Code. Innovate.
        </h2>

        {/* Description */}
        <p className="max-w-2xl text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed transform-gpu transition duration-300 ease-in-out hover:scale-105 hover:text-yellow-200">
          Join a thriving community of passionate developers, share ideas, collaborate, and build amazing projects together. Let's create something extraordinary!
        </p>

        {/* Join Discord Button */}
        <a
          href={discordLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 px-8 py-4 text-white font-semibold text-lg md:text-xl bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Join Our Discord
        </a>

        {/* Animated Code Snippet */}
        <div className="mt-20 w-full max-w-4xl bg-black/30 border border-white/20 backdrop-blur-xl p-8 rounded-xl shadow-2xl text-left overflow-x-auto transform transition-all duration-500 hover:scale-105">
          <pre className="font-mono text-lg md:text-xl text-white leading-relaxed whitespace-pre-wrap">
            <code className="text-green-400">const </code>
            <code className="text-cyan-400">community </code>
            <code className="text-pink-400">= </code>
            <code className="text-white">&#123;</code><br />
            &nbsp;&nbsp;<code className="text-yellow-400">name</code>: <code className="text-emerald-400">"We Write Code"</code>,<br />
            &nbsp;&nbsp;<code className="text-yellow-400">platform</code>: <code className="text-emerald-400">"Discord"</code>,<br />
            &nbsp;&nbsp;<code className="text-yellow-400">members</code>: <code className="text-emerald-400">"82.4K+"</code>,<br />
            &nbsp;&nbsp;<code className="text-yellow-400">mission</code>: <code className="text-emerald-400">"Code. Collaborate. Create."</code>,<br />
            &nbsp;&nbsp;<code className="text-yellow-400">join</code>: <code className="text-pink-400">() =&gt; </code><code className="text-white">&#123; return </code><code className="text-emerald-400">"🚀 Let's code the future!"</code>; <code className="text-white">&#125;</code><br />
            <code className="text-white">&#125;;</code>
          </pre>
        </div>

        {/* Floating Discord Icon */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10 opacity-25">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png"
            alt="Discord Icon"
            className="w-32 md:w-40 transition-transform duration-500 hover:scale-110 hover:rotate-12 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
