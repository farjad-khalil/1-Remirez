import React from 'react'
import Image from "next/image"
import { our_story_text } from '@/constants/constants'
export default function OurStory() {
    return (
        <div>
            <section className="bg-white py-12">
                <div className=" ">
                    <div className="grid md:grid-cols-2 ">
                        <div className="bg-[#65991d] p-8 text-white py-20  px-16">
                            <h2 className="text-8xl font-bold mb-6">Our Story</h2>


                            <div className="mb-4">

                                <div className="">
                                    <span className="text-4xl font-bold text-white mb-4">{our_story_text.heading}</span>
                                    <span className='text-4xl font-extralight  text-white '>{our_story_text.description}</span>
                                </div>
                            </div>

                        </div>
                        <div>
                            <Image
                                src="/assets/aboutus/our_story.png"
                                alt="Garden Pergola"
                                width={600}
                                height={400}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
