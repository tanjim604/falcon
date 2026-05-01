import Image from 'next/image';

export default function Hero() {
  return (
    <section 
      id="home" 
      /* 
         Responsive height: 
         - aspect-[4/3] on mobile ensures the wide image fits without cropping.
         - md:h-[85vh] restores your preferred laptop height.
      */
      className="relative h-auto aspect-[4/3] md:aspect-auto md:h-[85vh] w-full flex items-center overflow-hidden"
    >
      
      {/* 1. THE IMAGE LAYER */}
      <div className="absolute inset-0 z-0"> 
        <Image 
          src="/falcon.jpg" 
          alt="Security Guard" 
          fill 
          /* 
             RE-ADDED: blur-[2px] for the 'vibes'.
             ADDED: object-top for mobile to keep the team in frame.
          */
          className="object-cover blur-[2px] object-top md:object-[center_75%]" 
          style={{ objectPosition: 'center 75%' }} 
          priority 
        />
      </div>

      {/* 2. THE COLOR OVERLAY LAYER - Kept original settings */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[#3d0e02]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
      </div>

      {/* 3. THE CONTENT LAYER */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 relative z-30 py-12 md:py-0">
        <div className="text-white space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <h1 className="text-4xl md:text-5xl font-white uppercase italic tracking-tight">
              SECURITY GUARD SERVICE
            </h1>
          <p className="text-lg md:text-xl leading-relaxed font-light text-gray-200 max-w-lg">
            High Standards. Affordable Protection. <br></br><br></br>

            Locally owned in Kamloops, we provide 24/7 professional security for events, retail, construction, and patrols. We deliver reliable, high-standard protection at affordable rates, ensuring your business stays secure without overpaying.
            <br></br><br></br>Strong presence. Trusted service. Affordable pricing — built for your business.
          </p>
        
          <a href="tel:+17789107666">
            <button className="bg-[#e63928] hover:bg-red-700 hover:scale-105 transition-all text-white px-12 py-4 rounded-full text-lg font-bold shadow-2xl uppercase tracking-widest">
                CALL NOW
             </button>
          </a>
        </div>

        {/* Spacer for desktop layout */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
}