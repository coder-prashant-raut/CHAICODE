import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBug, FaHome } from 'react-icons/fa';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Animated glowing backdrop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1.4 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute w-[700px] h-[700px] bg-orange-600 rounded-full blur-[180px] opacity-20 z-0"
      />

      {/* Animated Bug Icon */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        className="z-10 text-orange-400 mb-6 text-6xl drop-shadow-lg"
      >
        <FaBug />
      </motion.div>

      {/* 404 Heading */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-7xl md:text-8xl font-extrabold text-white z-10 drop-shadow-md"
      >
        404
      </motion.h1>

      {/* Subtitle Message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-gray-300 text-lg md:text-xl z-10 max-w-xl leading-relaxed"
      >
        Shayad aap <span className="text-orange-400 font-semibold">galat raste</span> par aa gaye hain... <br />
        Yahan <span className="text-orange-400 font-semibold">na chai milti hai</span>, na hi <span className="text-orange-400 font-semibold">code</span>. ☕💻
      </motion.p>

      {/* Home Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 z-10"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-black font-bold rounded-full shadow-lg hover:bg-orange-400 hover:scale-105 active:scale-95 transition-transform duration-300"
        >
          <FaHome />
          Back to Home
        </Link>
      </motion.div>

      {/* Decorative bottom light */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-orange-500/20 to-transparent"
      />
    </div>
  );
}
