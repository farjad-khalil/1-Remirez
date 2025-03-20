import { Link } from 'lucide-react'
import React from 'react'

export default function Contact() {
  return (
    <div>
      <section className="relative py-16 text-white">
          <div
            className="absolute inset-0 bg-black opacity-50"
            style={{
              backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
            }}
          ></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Elevate Your <span className="text-[#94f312]">Green Space!</span>
            </h2>
            <p className="max-w-2xl mx-auto mb-8">
              Transform your garden and lawn into a vibrant, well-maintained haven. From expert landscaping to seasonal
              enhancements, we bring beauty and care to every corner of your outdoor environment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="#" className="bg-white text-black px-8 py-3 font-medium">
                Contact Us
              </Link>
              <Link href="#" className="bg-[#94f312] text-black px-8 py-3 font-medium">
                Call Us
              </Link>
            </div>
          </div>
        </section>
    </div>
  )
}
