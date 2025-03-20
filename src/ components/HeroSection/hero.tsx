import Image from "next/image";

export default function Hero({t1,t2,description,src}:any) {
    return (
        <div className="relative w-full h-[600px]">
            {/* Background Image */}
            <Image
                src={src} // Now it works
                alt="Hero"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold bg-black bg-opacity-10 text-center">
                <div>
                    <h1 className="text-4xl md:text-7xl font-bold mb-6">
                        {t1} <span className="text-[#94f312]">{t2}</span>
                    </h1>
                    {description}
                </div>
            </div>
        </div>
    );
}
