"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { motion } from "framer-motion";

const AboutSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="about"
      className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-16 text-center text-4xl font-bold text-indigo-800"
          initial={{ opacity: 0, y: -20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About TMPCCI
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="flex flex-col gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-blue-50">
              <h3 className="text-2xl font-semibold text-blue-600 mb-6">
                Our Mission
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    letter: "T",
                    text: "ransforming minds for a better tomorrow",
                  },
                  {
                    letter: "M",
                    text: "ultiplying leadership through service",
                  },
                  {
                    letter: "P",
                    text: "owering children to make significant decisions",
                  },
                  { letter: "C", text: "ultivating creativity and meaning" },
                  {
                    letter: "C",
                    text: "reating a caring and loving community",
                  },
                  { letter: "I", text: "nspiring belief in big dreams" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <span className="text-2xl font-bold text-blue-600 mr-3 leading-tight transition-colors duration-300 group-hover:text-blue-800">
                      {item.letter}
                    </span>
                    <span className="flex-1 text-gray-700 leading-tight pt-1 transition-colors duration-300 group-hover:text-blue-800">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-blue-50 ">
              <h3 className="text-2xl text-blue-600 font-semibold mb-6">
                Our Vision
              </h3>
              <p className="text-lg leading-relaxed">
                To be the leading institution in nurturing God-centered leaders
                for a God-centered society.
              </p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:from-purple-100 hover:to-pink-100 h-full">
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">
                Digital Learning with Quipper
              </h3>
              <p className="text-gray-700 mb-6">
                At TMPCCI, we embrace modern educational technologies to enhance
                our students&apos; learning experience. We proudly utilize
                Quipper, a comprehensive digital learning platform, to provide
                our students with an innovative and engaging learning
                environment.
              </p>
              <h4 className="text-xl font-semibold text-blue-700 mb-4">
                Key Features:
              </h4>
              <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
                <li className="transition-colors duration-300 hover:text-indigo-600">
                  Interactive and engaging online lessons
                </li>
                <li className="transition-colors duration-300 hover:text-indigo-600">
                  Personalized assessments tailored to each student&apos;s needs
                </li>
                <li className="transition-colors duration-300 hover:text-indigo-600">
                  Adaptive learning paths for optimized progress
                </li>
                <li className="transition-colors duration-300 hover:text-indigo-600">
                  Real-time progress tracking for students and teachers
                </li>
                <li className="transition-colors duration-300 hover:text-indigo-600">
                  Collaborative tools for group projects and discussions
                </li>
              </ul>
              <p className="text-gray-700">
                By integrating Quipper into our curriculum, we offer a blended
                learning approach that combines the best of traditional teaching
                methods with cutting-edge digital tools. This innovative
                approach prepares our students for the challenges of the 21st
                century while maintaining our commitment to academic excellence
                and holistic development.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
