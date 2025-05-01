import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function YoutubeShowcase() {
  const channels = [
    {
      name: 'Chai Aur Code',
      url: 'https://www.youtube.com/@chaiaurcode',
      subscribers: '619K+ Subscribers',
      description: 'Learn coding, web dev, and tech with chai!',
      thumbnail: 'https://avatars.githubusercontent.com/u/11613311?v=4',
      language: 'Hindi',
    },
    {
      name: 'Hitesh Chaudhary',
      url: 'https://www.youtube.com/@HiteshCodeLab',
      subscribers: '989K+ Subscribers',
      description: 'Real-world projects, DSA, and tech careers.',
      thumbnail: 'https://avatars.githubusercontent.com/u/11613311?v=4',
      language: 'English',
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 bg-transparent text-orange-400 font-mono">
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold">
          🔥 Best YouTube Channels to Learn Tech
        </h2>
        <div className="mt-2 w-24 h-1 mx-auto bg-orange-500 rounded-full" />
        <p className="mt-4 text-orange-200 text-sm sm:text-base px-2">
          Curated by learners, loved by developers – explore top coding channels that teach with clarity, passion, and real-world insights.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        {/* Left - Banner */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-in-headphones-showing-programming-process-on-a-laptop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Developer Banner"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Right - Channel Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col space-y-8"
        >
          {channels.map((channel, index) => (
            <motion.a
              key={index}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="relative bg-[#1a1a1a] hover:bg-[#222] transition-all p-5 sm:p-6 rounded-2xl shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 group"
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute top-2 left-2 bg-orange-500 text-black font-bold text-xs px-3 py-1 rounded-full shadow-lg uppercase border-2 border-white"
              >
                {channel.language}
              </motion.div>

              {/* Thumbnail */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 overflow-hidden rounded-xl border border-gray-700">
                <img
                  src={channel.thumbnail}
                  alt={channel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Channel Info */}
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold">{channel.name}</h3>
                <p className="text-gray-400 text-sm">{channel.subscribers}</p>
                <p className="text-gray-300 mt-2 text-sm">{channel.description}</p>
              </div>

              {/* Arrow Icon */}
              <FaArrowRight className="text-gray-400 text-xl opacity-0 group-hover:opacity-100 transition self-end sm:self-center" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
