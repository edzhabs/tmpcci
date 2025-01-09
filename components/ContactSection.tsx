"use client";
import Image from "next/image";
import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import ImageModal from "./ImageModal";

const bannerImage = {
  src: "/images/landing-page/banner.jpg",
  alt: "Talisay Mind Power Creativity Center Incorporated (TMPCCI) banner image",
};

const ContactSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        ref={ref}
        id="contact"
        className={`py-24 bg-gradient-to-b from-cyan-50 to-blue-50 section-animation ${
          isIntersecting ? "animate" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <h2
            className={`mb-12 text-center text-4xl font-bold text-blue-600 sm:text-5xl ${
              isIntersecting ? "animate-fade-in" : ""
            }`}
          >
            Join Our Community
          </h2>
          <div
            className={`mx-auto max-w-5xl ${isIntersecting ? "animate-scale-in" : ""}`}
          >
            <div
              className="relative aspect-[20/10] rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => setIsModalOpen(true)}
            >
              <Image
                src={bannerImage.src}
                alt={bannerImage.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={bannerImage.src}
        alt={bannerImage.alt}
      />
    </>
  );
};

export default ContactSection;
