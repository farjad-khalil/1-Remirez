"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { testimonialsData } from "@/constants/constants";
import { Quote } from "lucide-react";
import { DividerLeft } from "../Divider/divider";

const Testimonial = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    const nextTestimonials = () => {
        if (startIndex + visibleCards < testimonialsData.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const prevTestimonials = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };
    useEffect(() => {
        const updateVisibleCards = () => {
            if (window.innerWidth < 768) {
                setVisibleCards(1); // Show 1 card on screens < md (768px)
            } else {
                setVisibleCards(3); // Default to 3 cards on larger screens
            }
        };

        updateVisibleCards(); // Initial check
        window.addEventListener("resize", updateVisibleCards); // Listen for resize

        return () => window.removeEventListener("resize", updateVisibleCards); // Cleanup
    }, []);
    return (
        <div className="p-10 flex flex-col items-center">
            <DividerLeft t1={"What"} t2={"Our Customer Say"} />
            {/* Testimonial Cards */}
            <div className="flex justify-center gap-6 overflow-hidden cursor-pointer">
                {testimonialsData.slice(startIndex, startIndex + visibleCards).map((testimonial, index) => (
                    <div
                        key={index}
                        className={`p-6 relative w-[450px] rounded-lg shadow-lg transition-all duration-300 bg-[#f5f5f5] hover:bg-neonGreen group`}
                    >
                        <div className="flex flex-col items-center mb-4">
                            {/* Profile Image */}
                            <div className="w-28 h-28 rounded-full overflow-hidden mb-2 border-2 border-white">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Name */}
                            <h4 className="font-bold text-2xl text-black group-hover:text-white">
                                {testimonial.name}
                            </h4>
                            {/* Stars */}
                            <div className="flex text-[#f1ac18] text-2xl">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                        </div>

                        {/* Review Title */}
                        <p className="text-center font-bold text-neonGreen group-hover:text-white mb-2">
                            {testimonial.title}
                        </p>

                        {/* Review Text */}
                        <p className="text-lg text-center text-gray-700 group-hover:text-white mb-4">
                            {testimonial.review}
                        </p>

                        {/* Footer */}
                        <div className="flex mt-10 justify-between items-start">
                            <p className="text-center text-lg font-bold text-black group-hover:text-white">
                                {testimonial.designation}
                            </p>
                            <div className="text-8xl text-neonGreen  group-hover:text-white"><Quote fill='#65991d' /></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex mt-6 gap-4">
                <button
                    onClick={prevTestimonials}
                    disabled={startIndex === 0}
                    className="px-4 py-2 bg-gray-300 text-neonGreen rounded disabled:opacity-50"
                >
                    ◀ Prev
                </button>
                <button
                    onClick={nextTestimonials}
                    disabled={startIndex + visibleCards >= testimonialsData.length}
                    className="px-4 py-2 bg-gray-300 text-neonGreen rounded disabled:opacity-50"
                >
                    Next ▶
                </button>
            </div>
        </div>
    );
};

export default Testimonial;
