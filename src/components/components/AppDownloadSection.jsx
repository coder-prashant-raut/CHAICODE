import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { MdWifiOff, MdNotificationsActive, MdDirectionsBus } from "react-icons/md";
import { QRCodeSVG } from "qrcode.react";
import { motion } from "framer-motion";

export default function AppDownloadSection() {
  return (
    <section className="relative py-20 px-6 md:px-12 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-20 z-10 relative">
        
        {/* Left content */}
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-200 text-transparent bg-clip-text"
          >
            Experience Learning on the Go
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg text-gray-300"
          >
            Scan the QR or download directly from your favorite store. Carry your dev world in your pocket.
          </motion.p>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-6 text-sm text-white">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center bg-white/10 p-4 rounded-xl shadow-md backdrop-blur"
            >
              <MdWifiOff size={28} className="text-cyan-400 mb-2" />
              <p className="font-semibold">Offline Access</p>
              <p className="text-gray-400 text-xs mt-1">Download and study without internet.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center bg-white/10 p-4 rounded-xl shadow-md backdrop-blur"
            >
              <MdNotificationsActive size={28} className="text-cyan-400 mb-2" />
              <p className="font-semibold">Live Session Alerts</p>
              <p className="text-gray-400 text-xs mt-1">Never miss a live class again.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center bg-white/10 p-4 rounded-xl shadow-md backdrop-blur"
            >
              <MdDirectionsBus size={28} className="text-cyan-400 mb-2" />
              <p className="font-semibold">Revise on Commute</p>
              <p className="text-gray-400 text-xs mt-1">Perfect for travel and downtime.</p>
            </motion.div>
          </div>

          {/* QR + Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-8 mt-6">
            <div className="p-4 backdrop-blur-xl bg-white/10 rounded-xl border border-cyan-400/30 shadow-xl">
              <QRCodeSVG value="https://your-app-link.com" size={128} />
              <p className="text-sm text-gray-400 mt-2 text-center">Scan to download</p>
            </div>

            <div className="flex flex-col gap-4 sm:ml-4">
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow-md hover:scale-105 transition transform"
              >
                <FaGooglePlay size={28} />
                <div className="text-left">
                  <p className="text-xs opacity-70">GET IT ON</p>
                  <p className="text-base font-semibold">Google Play</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-slate-800 to-gray-900 text-white border border-white/10 rounded-xl shadow-md hover:scale-105 transition transform"
              >
                <FaApple size={28} />
                <div className="text-left">
                  <p className="text-xs opacity-70">Download on the</p>
                  <p className="text-base font-semibold">App Store</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right: App Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src="https://play-lh.googleusercontent.com/Wd5Hi28BpyfzoRAYJbR9se2i2YpXGa3gtvTosNR8ha74ywpWEkamUvn3yyEauvtjqbs=w1052-h592-rw"
            alt="Mobile App"
            className="max-w-xs w-full h-auto rounded-2xl shadow-2xl border border-white/10 transform hover:scale-105 transition duration-500"
          />
        </motion.div>
      </div>

      {/* Floating Glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-blue-500/20 rounded-full blur-2xl pointer-events-none animate-pulse"></div>
    </section>
  );
}
