import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const renderStars = (rating) => {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  const empty = 5 - full - (half ? 1 : 0);

  for (let i = 0; i < full; i++) {
    stars.push(
      <FaStar key={`full-${i}`} className="text-yellow-400 text-sm md:text-base" />
    );
  }

  if (half) {
    stars.push(
      <FaStarHalfAlt key="half" className="text-yellow-400 text-sm md:text-base" />
    );
  }

  for (let i = 0; i < empty; i++) {
    stars.push(
      <FaRegStar key={`empty-${i}`} className="text-yellow-400 text-sm md:text-base" />
    );
  }

  return stars;
};

const Card = ({
  id,
  title = "Full-Stack Development Bootcamp",
  tutor = "Hitesh Choudhary",
  duration = "3 Months",
  rating = 4.7,
  enrolled = 25000,
  price = "₹1,499",
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example YouTube link
  altText = "Course Video Thumbnail",
  review = "Master the MERN stack with real-world projects, production deployment & hands-on experience."
}) => {
  return (
    <motion.div
    key={id}
    className="w-full max-w-xs sm:max-w-sm md:max-w-[360px] lg:max-w-[380px] mx-auto h-auto 
    bg-[#0f0f0f] border-2 border-orange-300 rounded-2xl overflow-hidden 
    flex-shrink-0 snap-center shadow-md transition-all duration-300 ease-in-out 
    hover:shadow-orange-400/20 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]"
    
    initial={{ scale: 0.9, opacity: 0.85 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    role="article"
    aria-labelledby={`course-${id}`}
  >
    {/* Header */}
    <div className="flex justify-between items-center mb-3 px-4 pt-4">
      <h2 id={`course-${id}`} className="text-lg text-white font-semibold font-mono">
        {title}
      </h2>
      <div className="flex items-center gap-2">
        <p className="text-red-500 text-sm font-mono font-semibold" aria-live="assertive">Live</p>
        <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-blink" aria-hidden="true"></div>
      </div>
    </div>
  
    {/* Video */}
    <div className="w-full h-[200px]" role="img" aria-label={`Video banner for course: ${title}`}>
      <iframe
        src={videoUrl}
        title={altText}
        className="w-full h-full object-cover border-b border-gray-800"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  
    {/* Code Block */}
    <div className="p-4 font-mono text-sm text-left text-gray-300 space-y-2 bg-[#111111]">
      <p><span className="text-pink-500">const</span> <span className="text-green-400">course</span> <span className="text-pink-500">=</span> &#123;</p>
      <div className="pl-4 space-y-1">
        <p><span className="text-blue-400">title</span>: <span className="text-yellow-300">"{title}"</span>,</p>
        <p><span className="text-blue-400">instructor</span>: <span className="text-yellow-300">"{tutor}"</span>,</p>
        <p><span className="text-blue-400">duration</span>: <span className="text-yellow-300">"{duration}"</span>,</p>
        <p><span className="text-blue-400">rating</span>: <span className="text-yellow-300">{rating.toFixed(1)}</span>,</p>
        <p><span className="text-blue-400">enrolled</span>: <span className="text-yellow-300">{enrolled.toLocaleString()}</span>,</p>
        <p><span className="text-blue-400">price</span>: <span className="text-yellow-300">"{price}"</span>,</p>
      </div>
      <p>&#125;;</p>
    </div>
  
    {/* Footer */}
    <div className="px-4 pb-4 space-y-3">
      <p className="text-gray-400 font-mono text-xs">// {review}</p>
  
      <div className="flex items-center gap-1">
        {renderStars(rating)}
        <span className="ml-2 text-gray-500 text-xs font-mono">({rating.toFixed(1)})</span>
      </div>
  
      <button
  aria-label={`Enroll in ${title} for ${price}`}
  className="w-full bg-gradient-to-tr from-orange-500 to-orange-600 
  hover:from-orange-600 hover:to-orange-400 hover:shadow-md hover:shadow-orange-500/30 
  cursor-pointer text-white font-semibold text-sm px-4 py-2 rounded-lg 
  transition-all duration-300 ease-in-out transform hover:scale-[1.03]"
>
  Enroll for {price}
</button>

    </div>
  </motion.div>
  
  
  );
};

export default Card;
