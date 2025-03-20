import Image from "next/image"
import { Phone, Instagram, Facebook } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Contact Bar */}
      <div className="bg-white py-1 px-4 flex justify-end items-center text-sm">
        <span className="mr-2">Call Us:</span>
        <Link href="tel:(516) 270-7024" className="text-[#65991d] font-medium">
          (516) 270-7024
        </Link>
      </div>

      {/* Navigation */}
      <header className="bg-[#65991d] text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="M. Ramirez Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg">M. Ramirez</span>
              <span className="text-xs uppercase tracking-wider">LANDSCAPING, INC.</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="hover:underline py-2">
              Home
            </Link>
            <Link href="#" className="hover:underline py-2 font-semibold bg-[#75a92d] px-3 rounded">
              About Us
            </Link>
            <Link href="#" className="hover:underline py-2">
              Services
            </Link>
            <Link href="#" className="hover:underline py-2">
              Gallery
            </Link>
            <Link href="#" className="hover:underline py-2">
              Contact Us
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-white" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-white" />
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] bg-gray-900 text-white flex items-center">
          <div
            className="absolute inset-0 bg-black opacity-40 z-10"
            style={{
              backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="container mx-auto px-4 relative z-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-[#94f312]">Us</span>
            </h1>
            <p className="max-w-3xl text-lg">
              What sets us apart? Our commitment to <span className="text-[#94f312]">excellence</span>,{" "}
              <span className="text-[#94f312]">attention to detail</span>, and{" "}
              <span className="text-[#94f312]">customer satisfaction</span>. We treat every{" "}
              <span className="text-[#94f312]">lawn and garden</span> as if it were our own, ensuring the highest level
              of care and professionalism. Whether you're looking to{" "}
              <span className="text-[#94f312]">refresh your outdoor space</span> or need ongoing maintenance, our team
              is here to bring your vision to life.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#65991d] p-8 text-white">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <h3 className="text-xl font-semibold mb-2">M. Ramirez Landscaping Inc.,</h3>
                <p className="mb-4">
                  has its beginnings ten years ago. We were founded by owner, Mauricio Ramirez and growing rapidly each
                  year with more employees, trucks and more services for our clients.
                </p>
                <p>
                  You can find our trucks mostly in the Garden City, Long Island area servicing gorgeous homes and
                  gardens. We only offer the best in service for all our customers.
                </p>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Garden Pergola"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="bg-[#f8fbf5] py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl font-bold mb-8">
              <span className="inline-block border-b border-[#65991d] pb-2 pr-4">Our</span>
              <span className="text-[#65991d] inline-block border-b border-[#65991d] pb-2 pl-4">Approach</span>
              <span className="inline-block border-b border-[#65991d] pb-2 pl-4"></span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-sm shadow-sm">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Team Members"
                  width={500}
                  height={300}
                  className="w-full mb-6"
                />

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-[#f5f5f5] p-2 rounded-full mr-4">
                      <span className="inline-block w-6 h-6 bg-[#f1f1f1] rounded-full"></span>
                    </div>
                    <span className="font-medium">Customer-Centric Service</span>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-[#f5f5f5] p-2 rounded-full mr-4">
                      <span className="inline-block w-6 h-6 bg-[#f1f1f1] rounded-full"></span>
                    </div>
                    <span className="font-medium">Commitment to Excellence</span>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-[#f5f5f5] p-2 rounded-full mr-4">
                      <span className="inline-block w-6 h-6 bg-[#f1f1f1] rounded-full"></span>
                    </div>
                    <span className="font-medium">Long-Term Trust & Care</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#65991d] p-8 text-white">
                <h3 className="mb-4">
                  The <span className="font-bold">testimonies</span> of our customers are our largest asset. From the
                  beginning we've been so very grateful to all our loyal customers. Here we promise to continue our
                  legacy by bringing you superb, outstanding service and care for your home garden and lawn.
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-8">
              <span className="font-medium">What</span>
              <span className="text-[#65991d] font-bold ml-2">Our Customer Say</span>
              <span className="block w-full h-px bg-[#dddddd] mt-2"></span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {/* Testimonial 1 */}
              <div className="bg-[#f5f5f5] p-6 relative">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-white">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Customer"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold">Brook</h4>
                  <div className="flex text-[#f1ac18]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>

                <p className="text-center font-bold text-[#65991d] mb-2">Best landscaping service in town!</p>
                <p className="text-sm text-center mb-4">
                  From soil installation to seasonal cleanup, they handle everything with great attention to detail. My
                  lawn has never looked better, and I couldn't be happier with the results.
                </p>
                <p className="text-center text-sm font-medium">Happy Homeowner</p>
                <div className="absolute right-4 bottom-4 text-[#65991d] text-4xl">"</div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-[#65991d] p-6 relative text-white">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-white">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Customer"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold">James R</h4>
                  <div className="flex text-[#f1ac18]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>

                <p className="text-center font-bold mb-2">Absolutely transformed my backyard!</p>
                <p className="text-sm text-center mb-4">
                  The team did an amazing job designing and implementing my new patio. The plants and greenery are
                  perfectly placed, and my yard looks stunning! Highly recommend their services!
                </p>
                <p className="text-center text-sm font-medium">Happy Homeowner</p>
                <div className="absolute right-4 bottom-4 text-white text-4xl">"</div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-[#f5f5f5] p-6 relative">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-white">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Customer"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold">Brook</h4>
                  <div className="flex text-[#f1ac18]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>

                <p className="text-center font-bold text-[#65991d] mb-2">Best landscaping service in town!</p>
                <p className="text-sm text-center mb-4">
                  From soil installation to seasonal cleanup, they handle everything with great attention to detail. My
                  lawn has never looked better, and I couldn't be happier with the results.
                </p>
                <p className="text-center text-sm font-medium">Happy Homeowner</p>
                <div className="absolute right-4 bottom-4 text-[#65991d] text-4xl">"</div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#dddddd]"></span>
              <span className="w-2 h-2 rounded-full bg-[#65991d]"></span>
              <span className="w-2 h-2 rounded-full bg-[#dddddd]"></span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
      </main>

      {/* Footer */}
      <footer className="bg-[#535355] text-white pt-12 pb-4">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="M. Ramirez Logo"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                <div className="flex flex-col">
                  <span className="font-bold">M. Ramirez</span>
                  <span className="text-xs uppercase tracking-wider">LANDSCAPING, INC.</span>
                </div>
              </div>
              <p className="text-sm mb-4">
                Serving Long Island for over 10 years, providing high-quality professional landscaping services. We take
                pride in our work and strive for 100% customer satisfaction with every project we complete.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm">
                <li>Landscape Design & Installation</li>
                <li>Tree, Shrub & Lawn Planting</li>
                <li>Weekly Lawn Maintenance</li>
                <li>Seasonal Property Maintenance</li>
                <li>Lawn & Garden Fertilization</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <Link href="tel:(516) 270-7024">(516) 270-7024</Link>
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 mr-2">@</span>
                  <Link href="mailto:information@mramirez.com">information@mramirez.com</Link>
                </li>
                <li className="mt-4">Follow Us:</li>
                <li className="flex space-x-2">
                  <Link href="#" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href="#" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center text-xs border-t border-gray-600 pt-4">COPYRIGHT M.RAMIREZ LANDSCAPING, INC.</div>
        </div>
      </footer>
    </div>
  )
}

