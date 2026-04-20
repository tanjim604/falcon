import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#111111] pt-24 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial from-[#e63928]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Logo Section with Horizontal Rules */}
        <div className="flex justify-center items-center gap-6 mb-16">
          <div className="h-px bg-white/10 flex-grow hidden md:block" />
          <div className="relative w-32 h-40 md:w-40 md:h-60">
            <Image 
              src="/falcon-logo.png" 
              alt="Falcon Security Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="h-px bg-white/10 flex-grow hidden md:block" />
        </div>

        {/* Navigation & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em] mb-16 font-bold">
          <div className="flex flex-col gap-4 items-center md:items-start order-2 md:order-1">
            <Link href="/legal" className="hover:text-white transition-colors">Legal</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms and Conditions</Link>
            <Link href="#about-us" className="hover:text-white transition-colors">About Us</Link>
          </div>

          <div className="flex justify-center items-center gap-8 text-2xl text-white order-1 md:order-2">
            <span className="hover:text-[#e63928] cursor-pointer transition-all">𝕏</span>
            <span className="hover:text-[#e63928] cursor-pointer transition-all">📸</span>
            <span className="hover:text-[#e63928] cursor-pointer transition-all">💼</span>
          </div>

          <div className="flex flex-col gap-4 items-center md:items-end order-3">
            <Link href="#home" className="hover:text-white transition-colors">Home</Link>
            <Link href="#blogs" className="hover:text-white transition-colors">Blog</Link>
            <Link href="#calculate" className="hover:text-white transition-colors">Calculate</Link>
            <Link href="#our-team" className="hover:text-white transition-colors">Our Team</Link>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex max-w-md mx-auto bg-zinc-900/50 rounded-lg border border-white/10 overflow-hidden shadow-2xl">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="bg-transparent flex-grow px-6 py-4 text-sm text-white outline-none placeholder:text-gray-600" 
          />
          <button className="bg-[#cccccc] text-black px-8 font-black text-[10px] uppercase hover:bg-white transition-colors">
            Subscribe
          </button>
        </div>
        
        <p className="mt-12 text-gray-600 text-[9px] uppercase tracking-[0.3em]">
          © 2026 Falcon Security Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}