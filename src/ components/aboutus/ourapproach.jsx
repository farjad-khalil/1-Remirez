import React from 'react'
import Image from "next/image"

export default function OurApproach() {
    return (
        <div>
            <section className="bg-softWhite pb-12 ">
                <div className=" mx-auto ">
                    <div className="flex items-center w-full bg-white pt-12 px-8">
                        <div className="flex-1 h-[3px] bg-[#65991d]"></div>
                        <h2 className="px-4 text-6xl font-semibold">
                            <span className="text-black">Our</span>{" "}
                            <span className="text-[#65991d]">Approach</span>
                        </h2>
                        <div className="flex-1 h-[3px] bg-[#65991d]"></div>
                    </div>





                    <div className="grid md:grid-cols-12 gap-8 mt-8 p-5 px-16">
                        <div className="bg-white p-6 rounded-sm shadow-sm flex justify-around col-span-7 border border-solid border-primary ">
                            <Image
                                src="/assets/aboutus/our_team.png"
                                alt="Team Members"
                                width={338}
                                height={279}
                            />

                            <div className="space-y-6 flex flex-col justify-between">
                                <div className="flex items-center justify-evenly gap-3 bg-lightGray py-4 px-10 rounded">
                                    <span className="inline-block  rounded-full"><Image
                                        src="/assets/aboutus/frame.svg"
                                        alt="Team Members"
                                        width={50}
                                        height={50}
                                    /> </span>
                                    <span className="font-bold">Customer-Centric Service</span>
                                </div>

                                <div className="flex items-center justify-evenly gap-3 bg-lightGray py-4 px-10 rounded">
                                    <span className="inline-block  rounded-full"><Image
                                        src="/assets/aboutus/frame-1.svg"
                                        alt="Team Members"
                                        width={50}
                                        height={50}
                                    /> </span>
                                    <span className="font-bold">Commitment to Excellence</span>
                                </div>

                                <div className="flex items-center justify-evenly gap-3 bg-lightGray py-4 px-10 rounded">
                                    <span className="inline-block  rounded-full"><Image
                                        src="/assets/aboutus/frame-2.svg"
                                        alt="Team Members"
                                        width={50}
                                        height={50}
                                    /> </span>
                                    <span className="font-bold">Long-Term Trust & Care</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#65991d] p-8 text-white col-span-5 flex items-center">
                            <h3 className="mb-4 text-2xl montserrat-light ">
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
