import Link from 'next/link';
import React from 'react';

export const ButtonGreen = ({ text }:any) => {
  return (

    <Link
      href="#"
      className="bg-[#65991d] text-white px-8 py-3 font-medium border-2 border-[#65991d] transition-all duration-300 hover:bg-transparent hover:text-[#65991d]"
    >
      {text}
    </Link>
  )
};

export const ButtonLight = ({ text }:any) => {
  return (

    <Link
      href="#"
      className="bg-white text-[#65991d] px-8 py-3 font-medium border-2 border-[#65991d] transition-all duration-300 hover:bg-[#65991d] hover:text-white"
    >
      {text}
    </Link>
  )
};


