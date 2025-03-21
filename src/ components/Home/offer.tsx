import Image from "next/image"
import { offer_data, services_heading } from "@/constants/constants"
export default function Offer() {
  

  return (
    <section className=" mx-14 pb-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Heading and Plant Image */}
        <div className="space-y-8">
          <div>
            <h2 className="md:text-4xl text-2xl font-bold text-neutral-600 mb-4 leading-tight">
              {services_heading.h1}
            </h2>
            <p className="text-2xl  text-neonGreen">
              {services_heading.desc}
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <Image
              src="/assets/home/plant.png"
              alt="Decorative plant arrangement with rocks"
              width={500}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Right Column - Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {offer_data.map((service, index) => (
            <div key={index} className="bg-neutral-100 overflow-hidden rounded-sm pb-2">
              <div className="h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-neonGreen mb-2">{service.title}</h3>
                <p className="text-gray-700 max-md:text-lg font-medium">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

