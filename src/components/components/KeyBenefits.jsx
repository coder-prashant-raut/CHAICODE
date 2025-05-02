import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { ArrowLeft, ArrowRight } from "lucide-react";
import benefits from "../../data/benefits";

export default function KeyBenefits() {
  const [activeIndex, setActiveIndex] = useState(1); // Start at second card
  const containerRef = useRef(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const changeCard = (dir) => {
    setActiveIndex((prev) => {
      const next = prev + dir;
      if (next < 0 || next >= benefits.length) return prev;
      return next;
    });
  };

  useEffect(() => {
    let isScrolling = false;
  
    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        if (isScrolling) return;
        isScrolling = true;
        changeCard(e.deltaX > 0 ? 1 : -1);
        setTimeout(() => {
          isScrolling = false;
        }, 600); // adjust time based on transition speed
      }
    };
  
    const node = containerRef.current;
    node?.addEventListener("wheel", handleWheel, { passive: false });
    return () => node?.removeEventListener("wheel", handleWheel);
  }, []);
  

  // Arrow key support
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") changeCard(1);
      if (e.key === "ArrowLeft") changeCard(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => changeCard(1),
    onSwipedRight: () => changeCard(-1),
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  return (
    <section
    {...(isMobile ? swipeHandlers : {})}
    ref={containerRef}
    className="w-full min-h-screen text-white flex items-center justify-center px-4 md:px-10 py-16 relative"
    aria-labelledby="key-benefits-heading"
  >
    <div className="relative w-full max-w-6xl flex flex-col items-center">
      <h2 id="key-benefits-heading" className="text-3xl md:text-4xl font-bold text-orange-400 mb-12">
        Key Benefits
      </h2>
  
      <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          {benefits.map((benefit, index) => {
            const offset = index - activeIndex;
            const isActive = index === activeIndex;
  
            return (
              <motion.div
                key={index}
                className="absolute w-full md:w-[70%] h-full rounded-3xl bg-gradient-to-br from-black/70 to-zinc-900/80 backdrop-blur border border-orange-500 shadow-2xl flex flex-col items-center justify-center px-6 py-8 text-center space-y-4"
                animate={{
                  x: offset * 100 + "%",
                  scale: isActive ? 1 : 0.9,
                  opacity: isActive ? 1 : 0.2,
                  zIndex: isActive ? 10 : 1,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                aria-hidden={isActive ? "false" : "true"}
              >
                <div className="text-5xl">{benefit.icon}</div>
                <h3 className="text-2xl md:text-3xl font-semibold text-orange-200">{benefit.title}</h3>
                <p className="text-orange-50 text-sm md:text-lg max-w-xl">{benefit.description}</p>
              </motion.div>
            );
          })}
        </AnimatePresence>
  
        {/* Gradient overlays on left and right sides */}
        <div className="absolute left-0 top-0 bottom-0 w-36 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-36 bg-gradient-to-l from-black/60 to-transparent z-10"></div>
  
        {/* Navigation Buttons */}
        {activeIndex > 0 && (
          <button
            onClick={() => changeCard(-1)}
            className="absolute left-4 md:left-10 top-4/5 -translate-y-1/2 bg-orange-500 text-black hover:bg-orange-400 p-3 rounded-full shadow-lg transition z-20"
            aria-label="Previous benefit"
          >
            <ArrowLeft size={24} />
          </button>
        )}
        {activeIndex < benefits.length - 1 && (
          <button
            onClick={() => changeCard(1)}
            className="absolute right-4 md:right-10 top-4/5 -translate-y-1/2 bg-orange-500 text-black hover:bg-orange-400 p-3 rounded-full shadow-lg transition z-20"
            aria-label="Next benefit"
          >
            <ArrowRight size={24} />
          </button>
        )}
      </div>
  
      {/* CTA Button at End */}
      <div className="mt-10">
        <button
          className="cursor-pointer bg-orange-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-orange-400 transition text-lg shadow-md"
          aria-label="Join Cohort"
        >
          Join Cohort
        </button>
      </div>
    </div>
  </section>
  
  );
}
