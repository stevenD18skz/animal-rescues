"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const medias = [
    { type: 'image', src: '/taylor/taylor-image-1.jpeg' },
    { type: 'video', src: '/taylor/taylor-video-2.mp4' },
    { type: 'image', src: '/taylor/taylor-image-2.jpeg' },
    { type: 'video', src: '/taylor/taylor-video-3.mp4' },
    { type: 'image', src: '/taylor/taylor-image-3.jpeg' },
    { type: 'video', src: '/taylor/taylor-video-4.mp4' },
    { type: 'image', src: '/taylor/taylor-image-4.jpeg' },
    { type: 'video', src: '/taylor/taylor-video-5.mp4' },
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % medias.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + medias.length) % medias.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#2C2A28] text-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-12">
        <h2 className="text-4xl font-serif font-bold text-[#E5A93D] animate-fade-in-up" style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}>
          Momentos de Taylor
        </h2>
        <p className="text-lg text-[#A39E98] max-w-2xl mx-auto animate-fade-in-up" style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}>
          Un vistazo a la dulce personalidad de Taylor y su camino de sanación.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {medias.map((media, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedIndex(i)}
              className="relative aspect-square rounded-3xl overflow-hidden border-2 border-[#5A5652] opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-105 hover:border-[#E5A93D] animate-fade-in-up bg-black cursor-pointer group"
              style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}
            >
              {media.type === 'image' ? (
                <Image src={media.src} alt={`Galería de Taylor ${i+1}`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" priority={i === 0} />
              ) : (
                <>
                  <video src={media.src} preload="metadata" muted playsInline className="w-full h-full object-cover pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                    <PlayCircle className="w-12 h-12 text-white/80 group-hover:text-white group-hover:scale-110 transition-all" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8 animate-fade-in"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Botón de cerrar */}
          <button 
            className="absolute top-6 right-6 text-[#A39E98] hover:text-white transition-colors z-50 bg-black/50 p-2 rounded-full"
            onClick={() => setSelectedIndex(null)}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Controles de navegación */}
          <button 
            className="absolute left-2 md:left-8 text-[#A39E98] hover:text-white transition-colors z-50 p-2 bg-black/50 rounded-full hover:scale-110"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button 
            className="absolute right-2 md:right-8 text-[#A39E98] hover:text-white transition-colors z-50 p-2 bg-black/50 rounded-full hover:scale-110"
            onClick={handleNext}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Contenido Principal */}
          <div 
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} 
          >
            {medias[selectedIndex].type === 'image' ? (
              <div className="relative w-[90vw] h-[85vh]">
                <Image 
                  src={medias[selectedIndex].src} 
                  alt="Taylor ampliada" 
                  fill
                  sizes="90vw"
                  className="object-contain rounded-lg shadow-2xl select-none"
                />
              </div>
            ) : (
              <video 
                src={medias[selectedIndex].src} 
                autoPlay 
                controls 
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            )}
          </div>
          
          {/* Indicador inferior */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#F4F1EA] font-medium tracking-widest text-sm bg-black/70 px-6 py-2 rounded-full border border-[#5A5652]">
            {selectedIndex + 1} / {medias.length}
          </div>
        </div>
      )}
    </section>
  );
}
