import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { BsCheckCircle } from "react-icons/bs"; // Example icon (You can use other icons as needed)

const benefits = [
  {
    title: "Learn by Building Projects",
    description: "Create real-world projects that help you develop a solid portfolio for job opportunities.",
    icon: <BsCheckCircle className="text-green-500" />,
  },
  {
    title: "Lifetime Community Access",
    description: "Join a vibrant community of learners and professionals to grow together.",
    icon: <BsCheckCircle className="text-blue-500" />,
  },
  {
    title: "Job Referrals & Networking",
    description: "Get access to exclusive job referrals and networking opportunities.",
    icon: <BsCheckCircle className="text-purple-500" />,
  },
  {
    title: "Weekly Doubt Sessions",
    description: "Attend weekly sessions to clear your doubts with experts.",
    icon: <BsCheckCircle className="text-orange-500" />,
  },
  {
    title: "Certificate + LinkedIn Push",
    description: "Earn certificates for your work and have them featured on LinkedIn.",
    icon: <BsCheckCircle className="text-teal-500" />,
  },
  {
    title: "Resume + Portfolio Review",
    description: "Get your resume and portfolio reviewed to stand out to employers.",
    icon: <BsCheckCircle className="text-yellow-500" />,
  },
];


const colors = [
  "bg-red-500",
  "bg-orange-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-purple-500",
];

export default function KeyBenefits() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrollingCards, setIsScrollingCards] = useState(false);
  const sectionRef = useRef(null);
  const scrollLocked = useRef(false);

  const { ref: inViewRef, inView } = useInView({ threshold: 0.8 });

  // Lock scroll behavior when in the section
  useEffect(() => {
    if (inView) {
      document.body.style.overflow = "hidden";
      setIsScrollingCards(true);
    } else {
      document.body.style.overflow = "auto";
      setIsScrollingCards(false);
    }
  }, [inView]);

  // Handle scroll for card stack
  useEffect(() => {
    const handleWheel = (e) => {
      if (!isScrollingCards || scrollLocked.current) return;

      scrollLocked.current = true;
      const direction = e.deltaY > 0 ? 1 : -1; // determine scroll direction

      if (direction === 1) {
        // Scroll down
        setActiveIndex((prev) => {
          let next = prev + 1;
          if (next >= benefits.length) {
            // When reaching the last card, scroll to the next section
            next = benefits.length - 1;
            setTimeout(() => {
              document.getElementById("next-section")?.scrollIntoView({
                behavior: "smooth",
              });
            }, 500); // Delay for smooth transition
          }
          return next;
        });
      } else {
        // Scroll up
        setActiveIndex((prev) => {
          let next = prev - 1;
          if (next < 0) {
            next = 0;
            // Scroll back to the previous section
            setTimeout(() => {
              document.getElementById("previous-section")?.scrollIntoView({
                behavior: "smooth",
              });
            }, 500); // Delay for smooth transition
          }
          return next;
        });
      }

      setTimeout(() => {
        scrollLocked.current = false;
      }, 800);
    };

    // Listen for wheel events for scrolling
    window.addEventListener("wheel", handleWheel, { passive: false });

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        setActiveIndex((prev) => (prev < benefits.length - 1 ? prev + 1 : benefits.length - 1)); // Do not loop back when reaching the last card
        // Scroll down to the next section when reaching the last card
        if (activeIndex === benefits.length - 1) {
          setTimeout(() => {
            document.getElementById("next-section")?.scrollIntoView({
              behavior: "smooth",
            });
          }, 500);
        }
      } else if (e.key === "ArrowUp") {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0)); // Do not loop back when reaching the first card
        // Scroll up to the previous section when reaching the first card
        if (activeIndex === 0) {
          setTimeout(() => {
            document.getElementById("previous-section")?.scrollIntoView({
              behavior: "smooth",
            });
          }, 500);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isScrollingCards, activeIndex]);

  return (
    <div className="w-full relative z-20">
      {/* Previous Section */}
      <div id="previous-section" className="h-50 bg-transparent text-black flex items-center justify-center">
  {/* code style heading */}
  <div className="w-full flex flex-col items-center justify-center text-center space-y-5 px-4 md:px-8 mb-6">
  <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 flex items-center gap-3 drop-shadow-md">
    &lt;<span className="text-green-400">Why Join Our Cohort?</span> /&gt;
  </h2>
  <p className="text-sm md:text-xl max-w-3xl text-gray-300 font-light leading-relaxed tracking-wide font-mono drop-shadow-sm">
    Experience <span className="text-orange-400 font-semibold">structured learning</span>, 
    expert <span className="text-green-400 font-semibold">mentorship</span>, and a powerful 
    <span className="text-blue-400 font-semibold"> community</span> that fuels your growth—step by step.
  </p>
</div>

</div>


      {/* Card Stack */}
      <div
        ref={(node) => {
          sectionRef.current = node;
          inViewRef(node);
        }}
        className="h-screen relative overflow-hidden bg-transparent text-white flex items-center justify-center"
      >
        <AnimatePresence>
          {benefits.map((benefit, index) => {
            const offset = index - activeIndex;
            const scale = 1 - Math.abs(offset) * 0.05;
            const translateY = offset * 30;
            const zIndex = 100 - Math.abs(offset);

            return (
                <motion.div
                key={index}
                className="absolute w-[70%] max-w-xl h-[50vh] border border-amber-400 rounded-3xl shadow-[0_10px_30px_rgba(255,193,7,0.3)] px-10 py-6 flex items-center justify-center bg-gradient-to-br from-black/60 to-zinc-900/70 backdrop-blur-lg text-orange-400 z-20"
                animate={{
                  scale,
                  y: translateY,
                  opacity: offset === 0 ? 1 : 0.5,
                  zIndex,
                }}
                initial={{
                  opacity: 0,
                  y: offset < 0 ? -50 : 50,
                }}
                exit={{
                  opacity: 0,
                  y: offset < 0 ? -50 : 50,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                  mass: 0.6,
                }}
                style={{ zIndex }}
              >
                <div className="flex flex-col items-center justify-center text-center space-y-4 px-4">
                  <div className="text-4xl md:text-5xl">{benefit.icon}</div>
                  <h3 className="text-xl md:text-3xl font-semibold tracking-wide text-white drop-shadow-sm">
                    {benefit.title}
                  </h3>
                  <p className="text-sm md:text-lg text-gray-300 font-light max-w-md leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
              
            );
          })}
        </AnimatePresence>
      </div>

      {/* Next Section */}
      {activeIndex === benefits.length - 1 && (
        <div id="next-section" className="h-10 bg-black text-orange-500 flex items-center justify-center">
         <button className="border-2 border-orange-400 px-8 py-3 hover:text-3xl cursor-pointer text-2xl rounded-2xl">Join Cohort </button>
        </div>
      )}
    </div>
  );
}
