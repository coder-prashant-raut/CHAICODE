import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AppDownloadSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center  text-white overflow-hidden px-6 sm:px-10">
      {/* Background Animations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-700/30 rounded-full blur-[150px]"
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", delay: 1 }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[150px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"
        >
          📱 Download Our App <br /> and Power Up Your Workflow!
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Build. Manage. Scale. Take your projects to the next level with our mobile companion. Download now for free.
        </motion.p>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
          {/* Google Play */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="flex items-center gap-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-colors px-6 py-4 rounded-xl shadow-2xl"
          >
            <FaGooglePlay size={28} />
            <div className="text-left">
              <p className="text-xs uppercase text-gray-900">Get it on</p>
              <p className="text-lg font-semibold text-black">Google Play</p>
            </div>
          </motion.a>

          {/* Apple Store */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="flex items-center gap-4 bg-gradient-to-r from-gray-300 to-gray-100 hover:from-gray-400 hover:to-gray-200 transition-colors px-6 py-4 rounded-xl shadow-2xl"
          >
            <FaApple size={30} className="text-black" />
            <div className="text-left">
              <p className="text-xs uppercase text-gray-800">Download on the</p>
              <p className="text-lg font-semibold text-black">App Store</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
