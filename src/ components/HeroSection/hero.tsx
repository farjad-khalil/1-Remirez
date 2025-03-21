"use client"
import Image from "next/image";
import { ButtonGreenBright, ButtonWhite } from "../Button/button";

export default function Hero({ t1, t2, description, src, extra_class, buttons=false,btn_1 , btn_2 }: any) {

    return (
        <div className={`relative w-full h-[600px] ${extra_class} `}>
            {/* Background Image */}
            <Image
                src={src} // Now it works
                alt="Hero"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
            />

            {/* Overlay Text */}
            <div className="absolute md:px-44  inset-0 flex items-center justify-center text-white font-bold bg-black bg-opacity-10 text-center">
                <div>
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 px-10">
                        {t1} <span className="text-[#94f312]">{t2}</span>
                    </h1>
                    {description}
                    {buttons ?
                        <div className="py-20 flex gap-10 justify-center max-md:flex-col items-center">
                            <ButtonWhite text={btn_1} />
                            <ButtonGreenBright text={btn_2} />
                        </div>
                        : <div className="hidden"></div>}

                </div>
            </div>
        </div>
    );
}
