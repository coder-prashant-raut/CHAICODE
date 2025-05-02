import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import topics from "../../data/topics";

// Sliced topic rows
const row1 = topics.slice(0, 5);
const row2 = topics.slice(5, 10);
const row3 = topics.slice(10, 15);

// TopicRow displays horizontally scrolling topic chips
const TopicRow = ({ items, reverse, setHovered }) => {
  return (
    <div
      className={`flex min-w-max ${
        reverse ? "animate-marquee-reverse-infinite" : "animate-marquee-infinite"
      } my-6`}
      aria-label="Topic scrolling row"
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
          role="button"
          aria-label={`Topic: ${topic.name}`}
        >
          <img
            src={topic.logo}
            alt={`${topic.name} logo`}
            className="w-7 h-7 rounded-full object-contain"
          />
          <span className="text-sm sm:text-base font-semibold truncate">
            {topic.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

// Floating video card shown on hover
const HoveredVideoCard = ({ topic }) => {
  const embedUrl = topic?.videoUrl?.replace("watch?v=", "embed/");

  return (
    <AnimatePresence>
      {topic && embedUrl && (
        <motion.div
          key={topic.name}
          className="fixed z-50 top-[30%] left-1/2 -translate-x-1/2 w-[90%] sm:w-[400px] bg-[#111] border border-gray-700 rounded-xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.2 }} // reduced delay
          role="dialog"
          aria-label={`Video guide for ${topic.name}`}
        >
          <iframe
            width="100%"
            height="220"
            src={embedUrl}
            title={`Video guide for ${topic.name}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="p-3 text-white text-sm text-center">{topic.name}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Main Component: CloudTopics
const CloudTopics = () => {
  const [hoveredTopic, setHoveredTopic] = useState(null);

  return (
    <section className="flex justify-center my-20 w-full" aria-labelledby="topics-cloud-title">
      <div className="w-full max-w-full lg:max-w-7xl">
        {/* Heading */}
        <header className="max-w-4xl mx-auto text-center px-4">
          <h1
            id="topics-cloud-title"
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
          >
            <span className="bg-clip-text text-transparent bg-orange-500">
              Topics Cloud
            </span>
          </h1>
          <p className="md:text-lg text-gray-400 mt-4">
            Explore trending topics with video guides and mini courses.
          </p>
        </header>

        {/* Scrolling topic rows */}
        <div
          className="relative overflow-hidden w-[95%] xs:w-[80%] mx-auto py-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          aria-hidden="true"
        >
          <TopicRow items={row1} reverse={false} setHovered={setHoveredTopic} />
          <TopicRow items={row2} reverse={true} setHovered={setHoveredTopic} />
          <TopicRow items={row3} reverse={false} setHovered={setHoveredTopic} />
        </div>

        {/* Floating video preview card on hover */}
        <HoveredVideoCard topic={hoveredTopic} />
      </div>
    </section>
  );
};

export default CloudTopics;
