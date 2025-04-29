import React from 'react';

const CommunitySection = () => {
  const discordLink = 'https://discord.com/channels/1022510020736331806/1022644903248920656'; // Replace this

  return (
    <section className="relative text-white py-20 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">

        <h2 className="text-4xl md:text-5xl font-mono font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text mb-6">
          Connect, Build, and Code Together
        </h2>

        <p className="max-w-2xl text-gray-300 text-base md:text-lg mb-10 leading-relaxed">
          Join thousands of passionate developers pushing the boundaries of creativity. Learn, share ideas, and build something amazing—together.
        </p>

        <img 
          src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png"
          alt="Join Discord"
          className="w-32 md:w-40 mb-8 object-contain hover:scale-105 transition-transform duration-500"
        />

        <a
          href={discordLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-6 py-3 text-white font-semibold text-base md:text-lg bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Join Our Discord
        </a>

        {/* Code Snippet */}
        <div className="mt-16 w-full max-w-3xl bg-black/30 border border-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg text-left overflow-x-auto">
          <pre className="font-mono text-sm md:text-base text-white leading-relaxed whitespace-pre-wrap">
<code className="text-green-400">const </code>
<code className="text-cyan-400">community </code>
<code className="text-pink-400">= </code>
<code className="text-white">&#123;</code><br />
&nbsp;&nbsp;<code className="text-yellow-400">name</code>: <code className="text-emerald-400">"We Write Code"</code>,<br />
&nbsp;&nbsp;<code className="text-yellow-400">platform</code>: <code className="text-emerald-400">"Discord"</code>,<br />
&nbsp;&nbsp;<code className="text-yellow-400">members</code>: <code className="text-emerald-400">"80K+"</code>,<br />
&nbsp;&nbsp;<code className="text-yellow-400">mission</code>: <code className="text-emerald-400">"Code. Collaborate. Create."</code>,<br />
&nbsp;&nbsp;<code className="text-yellow-400">join</code>: <code className="text-pink-400">() =&gt; </code><code className="text-white">&#123; return </code><code className="text-emerald-400">"🚀 Let's code the future!"</code>; <code className="text-white">&#125;</code><br />
<code className="text-white">&#125;;</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
