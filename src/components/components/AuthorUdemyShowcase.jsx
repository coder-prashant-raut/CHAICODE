import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function AuthorUdemyShowcase() {
  const course = {
    title: 'React for Beginners',
    description:
      'Learn React from scratch and build interactive web applications with modern JavaScript libraries. Start your journey with React today!',
    price: '3299₹',
    discountedPrice: '1499₹',
    rating: 4.5,
    numOfStudents: 37975,
    url: 'https://www.udemy.com/course/web-dev-master/?couponCode=ST7MT290425G3',
    image: 'https://img-c.udemycdn.com/course/750x422/6035102_7d1a.jpg',
  };

  return (
    <section className="w-full py-16 px-6 bg-transparent text-white" aria-labelledby="udemy-courses">
    <div className="w-full flex flex-col justify-center items-center mb-10 text-center">
      <h3 id="udemy-courses" className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">
        Top Udemy Courses
      </h3>
      <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl font-sans">
        The only web development course you’ll ever need — covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma & Deployment ⚡
      </p>
    </div>
  
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left - Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-60 sm:h-80 md:h-96 bg-gray-900 rounded-xl shadow-2xl overflow-hidden"
        aria-labelledby="course-image"
      >
        <img
          src={course.image}
          alt={`Image for ${course.title} course`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
  
      {/* Right - Details */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col space-y-6"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-400">
          Featured Course: <span className="text-white">{course.title}</span>
        </h2>
  
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">{course.description}</p>
  
        {/* Rating & Students */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-5 w-5 ${i < course.rating ? 'fill-current' : 'text-gray-500'}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 15l-5.89 3.09 1.12-6.48-4.73-4.62 6.56-.57L10 1l2.94 5.47 6.56.57-4.73 4.62 1.12 6.48L10 15z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-400">({course.rating} stars)</span>
          <span className="text-sm text-gray-400">• {course.numOfStudents} students</span>
        </div>
  
        {/* Price Info */}
        <div className="flex flex-wrap items-center gap-6">
          <span className="text-lg sm:text-xl text-orange-400 font-semibold">
            Was: <span className="line-through">{course.price}</span>
          </span>
          <span className="text-2xl text-green-400 font-bold">{course.discountedPrice}</span>
        </div>
  
        {/* Enroll Button */}
        <a
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-400 transition duration-300 text-white text-base sm:text-lg font-medium py-3 px-6 rounded-lg shadow-lg"
        >
          Enroll Now <FaArrowRight className="ml-2" />
        </a>
      </motion.div>
    </div>
  </section>
  

  );
}
