import Image from "next/image";
import Link from "next/link";
import {  ButtonLight } from "../Button/button";

const ContactForm = () => {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-center bg-[#f5f8f1] min-h-screen px-8 md:px-24 p-10 gap-6">
            {/* Left - Form Section */}
            <div className="relative h-[650px] bg-[#65991d] p-10 w-full md:w-1/2 text-white px-8 md:px-20 overflow-hidden flex flex-col">
                {/* Leaves Image Positioned at Bottom Right */}
                <div className="absolute bottom-0 -right-20 w-[450px]  ">
                    <Image
                        src="/assets/contact/leaves.png" // Replace with actual path
                        alt="Decorative Leaves"
                        width={550}
                        height={550}
                        className="w-[450px] h-auto"
                    />
                </div>

                <h2 className="md:text-3xl text-xl font-bold mb-4  ">
                    Want a Free Estimate?
                </h2>
                <p className="mb-6 text-center md:text-left">
                    We're here to bring your outdoor vision to life! Whether you need landscape design, tree trimming,
                    sod installation, or seasonal cleanup, our expert team is ready to assist.
                </p>

                <form className="space-y-4 relative z-10 w-full">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-3 px-6 border border-gray-300 placeholder:text-black rounded-sm text-black focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-3 border border-gray-300 placeholder:text-black rounded-sm text-black focus:outline-none"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full p-3 border border-gray-300 placeholder:text-black rounded-sm text-black focus:outline-none"
                    />
                    <textarea
                        placeholder="Enter Message"
                        className="w-full p-3 border border-gray-300 placeholder:text-black rounded-sm text-black focus:outline-none"
                        rows={4}
                    ></textarea>

                    {/* Submit Button */}
                    <div className="py-2 flex justify-end">
                        <ButtonLight text="Contact Us" />
                    </div>
                </form>
            </div>

            {/* Right - Image Section (Hidden on small screens, centered on large) */}
            <div className="w-full   h-[650px] md:w-1/2 flex justify-center md:justify-end max-md:hidden">
                <Image
                    src="/assets/contact/form.png" // Replace with actual path
                    alt="Person Working"
                    width={650}
                    height={550}
                    className="object-cover max-w-full"
                />
            </div>
        </section>

    );
};

export default ContactForm;
