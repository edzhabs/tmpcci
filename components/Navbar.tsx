"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu } from "lucide-react";
import MobileSidebar from "./MobileSidebar";

const sections = [
  "home",
  "about",
  "programs",
  "gallery",
  "video",
  "teachers",
  "contact",
];

const Navbar = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observerRef.current?.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Adjust this value based on your navbar height
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/tmpcci-logo.png"
            alt="TMPCCI Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-blue-600 leading-tight">
              Talisay Mind Power
            </span>
            <span className="text-sm font-medium text-yellow-500 leading-tight">
              Creativity Center Inc.
            </span>
          </div>
        </div>
        <ul className="hidden lg:flex space-x-1">
          {sections.map((section) => (
            <li key={section}>
              <Button
                variant="ghost"
                className={`text-blue-600 hover:text-yellow-500 hover:bg-blue-50 transition-colors duration-200 ${
                  activeSection === section ? "bg-blue-100 font-semibold" : ""
                }`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            </li>
          ))}
        </ul>
        <Button
          variant="outline"
          className="lg:hidden text-blue-600 border-blue-600 hover:bg-blue-50"
          onClick={() => setIsMobileSidebarOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </nav>
      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />
    </header>
  );
};

export default Navbar;
