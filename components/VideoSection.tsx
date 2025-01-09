"use client";
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
        <div className="mx-auto max-w-5xl">
          <div
            className={`relative aspect-video overflow-hidden rounded-xl shadow-lg ${
              isIntersecting ? "animate-scale-in" : ""
            }`}
          >
            {isIntersecting && (
              <iframe
                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                  isIntersecting ? "opacity-100" : "opacity-0"
                }`}
                src={
                  isIntersecting
                    ? "https://www.youtube.com/embed/vUOah35zeT4?autoplay=1&mute=1&rel=0"
                    : ""
                }
                title="YouTube video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
