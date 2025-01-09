import {
  Facebook,
  Phone,
  Mail,
  MapPin,
  Youtube,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-6 w-6 mr-2 flex-shrink-0 text-blue-400" />
                <a
                  href="https://www.google.com/maps/place/Talisay+Mind-Power+Creativity+Center+Incorporated/@10.2452672,123.8137242,1096m/data=!3m2!1e3!4b1!4m6!3m5!1s0x33a99d40e0616983:0x74754faf34421b45!8m2!3d10.2452672!4d123.8162991!16s%2Fg%2F11ckkxt_l1?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="hover:text-white transition-colors duration-300"
                >
                  Z1-055 Sitio Cabutoy, Pooc, Talisay, Philippines
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-6 w-6 mr-2 flex-shrink-0 text-blue-400" />
                <a
                  href="mailto:tmpcciteachers@gmail.com?subject=TMPCCI%20Inquiry"
                  className="hover:text-white transition-colors duration-300"
                >
                  tmpcciteachers@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-6 w-6 mr-2 flex-shrink-0 text-blue-400" />
                <a
                  href="tel:0322719651"
                  className="hover:text-white transition-colors duration-300"
                >
                  (032) 272-9651
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/talisaymindpowercreativitycenter"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Facebook className="h-8 w-8" />
              </a>
              <a
                href="https://www.youtube.com/@mindpowercreativity"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Youtube className="h-8 w-8" />
              </a>
            </div>
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-white mb-2">
                School Hours
              </h4>
              <p>Monday - Friday: 7:30 AM - 4:30 PM</p>
              <p>Saturday: 8:00 AM - 12:00 PM</p>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="flex items-center hover:text-white transition-colors duration-300"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Teachers Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} Talisay Mind Power Creativity
            Center Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
