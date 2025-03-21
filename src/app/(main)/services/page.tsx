import { ButtonGreen } from '@/ components/Button/button';
import { DividerLeft } from '@/ components/Divider/divider';
import Hero from '@/ components/HeroSection/hero';
import Sections from '@/ components/Services/section';
import { hero_data_services } from '@/constants/constants';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { sections } from '@/constants/constants';
import Contact from '@/ components/aboutus/contact';

const Services = () => {
  console.log(sections);

  return (

    <div>
      <Hero t1={hero_data_services.t1} t2={hero_data_services.t2} description={hero_data_services.description} src={hero_data_services.src} />
      <DividerLeft t1={"See"} t2={"How We Help"} />
      {sections.map((sec, i) => (
        <div key={i}>

          <Sections index={i} title={sec.title} h1={sec.h1} h2={sec.h2} h3={sec.h3} desc_1={sec.desc_1} desc_2={sec.desc_2} desc_3={sec.desc_3} img={sec.img} icon={sec.icon} />
        </div>
      ))}
      <Contact />
    </div>
  )
};

export default Services;
