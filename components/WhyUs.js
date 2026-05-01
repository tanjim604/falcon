import Image from 'next/image';

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-transparent py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Image with Decorative Borders */}
        <div className="relative group">
          {/* Decorative Red Frame behind image */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#e63928] rounded-tl-3xl z-10" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#e63928] rounded-br-3xl z-10" />
          
          <div className="relative h-[400px] md:h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image 
              src="/smile.jpg" // Ensure you have this file in your public folder
              alt="Falcon Security History" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3d0e02]/60 to-transparent" />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-8 animate-in fade-in slide-in-from-right duration-1000">
          <div>
            <h4 className="text-[#e63928] font-black uppercase tracking-[0.3em] text-sm mb-4">
              Our Legacy
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic leading-tight tracking-tight">
              WHY <span className="text-[#e63928]">US?</span>
            </h2>
          </div>

          <div className="space-y-6 text-gray-400 leading-relaxed text-sm md:text-base">
            <p>
              Founded with a mission to redefine security standards in British Columbia, Falcon Security 
              has grown from a local initiative into a trusted name for elite protection. Our history 
              is built on the core values of integrity, vigilance, and community service.
            </p>
            <p>
              Over the years, we have protected hundreds of local businesses, events, and residential 
              complexes. What sets us apart is our team—a diverse group of professionals, including 
              experienced male and female investigators who bring a wealth of expertise to every assignment.
            </p>
            <p className="border-l-4 border-[#e63928] pl-6 italic text-white/90">
              "We don't just provide guards; we provide peace of mind through a proactive approach 
              to threat management and a deep understanding of our clients' unique situations."
            </p>
          </div>

          {/* Stats for "Why Us" logic */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
            <div>
              <p className="text-2xl font-black text-white uppercase italic">100%</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Reliability</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white uppercase italic">24/7</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Support</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white uppercase italic">50+</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Staff</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}