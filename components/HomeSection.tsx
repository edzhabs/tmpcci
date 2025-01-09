"use client";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Facebook, Youtube } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const HomeSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section
      ref={ref}
      id="home"
      className={`relative min-h-[calc(100vh-4rem)] overflow-hidden section-animation ${
        isIntersecting ? "animate" : ""
      }`}
    >
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/landing-page/drone-shot.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-blue-900/70"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center text-white max-w-6xl mx-auto px-4">
          <h1
            className={`mb-2 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl leading-tight ${
              isIntersecting ? "animate-fade-in" : ""
            }`}
          >
            <span className="bg-blue-600 bg-opacity-75 px-2 py-1 rounded">
              Welcome to
            </span>
          </h1>
          <div
            className={`mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight ${
              isIntersecting ? "animate-scale-in" : ""
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              Talisay Mind Power
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
              Creativity Center Inc.
            </span>
          </div>
          <p
            className={`mb-8 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto ${
              isIntersecting ? "animate-fade-in" : ""
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm inline-block">
              An Educational Institution Devoted and Dedicated in
            </span>
          </p>
          <div
            className={`mb-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold ${
              isIntersecting ? "animate-fade-in" : ""
            }`}
            style={{ animationDelay: "0.9s" }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
              Transforming Minds, Molding Hearts, and Empowering
            </span>
          </div>
          <div
            className={`flex flex-wrap justify-center gap-4 ${
              isIntersecting ? "animate-fade-in" : ""
            }`}
            style={{ animationDelay: "1.2s" }}
          >
            <Button
              size="lg"
              className="bg-yellow-600 text-white hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() =>
                document
                  .getElementById("contact")!
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/talisaymindpowercreativitycenter",
                  "_blank",
                )
              }
              className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Facebook className="mr-2 h-5 w-5" />
              Facebook
            </Button>
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/@mindpowercreativity",
                  "_blank",
                )
              }
              className="bg-red-600 text-white hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Youtube className="mr-2 h-5 w-5" />
              YouTube
            </Button>
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/Talisay+Mind-Power+Creativity+Center+Incorporated/@10.2452672,123.8137242,1096m/data=!3m2!1e3!4b1!4m6!3m5!1s0x33a99d40e0616983:0x74754faf34421b45!8m2!3d10.2452672!4d123.8162991!16s%2Fg%2F11ckkxt_l1?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D",
                  "_blank",
                )
              }
              className="bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
