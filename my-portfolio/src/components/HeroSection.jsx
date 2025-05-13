import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-20 bg-white"
    >
      <h1 className="text-4xl md:text-6xl font-semibold">
        Create a portfolio website that stands out
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Build your brand with AI-powered design tools.
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full"
      >
        Get Started
      </motion.button>
    </motion.section>
  );
};

export default HeroSection;
