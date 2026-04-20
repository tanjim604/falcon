import Image from 'next/image';

export default function FeatureCards() {
  const services = [
    {
      title: "Event Security",
      desc: "Trained security personnel for events of all sizes, ensuring crowd control, access management, and a safe environment for guests, staff, and organizers.",
      img: "/event.jpg", // Replace with our actual file names
    },
    {
      title: "Static Guarding",
      desc: "Highly trained security personnel for continuous presence and access control to secure your premises.",
      img: "/static.jpg",
    },
    {
      title: "Mobile Patrols",
      desc: "Randomized, thorough security sweeps across large properties to deter criminal activity effectively.",
      img: "/patrol.jpg",
    },
    {
      title: "Alarm Response",
      desc: "Rapid response to alarm activations with on-site inspection and threat management to keep your property secure at all times.",
      img: "/alarm.jpg",
    }
  ];

  return (
    <section id="services" className="bg-transparent py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16 uppercase italic text-white tracking-tight">
          Take A Look At <span className="text-[#e63928]">Services We Provide</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="bg-black/30 backdrop-blur-md rounded-2xl border border-white/5 flex flex-col p-5 hover:border-[#e63928]/40 transition-all duration-500 group"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 border border-white/10">
                <Image 
                  src={service.img} 
                  alt={service.title} 
                  fill 
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-700" 
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                {/* Red Overlay on Hover */}
                <div className="absolute inset-0 bg-[#e63928]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <h3 className="text-lg font-black mb-3 text-white uppercase leading-tight tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-[11px] mb-6 leading-relaxed">
                {service.desc}
              </p>
              
              <button className="mt-auto w-full bg-[#e63928] hover:bg-red-700 text-white text-[10px] py-3 rounded-lg font-black uppercase tracking-widest transition-all shadow-lg active:scale-95">
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}