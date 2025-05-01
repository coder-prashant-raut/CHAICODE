import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import topics from "../../data/topics";

const row1 = topics.slice(0, 5);
const row2 = topics.slice(5, 10);
const row3 = topics.slice(10, 15);

const TopicRow = ({ items, reverse, setHovered }) => {
  return (
    <div
      className={`flex min-w-max  ${reverse ? "animate-marquee-reverse-infinite" : "animate-marquee-infinite"} my-6`}
    >
      {[...items, ...items].map((topic, i) => (
        <motion.div
          key={i}
          className="group relative flex-shrink-0 mr-6 w-44 h-14 sm:w-52 sm:h-16 px-4 py-2 rounded-xl border border-gray-700 bg-[#1f1f1f] text-white shadow hover:shadow-lg flex items-center gap-3 transition-all duration-300 cursor-pointer"
          onMouseEnter={() => setHovered(topic)}
          onMouseLeave={() => setHovered(null)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={topic.logo}
            alt={topic.name}
            className="w-7 h-7 rounded-full object-contain"
          />
          <span className="text-sm sm:text-base font-semibold truncate">{topic.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

const HoveredVideoCard = ({ topic }) => {
  if (!topic) return null;

  const embedUrl = topic.videoUrl.replace("watch?v=", "embed/");

  return (
    <AnimatePresence>
      <motion.div
        key={topic.name}
        className="fixed z-50 top-[30%] left-1/2 -translate-x-1/2 w-[90%] sm:w-[400px] bg-[#111] border border-gray-700 rounded-xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.3 }}
      >
        <iframe
          width="100%"
          height="220"
          src={embedUrl}
          title={topic.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="p-3 text-white text-sm text-center">{topic.name}</div>
      </motion.div>
    </AnimatePresence>
  );
};

const CloudTopics = () => {
  const [hoveredTopic, setHoveredTopic] = useState(null);

  return (
    <section className="flex  justify-center my-20 w-full">
    <div className="w-full max-w-full lg:max-w-7xl">
    <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Topics Cloud
          </span>
        </h1>
        <p className="md:text-lg text-gray-400 mt-4">
          Explore trending topics with video guides and mini courses.
        </p>
      </div>

      {/* Marquee rows */}
<div className="relative overflow-hidden w-[95%] xs:w-[80%] mx-auto py-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
  <TopicRow items={row1} reverse={false} setHovered={setHoveredTopic} />
  <TopicRow items={row2} reverse={true} setHovered={setHoveredTopic} />
  <TopicRow items={row3} reverse={false} setHovered={setHoveredTopic} />


{/* Move video card outside this container */}
<HoveredVideoCard topic={hoveredTopic} />

      </div>
    </div>
    </section>
  );
};

export default CloudTopics;
