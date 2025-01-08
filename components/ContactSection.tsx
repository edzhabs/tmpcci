"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ContactSection = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
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
          Contact Us
        </h2>
        <div className="mx-auto max-w-2xl">
          <div
            className={`rounded-xl bg-white p-8 shadow-lg ${
              isIntersecting ? "animate-scale-in" : ""
            }`}
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <Input id="name" placeholder="Your Name" className="text-lg" />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="text-lg"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  className="min-h-[150px] text-lg"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 text-white hover:bg-blue-700 text-lg py-6"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
