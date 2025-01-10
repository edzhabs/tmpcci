import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  alt: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  alt,
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (isOpen) {
      const img = new window.Image();
      img.onload = () => {
        setDimensions({ width: img.width, height: img.height });
      };
      img.src = imageSrc;
    }
  }, [isOpen, imageSrc]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative overflow-hidden rounded-lg"
            style={{
              width: `min(${dimensions.width}px, 90vw)`,
              height: `min(${dimensions.height}px, 90vh)`,
              maxWidth: "90vw",
              maxHeight: "90vh",
              aspectRatio: `${dimensions.width} / ${dimensions.height}`,
            }}
          >
            <Image
              src={imageSrc}
              alt={alt}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
            <button
              onClick={onClose}
              className="absolute right-0 top-0 m-2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
