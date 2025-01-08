import { Facebook, Phone, Mail, MapPin, YoutubeIcon as YouTube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-blue-600 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>123 School Street, Talisay City, Cebu</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>info@tmpcci.edu.ph</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>+63 123 456 7890</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <Facebook className="h-8 w-8" />
              </a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <YouTube className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-400 text-center">
          <p>&copy; {new Date().getFullYear()} Talisay Mind Power Creativity Center Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

