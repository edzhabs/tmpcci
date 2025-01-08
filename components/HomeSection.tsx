"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const HomeSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section
      ref={ref}
      id="home"
      className={`relative min-h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-b from-blue-50 to-green-50 section-animation ${
        isIntersecting ? "animate" : ""
      }`}
    >
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=600&width=1200&text=Happy+Children+Learning"
          alt="Happy Children Learning"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1
            className={`mb-6 text-4xl font-bold sm:text-5xl md:text-6xl leading-tight ${
              isIntersecting ? "animate-fade-in" : ""
            }`}
          >
            <span className="bg-blue-600 bg-opacity-75 px-2 py-1 rounded">
              Welcome to TMPCCI
            </span>
          </h1>
          <p
            className={`mb-4 text-xl sm:text-2xl font-semibold ${
              isIntersecting ? "animate-fade-in" : ""
            }`}
          >
            <span className="bg-green-600 bg-opacity-75 px-2 py-1 rounded">
              Talisay Mind Power Creativity Center Inc.
            </span>
          </p>
          <p
            className={`mb-8 text-lg sm:text-xl ${
              isIntersecting ? "animate-fade-in" : ""
            }`}
          >
            <span className="bg-yellow-500 bg-opacity-75 text-blue-900 px-2 py-1 rounded">
              Nurturing Minds, Inspiring Futures
            </span>
          </p>
          <div
            className={`flex flex-wrap justify-center gap-4 ${
              isIntersecting ? "animate-fade-in" : ""
            }`}
          >
            <Button
              size="lg"
              className="bg-yellow-500 text-blue-800 hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule a Visit
            </Button>
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://maps.google.com/?q=Talisay+City,+Cebu",
                  "_blank",
                )
              }
              className="bg-green-500 text-white hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
