import React, { useEffect, useRef, useState } from "react";
import { FaRocket, FaCopy } from "react-icons/fa"; // CTA Icon & Copy Icon
import { CheckCircle } from "react-feather"; // Or any other icon from react-icons/react-feather
import { LuUsers, LuCode, LuBadgeDollarSign } from 'react-icons/lu';
import { HiOutlineQuestionMarkCircle ,HiOutlineHome} from 'react-icons/hi2'; // Heroicons for help

const buttons = [
  { label: 'Peer Learning', icon: <LuUsers /> },
  { label: 'Code Reviews', icon: <LuCode /> },
  { label: 'Virtual Hostel', icon: <HiOutlineHome /> },
  { label: 'Doubt Sessions', icon: <HiOutlineQuestionMarkCircle /> },
  { label: 'Bounties', icon: <LuBadgeDollarSign /> },
];


const HeroSection = () => {
  const videoRef = useRef(null);
  const blobRef = useRef(null);
  const [showToast, setShowToast] = useState(false);
  const [couponCopied, setCouponCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  

  // Scroll animation for YouTube video
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("video-visible");
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
  }, []);

  // Mouse parallax effect for orange blob
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const offsetX = (clientX - centerX) * 0.05;
      const offsetY = (clientY - centerY) * 0.05;

      if (blobRef.current) {
        blobRef.current.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Show Toast on button hover
  const handleMouseEnter = () => {
    setShowToast(true);
    setIsHovered(true);
  };

 
  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowToast(false);
    }, 3000); // Hide after 3 seconds
  };

  // Handle coupon code copy
  const handleCopyCode = () => {
    navigator.clipboard.writeText("HITESHION");
    setCouponCopied(true);
    setTimeout(() => setCouponCopied(false), 2000); // Reset copy state after 2 seconds
  };

  return (
    <section
      id="hero"
      className="relative rounded-2xl flex flex-col items-center justify-center px-6 py-5 md:py-5 text-white text-center overflow-hidden bg-transparent"
      // style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
    >

      {/* below the heaidng and intro section all before video  */}
<div className="relative flex flex-col justify-center items-center text-center py-16 px-4 overflow-hidden">
  {/* 🔶 Background Layers */}
  <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 opacity-90 -z-20" />
  <div className="absolute inset-0 bg-[url('/stars.svg')] bg-cover opacity-10 pointer-events-none -z-10" />

  {/* 🏅 Badge */}
  <span className="text-green-400 text-sm sm:text-base">console.log(trust)</span>
  <button
    aria-label="Trusted by 1.5 million learners"
    className="mt-2 flex items-center gap-2 border border-orange-400 text-orange-400 font-medium text-sm md:text-base px-3 py-1.5 rounded-full shadow hover:scale-105 transition-transform duration-300 font-sans"
  >
    <CheckCircle size={18} className="text-orange-400" />
    <span>Trusted by 1.5M+ Code Learners</span>
  </button>

  {/* 👑 Headings */}
  <span className="mt-6 text-xl md:text-2xl border-b-2 border-amber-500/60 text-orange-100">
    Empower Your Coding Journey with
  </span>

  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mt-4 text-orange-100">
    <span className="text-orange-400 font-mono border-b-4 border-orange-400">Consistency</span>{" "}
    and{" "}
    <span className="text-orange-400 font-mono border-b-4 border-orange-400">Community</span>
  </h1>

  {/* 📖 Description */}
  <p className="mt-6 text-orange-200 text-base md:text-lg max-w-3xl leading-relaxed font-sans">
    We’re not just another course. Join bounties, peer learning, code reviews, <br />
    virtual hostel vibes, alumni community, group projects & more. Let’s grow together 🚀
  </p>

  {/* 🔘 Buttons */}
  <div className="flex flex-wrap gap-4 justify-center mt-8">
    {buttons.map((btn, idx) => (
      <button
        key={idx}
        className="flex items-center gap-2 text-orange-100 hover:text-white border border-orange-500 px-4 py-2 rounded-md shadow 
                   hover:bg-orange-500 hover:-translate-y-1 hover:shadow-lg hover:scale-105 
                   transition-all duration-300 ease-in-out text-sm font-medium "
      >
        <span className="text-lg">{btn.icon}</span>
        <span>{btn.label}</span>
      </button>
    ))}
  </div>

  {/* 🚀 CTA Button with Gradient Glow Border */}
  <div className="relative mt-10 font-sans">
    {/* Animated Glow Border */}
    <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 animate-spin-slow z-0 blur-sm" />
    
    {/* Actual Button */}
    <button
      onClick={() => window.location.href = "#cohort"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative z-10 flex items-center gap-3 px-8 py-3 bg-black rounded-full text-green-300 font-semibold text-sm sm:text-base 
                 border-2 border-orange-500 shadow-lg hover:shadow-orange-300/40 transition-all duration-300 overflow-hidden"
      aria-label="View all live cohorts"
    >
      <FaRocket className="text-orange-500 animate-pulse" />
      <span className="flex items-center gap-2">
        Check All <span className="text-orange-400 font-bold">Live</span> Cohorts
        <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
      </span>
    </button>
  </div>
</div>


    {/* 🎥 YouTube Video with Parallax Effect */}
<div className="w-full px-2 sm:px-0 max-w-5xl mx-auto">
  <div
    ref={videoRef}
    className="opacity-0 translate-y-10"
  >
    <div className="rounded-2xl overflow-hidden shadow-xl transform-gpu">
      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/yG8JMlldoCE?si=rFiFPTTTSWoR3k4n"
        title="ChaiCode Intro Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          border: "none",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)"
        }}
      ></iframe>
    </div>
  </div>
</div>


      {showToast && (
  <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 w-[340px] bg-black border border-orange-400 rounded-xl p-5 shadow-2xl z-50 animate-fadeIn">
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h4 className="text-orange-400 font-bold text-lg">
          🎁 Cohort Discount Applied
        </h4>
        <button
          onClick={handleCopyCode}
          className="p-2 bg-zinc-900 rounded-full hover:bg-orange-500/10 transition text-orange-400"
          title="Copy Code"
        >
          <FaCopy />
        </button>
      </div>

      <p className="text-gray-300 text-sm leading-snug">
        Use coupon <span className="text-yellow-400 font-mono">HITESHION</span> to get <span className="text-green-400 font-semibold">10% off</span> on your next cohort.
      </p>

      {couponCopied && (
        <div className="mt-2 text-green-400 text-xs flex items-center gap-1">
          <span>✅</span> Coupon copied to clipboard!
        </div>
      )}
    </div>
  </div>
)}


    </section>
  );
};

export default HeroSection;
