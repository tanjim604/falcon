"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Smooth Scroll Helper Function
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    if (elem) {
      // Offset for the fixed navbar height (approx 80px-100px)
      const offset = 90; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elemRect = elem.getBoundingClientRect().top;
      const elemPosition = elemRect - bodyRect;
      const offsetPosition = elemPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsOpen(false); 
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Services', href: '#services' },
    { name: 'About Us', href: '#why-us' },
    { name: 'Sub-Contracts', href: '#subcontract' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact Us', href: '#contact-us' },
    
    
  ];

  return (
    <>
      {/* CSS for global smooth scroll backup */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="h-28 md:h-24 w-full bg-brand-nav" />

      <nav 
        className={`
          fixed top-0 left-0 w-full bg-brand-nav text-white py-4 z-[100] border-b border-white/5 shadow-lg transition-transform duration-500 ease-in-out
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="container mx-auto px-2 md:px-6 flex items-center justify-between">
          
          <div className="flex items-center gap-3 shrink-0">
            <Link 
              href="#home" 
              onClick={(e) => handleSmoothScroll(e, '#home')} 
              className="flex items-center"
            >
              <Image 
                src="/falcon-logo.png" 
                alt="Falcon Security Logo"
                width={300} 
                height={120}
                className="h-20 md:h-14 w-auto object-contain scale-150 md:scale-125 origin-left -ml-4 md:ml-0"
                priority 
              />
            </Link>
            <span className="text-lg md:text-xl font-black tracking-tighter uppercase hidden sm:block">
              Falcon Security Ltd
            </span>
          </div>
          
          {/* Desktop Navigation with Smooth Scroll */}
          <div className="hidden lg:flex gap-8 text-sm font-medium uppercase tracking-wide">
            {navLinks.map((link, i) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`transition-all duration-300 relative group ${
                  i === 0 ? "text-[#e63928] font-bold" : "hover:text-[#e63928]"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e63928] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="lg:hidden text-[#e63928]">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 outline-none">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown with Smooth Scroll */}
        <div className={`
          lg:hidden absolute top-full left-0 w-full bg-brand-nav backdrop-blur-xl border-b border-white/5 transition-all duration-500 ease-in-out overflow-hidden
          ${isOpen ? "max-h-96 opacity-100 py-8 shadow-2xl" : "max-h-0 opacity-0 py-0"}
        `}>
          <div className="flex flex-col items-center gap-6 px-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleSmoothScroll(e, link.href)} 
                className="text-lg font-bold uppercase tracking-widest hover:text-[#e63928] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}