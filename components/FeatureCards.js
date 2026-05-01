import Image from 'next/image';

export default function FeatureCards() {
  const services = [
   {
  title: "Event Security",
  desc: "Trained professionals for events of all sizes. We specialize in crowd control, access management, bag checks, and guest safety. Our team ensures a smooth, secure environment so your event runs without disruption.",
  img: "/event.jpg", 
  },
{
    title: "Static Guarding",
    desc: "Reliable on-site protection for your property. We provide security for construction sites, retail stores, residential buildings, clubs, and bars, with strong presence, access control, and incident prevention.",
    img: "/static3.jpg",
  },
  {
    title: "Mobile Patrols",
    desc: "Flexible patrols to keep your property secure. Our mobile units conduct randomized and scheduled patrols, checking your site as frequently as needed to deter crime and ensure everything stays under control.",
    img: "/patrol.jpg",
  },
  {
    title: "Alarm Response",
    desc: "24/7 rapid response when it matters most. We respond immediately to alarm activations, handle trespassing, site checks, and safe removals, ensuring your property remains protected at all times.",
    img: "/alarm.jpg",
  }
  ];

  return (
    <section id="services" className=" bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 uppercase italic text-black tracking-tight">
          Take A Look At <span className="text-[#e63928]">Services We Provide</span>
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
                      CUSTOM ALIGNMENT LOGIC:
                      - 50% is horizontal center.
                      - 10% is vertical (Adjust this 10% lower to show more of the top).
                  */
                  style={{ 
                    objectPosition: i === 1 ? '50% 35%' : 'center' 
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