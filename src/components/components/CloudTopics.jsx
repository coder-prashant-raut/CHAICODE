import React, { useEffect, useRef, useState } from 'react';
import { FaCloud } from 'react-icons/fa';

const topics = [
  { name: 'Docker', videoId: 'fqMOX6JJhGo' },
  { name: 'Kubernetes', videoId: 'foGklduxhM0' },
  { name: 'AWS', videoId: 'ulprqHHWlng' },
  { name: 'CI/CD', videoId: '1aXZQcG2Y6I' },
  { name: 'Linux', videoId: '1zBoybzqmwY' },
  { name: 'Terraform', videoId: 'YcJ9IeukJL8' },
  { name: 'Monitoring', videoId: '3M9r9hOPcd0' },
  { name: 'Serverless', videoId: 'NYXxIDhfjXQ' },
  { name: 'Cloud IAM', videoId: 'g-BOMxX5-1c' },
  { name: 'Ansible', videoId: 'wgQ3rHjAxec' },
  { name: 'API Gateway', videoId: 'zXvU8Kz4Ubw' },
  { name: 'DevOps', videoId: '0yWAtQ6wYNM' },
];

export default function CloudTopics() {
  const [active, setActive] = useState(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const topicRefs = useRef({});

  const openCard = (name, index) => {
    const el = topicRefs.current[index];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cardWidth = 360;
    const cardHeight = 200;
    const padding = 16;

    let top = rect.bottom + padding;
    let left = rect.left + rect.width / 2;
    if (top + cardHeight > window.innerHeight) top = rect.top - cardHeight - padding;
    left = Math.max(cardWidth / 2 + padding, Math.min(window.innerWidth - cardWidth / 2 - padding, left));

    setPosition({ top, left });
    setActive(name);
  };

  const closeCard = () => setActive(null);

  useEffect(() => {
    const closeOnTouch = () => setActive(null);
    if (active) {
      document.addEventListener('touchstart', closeOnTouch);
      return () => document.removeEventListener('touchstart', closeOnTouch);
    }
  }, [active]);

  return (
    <section className="relative py-20 px-4 max-w-7xl mx-auto text-white text-center overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 flex justify-center items-center gap-2">
        <FaCloud className="text-cyan-400" /> Cloud Topics
      </h2>
      <p className="text-white/70 text-lg mb-10">
        Tap or hover to explore essential cloud tools via embedded tutorials.
      </p>

      <div className="flex flex-wrap justify-center gap-4 z-10 relative">
        {topics.map((topic, index) => (
          <div
            key={index}
            ref={(el) => (topicRefs.current[index] = el)}
            onMouseEnter={() => openCard(topic.name, index)}
            onMouseLeave={closeCard}
            onTouchStart={(e) => {
              e.stopPropagation();
              openCard(topic.name, index);
            }}
          >
            <button className="bg-[#0f172a] border border-cyan-500/30 text-white hover:bg-cyan-700 hover:text-white px-6 py-2 rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 font-medium transition-all">
              {topic.name}
            </button>
          </div>
        ))}
      </div>

      {active && (
        <div
          className="fixed z-50 w-[360px] max-w-[92vw] transition-all duration-300"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            transform: 'translateX(-50%)',
          }}
        >
          <div className="rounded-2xl overflow-hidden backdrop-blur-lg bg-[#0f172a]/80 border border-cyan-500/20 shadow-[0_0_50px_10px_rgba(34,211,238,0.2)] animate-glowCard pointer-events-auto">
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${topics.find(t => t.name === active)?.videoId}`}
              title={active}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
