import React, { useRef, useEffect, useState } from "react";

const BALLOON_COUNT = 10;
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 250;

const people = [
  { name: "Prashant Raut", job: "CTO", company: "BramhaUI", image: "https://avatars.githubusercontent.com/u/162595999?v=4" },
  { name: "Aaravi Shah", job: "UI/UX Designer", company: "ChaiCode", image: "https://i.pravatar.cc/150?img=21" },
  { name: "Meera Patel", job: "Backend Dev", company: "PixelWhiz", image: "https://i.pravatar.cc/150?img=31" },
  { name: "Rashmi Singh", job: "Data Scientist", company: "NeuroNet", image: "https://i.pravatar.cc/150?img=41" },
  { name: "Kabir Khan", job: "ML Engineer", company: "CodeCraft", image: "https://i.pravatar.cc/150?img=5" },
  { name: "Anant Verma", job: "Fullstack Dev", company: "TechTonic", image: "https://i.pravatar.cc/150?img=6" },
  { name: "Ishaan Roy", job: "DevOps Engineer", company: "InfraMint", image: "https://i.pravatar.cc/150?img=7" },
  { name: "Arav Jain", job: "Product Manager", company: "BugSmiths", image: "https://i.pravatar.cc/150?img=8" },
  { name: "Sanya Desai", job: "QA Analyst", company: "AlgoWave", image: "https://i.pravatar.cc/150?img=9" },
  { name: "Priya Nair", job: "CTO", company: "DreamSprint", image: "https://i.pravatar.cc/150?img=10" },
];

const getRandom = (min, max) => Math.random() * (max - min) + min;

export default function FloatingBalloonsCanvas() {
  const canvasRef = useRef(null);
  const [hovered, setHovered] = useState(null);
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const balloonList = Array.from({ length: BALLOON_COUNT }).map((_, i) => ({
      x: getRandom(60, CANVAS_WIDTH - 60),
      y: getRandom(60, CANVAS_HEIGHT - 60),
      vx: getRandom(-0.4, 0.4),
      vy: getRandom(-0.4, 0.4),
      radius: getRandom(28, 40),
      img: new Image(),
      info: people[i % people.length],
    }));

    balloonList.forEach((b, i) => {
      b.img.src = b.info.image;  // Use individual image URLs here
    });

    setBalloons(balloonList);

    const animate = () => {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      for (let i = 0; i < balloonList.length; i++) {
        const b = balloonList[i];

        // Update position
        b.x += b.vx;
        b.y += b.vy;

        // Boundary bounce
        if (b.x - b.radius <= 0 || b.x + b.radius >= CANVAS_WIDTH) {
          b.vx *= -1;
          b.x = Math.max(b.radius, Math.min(CANVAS_WIDTH - b.radius, b.x));
        }

        if (b.y - b.radius <= 0 || b.y + b.radius >= CANVAS_HEIGHT) {
          b.vy *= -1;
          b.y = Math.max(b.radius, Math.min(CANVAS_HEIGHT - b.radius, b.y));
        }

        // Collision handling
        for (let j = i + 1; j < balloonList.length; j++) {
          const b2 = balloonList[j];
          const dx = b2.x - b.x;
          const dy = b2.y - b.y;
          const dist = Math.hypot(dx, dy);
          const minDist = b.radius + b2.radius;

          if (dist < minDist) {
            const angle = Math.atan2(dy, dx);
            const overlap = (minDist - dist) / 2;
            const moveX = Math.cos(angle) * overlap;
            const moveY = Math.sin(angle) * overlap;

            b.x -= moveX;
            b.y -= moveY;
            b2.x += moveX;
            b2.y += moveY;

            [b.vx, b2.vx] = [b2.vx, b.vx];
            [b.vy, b2.vy] = [b2.vy, b.vy];
          }
        }

        // Draw balloon with code aesthetics
        ctx.save();
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.shadowColor = "rgba(255,255,255,0.1)";
        ctx.shadowBlur = 12;
        ctx.clip();
        ctx.drawImage(
          b.img,
          b.x - b.radius,
          b.y - b.radius,
          b.radius * 2,
          b.radius * 2
        );
        ctx.restore();
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let found = null;

    for (let b of balloons) {
      const dx = b.x - x;
      const dy = b.y - y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < b.radius + 4) {
        found = { ...b, x: x + 20, y: y - 20 };
        break;
      }
    }

    setHovered(found);
  };

  return (
    <div className="relative w-fit">
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHovered(null)}
        className="block w-full h-full bg-transparent"
      />

      {hovered && (
        <div
          className="absolute z-50 bg-gray-800/80 text-white border-2 border-orange-400 shadow-2xl p-3 rounded-xl text-sm w-56 backdrop-blur-md transition-all duration-150 ease-out "
          style={{
            top: hovered.y,
            left: hovered.x,
            pointerEvents: "none",
          }}
        >
          <div className="font-semibold text-orange-400 text-base">
            {hovered.info.name}
          </div>
          <div className="text-gray-300">{hovered.info.job}</div>
          <div className="text-blue-400 text-sm">{hovered.info.company}</div>
        </div>
      )}
    </div>
  );
}
