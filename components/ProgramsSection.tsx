"use client";
import { Book, Rocket, Palette, Music } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const programs = [
  {
    icon: Book,
    title: "Literacy Foundations",
    description:
      "Developing strong reading and writing skills through engaging literature and creative writing exercises.",
    color: "bg-red-100 hover:bg-red-200",
  },
  {
    icon: Rocket,
    title: "STEM Exploration",
    description:
      "Hands-on learning in Science, Technology, Engineering, and Mathematics to foster analytical thinking and problem-solving abilities.",
    color: "bg-blue-100 hover:bg-blue-200",
  },
  {
    icon: Palette,
    title: "Creative Arts",
    description:
      "Encouraging self-expression and creativity through various artistic mediums, including visual arts, drama, and music.",
    color: "bg-yellow-100 hover:bg-yellow-200",
  },
  {
    icon: Music,
    title: "Physical Education",
    description:
      "Promoting health, teamwork, and motor skills development through diverse physical activities and sports.",
    color: "bg-green-100 hover:bg-green-200",
  },
];

const ProgramsSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section
      ref={ref}
      id="programs"
      className={`bg-gradient-to-tr from-blue-50 to-purple-50 py-16 section-animation ${
        isIntersecting ? "animate" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`mb-12 text-center text-3xl font-bold text-blue-600 sm:text-4xl ${
            isIntersecting ? "animate-fade-in" : ""
          }`}
        >
          Our Comprehensive Programs
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group rounded-xl ${program.color} p-6 shadow-md transition-all duration-300 hover:shadow-xl ${
                isIntersecting ? "animate-scale-in" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:-translate-y-2">
                <program.icon className="mb-4 h-12 w-12 text-blue-500" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                {program.title}
              </h3>
              <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
