"use client";
import { useState } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const galleryImages = [
  "/placeholder.svg?height=300&width=400&text=School+Activity+1",
  "/placeholder.svg?height=300&width=400&text=School+Activity+2",
  "/placeholder.svg?height=300&width=400&text=School+Activity+3",
  "/placeholder.svg?height=300&width=400&text=School+Activity+4",
  "/placeholder.svg?height=300&width=400&text=School+Activity+5",
  "/placeholder.svg?height=300&width=400&text=School+Activity+6",
  "/placeholder.svg?height=300&width=400&text=School+Activity+7",
  "/placeholder.svg?height=300&width=400&text=School+Activity+8",
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <section
      ref={ref}
      id="gallery"
      className={`py-16 bg-gradient-to-bl from-green-50 to-teal-50 section-animation ${
        isIntersecting ? "animate" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`mb-12 text-center text-3xl font-bold text-blue-600 sm:text-4xl ${
            isIntersecting ? "animate-fade-in" : ""
          }`}
        >
          Life at TMPCCI
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl ${
                isIntersecting ? "animate-scale-in" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`School Activity ${index + 1}`}
                width={400}
                height={300}
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage || ""}
        alt="Enlarged school activity"
      />
    </section>
  );
}
