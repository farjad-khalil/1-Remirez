import Testimonial from '@/ components/aboutus/testimonials';
import { ButtonGreen, ButtonGreenBright, ButtonWhite } from '@/ components/Button/button';
import { DividerCenter, DividerLeft } from '@/ components/Divider/divider';
import Hero from '@/ components/HeroSection/hero';
import ChooseUs from '@/ components/Home/choose';
import Info from '@/ components/Home/info';
import Offer from '@/ components/Home/offer';
import ServiceCards from '@/ components/Home/services';
import { hero_data_home } from '@/constants/constants';
import Image from 'next/image';

export default function Home() {

  return (
    <div className="">
      <main className="min-h-screen">

        <Hero t1={hero_data_home.t1} t2={hero_data_home.t2} description={hero_data_home.description} src={hero_data_home.src} extra_class="h-[800px]" />
        <DividerLeft t1="Who" t2="We Are" />
        <Info />
        
        <DividerLeft t1="What" t2="We Offer" />
        <Offer />

        <DividerCenter t1="Our" t2="Services" />
        <ServiceCards />

        <DividerLeft t1="Why" t2="Choose Us" />
        <ChooseUs />

        <Testimonial />
      </main>
    </div>
  );
}
