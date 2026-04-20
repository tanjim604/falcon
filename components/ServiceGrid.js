import Image from 'next/image';

export default function ServiceGrid() {
  // 1. Added 'desc' property to each card object
  const cards = [
    { 
      title: "EFFECTIVE", 
      img: "/effective.jpg",
      desc: "Our strategic approach ensures maximum security coverage with rapid response times and reliable oversight." 
    },
    { 
      title: "PROFESSIONAL", 
      img: "/professional.jpg",
      desc: "Highly trained personnel committed to the highest standards of integrity, appearance, and conduct."
    },
    { 
      title: "DIVERSE", 
      img: "/diverse_new.jpg",
      desc: "Providing versatile security solutions tailored to commercial, residential, and event-specific needs."
    },
  ];

  return (
    <section id="our-services" className="bg-transparent py-16 md:py-24 px-4 sm:px-6 text-white text-center">
      <div className="mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight">
          HOW WE PROVIDE <span className="text-[#e63928]">OUR SERVICES</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed px-2">
          Experience the Falcon difference through our three core pillars of service excellence.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
        {cards.map((card, i) => (
          <div key={i} className="group flex flex-col items-center">
            <div className="relative w-full aspect-[4/5] md:h-80 rounded-3xl overflow-hidden border border-white/5 mb-6 shadow-2xl">
              <Image 
                src={card.img} 
                alt={card.title} 
                fill 
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <h3 className="text-xl md:text-2xl font-black mb-3 tracking-wider uppercase">
              {card.title}
            </h3>
            
            {/* 2. Updated to use card.desc instead of hardcoded text */}
            <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed max-w-[280px]">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}