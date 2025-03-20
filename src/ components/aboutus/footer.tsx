import { Facebook, Globe, Instagram, LocateIcon, Mail, MapPin, Phone, WebhookIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { footer_text ,footer_contact  } from '@/constants/constants'
export default function Footer() {
    return (
        <footer className="bg-[#535355] text-white pt-12 pb-4">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8 md:px-52 px-10 ">
                    <div className='max-md:text-center'>
                        <div className="flex items-center justify-center mb-4 ">
                            <Image
                                src="/assets/main_logo.svg"
                                alt="M. Ramirez Logo"
                                width={200}
                                height={200}
                                className="mr-2"
                            />
                        </div>
                        <p className="text-sm mb-4 border-b  pb-12">
                            {footer_text}
                        </p> 
                    </div>
                    
                    <div className=''>
                        <h3 className="font-bold mb-4">Our Services</h3>
                        <ul className="space-y-2 text-sm cursor-pointer  border-b  pb-12">
                            <li className='hover:text-gray'>Landscape Design & Installation</li>
                            <li className='hover:text-gray'>Tree, Shrub & Lawn Planting</li>
                            <li className='hover:text-gray'>Weekly Lawn Maintenance</li>
                            <li className='hover:text-gray'>Seasonal Property Maintenance</li>
                            <li className='hover:text-gray'>Lawn & Garden Fertilization</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                                <Phone className="h-4 w-4 mr-2 text-neonGreen" />
                                <Link href="tel:(516) 270-7024">{footer_contact.phone}</Link>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-4 h-4 mr-2 text-neonGreen"/>
                                <Link href="mailto:information@mramirez.com">{footer_contact.mail}</Link>
                            </li>
                            <li className="flex items-center">
                                <Globe className="h-4 w-4 mr-2 text-neonGreen" />
                                <Link href="tel:(516) 270-7024">{footer_contact.url}</Link>
                            </li>
                            <li className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2 text-neonGreen" />
                                <Link href="tel:(516) 270-7024">{footer_contact.location}</Link>
                            </li>
                            <li className="mt-4">Follow Us:</li>
                            <li className="flex space-x-2">
                                <Link href="#" aria-label="Instagram">
                                    <Instagram className="h-5 w-5 text-neonGreen" />
                                </Link>
                                <Link href="#" aria-label="Facebook">
                                    <Facebook className="h-5 w-5 text-neonGreen" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center text-xs border-t  pt-4">COPYRIGHT M.RAMIREZ LANDSCAPING, INC.</div>
            </div>
        </footer>
    )
}
