import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react"; // npm install qrcode.react

export default function AppDownloadSection() {
  return (
    <section className="  py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        
        {/* Left: Text + QR + Buttons */}
        <div className="w-full flex flex-col justify-center items-center lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Download Our Mobile App
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Access all features on the go. Scan the QR code or use the buttons below to download.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
            {/* QR Code */}
            <div className="flex flex-col items-center sm:items-start">
              <QRCodeSVG value="https://your-app-link.com" size={128} />
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Scan to download</p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col justify-center items-center sm:flex-row gap-4">
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-4 border-2 border-amber-400 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 transition"
              >
                <FaGooglePlay size={28} />
                <div className="text-left leading-tight">
                  <p className="text-xs">GET IT ON</p>
                  <p className="text-base font-semibold">Google Play</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 px-6 py-4 border-2 border-amber-400 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 transition"
              >
                <FaApple size={28} />
                <div className="text-left leading-tight">
                  <p className="text-xs">Download on the</p>
                  <p className="text-base font-semibold">App Store</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Mobile App Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src="https://play-lh.googleusercontent.com/Wd5Hi28BpyfzoRAYJbR9se2i2YpXGa3gtvTosNR8ha74ywpWEkamUvn3yyEauvtjqbs=w1052-h592-rw"
            alt="Mobile App Preview"
            className="max-w-xs w-full h-auto rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
