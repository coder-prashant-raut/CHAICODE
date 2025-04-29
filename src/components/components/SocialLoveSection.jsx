import React, { useEffect, useRef } from "react";

const posts = [
  {
    name: "Prashant Raut",
    username: "prashant__raut",
    platform: "Twitter",
    content: "Learning never exhausts the mind. 🚀 #coding #ReactJS",
    comments: 10,
    shares: 22,
    likes: 120,
  },
  {
    name: "Aarti Sharma",
    username: "aarti.codes",
    platform: "LinkedIn",
    content: "Excited to start a new position as Frontend Developer! 🚀",
    comments: 14,
    shares: 18,
    likes: 250,
  },
  {
    name: "Vikas Patel",
    username: "vikas.patel",
    platform: "Instagram",
    content: "Late-night coding hustle! 🌙💻 #developerlife",
    comments: 8,
    shares: 12,
    likes: 300,
  },
  {
    name: "Sneha Rao",
    username: "sneha_rao",
    platform: "Twitter",
    content: "React 19 is awesome! Time to upgrade 🚀🔥 #React19",
    comments: 9,
    shares: 15,
    likes: 190,
  },
  {
    name: "Rahul Verma",
    username: "rahul.dev",
    platform: "LinkedIn",
    content: "Achieved AWS certification today! ☁️🎉 #AWS #Cloud",
    comments: 17,
    shares: 24,
    likes: 350,
  },
  {
    name: "Meena Joshi",
    username: "meena.j",
    platform: "Instagram",
    content: "UI design practice - loving the process! 🎨✨",
    comments: 12,
    shares: 20,
    likes: 270,
  },
];

export default function SocialLoveSection() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    let scrollAmount = 0;

    const scrollStep = () => {
      if (scrollContainer) {
        scrollAmount += 0.5; // Scroll speed
        if (scrollAmount >= scrollContainer.scrollHeight / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollTop = scrollAmount;
      }
      requestAnimationFrame(scrollStep);
    };

    requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(scrollStep);
  }, []);

  const allPosts = [...posts, ...posts]; // Duplicate posts for infinite effect

  return (
    <section className="relative px-4 md:px-8 lg:px-16 py-16 bg-transparent text-white min-h-screen flex flex-col items-center overflow-hidden">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 font-mono">
          <span className="text-[#00FFD1]">&lt;</span>SocialLove
          <span className="text-[#00FFD1]">/&gt;</span>
        </h2>
        <p className="text-gray-400 text-lg font-mono">
          Real vibes, real people, real appreciation. <br />
          Loved by <span className="text-orange-400">devs</span> • Powered by{" "}
          <span className="text-orange-400">community</span> 🍵
        </p>
      </div>

      {/* Scrollable Grid */}
      <div
        ref={scrollRef}
        className="relative h-[600px] overflow-hidden w-full max-w-7xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
          {allPosts.map((post, index) => (
            <div
              key={index}
              className="border border-gray-600 p-6 rounded-2xl bg-transparent backdrop-blur-sm shadow-lg flex flex-col gap-3 font-mono hover:scale-105 transition-transform duration-300"
            >
              {/* Top Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-black font-bold">
                    {post.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{post.name}</div>
                    <div className="text-gray-400 text-sm">@{post.username}</div>
                  </div>
                </div>
                <div className="text-sm text-[#00FFD1] font-bold">{post.platform}</div>
              </div>

              {/* Post Content */}
              <div className="text-gray-200 mt-2 text-base">{post.content}</div>

              {/* Icons */}
              <div className="flex justify-between items-center text-gray-500 mt-4 text-sm">
                <span>💬 {post.comments}</span>
                <span>🔁 {post.shares}</span>
                <span>❤️ {post.likes}</span>
                <span>📤</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
