import Image from 'next/image';

export default function FeatureCards() {
const services = [
    {
      title: "Event Security",
      desc: "Professional crowd control and access management for events of any scale, ensuring guest safety and a disruption-free environment.",
      img: "/event-1.jpg", 
    },
    {
      title: "Static Guarding",
      desc: "Dedicated on-site protection for construction, retail, and residential sites, focusing on access control and incident prevention.",
      img: "/static4.jpg",
    },
    {
      title: "Mobile Patrols",
      desc: "Randomized and scheduled vehicle patrols providing a visible deterrent and frequent site checks to ensure total control.",
      img: "/vehicle-1.jpg",
    },
    {
      title: "Alarm Response",
      desc: "Immediate 24/7 response to alarm activations and trespassing, providing rapid site checks to keep your property protected.",
      img: "/alarm-1.jpg",
    }
  ];

  return (
    <section id="services" className=" bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 uppercase italic text-black tracking-tight">
          SERVICES <span className="text-[#e63928]">WE Provide</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="backdrop-blur-md rounded-2xl border border-white/5 flex flex-col p-5 hover:border-[#e63928]/40 transition-all duration-500 group shadow-2xl"
            >
              <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 border border-white/10">
                <Image 
                  src={service.img} 
                  alt={service.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  /* 
                      FIX: Target index 2 (Mobile Patrols) to align left.
                      - 'left center' ensures the left side of the pic is pinned.
                      - index 1 (Static) kept your custom 50% 35% tweak.
                  */
                  style={{ 
                    objectPosition: i === 2 ? 'left center' : i === 1 ? '50% 35%' : 'center' 
                  }}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-[#e63928]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <h3 className="text-lg font-black mb-3 text-red-700 uppercase leading-tight tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-black text-[11px] mb-6 leading-relaxed">
                {service.desc}
              </p>
              
              <a href="#form-anchor" className="mt-auto block w-full"> 
                <button className="w-full bg-[#e63928] hover:bg-red-700 text-white text-[10px] py-3 rounded-lg font-black uppercase tracking-widest transition-all shadow-lg active:scale-95">
                  Get A Quote
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}