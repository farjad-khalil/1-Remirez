"use client"

import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { accordion_data } from "@/constants/constants"

export default function ChooseUs() {
  return (
    <section className="bg-neonGreen text-white relative overflow-visible">
      <div className="max-w-7xl mx-auto relative md:pb-5">
        {/* Mobile Layout (stacked) */}
        <div className="block md:hidden">
          <div className="p-6 pb-0">
            <h2 className="text-2xl font-bold mb-2">At Ramirez Landscaping</h2>
            <p className="mb-6">
              we take pride in delivering top-quality landscaping services tailored to your needs. Our expert team
              ensures your outdoor space remains lush, vibrant, and well-maintained throughout the year.
            </p>
          </div>

          <div className="px-6">
            <Accordion type="single" collapsible defaultValue="item-0">
              {accordion_data.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-t border-white/20 py-1">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">{item.title}</AccordionTrigger>
                  <AccordionContent className="text-white/90">{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-4">
            <Image
              src="/assets/home/person-1.png"
              alt="Landscaper with plants"
              width={550}
              height={660}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="hidden md:flex">
          <div className="w-1/2 p-12">
            <h2 className="text-3xl font-bold mb-3">At Ramirez Landscaping</h2>
            <p className="mb-8 text-lg">
              we take pride in delivering top-quality landscaping services tailored to your needs. Our expert team
              ensures your outdoor space remains lush, vibrant, and well-maintained throughout the year.
            </p>

            <Accordion type="single" collapsible defaultValue="item-0">
              {accordion_data.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-t border-white/20 py-1">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">{item.title}</AccordionTrigger>
                  <AccordionContent className="text-white/90">{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="w-1/2 relative overflow-visible">
            <div className="absolute right-0 bottom-4 h-[calc(100%+4rem)] ">
              <Image
                src="/assets/home/person-1.png"
                alt="Landscaper with plants"
                width={660}
                height={770}
                className="h-full object-contain scale-110"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

