import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent Font Awesome from adding its own CSS since we did it above
config.autoAddCss = false;

export default function Footer() {
  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: faFacebook, 
      href: 'https://www.facebook.com/share/18gHd6mU1G/?mibextid=wwXIfr' 
    },
    { 
      name: 'Instagram', 
      icon: faInstagram, 
      href: 'https://www.instagram.com/falcon.security26?igsh=eDB1eGZmMTgxbmY3&utm_source=qr' 
    },
    { 
      name: 'WhatsApp', 
      icon: faWhatsapp, 
      href: 'https://wa.me/17789107666' 
    },
  ];

  return (
    <footer className="bg-[#111111] pt-20 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[#e63928]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative w-48 h-24 md:w-64 md:h-32 mb-6">
            <Image 
              src="/falcon-logo.png" 
              alt="Falcon Security Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Social Icons Group */}
          <div className="flex items-center gap-6">
            <div className="h-px w-12 bg-white/10 hidden sm:block" />
            <div className="flex gap-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#e63928] transform hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-xl" />
                </a>
              ))}
            </div>
            <div className="h-px w-12 bg-white/10 hidden sm:block" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em] mb-12 font-bold">
          <Link href="#home" className="hover:text-white transition-colors">Home</Link>
          <Link href="#services" className="hover:text-white transition-colors">Services</Link>
          <Link href="#why-us" className="hover:text-white transition-colors">About</Link>
          <Link href="#careers" className="hover:text-white transition-colors">Careers</Link>
          <Link href="#contact-us" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex max-w-md mx-auto bg-zinc-900/50 rounded-xl border border-white/10 overflow-hidden shadow-2xl focus-within:border-[#e63928]/50 transition-all">
          <input 
            type="email" 
            placeholder="STAY UPDATED (EMAIL)" 
            className="bg-transparent flex-grow px-6 py-4 text-[10px] uppercase tracking-widest text-white outline-none placeholder:text-gray-600" 
          />
          <button className="bg-white text-black px-8 font-black text-[10px] uppercase hover:bg-[#e63928] hover:text-white transition-all">
            Join
          </button>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5">
          <p className="text-gray-600 text-[9px] uppercase tracking-[0.3em]">
            © 2026 Falcon Security Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}