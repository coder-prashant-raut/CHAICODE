import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import benefits from "../../data/benefits";

export default function KeyBenefits() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrollingCards, setIsScrollingCards] = useState(false);
  const sectionRef = useRef(null);
  const scrollLocked = useRef(false);

  const { ref: inViewRef, inView } = useInView({ threshold: 0.8 });

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Scroll lock on PC only
  useEffect(() => {
    if (!isMobile) {
      if (inView) {
        document.body.style.overflow = "hidden";
        setIsScrollingCards(true);
      } else {
        document.body.style.overflow = "auto";
        setIsScrollingCards(false);
      }
    }
  }, [inView, isMobile]);

  // Handle scroll for cards (PC only)
  useEffect(() => {
    if (isMobile) return;

    const handleWheel = (e) => {
      if (!isScrollingCards || scrollLocked.current) return;

      scrollLocked.current = true;
      const direction = e.deltaY > 0 ? 1 : -1;

      if (direction === 1) {
        setActiveIndex((prev) => {
          let next = prev + 1;
          if (next >= benefits.length) {
            next = benefits.length - 1;
            setTimeout(() => {
              document.getElementById("next-section")?.scrollIntoView({ behavior: "smooth" });
            }, 500);
          }
          return next;
        });
      } else {
        setActiveIndex((prev) => {
          let next = prev - 1;
          if (next < 0) {
            next = 0;
            setTimeout(() => {
              document.getElementById("previous-section")?.scrollIntoView({ behavior: "smooth" });
            }, 500);
          }
          return next;
        });
      }

      setTimeout(() => {
        scrollLocked.current = false;
      }, 800);
    };

    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        setActiveIndex((prev) => (prev < benefits.length - 1 ? prev + 1 : prev));
      } else if (e.key === "ArrowUp") {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isScrollingCards, activeIndex, isMobile]);

  // Swipe handler for mobile
  const swipeHandlers = useSwipeable({
    onSwipedUp: () => {
      setActiveIndex((prev) => Math.min(prev + 1, benefits.length - 1));
    },
    onSwipedDown: () => {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    },
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  return (
    <div className="w-full relative z-20">
      {/* Previous Section */}
      <div id="previous-section" className="h-70 bg-transparent text-black flex items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center text-center space-y-5 px-4 md:px-8 mb-2">
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
        {...(isMobile ? swipeHandlers : {})}
        ref={(node) => {
          sectionRef.current = node;
          inViewRef(node);
        }}
        className="h-screen relative overflow-hidden bg-transparent text-white flex items-center justify-center touch-pan-y"
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
                className="absolute w-[90%] md:w-[70%] max-w-xl h-[60vh] md:h-[50vh] border border-amber-400 rounded-3xl shadow-[0_10px_30px_rgba(255,193,7,0.3)] px-6 md:px-10 py-6 flex items-center justify-center bg-gradient-to-br from-black/60 to-zinc-900/70 backdrop-blur-lg text-orange-400 z-20"
                animate={{ scale, y: translateY, opacity: offset === 0 ? 1 : 0.4, zIndex }}
                initial={{ opacity: 0, y: offset < 0 ? -50 : 50 }}
                exit={{ opacity: 0, y: offset < 0 ? -50 : 50 }}
                transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.6 }}
                style={{ zIndex }}
              >
                <div className="flex flex-col items-center justify-center text-center space-y-4 px-2 md:px-4">
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
          <button className="border-2 border-orange-400 px-8 py-3 hover:text-3xl cursor-pointer text-2xl rounded-2xl">
            Join Cohort
          </button>
        </div>
      )}
    </div>
  );
}
