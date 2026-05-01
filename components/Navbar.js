"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Services', href: '#services' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Contact Us', href: '#contact-us' },
    { name: 'Careers', href: '#careers' },
    { name: 'Sub-Contracts', href: '#careers' },
  ];

  return (
    <nav className="bg-brand-nav text-white py-4 sticky top-0 z-50 border-b border-white/5">
      {/* 
         THE FIX: Use 'container mx-auto px-6' 
         This matches the Hero section's layout perfectly.
      */}
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="#home" className="flex items-center">
            <Image 
              src="/falcon-logo.png" 
              alt="Falcon Security Logo"
              width={200} 
              height={80}
              // Removed origin-left to keep the logo stable within the container
              className="h-10 md:h-14 w-auto object-contain scale-110 md:scale-125"
              priority 
            />
          </Link>
          <span className="text-lg md:text-xl font-black tracking-tighter uppercase hidden sm:block">
            Falcon Security Ltd
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 text-sm font-medium uppercase tracking-wide">
          {navLinks.map((link, i) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`transition-colors duration-300 ${
                i === 0 ? "text-brand-red font-bold" : "hover:text-brand-red"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <div className="lg:hidden text-brand-red">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 outline-none">
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`
        lg:hidden absolute top-full left-0 w-full bg-brand-nav backdrop-blur-xl border-b border-white/5 transition-all duration-300 ease-in-out overflow-hidden
        ${isOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0 py-0"}
      `}>
        <div className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-sm font-bold uppercase tracking-widest hover:text-brand-red transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}