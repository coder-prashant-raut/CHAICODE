import React, { useEffect, useRef, useState } from "react";
import { FaRocket, FaCopy } from "react-icons/fa";
import { CheckCircle } from "react-feather";
import { LuUsers, LuCode, LuBadgeDollarSign } from "react-icons/lu";
import { HiOutlineQuestionMarkCircle, HiOutlineHome } from "react-icons/hi2";

const buttons = [
  { label: "Peer Learning", icon: <LuUsers /> },
  { label: "Code Reviews", icon: <LuCode /> },
  { label: "Virtual Hostel", icon: <HiOutlineHome /> },
  { label: "Doubt Sessions", icon: <HiOutlineQuestionMarkCircle /> },
  { label: "Bounties", icon: <LuBadgeDollarSign /> },
];

const HeroSection = () => {
  const videoRef = useRef(null);
  const [showToast, setShowToast] = useState(false);
  const [couponCopied, setCouponCopied] = useState(false);

  // 📹 Show video with fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.target) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.5 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
  }, []);

  // 🧡 Toast copy function
  const handleCopyCode = () => {
    navigator.clipboard.writeText("HITESHION");
    setCouponCopied(true);
    setTimeout(() => setCouponCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center px-6 py-12 text-white text-center overflow-hidden bg-transparent font-mono"
    >
      {/* 🌌 Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 opacity-90" />
      <div className="absolute inset-0 -z-10 bg-[url('/stars.svg')] bg-cover opacity-10" />

      {/* ✅ Trust Badge */}
      <span className="text-green-400 text-sm sm:text-base">console.log(trust)</span>
      <button className="mt-2 flex items-center gap-2 border border-orange-400 text-orange-400 text-sm md:text-base px-3 py-1.5 rounded-full hover:scale-105 transition">
        <CheckCircle size={18} />
        <span>Trusted by 1.5M+ Code Learners</span>
      </button>

      {/* 🧠 Headings */}
      <span className="mt-6 text-xl md:text-2xl border-b-2 border-amber-500/60 text-white/90">
        Empower Your Coding Journey with
      </span>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mt-4 text-white">
        <span className="text-pink-400 border-b-4 border-yellow-400">Consistency</span> and{" "}
        <span className="text-yellow-400 border-b-4 border-pink-400">Community</span>
      </h1>

      {/* 📖 Description */}
      <p className="mt-6 text-white/80 text-base md:text-lg max-w-3xl leading-relaxed">
        We’re not just another course. Join bounties, peer learning, code reviews, <br />
        virtual hostel vibes, alumni community, group projects & more. Let’s grow together 🚀
      </p>

      {/* 🔘 Feature Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            className="flex items-center gap-2 border border-orange-500 text-white/80 hover:text-white hover:bg-orange-500 px-4 py-2 rounded-md shadow transition-all hover:-translate-y-1 hover:scale-105 text-sm"
          >
            <span className="text-lg">{btn.icon}</span>
            <span>{btn.label}</span>
          </button>
        ))}
      </div>

      {/* 🚀 CTA Button */}
      <div className="relative mt-10">
        <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 animate-spin-slow z-0 blur-sm" />
        <button
          onClick={() => {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
            window.location.href = "#cohort";
          }}
          className="relative z-10 flex items-center gap-3 px-8 py-3 bg-black rounded-full text-green-300 font-semibold text-sm sm:text-base border-2 border-orange-500 shadow-lg hover:shadow-orange-300/40 transition"
        >
          <FaRocket className="text-orange-500" />
          Check All <span className="text-orange-400 font-bold mx-1">Live</span> Cohorts
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping ml-2" />
        </button>
      </div>

      {/* 🎥 YouTube Video */}
      <div className="w-full px-2 sm:px-0 max-w-5xl mx-auto mt-14">
        <div
          ref={videoRef}
          className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/yG8JMlldoCE?si=rFiFPTTTSWoR3k4n"
              title="ChaiCode Intro Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                border: "none",
                borderRadius: "15px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
              }}
            />
          </div>
        </div>
      </div>

      {/* 🎁 Discount Toast */}
      {showToast && (
        <div className="fixed bottom-16 left-1/2 -translate-x-1/2 w-[340px] bg-black border border-orange-400 rounded-xl p-5 shadow-2xl z-50 animate-fadeIn">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h4 className="text-orange-400 font-bold text-lg">🎁 Cohort Discount Applied</h4>
              <button
                onClick={handleCopyCode}
                className="p-2 bg-zinc-900 rounded-full hover:bg-orange-500/10 text-orange-400"
                title="Copy Code"
              >
                <FaCopy />
              </button>
            </div>
            <p className="text-gray-300 text-sm leading-snug">
              Use coupon <span className="text-yellow-400 font-mono">HITESHION</span> to get{" "}
              <span className="text-green-400 font-semibold">10% off</span> on your next cohort.
            </p>
            {couponCopied && (
              <div className="mt-2 text-green-400 text-xs flex items-center gap-1">
                ✅ Coupon copied to clipboard!
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
