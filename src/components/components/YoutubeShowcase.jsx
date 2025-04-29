import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function YoutubeShowcase() {
  const channels = [
    {
      name: 'Chai Aur Code',
      url: 'https://youtube.com/@chaiaurcode',
      subscribers: '120K+ Subscribers',
      description: 'Learn coding, web dev, and tech with chai!',
      thumbnail: 'https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg',
      language: 'Hindi',
    },
    {
      name: 'Code with Coffee',
      url: 'https://youtube.com/@codewithcoffee',
      subscribers: '80K+ Subscribers',
      description: 'Real-world projects, DSA, and tech careers.',
      thumbnail: 'https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg',
      language: 'English',
    },
  ];

  return (
    <section className="w-full py-16 px-6 bg-gradient-to-tr from-[#0f0f0f] via-[#111] to-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left - Banner */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <div className="relative w-full h-96 bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
              alt="Developer Banner"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Right - Channel Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-10"
        >
          {channels.map((channel, index) => (
            <motion.a
              key={index}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="relative bg-[#1a1a1a] hover:bg-[#222] transition-all p-6 rounded-2xl shadow-xl flex items-center gap-6 group overflow-visible"
            >
              {/* Animated Language Badge */}
              <motion.div
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute -top-4 -left-4 bg-orange-500 text-black font-bold text-xs px-4 py-2 rounded-full shadow-lg uppercase animate-pulse border-2 border-white"
              >
                {channel.language}
              </motion.div>

              {/* Thumbnail */}
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-xl border-2 border-gray-700">
                <img
                  src={channel.thumbnail}
                  alt={channel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Channel Info */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold">{channel.name}</h3>
                <p className="text-gray-400 text-sm">{channel.subscribers}</p>
                <p className="text-gray-300 mt-2 text-sm">{channel.description}</p>
              </div>

              {/* Arrow */}
              <FaArrowRight className="text-gray-400 ml-auto text-2xl opacity-0 group-hover:opacity-100 transition" />
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
