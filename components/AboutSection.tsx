"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Lightbulb, Target, BookOpen } from "lucide-react";

const AboutSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section
      ref={ref}
      id="about"
      className={`py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 section-animation ${
        isIntersecting ? "animate" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`mb-16 text-center text-4xl font-bold text-indigo-800 ${
            isIntersecting ? "animate-fade-in" : ""
          }`}
        >
          About TMPCCI
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className={`${isIntersecting ? "animate-slide-in-left" : ""}`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl h-full transform hover:-translate-y-2">
              <Lightbulb className="h-16 w-16 text-yellow-500 mb-6" />
              <h3 className="text-2xl font-semibold text-indigo-800 mb-6">
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
                    <span className="text-3xl font-bold text-yellow-500 mr-3 leading-tight transition-colors duration-300 group-hover:text-indigo-600">
                      {item.letter}
                    </span>
                    <span className="flex-1 text-gray-700 leading-tight pt-1 transition-colors duration-300 group-hover:text-indigo-800">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={`${isIntersecting ? "animate-scale-in" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-indigo-600 text-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl h-full flex flex-col justify-center transform hover:-translate-y-2">
              <Target className="h-16 w-16 text-yellow-300 mb-6" />
              <h3 className="text-2xl font-semibold mb-6">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To be the leading institution in nurturing God-centered leaders
                for a God-centered society.
              </p>
            </div>
          </div>
          <div className={`${isIntersecting ? "animate-slide-in-right" : ""}`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl h-full transform hover:-translate-y-2">
              <BookOpen className="h-16 w-16 text-green-500 mb-6" />
              <h3 className="text-2xl font-semibold text-indigo-800 mb-6">
                Digital Learning with Quipper
              </h3>
              <p className="text-gray-700 mb-4">
                At TMPCCI, we embrace modern educational technologies to enhance
                our students&apos; learning experience. We proudly utilize
                Quipper, a comprehensive digital learning platform, to provide
                our students with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li className="transition-colors duration-300 hover:text-indigo-800">
                  Interactive lessons
                </li>
                <li className="transition-colors duration-300 hover:text-indigo-800">
                  Personalized assessments
                </li>
                <li className="transition-colors duration-300 hover:text-indigo-800">
                  Adaptive learning paths
                </li>
                <li className="transition-colors duration-300 hover:text-indigo-800">
                  Real-time progress tracking
                </li>
              </ul>
              <p className="text-gray-700">
                This integration of technology allows us to offer a blended
                learning approach, combining the best of traditional teaching
                methods with innovative digital tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
