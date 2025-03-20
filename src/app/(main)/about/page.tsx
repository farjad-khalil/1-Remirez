import React from 'react';
import OurStory from '@/ components/aboutus/ourstory';
import OurApproach from '@/ components/aboutus/ourapproach'
import Testimonials from '@/ components/aboutus/testimonials';
import Contact from '@/ components/aboutus/contact';
const AboutUs = () => {
  return (
    <div className="">
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
              About <span className="text-[#94f312]">Us</span>
            </h1>
            <p className="md:text-2xl md:mx-44 text-lg mx-10">
              What sets us apart? Our commitment to <span className="text-[#94f312]">excellence</span>,{" "}
              <span className="text-[#94f312]">attention to detail</span>, and{" "}
              <span className="text-[#94f312]">customer satisfaction</span>. We treat every{" "}
              <span className="text-[#94f312]">lawn and garden</span> as if it were our own, ensuring the highest level
              of care and professionalism. Whether you're looking to{" "}
              <span className="text-[#94f312]">refresh your outdoor space</span> or need ongoing maintenance, our team
              is here to bring your vision to life.
            </p>
          </div>
        </div>
      </div>
      <OurStory />
      <OurApproach />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default AboutUs;
