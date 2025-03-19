"use client"
import React from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname()
  return (
    <div className=' text-white'>
      <nav className="hidden md:flex items-center space-x-10 transition-all delay-100 text-xl">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`py-2 transition-all ${pathname === link.path ? "font-bold underline" : ""}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
    </div>
  )
}
