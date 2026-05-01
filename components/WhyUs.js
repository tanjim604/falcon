import Image from 'next/image';

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-transparent py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Image with Decorative Borders */}
        <div className="relative group">
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#e63928] rounded-tl-3xl z-10" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#e63928] rounded-br-3xl z-10" />
          
          <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image 
              src="/smile.jpg" 
              alt="Falcon Security Professionalism" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
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

          <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
            <p>
              Falcon Security is a locally owned and operated company in Kamloops, built to deliver high-quality protection at competitive, affordable rates. We understand what businesses need—reliable security without overpaying—and that’s exactly what we provide.
            </p>
            
            <p>
              Our team is available 24/7, ready to respond quickly to both scheduled and emergency situations. Whether it’s a construction site, special event, or private property, we ensure your location stays secure at all times.
            </p>

            <p>
              What truly sets us apart is our elite personnel. Most of our team brings 3+ years of hands-on experience and is certified in AST (Advanced Security Training) and First Aid. Our guards are fully prepared to handle incidents, perform lawful arrests, removals, and safe escorts while managing situations professionally under British Columbia regulations.
            </p>

            <p>
              Having protected 15+ sites across Kamloops and surrounding areas, we’ve built a strong reputation for reliability and consistent performance. Businesses trust us because we show up, stay alert, and get the job done right.
            </p>

            <p className="border-l-4 border-[#e63928] pl-6 italic text-white/90">
              "At Falcon Security, we don’t just provide guards—we provide peace of mind, a strong presence, and dependable protection when your business needs it most."
            </p>
          </div>

          {/* Key Indicators */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5">
            <div>
              <p className="text-2xl font-black text-white uppercase italic">100%</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">reliable</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white uppercase italic">24/7</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">support</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white uppercase italic">30+</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">staff</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}