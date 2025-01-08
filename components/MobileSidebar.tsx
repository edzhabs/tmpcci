"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToSection: (section: string) => void;
  activeSection: string;
}

const sections = [
  "home",
  "about",
  "programs",
  "gallery",
  "video",
  "teachers",
  "contact",
];

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isOpen,
  onClose,
  scrollToSection,
  activeSection,
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  return (
    <motion.div
      ref={sidebarRef}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-y-0 right-0 z-50 w-full sm:w-80 bg-white shadow-lg"
    >
      <div className="flex h-full flex-col p-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-blue-600">Menu</h2>
          <Button
            variant="ghost"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-4">
            {sections.map((section) => (
              <li key={section}>
                <Button
                  variant="ghost"
                  className={`w-full text-left text-lg transition-colors duration-200 ${
                    activeSection === section
                      ? "text-blue-600 bg-blue-100 font-semibold"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                  onClick={() => {
                    scrollToSection(section);
                    onClose();
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} TMPCCI. All rights reserved.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileSidebar;
