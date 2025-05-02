// components/Footer.js
import { FaTwitter, FaGithub, FaDiscord, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../../assets/chaicode-white.png'

export default function Footer() {
  return (
    <footer
    className="relative w-full min-h-[80vh] bg-black text-gray-300 py-16 px-6 overflow-hidden group"
    role="contentinfo"
    aria-label="ChaiOrCode footer"
  >
    {/* Background Branding */}
    <div
      aria-hidden="true"
      className="absolute inset-0 z-0 flex items-end justify-center opacity-10 pointer-events-none"
    >
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
  
    {/* Main Content */}
    <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Logo Section */}
      <section aria-label="About ChaiOrCode" className="flex flex-col items-center md:items-start">
        <div className="mb-4">
          <img
            src={logo}
            alt="ChaiOrCode Logo"
            className="h-10 w-auto md:h-12"
          />
        </div>
        <p className="text-sm text-gray-400 max-w-[200px] text-center md:text-left">
          Learn, Build, and Grow with the power of Code and Chai! 🚀
        </p>
      </section>
  
      {/* Navigation Links */}
      <nav aria-label="Footer Navigation" className="flex justify-center">
        <div className="grid grid-cols-2 gap-6 text-center md:text-left">
          <div className="space-y-3">
            <h2 className="font-bold text-white">Products</h2>
            <ul className="space-y-1">
              {['Courses', 'Cohort', 'Coding Hero', 'FreeAPI', 'Masterji', 'Docs'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-yellow-400 transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="font-bold text-white">Services</h2>
            <ul className="space-y-1">
              {['Privacy Policy', 'Terms of Service', 'Pricing Policy', 'Refund Policy'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-yellow-400 transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
  
      {/* Social Media Section */}
      <section aria-label="Social Media" className="flex flex-col items-center md:items-end">
        <h2 className="text-2xl font-semibold mb-4 text-white">Follow Us</h2>
        <div className="flex space-x-5 text-3xl" role="navigation" aria-label="Social media links">
          <a href="https://x.com/Hiteshdotcom" aria-label="Twitter" className="hover:text-yellow-400 transition"><FaTwitter /></a>
          <a href="https://github.com/hiteshchoudhary" aria-label="GitHub" className="hover:text-yellow-400 transition"><FaGithub /></a>
          <a href="https://discord.com/invite/WDrH3zuWFb" aria-label="Discord" className="hover:text-yellow-400 transition"><FaDiscord /></a>
          <a href="https://www.youtube.com/hiteshchoudharydotcom" aria-label="YouTube" className="hover:text-yellow-400 transition"><FaYoutube /></a>
          <a href="https://www.instagram.com/hiteshchoudharyofficial/" aria-label="Instagram" className="hover:text-yellow-400 transition"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/hiteshchoudhary/" aria-label="LinkedIn" className="hover:text-yellow-400 transition"><FaLinkedin /></a>
        </div>
      </section>
    </div>
  
    {/* Copyright */}
    <div className="mt-12 text-center text-sm text-gray-500 relative z-10">
      &copy; {new Date().getFullYear()} ChaiOrCode. All rights reserved.
    </div>
  </footer>
  
  );
}
