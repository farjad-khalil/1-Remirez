import React from 'react'

export default function OurApproach() {
  return (
    <div>
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
    </div>
  )
}
