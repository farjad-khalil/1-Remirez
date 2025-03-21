import { home_info } from '@/constants/constants'
import Image from 'next/image'
import React from 'react'
import { ButtonGreen } from '../Button/button'

export default function Info() {
    return (
        <div>
            <section className="bg-white pb-10 mx-14">
                <div className=" ">
                    <div className="grid md:grid-cols-12 ">
                        <div className='col-span-7'>
                            <Image
                                src="/assets/home/who_we_are.png"
                                alt="Garden Pergola"
                                width={600}
                                height={400}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="bg-[#65991d] text-white py-10 px-10 md:px-10 col-span-5 ">

                            <div className="mb-4">

                                <div className="">
                                    <span className="md:text-4xl text-lg font-bold text-white mb-4">{home_info.heading}</span>
                                    <span className='md:text-lg  text-lg montserrat-light  text-white '>{home_info.description}</span>
                                    <div className='mt-10'>
                                        <ButtonGreen text="Read More" />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
