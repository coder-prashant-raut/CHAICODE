import React from "react";

const placements = [
  { student: "Aryan Mehta", role: "Cloud Engineer", company: "Google" },
  { student: "Nisha Sharma", role: "Frontend Developer", company: "Facebook" },
  { student: "Ravi Patel", role: "Software Engineer", company: "Microsoft" },
  { student: "Sneha Jain", role: "SDE Intern", company: "Amazon" },
  { student: "Kabir Singh", role: "ML Engineer", company: "Netflix" },
  { student: "Divya Rathi", role: "DevRel Intern", company: "GitHub" },
  { student: "Yash Gupta", role: "iOS Developer", company: "Apple" },
  { student: "Aarushi Thakur", role: "Data Analyst", company: "Spotify" },
  { student: "Anshul Verma", role: "Product Designer", company: "Notion" },
  { student: "Megha Dube", role: "Backend Developer", company: "Slack" },
];

export default function StudentsCompanyShowcase() {
  return (
    <div className="relative py-20 px-4 overflow-hidden bg-transparent text-white">
      {/* Glowing Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-10 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Our Students Have Been Placed At
        </h2>
        <p className="text-gray-400 text-sm md:text-base mb-6">
          From Big Tech to Startups — they’re shaping the future with code.
        </p>
        <div className="w-20 mx-auto h-1 bg-blue-500 rounded-full mb-8"></div>
      </div>

      {/* Scrolling Student Placements */}
      <div className="overflow-hidden relative z-10 mt-12">
        <div className="flex gap-6 py-4 animate-scroll whitespace-nowrap will-change-transform">
          {[...placements, ...placements].map((item, index) => (
            <div
              key={index}
              className="bg-[#1f2233] px-6 py-4 rounded-2xl text-sm md:text-base flex-shrink-0 border border-blue-600/30 hover:scale-105 hover:border-blue-400/70 transition duration-300 shadow-xl backdrop-blur-md"
            >
              <div className="text-white font-semibold">{item.student}</div>
              <div className="text-blue-400 text-sm">{item.role}</div>
              <div className="text-orange-400 text-xs mt-1">at {item.company}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
