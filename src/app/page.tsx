import { ButtonGreen, ButtonGreenBright, ButtonWhite } from '@/ components/Button/button';
import Hero from '@/ components/HeroSection/hero';
import { hero_data_home } from '@/constants/constants';
import Image from 'next/image';

export default function Home() {
  
  return (
    <div className="">
      <main className="min-h-screen">
        
        <Hero t1={hero_data_home.t1} t2={hero_data_home.t2} description={hero_data_home.description} src={hero_data_home.src} extra_class="h-[800px]" />
      </main>
    </div>
  );
}
