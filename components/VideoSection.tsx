"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const VideoSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section
      ref={ref}
      id="video"
      className={`py-24 bg-gradient-to-r from-indigo-50 to-blue-50 section-animation ${
        isIntersecting ? "animate" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`mb-12 text-center text-4xl font-bold text-blue-600 sm:text-5xl ${
            isIntersecting ? "animate-fade-in" : ""
          }`}
        >
          Experience TMPCCI
        </h2>
        <div className="mx-auto max-w-4xl">
          <div
            className={`relative aspect-video overflow-hidden rounded-xl shadow-lg ${
              isIntersecting ? "animate-scale-in" : ""
            }`}
          >
            <Image
              src="/placeholder.svg?height=1080&width=1920&text=School+Video+Thumbnail"
              alt="School Video Thumbnail"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition-opacity duration-300 ease-in-out">
              <Button
                size="lg"
                className="rounded-full bg-white p-6 text-blue-600 hover:bg-blue-50"
                onClick={() => alert("Play video")}
              >
                <Play className="h-16 w-16" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
