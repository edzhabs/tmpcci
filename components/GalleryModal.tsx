"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/utils/useScrollAnimation";
import ImageModal from "./ImageModal";

const GalleryModal = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const animationRef = useScrollAnimation();

  return (
    <>
      <div ref={animationRef} className="opacity-0">
        {/* This div is used for the scroll animation */}
      </div>
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage || ""}
        alt="Enlarged school activity"
      />
    </>
  );
};

export default GalleryModal;
