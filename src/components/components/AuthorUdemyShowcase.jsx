import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function AuthorCourseShowcase() {
  const course = {
    title: 'React for Beginners',
    description:
      'Learn React from scratch and build interactive web applications with modern JavaScript libraries. Start your journey with React today!',
    price: '$99.99',
    discountedPrice: '$49.99',
    rating: 4.5,
    numOfStudents: 21500,
    url: 'https://www.udemy.com/course/react-for-beginners/',
    image: 'https://www.udemy.com/course/react-for-beginners/img/course-image.jpg',
  };

  return (
    <section className="w-full py-16 px-6 bg-gradient-to-r from-[#1f1f1f] via-[#121212] to-[#1f1f1f] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Course Image and Details */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-96 bg-gray-900 rounded-xl shadow-xl overflow-hidden"
        >
          <img
            src={course.image}
            alt="Course"
            className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
          />
        </motion.div>

        {/* Right - Course Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          {/* Heading Section */}
          <h2 className="text-4xl font-bold text-orange-400 relative inline-block">
            Featured Course: <span className="text-white">{course.title}</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-400 transform scale-x-100"></span>
          </h2>

          <p className="text-lg text-gray-300">{course.description}</p>

          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-1 text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`h-6 w-6 ${index < course.rating ? 'fill-current' : 'text-gray-400'}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15l-5.89 3.09 1.12-6.48-4.73-4.62 6.56-.57L10 1l2.94 5.47 6.56.57-4.73 4.62 1.12 6.48L10 15z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-400">({course.rating} stars)</span>
            </div>

            <div className="flex items-center space-x-6">
              <span className="text-xl text-gray-200 font-semibold">Enrolled: {course.numOfStudents} students</span>
              <div className="text-lg text-orange-400 font-bold">Was: <span className="line-through">{course.price}</span></div>
              <div className="text-2xl text-green-400 font-bold">{course.discountedPrice}</div>
            </div>

            <div className="flex justify-start">
              <a
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-400 transition duration-300 text-white text-lg py-3 px-8 rounded-md flex items-center space-x-2"
              >
                <span>Enroll Now</span>
                <FaArrowRight />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
