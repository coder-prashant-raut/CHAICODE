import React from "react";
import Card from "./Card"; // Make sure Card.jsx is in the same folder or update the path
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import scroll icons

import courses from "../../data/courses";

const scroll = (direction) => {
  const scrollContainer = document.getElementById("course-scroll-container");
  const scrollAmount = 300; // Adjust scroll distance

  if (direction === "left") {
    scrollContainer.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  } else {
    scrollContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }
};

const Cohorts = () => {
  return (
    <div className="w-full py-10 px-4 md:px-12 bg-black text-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">🌀 Top Courses</h1>
      <div className="relative">
        {/* ✅ Left Gradient Overlay */}
        <div className="absolute left-0 top-0 h-full w-12 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />

        {/* ✅ Right Gradient Overlay */}
        <div className="absolute right-0 top-0 h-full w-12 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

        {/* ⬅️ Left Scroll Button */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800 rounded-full p-2 text-white hover:bg-gray-600"
          onClick={() => scroll("left")}
        >
          <FaArrowLeft />
        </button>

        {/* ➡️ Right Scroll Button */}
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800 rounded-full p-2 text-white hover:bg-gray-600"
          onClick={() => scroll("right")}
        >
          <FaArrowRight />
        </button>

        {/* 🔁 Scrollable Container */}
        <div
          id="course-scroll-container"
          className="flex space-x-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-1"
        >
          {courses.map((course) => (
            <div key={course.id} className="min-w-full md:min-w-[400px] snap-start">
              <Card {...course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cohorts;
