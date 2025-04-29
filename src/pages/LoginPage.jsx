import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const formVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    if (isLogin) {
      if (!email || !password) {
        return toast.error('Please fill in all fields!');
      }
      toast.success('Login successful! 🚀');
    } else {
      if (!name || !email || !password) {
        return toast.error('Please fill in all fields!');
      }
      toast.success('Account created successfully! 🎉');
    }

    // Optionally reset
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-10">
      <Toaster position="top-center" />
      <motion.div
        layout
        className="w-full max-w-md p-8 bg-[#111] rounded-2xl shadow-2xl relative overflow-hidden"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {isLogin ? 'Welcome Back 👋' : 'Create an Account'}
          </h2>
          <button
            onClick={() => {
              setIsLogin((prev) => !prev);
              setFormData({ name: '', email: '', password: '' });
            }}
            className="text-sm text-orange-400 hover:underline transition"
          >
            {isLogin ? "Don't have an account?" : 'Already have one?'}
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.form
            key={isLogin ? 'login' : 'signup'}
            variants={formVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {!isLogin && (
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="bg-gray-900 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
            <button
              type="submit"
              className="mt-4 bg-orange-500 text-black font-bold py-3 rounded-lg hover:scale-105 transition-transform"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </motion.form>
        </AnimatePresence>

        <div className="text-center text-gray-500 mt-6 text-sm">
          {isLogin ? 'New here? Create an account to get started.' : 'Already registered? Log in instead.'}
        </div>
      </motion.div>
    </div>
  );
}
