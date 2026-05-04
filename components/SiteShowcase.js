"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const siteImages = [
  "/patrol-1.jpg",
  "/patrol-2.jpg",
  "/patrol-3.jpg",
  "/patrol-4.jpg",
  "/patrol-5.jpg",
  "/patrol-6.jpg",
];

const reviewScreenshots = [
  "/review-1.jpg", 
  "/review-2.jpg",
];

export default function SiteShowcase() {
  const [imgIndex, setImgIndex] = useState(0);
  const [revIndex, setRevIndex] = useState(0);

  useEffect(() => {
    const imgTimer = setInterval(() => {
      setImgIndex((prev) => (prev === siteImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    
    const revTimer = setInterval(() => {
      setRevIndex((prev) => (prev === reviewScreenshots.length - 1 ? 0 : prev + 1));
    }, 3000); 

    return () => {
      clearInterval(imgTimer);
      clearInterval(revTimer);
    };
  }, []);

  return (
    <section className="bg-black py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: FIELD OPERATIONS */}
          <div className="space-y-6">
            <h2 className="text-4xl font-black uppercase italic text-white tracking-tighter">
              FIELD <span className="text-[#e63928]">OPERATIONS</span>
            </h2>
            <div className="relative h-[400px] md:h-[550px] w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              {siteImages.map((src, i) => (
                <div 
                  key={i} 
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    i === imgIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Image src={src} alt="Site" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: SEAMLESS CIRCULAR TRANSITION */}
          <div className="flex flex-col items-center lg:items-end space-y-10">
            <h2 className="text-2xl font-black uppercase italic text-white tracking-widest text-right">
              CLIENT <span className="text-[#e63928]">FEEDBACK</span>
            </h2>

            <div className="relative w-full max-w-[450px] h-[250px] perspective-1000">
              {reviewScreenshots.map((src, i) => {
                const isActive = i === revIndex;
                const isOnlyTwo = reviewScreenshots.length === 2;
                
                // Enhanced logic to prevent the black gap in 2-item arrays
                const isExit = !isActive && (isOnlyTwo || i === (revIndex - 1 + reviewScreenshots.length) % reviewScreenshots.length);
                const isNext = !isActive && !isExit && i === (revIndex + 1) % reviewScreenshots.length;
                
                return (
                  <div 
                    key={i} 
                    className={`absolute w-full transition-all duration-800 ease-in-out ${
                      isActive 
                        ? "z-30 opacity-100 scale-100 translate-y-0 blur-0" 
                        : isExit 
                        ? "z-10 opacity-0 scale-75 -translate-y-20 blur-md" 
                        : isNext
                        ? "z-20 opacity-0 scale-90 translate-y-20 blur-sm" 
                        : "opacity-0" 
                    }`}
                  >
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                      <div className="relative w-full aspect-[2.8/1] rounded-lg overflow-hidden">
                        <Image 
                          src={src} 
                          alt="Review" 
                          fill 
                          className="object-contain" 
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Circular Progress Indicator */}
            <div className="flex gap-3 pr-4">
              {reviewScreenshots.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === revIndex ? "w-10 bg-[#e63928]" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}