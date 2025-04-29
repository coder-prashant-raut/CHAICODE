import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBug, FaHome } from 'react-icons/fa'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Glowing animation backdrop */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1.2 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute w-[600px] h-[600px] bg-orange-500 rounded-full blur-[150px] opacity-20 z-0"
      />

      {/* Animated bug icon */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 150, delay: 0.3 }}
        className="z-10 text-orange-400 mb-4 text-5xl"
      >
        <FaBug />
      </motion.div>

      {/* 404 Text */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-6xl font-extrabold text-white z-10"
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-4 text-gray-400 text-lg z-10 max-w-lg"
      >
        Shayad aap galat jagah aa gaye hain...<br />
        Kyunki yahan <span className="text-orange-400 font-semibold">na chai milti hai</span>, <span className="text-orange-400 font-semibold">na hi code</span>. ☕💻
      </motion.p>

      {/* Home Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 z-10"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-black font-bold rounded-full shadow-md hover:scale-105 transition-transform duration-300"
        >
          <FaHome />
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
