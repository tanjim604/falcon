import Image from 'next/image';

export default function Hero() {
  return (
    // 'relative' is MANDATORY here for the 'fill' image to work
    <section id="home" className="relative h-[85vh] w-full flex items-center overflow-hidden">
      
      {/* 1. THE IMAGE LAYER */}
      <div className="absolute inset-0 z-0"> 
        <Image 
          src="/hero.jpg" 
          alt="Security Guard" 
          fill 
          className="object-cover object-top blur-[2px]" 
          priority 
        />
      </div>

      {/* 2. THE COLOR OVERLAY LAYER (Must be higher than image, lower than text) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Your Mahogany vibe #3d0e02 */}
        <div className="absolute inset-0 bg-[#3d0e02]/60" />
        {/* Red gradient side glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
      </div>

      {/* 3. THE CONTENT LAYER (Must be highest z-index) */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 relative z-30">
        <div className="hidden md:block" />
        <div className="text-white space-y-8 animate-in fade-in slide-in-from-right duration-1000">
          <p className="text-lg md:text-xl leading-relaxed font-light text-gray-200">
            We are experts in helping you find a solution to your problem. Our team includes male & female investigators possessing many years of experience.
          </p>
        
        <a href="#contact-us">
            <button className="bg-[#e63928] hover:bg-red-700 hover:scale-105 transition-all text-white px-12 py-4 rounded-full text-lg font-bold shadow-2xl uppercase tracking-widest">
                Contact Us
             </button>
        </a>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {[...Array(6)].map((_, i) => (
          <span key={i} className={`w-2.5 h-2.5 rounded-full ${i === 0 ? 'bg-[#e63928]' : 'bg-white/40'}`} />
        ))}
      </div>
    </section>
  );
}