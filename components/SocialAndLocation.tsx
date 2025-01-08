import { MapPin } from 'lucide-react'

export default function SocialAndLocation() {
  return (
    <section className="bg-blue-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2">
          <MapPin className="h-8 w-8 text-blue-600" />
          <span className="text-lg font-semibold text-blue-800">123 Sunshine Ave, Happytown, ST 12345</span>
        </div>
      </div>
    </section>
  )
}

