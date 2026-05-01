import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      id="home" 
      /* 
         FIX: Added pt-32 (Top spacing for navbar) and pb-20 (Bottom spacing for button).
         'md:py-0' ensures these gaps don't appear on laptop view.
         Removed 'aspect-video' to allow the container to grow with the text.
      */
      className="relative w-full flex items-center overflow-hidden pt-32 pb-20 md:py-0 md:h-[85vh] bg-black"
    >
      
      {/* 1. THE IMAGE LAYER */}
      <div className="absolute inset-0 z-0"> 
        <Image 
          src="/falcon.jpg" 
          alt="Falcon Security Guard" 
          fill 
          /* 
             'object-cover' is used here so the background stretches 
             to cover the full height of your text + padding on mobile.
          */
          className="object-cover blur-[2px]" 
          style={{ objectPosition: 'center 75%' }} 
          priority 
        />
      </div>

      {/* 2. THE COLOR OVERLAY LAYER */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[#3d0e02]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
      </div>

      {/* 3. THE CONTENT LAYER */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 relative z-30">
        <div className="text-white space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <h1 className="text-3xl md:text-5xl font-white uppercase italic tracking-tight">
              SECURITY GUARD SERVICE
            </h1>
          <p className="text-sm md:text-xl leading-relaxed font-light text-gray-200 max-w-lg">
            High Standards. Affordable Protection. <br className="hidden md:block" />

            Locally owned in Kamloops. We provide 24/7 professional security for events, retail, construction, and patrols.
          </p>
        
          <div className="pt-2">
            <a href="tel:+17789107666">
              <button className="bg-[#e63928] hover:bg-red-700 hover:scale-105 transition-all text-white px-8 py-3 md:px-12 md:py-4 rounded-full text-base md:text-lg font-bold shadow-2xl uppercase tracking-widest">
                  CALL NOW
               </button>
            </a>
          </div>
        </div>

        <div className="hidden md:block" />
      </div>
    </section>
  );
}