"use client"
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Image from "next/image"
import Link from "next/link"
import { Phone, Instagram, Facebook, PhoneCall } from "lucide-react"
import { usePathname } from "next/navigation";
import Navbar from '@/ components/Navbar/navbar';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">

      <body className='flex flex-col min-h-screen '>

        <div className="bg-white py-1 px-16 flex justify-end items-center text-sm ">
          <div className='text-[#65991d] flex flex-row text-2xl items-center'>
            <span className="mr-2 montserrat-light ">Call Us: </span><PhoneCall />
            <Link href="tel:(516) 270-7024" className="text-[#65991d] font-bold">
              (516) 270-7024
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <header className="bg-[#65991d] text-white">
          <div className="px-16 py-7 flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="/assets/main_logo.svg"
                alt="M. Ramirez Logo"
                width={250}
                height={250}
                className="mr-2 text"
              />
            </div>
            <Navbar />
            <div className="flex items-center space-x-8">
              <Link href="#" aria-label="Instagram">
                <Instagram size={35} strokeWidth={1.5} className=" text-white " />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook size={35} strokeWidth={0.75} className=" text-white fill-white" />
              </Link>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
