import Image from 'next/image';

export default function ServiceGrid() {
  const cards = [
    { 
      title: "EFFECTIVE", 
      img: "/effective2.jpg",
      desc: "Our strategic approach ensures maximum security coverage with rapid response times and reliable oversight." 
    },
    { 
      title: "PROFESSIONAL", 
      img: "/prof.jpg",
      desc: "Highly trained personnel committed to the highest standards of integrity, appearance, and conduct."
    },
    { 
      title: "DIVERSE", 
      img: "/diversity.jpg",
      desc: "Providing versatile security solutions tailored to commercial, residential, and event-specific needs."
    },
  ];

  return (
    <section id="services" className="bg-transparent py-16 md:py-24 px-4 sm:px-6 text-white text-center">
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
            {/* 
                THE FIX: 
                1. Changed mobile aspect to 'aspect-video' (16/9) so the wide photo fits perfectly.
                2. Kept 'md:aspect-[4/5]' for the laptop look you liked.
            */}
            <div className="relative w-full aspect-video md:aspect-[4/5] md:h-80 rounded-3xl overflow-hidden border border-white/5 mb-6 shadow-2xl bg-black">
              <Image 
                src={card.img} 
                alt={card.title} 
                fill 
                /* 
                   'object-cover' now works perfectly because the container 
                   shape matches the image shape on mobile. 
                */
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={i === 0}
              />
            </div>

            <h3 className="text-xl md:text-2xl font-black mb-3 tracking-wider uppercase">
              {card.title}
            </h3>
            
            <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed max-w-[280px]">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}