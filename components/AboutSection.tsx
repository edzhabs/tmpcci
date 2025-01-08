"use client";
import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const AboutSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section
      ref={ref}
      id="about"
      className={`py-16 bg-gradient-to-br from-blue-50 to-indigo-100 section-animation ${
        isIntersecting ? "animate" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`mb-12 text-center text-4xl font-bold text-blue-600 ${
            isIntersecting ? "animate-fade-in" : ""
          }`}
        >
          About Our School
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div
            className={`order-2 md:order-1 ${
              isIntersecting ? "animate-slide-in-left" : ""
            }`}
          >
            <Image
              src="/placeholder.svg?height=400&width=600&text=Our+Modern+Campus"
              alt="Our Modern Campus"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div
            className={`space-y-6 order-1 md:order-2 ${
              isIntersecting ? "animate-slide-in-right" : ""
            }`}
          >
            <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                Our Mission
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    letter: "T",
                    text: "ransforming minds that today is better than yesterday and tomorrow is better than today.",
                  },
                  {
                    letter: "M",
                    text: "ultiplying leadership through servantship.",
                  },
                  {
                    letter: "P",
                    text: "owering children the opportunity in making significant decisions.",
                  },
                  {
                    letter: "C",
                    text: "ultivating creativity in finding meaning of our existence.",
                  },
                  {
                    letter: "C",
                    text: "ulturing a caring and loving community.",
                  },
                  {
                    letter: "I",
                    text: "nspiring belief to think big and dream big.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-3xl font-bold text-red-500 mr-2 leading-tight">
                      {item.letter}
                    </span>
                    <span className="flex-1 text-gray-700 leading-tight pt-1">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-600 text-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-lg">
                The leading institution in nurturing God-centered leaders for a
                God-centered society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
