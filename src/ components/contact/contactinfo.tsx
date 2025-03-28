import { Phone } from "lucide-react";
import Image from "next/image";

const ContactInfo = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center bg-[#f5f8f1] p-10 md:px-24 gap-6">
            {/* Left - Call Us Section */}
            <div className="bg-white shadow-md p-8 w-full  md:h-64 md:w-1/2 flex max-md:flex-col relative  justify-center rounded-sm">
                <div className="flex flex-col">

                    <h2 className="text-4xl font-bold text-[#65991d] mb-2">Call Us Today?</h2>
                    <p className="text-gray-700 mb-4">
                        Our team is available <span className="text-[#65991d] font-bold">24/7</span> to assist you with all your
                        landscaping and lawn care needs. Whether you require immediate service, have questions, or need expert advice,
                    </p>

                    {/* Phone Number */}
                    <div className="flex items-center text-[#65991d] text-3xl font-lighttext-xl">
                        <Phone /> {/* Phone Icon */}
                        <p>(516) 270-7024</p>
                    </div>
                </div>
                <div className="relative bottom-0 w-[350px] md:w-[500px]">
                    <Image
                        src="/assets/contact/plant.png"
                        alt="Plant"
                        width={500}
                        height={500}
                        className="w-full h-full"
                    />
                </div>
            </div>


            {/* Right - Working Hours */}
            <div className="bg-[#65991d] text-white h-96 md:h-64 p-8 w-full md:w-1/2 rounded-sm relative overflow-hidden">
                {/* Leaves Background */}
                <div className="absolute bottom-0  md:-right-20 w-[350px] md:w-[350px] ">
                    <Image
                        src="/assets/contact/leaves.png"
                        alt="Leaves"
                        width={200}
                        height={200}
                        className="w-full h-auto"
                    />
                </div>

                <h2 className="text-2xl font-bold mb-4">Working Hours.</h2>
                <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                <p>Saturday: 10:00 AM – 4:00 PM</p>
                <p>Sunday: <span className="font-bold">Closed</span></p>
            </div>
        </section>
    );
};

export default ContactInfo;
