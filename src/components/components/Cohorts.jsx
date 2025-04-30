import React from "react";
import Card from "./Card"; // Make sure Card.jsx is in the same folder or update the path
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import scroll icons
const courses = [
  {
    id: 1,
    title: "Full-Stack Cohort",
    tutor: "Hitesh Choudhary",
    duration: "3 Months",
    rating: 4.7,
    enrolled: 25000,
    price: "₹1,499",
    bannerUrl: "https://source.unsplash.com/600x300/?code,bootcamp",
    review: "Master the MERN stack with real-world projects, production deployment & hands-on experience."
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    tutor: "Anuj Bhaiya",
    duration: "2 Months",
    rating: 4.8,
    enrolled: 18000,
    price: "₹999",
    bannerUrl: "https://source.unsplash.com/600x300/?algorithms,dsa",
    review: "Ace technical interviews with top-tier DSA training and problem-solving strategies."
  },
  {
    id: 3,
    title: "Python for Beginners",
    tutor: "Jenny Tech",
    duration: "1.5 Months",
    rating: 4.6,
    enrolled: 22000,
    price: "₹799",
    bannerUrl: "https://source.unsplash.com/600x300/?python,code",
    review: "Start coding in Python with zero experience and build your first mini projects."
  },
  {
    id: 4,
    title: "DevOps & Cloud Engineering",
    tutor: "Kunal Kushwaha",
    duration: "2.5 Months",
    rating: 4.9,
    enrolled: 15000,
    price: "₹1,299",
    bannerUrl: "https://source.unsplash.com/600x300/?devops,cloud",
    review: "Learn CI/CD, Docker, Kubernetes & deploy apps to AWS/GCP from scratch."
  },
  {
    id: 5,
    title: "Android App Development with Kotlin",
    tutor: "Neha Saini",
    duration: "2 Months",
    rating: 4.5,
    enrolled: 12000,
    price: "₹899",
    bannerUrl: "https://source.unsplash.com/600x300/?android,appdev",
    review: "Build beautiful Android apps using Kotlin with modern Android architecture."
  },
  {
    id: 6,
    title: "UI/UX Design Masterclass",
    tutor: "Shreya Jain",
    duration: "1 Month",
    rating: 4.6,
    enrolled: 10000,
    price: "₹749",
    bannerUrl: "https://source.unsplash.com/600x300/?uiux,design",
    review: "Craft user-friendly designs with Figma, prototyping, and design systems."
  },
  {
    id: 7,
    title: "Machine Learning Essentials",
    tutor: "Krish Naik",
    duration: "2 Months",
    rating: 4.8,
    enrolled: 14000,
    price: "₹1,099",
    bannerUrl: "https://source.unsplash.com/600x300/?machinelearning,data",
    review: "Understand ML from ground up with hands-on Python projects and real datasets."
  }
  
];

 // Function to handle scroll
 const scroll = (direction) => {
  const scrollContainer = document.getElementById("course-scroll-container");
  const scrollAmount = 300; // Adjust scroll distance
  if (direction === "left") {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
};

const Cohorts = () => {
  return (
    <div className="w-full py-10 px-4 md:px-12 bg-black text-white">
    <h1 className="text-2xl md:text-3xl font-bold mb-6">🌀 Top Courses</h1>
    <div className="relative">
      {/* Left Scroll Button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 rounded-full p-2 text-white hover:bg-gray-600"
        onClick={() => scroll("left")}
      >
        <FaArrowLeft />
      </button>

      {/* Right Scroll Button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 rounded-full p-2 text-white hover:bg-gray-600"
        onClick={() => scroll("right")}
      >
        <FaArrowRight />
      </button>

      {/* Scrollable Container */}
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
