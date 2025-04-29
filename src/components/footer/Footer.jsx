// components/Footer.js
import { FaTwitter, FaGithub, FaDiscord, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative min-h-[80vh] bg-black text-gray-300 py-16 px-6 overflow-hidden group">
      {/* CHAICODE background */}
      <div className="absolute inset-0 z-0 flex items-end justify-center opacity-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 0.2 }}
          className="hidden md:block text-[13vw] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-400 animate-pulse"
          style={{ textShadow: '0 0 80px rgba(234,179,8,0.6)' }}
        >
          CHAICODE
        </motion.div>

        {/* Mobile: Stacked */}
        <div className="md:hidden flex flex-col items-center text-center leading-none">
          {['Chai', 'or', 'Code'].map((word, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 0.2 }}
              className="text-[30vw] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-400 animate-pulse"
              style={{ textShadow: '0 0 80px rgba(234,179,8,0.6)' }}
            >
              {word}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-3xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
              ChaiOrCode
            </span>
          </div>
          <p className="text-sm text-gray-400 max-w-[200px] text-center md:text-left">
            Learn, Build, and Grow with the power of Code and Chai! 🚀
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-6 text-center md:text-left">
            <div className="space-y-3">
              <a href="#" className="block hover:text-yellow-400 transition">Courses</a>
              <a href="#" className="block hover:text-yellow-400 transition">Cohort</a>
              <a href="#" className="block hover:text-yellow-400 transition">Coding Hero</a>
              <a href="#" className="block hover:text-yellow-400 transition">FreeAPI</a>
              <a href="#" className="block hover:text-yellow-400 transition">Masterji</a>
              <a href="#" className="block hover:text-yellow-400 transition">Docs</a>
            </div>
            <div className="space-y-3">
              <a href="#" className="block hover:text-yellow-400 transition">Privacy Policy</a>
              <a href="#" className="block hover:text-yellow-400 transition">Terms of Service</a>
              <a href="#" className="block hover:text-yellow-400 transition">Pricing Policy</a>
              <a href="#" className="block hover:text-yellow-400 transition">Refund Policy</a>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="text-2xl font-semibold mb-4 text-white">Follow Us</h4>
          <div className="flex space-x-5 text-3xl">
            <a href="#" className="hover:text-yellow-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-400 transition"><FaGithub /></a>
            <a href="#" className="hover:text-yellow-400 transition"><FaDiscord /></a>
            <a href="#" className="hover:text-yellow-400 transition"><FaYoutube /></a>
            <a href="#" className="hover:text-yellow-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400 transition"><FaLinkedin /></a>
          </div>
        </div>

      </div>

      {/* Bottom CopyRight */}
      <div className="mt-12 text-center text-sm text-gray-500 relative z-10">
        &copy; {new Date().getFullYear()} ChaiOrCode. All rights reserved.
      </div>
    </footer>
  );
}
