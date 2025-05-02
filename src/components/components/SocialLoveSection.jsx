import React, { useEffect, useRef } from "react";
import posts from "../../data/posts";


export default function SocialLoveSection() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    let animationFrame;
    let isHovered = false;

    const scrollStep = () => {
      if (!isHovered) {
        scrollAmount += 0.5;

        if (scrollAmount >= scrollContainer.scrollHeight / 2) {
          scrollAmount = 0;
        }

        scrollContainer.scrollTop = scrollAmount;
      }

      animationFrame = requestAnimationFrame(scrollStep);
    };

    animationFrame = requestAnimationFrame(scrollStep);

    const handleMouseEnter = () => (isHovered = true);
    const handleMouseLeave = () => (isHovered = false);

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const allPosts = [...posts, ...posts]; // Duplicate for infinite scroll

  return (
    <main className="flex justify-center items-center w-full bg-black" role="main">
  <section
    className="relative max-w-7xl px-4 md:px-8 lg:px-16 py-20 bg-transparent text-white min-h-screen flex flex-col items-center"
    role="region"
    aria-labelledby="sociallove-heading"
  >
    {/* Heading */}
    <header className="text-center max-w-3xl mx-auto mb-12" id="sociallove-heading">
      <h2 className="text-4xl font-bold text-orange-400 mb-4 font-mono">
        <span className="text-[#00FFD1]">&lt;</span>SocialLove
        <span className="text-[#00FFD1]">/&gt;</span>
      </h2>
      <p className="text-gray-400 text-lg font-mono">
        Real vibes, real people, real appreciation. <br />
        Loved by <span className="text-orange-400">devs</span> • Powered by{" "}
        <span className="text-orange-400">community</span> 🍵
      </p>
    </header>

    {/* Auto-Scrolling Cards */}
    <div
      ref={scrollRef}
      className="relative h-[600px] w-full max-w-7xl overflow-hidden pointer-events-auto
        [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,1)_25%,rgba(0,0,0,1)_75%,transparent_100%)]
        [mask-size:100%_100%] [mask-repeat:no-repeat]"
      role="list"
      aria-label="Auto-scrolling social appreciation posts"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 animate-scroll">
        {allPosts.map((post, index) => (
          <article
            key={index}
            className="border border-gray-600 p-6 rounded-2xl bg-transparent backdrop-blur-sm shadow-lg flex flex-col gap-3 font-mono hover:scale-105 transition-transform duration-300"
            role="listitem"
            aria-label={`Post by ${post.name} on ${post.platform}`}
          >
            {/* Top Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-black font-bold"
                  aria-label={`Avatar for ${post.name}`}
                >
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
            <p className="text-gray-200 mt-2 text-base">{post.content}</p>

            {/* Icons */}
            <div className="flex justify-between items-center text-orange-100 mt-4 text-sm" aria-label="Engagement metrics">
              <span aria-label={`${post.comments} comments`}>💬 {post.comments}</span>
              <span aria-label={`${post.shares} shares`}>🔁 {post.shares}</span>
              <span aria-label={`${post.likes} likes`}>❤️ {post.likes}</span>
              <span aria-label="Share icon">📤</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
</main>

  );
}
