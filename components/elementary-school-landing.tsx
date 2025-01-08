import Image from "next/image"
import { Book, Music, Palette, Rocket, Sun } from 'lucide-react'

export default function ElementarySchoolLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-green-200">
      <header className="bg-yellow-400 p-4 shadow-md">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sun className="h-8 w-8 text-red-500" />
            <span className="text-2xl font-bold text-blue-600">Sunshine Elementary</span>
          </div>
          <ul className="flex space-x-4 text-lg font-medium">
            <li><a href="#home" className="text-blue-600 hover:text-blue-800">Home</a></li>
            <li><a href="#about" className="text-blue-600 hover:text-blue-800">About</a></li>
            <li><a href="#programs" className="text-blue-600 hover:text-blue-800">Programs</a></li>
            <li><a href="#contact" className="text-blue-600 hover:text-blue-800">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="container mx-auto mt-8 px-4">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <div className="flex flex-col items-center lg:flex-row">
              <div className="lg:w-1/2">
                <h1 className="mb-4 text-4xl font-bold text-purple-600">Welcome to Sunshine Elementary!</h1>
                <p className="mb-6 text-xl text-gray-600">Where learning is fun and adventures never end!</p>
                <button className="rounded-full bg-green-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-green-600">
                  Start Your Journey
                </button>
              </div>
              <div className="mt-6 lg:mt-0 lg:w-1/2">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Happy children learning"
                  width={400}
                  height={300}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="container mx-auto mt-16 px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-purple-600">Our Exciting Programs</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Book, title: "Reading Adventures", color: "bg-red-400" },
              { icon: Rocket, title: "Math Explorers", color: "bg-blue-400" },
              { icon: Palette, title: "Art & Craft", color: "bg-yellow-400" },
              { icon: Music, title: "Music & Dance", color: "bg-green-400" },
            ].map((program, index) => (
              <div key={index} className={`rounded-2xl ${program.color} p-6 text-center shadow-md`}>
                <program.icon className="mx-auto mb-4 h-12 w-12 text-white" />
                <h3 className="text-xl font-semibold text-white">{program.title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="container mx-auto mt-16 px-4">
          <div className="rounded-3xl bg-orange-100 p-8 shadow-lg">
            <h2 className="mb-4 text-center text-3xl font-bold text-purple-600">About Our School</h2>
            <p className="text-center text-lg text-gray-700">
              Sunshine Elementary is a place where curiosity is nurtured, friendships are formed, and every child's
              potential is celebrated. Our dedicated teachers and staff create a warm, inclusive environment where
              learning is an exciting adventure.
            </p>
          </div>
        </section>

        <section id="contact" className="container mx-auto mt-16 mb-8 px-4">
          <div className="rounded-3xl bg-purple-100 p-8 shadow-lg">
            <h2 className="mb-4 text-center text-3xl font-bold text-purple-600">Contact Us</h2>
            <form className="mx-auto max-w-md">
              <div className="mb-4">
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-full border border-gray-300 px-4 py-2 focus:border-purple-500 focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-full border border-gray-300 px-4 py-2 focus:border-purple-500 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-2xl border border-gray-300 px-4 py-2 focus:border-purple-500 focus:outline-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-purple-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-purple-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-yellow-400 p-4 text-center">
        <p className="text-blue-600">&copy; 2023 Sunshine Elementary. All rights reserved.</p>
      </footer>
    </div>
  )
}

