import React from 'react'

export default function Hero({t1,t2,description}:any) {
    return (
        <div className="relative w-full h-[600px] ">
            {/* Background Image */}
            <img
                src="/assets/aboutus/hero_image.png"
                alt="Hero"
                className="w-full h-full object-cover"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold bg-black bg-opacity-10 text-center">
                <div className="">
                    <h1 className="text-4xl md:text-7xl font-bold mb-6">
                        {t1} <span className="text-[#94f312]">{t2}</span>
                    </h1>
                    {description}
                </div>
            </div>
        </div>
    )
}
