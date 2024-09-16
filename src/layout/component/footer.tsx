import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaPhone, FaFax } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="mt-4 w-full bg-primary-light text-primary py-8">
      <div className="w-full my-6 px-4">
        <div className='flex flex-wrap md:justify-center justify-between'>
        {/* Social Media Icons */}
        <div className="flex flex-col items-start space-y-4">
            <h2 className='text-2xl font-bold  text-primary'>Stream Banking</h2>
          <h2 className="text-xl font-bold my-4">Follow Us</h2>
          <div className="flex space-x-4 py-2">
            <FaFacebookF className="text-primary text-xl cursor-pointer" />
            <FaInstagram className="text-primary text-xl  cursor-pointer" />
            <FaYoutube className="text-primary text-xl cursor-pointer" />
            <FaLinkedinIn className="text-primary text-xl cursor-pointer" />
          </div>
        </div>
        {/* Useful Links - Column 2 */}
        <div className='flex flex-col'>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-4">
           <Link href="#benefitshighlight">
      <li className=" mt-2  text-xl">Benefits</li>
    </Link>
    <Link href="#security">
      <li className=" my-4 text-xl">Security</li>
    </Link>
    <Link href="/download">
    <li className="text-xl  my-2 ">Download</li>
    </Link>
          </ul>
        </div>
        
        {/* Office Info */}
        <div className='flex flex-col'>
          <h2 className="text-xl font-bold mb-2">Office</h2>
          <ul className="space-y-2">
            <li className="flex items-start py-2"><RiMapPin2Fill className="mr-2" />StreamBank NEWYORK</li>
            <li className="flex items-center py-2"><MdEmail className="mr-2" /> info@stream-bank.com</li>
            <li className="flex items-start py-2"><FaPhone className="mr-2" /> +974 4443 4140</li>
          </ul>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
