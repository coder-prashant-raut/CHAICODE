import React, { useRef, useState, useEffect } from "react";
import Card from "./Card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import courses from "../../data/courses";

const Cohorts = () => {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkScrollPosition = () => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", checkScrollPosition);
    checkScrollPosition(); // Initial state

    return () => container.removeEventListener("scroll", checkScrollPosition);
  }, []);

  const scroll = (direction) => {
    const cardWidth = scrollRef.current.firstChild.offsetWidth + 24; // +gap
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-black text-orange-400 px-4 md:px-12 py-16 relative" aria-labelledby="cohort-section-heading">
    <h1 id="cohort-section-heading" className="text-3xl md:text-4xl font-bold text-center mb-12">
      🌀 Explore Our Top Courses
    </h1>
  
    <div className="relative" aria-label="Cohort course carousel">
      {/* Gradients */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
  
      {/* Scroll Arrows */}
      {showLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-orange-500 hover:bg-orange-400 text-black p-2 md:p-3 rounded-full shadow-md"
          aria-label="Scroll left to explore previous courses"
        >
          <FaArrowLeft />
        </button>
      )}
      {showRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-orange-500 hover:bg-orange-400 text-black p-2 md:p-3 rounded-full shadow-md"
          aria-label="Scroll right to explore more courses"
        >
          <FaArrowRight />
        </button>
      )}
  
      {/* Cards Scroll Row */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide gap-6 px-2 pb-2"
        role="region" // Defines this section as a region for screen readers
        aria-label="Course carousel" // Provides context to users about the section
      >
        {courses.map((course) => (
          <div key={course.id} className="snap-start flex-shrink-0" aria-labelledby={`course-${course.id}`}>
            <Card {...course} aria-labelledby={`course-${course.id}`} />
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default Cohorts;
