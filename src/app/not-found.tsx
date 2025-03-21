import Hero from '@/ components/HeroSection/hero';
import { hero_data_error } from '@/constants/constants';
import React from 'react';

const NotFound = () => {
  return (
  <div>
    <Hero t1={hero_data_error.t1} t2={hero_data_error.t2} description={hero_data_error.description} src={hero_data_error.src} extra_class="h-[800px] mb-20" buttons={true}  btn_1="Go Back To Home" btn_2="Contact Us"  />
  </div>
)};

export default NotFound;
