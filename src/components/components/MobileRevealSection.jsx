import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function MobileRevealSection() {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: false });
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const features = [
    {
      heading: "📚 Comprehensive Curriculum",
      text: "Master key concepts and hands-on skills with clarity and confidence.",
    },
    {
      heading: "⚙️ Practical Learning",
      text: "Thorough, practical, and easy to understand. Learn what truly matters.",
    },
    {
      heading: "🧠 Peer Activities",
      text: "Fun activities, projects, and community challenges to stay engaged.",
    },
    {
      heading: "📱 Modern Tech Stack",
      text: "Built using cutting-edge tech and real-world best practices.",
    },
    {
      heading: "🚀 Career Focused",
      text: "Career guidance, resume support, and learning with purpose.",
    },
    {
      heading: "🌏 Global Learners",
      text: "Learn alongside peers from across the globe and grow together.",
    },
  ];

  const SideCard = ({ xOffset, delay, top, heading, text }) => {
    const isLeft = xOffset < 0;
    const finalX = isLeft ? -340 : 380;
    const cardStyle = {
      top: `40%`,
      left: `40%`,
      transform: "translate(-40%, -40%)",
    };

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.1, x: 0, y: 0 }}
        animate={
          inView
            ? {
                opacity: 1,
                scale: 1,
                x: finalX,
                y: top - 350,
                transition: {
                  delay,
                  duration: 0.6,
                  ease: [0.1, 0, 0.1, 1],
                  type: "spring",
                  stiffness: 90,
                  damping: 6,
                },
              }
            : { opacity: 0, scale: 0.1, x: 0, y: 0 }
        }
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 1.5 } }}
        className="absolute w-64 md:w-52 h-40 md:h-36 bg-[#1a1a1d] rounded-xl shadow-2xl border border-gray-700 px-2 py-1 text-white text-sm flex flex-col z-30 animate-float hover:border-orange-500 hover:shadow-[0_0_12px_rgba(255,115,0,0.5)] transition-all duration-300 group"
        style={cardStyle}
      >
        <div
          className={`absolute top-1/2 -translate-y-1/2 h-[4px] w-[150px] md:w-[110px] overflow-hidden p-2 ${
            isLeft ? "-right-[150px] md:-right-[110px]" : "-left-[150px] md:-left-[110px]"
          } z-40`}
        >
          <div className="w-full h-full relative">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-electric-flow opacity-95 blur-sm" />
          </div>
        </div>
        <h3 className="font-semibold text-base text-orange-500 mb-1">{heading}</h3>
        <p className="text-gray-400 text-sm">{text}</p>
      </motion.div>
    );
  };

  return (
    <div ref={ref} className="overflow-hidden px-4 py-16 md:py-20 font-mono">
    <section
      className="relative px-6 py-24 text-white overflow-hidden"
      aria-labelledby="why-chaicode-heading"
    >
      {/* Background Glow */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[200px] rounded-full z-0"
        aria-hidden="true"
      />
  
      {/* Heading */}
      <header className="relative z-10 pb-14 max-w-4xl mx-auto text-center">
        <motion.h2
          id="why-chaicode-heading"
          className="text-4xl md:text-5xl font-sans font-bold tracking-wide mb-6 py-3 px-4 rounded-xl bg-gradient-to-r from-orange-400 via-orange-300 to-orange-700 bg-clip-text text-transparent shadow-sm"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why ChaiCode?
        </motion.h2>
  
        <motion.p
          className="text-lg md:text-xl text-orange-200 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Because code is better with a cup of chai. We blend{" "}
          <strong className="text-white font-semibold">deep tech insights</strong> with{" "}
          <strong className="text-white font-semibold">heartfelt teaching</strong> —
          making learning not just smarter, but warmer.
        </motion.p>
      </header>
  
      {/* Feature Cards (Mobile) */}
      {isMobile ? (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto relative z-10"
          role="list"
          aria-label="Key Features"
        >
          {features.map((feature, index) => (
            <article
              key={index}
              className="bg-[#1a1a1d] p-4 rounded-xl border border-gray-700 text-white hover:border-orange-500 hover:shadow-[0_0_12px_rgba(255,115,0,0.5)] transition-all duration-300"
              role="listitem"
            >
              <h3 className="font-semibold text-orange-400 mb-1 text-base">
                {feature.heading}
              </h3>
              <p className="text-sm text-gray-300">{feature.text}</p>
            </article>
          ))}
        </div>
      ) : (
        // Desktop layout with central profile
        <div
          className="hidden md:flex items-center justify-center relative w-full max-w-[1200px] h-[100vh] md:h-[70vh] mx-auto"
          role="region"
          aria-label="Hitesh Choudhary and features"
        >
          {/* Center Card */}
          <motion.article
            whileHover={{ scale: 1.02 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                w-[360px] md:w-[300px] h-auto bg-[#18181c] text-white rounded-[2rem] 
                shadow-2xl border border-gray-700 transition-all duration-300 z-50 text-center"
            aria-label="Hitesh Choudhary profile"
          >
            <div className="rounded-lg overflow-hidden py-4 px-2">
              <img
                src="https://imgs.search.brave.com/xfQk9p07Ug4i_ot-mQ5IlXEhW2VRXUZcbJbUN5BEHMs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kM2Yx/aXlmeHh6OGkxZS5j/bG91ZGZyb250Lm5l/dC9jb3Vyc2VzL2Nv/dXJzZV9pbWFnZS9k/MWQ1NjMxYWVjNzMu/anBn"
                alt="Profile photo of Hitesh Choudhary"
                className="w-full h-48 object-cover shadow-md rounded-xl"
                role="img"
              />
            </div>
            <div className="px-6 py-6">
              <h2 className="text-2xl font-bold mb-2 text-orange-600 border-b-2 border-amber-300">
                Hitesh Choudhary
              </h2>
              <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                Retired from corporate, now a full-time YouTuber. Ex-founder of LCO (acquired),
                ex-CTO, and Sr. Director at PW. Runs 2 YouTube channels (950k & 470k). Travelled
                across 43 countries.
              </p>
              <h3 className="text-lg font-semibold mt-4 text-white">Approach</h3>
              <p className="text-sm text-gray-300 mb-4">
                Project-based courses with peer learning, bounties, and engaging activities.
              </p>
              <nav
                className="flex justify-center gap-4 text-xl text-white"
                aria-label="Social links for Hitesh Choudhary"
              >
                <a href="#" aria-label="Hitesh on LinkedIn"><FaLinkedin /></a>
                <a href="#" aria-label="Hitesh on Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Hitesh on YouTube"><FaYoutube /></a>
              </nav>
            </div>
          </motion.article>
  
          {/* Side Cards (Animated) */}
          <AnimatePresence>
            <>
              <SideCard xOffset={-1} delay={0.1} top={150} {...features[0]} />
              <SideCard xOffset={-1} delay={0.2} top={310} {...features[1]} />
              <SideCard xOffset={-1} delay={0.3} top={470} {...features[2]} />
  
              <SideCard xOffset={1} delay={0.1} top={150} {...features[3]} />
              <SideCard xOffset={1} delay={0.2} top={310} {...features[4]} />
              <SideCard xOffset={1} delay={0.3} top={470} {...features[5]} />
            </>
          </AnimatePresence>
        </div>
      )}
    </section>
  </div>
  
  );
}
