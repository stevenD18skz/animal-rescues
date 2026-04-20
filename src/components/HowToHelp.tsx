"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Home, Smile, Copy, CheckCircle2, QrCode, ChevronDown, ChevronUp, X, Maximize2 } from "lucide-react";

export default function HowToHelp() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [selectedQr, setSelectedQr] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="help" className="bg-[#EAE4D9] py-24 overflow-hidden">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 animate-fade-in-up" style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2C2A28]">
            ¿Cómo Puedes Ayudar?
          </h2>
          <p className="text-lg text-[#5A5652]">
            Cada granito de arena hace una diferencia inmensa en la vida de Taylor. Aquí tienes tres formas de unirte a su causa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Donar (Expansible) */}
          <div 
            className={`p-8 rounded-3xl shadow-lg transition-all duration-500 flex flex-col items-start relative overflow-hidden group animate-fade-in-up cursor-pointer ${isExpanded ? 'bg-[#B35834] scale-[1.02]' : 'bg-[#D36B42] hover:shadow-2xl'}`} 
            style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              <Heart className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-[#F4F1EA]">1. Donar</h3>
            <p className="text-[#EAE4D9] mb-8 flex-1 relative z-10">
              Los tratamientos oncológicos y cirugías son de alto costo. Tu aporte económico nos permite pagar sus facturas veterinarias y medicamentos.
            </p>
            <button className="flex items-center justify-center gap-2 w-full bg-[#F4F1EA] text-[#D36B42] py-3 rounded-xl font-bold hover:bg-white transition-all relative z-10 shadow-md">
              {isExpanded ? (
                <>Cerrar opciones <ChevronUp className="w-5 h-5" /></>
              ) : (
                <>Ver opciones de donación <ChevronDown className="w-5 h-5" /></>
              )}
            </button>
          </div>

          {/* Card 2 */}
          <div 
            className="bg-[#3F787A] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-start relative overflow-hidden group animate-fade-in-up"
            style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}
          >
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
              <Home className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-[#F4F1EA]">2. Hogar de Paso</h3>
            <p className="text-[#EAE4D9] mb-8 flex-1 relative z-10">
              Taylor necesita un ambiente tranquilo y limpio donde recuperarse sin estrés. Si tienes un espacio seguro, serás vital para su sanación.
            </p>
            <a href="https://wa.me/573243892368?text=Hola,%20quiero%20ofrecer%20un%20hogar%20de%20paso%20para%20la%20gatita%20Taylor" target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-[#F4F1EA] text-[#3F787A] py-3 rounded-xl font-medium hover:bg-white transition-colors relative z-10 shadow-md">
              Ofrecer Hogar
            </a>
          </div>

          {/* Card 3 */}
          <div 
            className="bg-[#6B7A50] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-start relative overflow-hidden group animate-fade-in-up"
            style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}
          >
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
              <Smile className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-[#F4F1EA]">3. Adoptar</h3>
            <p className="text-[#EAE4D9] mb-8 flex-1 relative z-10">
              El objetivo final es encontrar a alguien con un corazón inmenso que quiera adoptar a Taylor y darle amor incondicional por el resto de su vida.
            </p>
            <a href="https://wa.me/573243892368?text=Hola,%20me%20interesa%20adoptar%20a%20la%20gatita%20Taylor" target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-[#F4F1EA] text-[#6B7A50] py-3 rounded-xl font-medium hover:bg-white transition-colors relative z-10 shadow-md">
              Información de Adopción
            </a>
          </div>
        </div>

        {/* Sección Expansible de Donación */}
        <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[1200px] opacity-100 mt-12' : 'max-h-0 opacity-0 mt-0'}`}>
          <div className="bg-white/50 backdrop-blur-sm border-2 border-white/50 rounded-[2.5rem] p-8 md:p-12 shadow-inner">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-serif font-bold text-[#2C2A28] mb-4">Canales de Donación Directa</h3>
              <p className="text-[#5A5652] max-w-2xl mx-auto">
                Tu aporte llega íntegro a los cuidados de Taylor. Hemos habilitado los siguientes medios:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Nequi Monica */}
              <div className="bg-white p-8 rounded-3xl border border-[#EAE4D9] shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group/card">
                <div className="w-20 h-12 relative mb-6 group-hover/card:scale-110 transition-transform">
                  <Image src="/logos/nequi-logo.png" alt="Nequi Logo" fill sizes="80px" className="object-contain" />
                </div>
                <h4 className="font-bold text-xl text-[#2C2A28] mb-1">Monica Cortes</h4>
                <p className="text-sm text-[#A39E98] mb-6 font-medium uppercase tracking-wider">Gestor de Ayuda</p>
                <div className="w-full">
                  <button 
                    onClick={() => copyToClipboard('3243892368')}
                    className={`flex items-center justify-between w-full px-5 py-4 rounded-xl font-bold transition-all border-2 ${copied === '3243892368' ? 'bg-[#6B7A50] text-white border-[#6B7A50]' : 'bg-[#F4F1EA] border-transparent hover:border-[#D36B42] text-[#2C2A28]'}`}
                  >
                    <span className="text-xl tracking-widest">3243892368</span>
                    {copied === '3243892368' ? <CheckCircle2 className="w-6 h-6" /> : <Copy className="w-5 h-5 text-[#A39E98]" />}
                  </button>
                </div>
                <div className="mt-6 w-full flex flex-col items-center border-t border-[#EAE4D9] pt-6">
                  <p className="text-xs text-[#A39E98] mb-3 font-bold uppercase tracking-tighter">O escanea el QR</p>
                  <div 
                    className="relative w-44 h-44 bg-white rounded-2xl overflow-hidden shadow-md border-2 border-[#EAE4D9] cursor-zoom-in group/qr transition-all hover:border-[#D36B42] hover:shadow-xl"
                    onClick={() => setSelectedQr('/QRs/qr-monica.jpeg')}
                  >
                    <Image src="/QRs/qr-monica.jpeg" alt="QR Nequi Monica" fill sizes="176px" className="object-cover group-hover/qr:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-black/0 group-hover/qr:bg-black/5 flex items-center justify-center transition-colors">
                      <Maximize2 className="w-6 h-6 text-[#2C2A28] opacity-0 group-hover/qr:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Nequi Celeste */}
              <div className="bg-white p-8 rounded-3xl border border-[#EAE4D9] shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group/card">
                <div className="w-20 h-12 relative mb-6 group-hover/card:scale-110 transition-transform">
                  <Image src="/logos/nequi-logo.png" alt="Nequi Logo" fill sizes="80px" className="object-contain" />
                </div>
                <h4 className="font-bold text-xl text-[#2C2A28] mb-1">Celeste Reina</h4>
                <p className="text-sm text-[#A39E98] mb-6 font-medium uppercase tracking-wider">Rescatista</p>
                <div className="w-full">
                  <button 
                    onClick={() => copyToClipboard('3117022519')}
                    className={`flex items-center justify-between w-full px-5 py-4 rounded-xl font-bold transition-all border-2 ${copied === '3117022519' ? 'bg-[#6B7A50] text-white border-[#6B7A50]' : 'bg-[#F4F1EA] border-transparent hover:border-[#D36B42] text-[#2C2A28]'}`}
                  >
                    <span className="text-xl tracking-widest">3117022519</span>
                    {copied === '3117022519' ? <CheckCircle2 className="w-6 h-6" /> : <Copy className="w-5 h-5 text-[#A39E98]" />}
                  </button>
                </div>
              </div>

              {/* Nu Brayan Narvaez */}
              <div className="bg-white p-8 rounded-3xl border border-[#EAE4D9] shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group/card">
                <div className="w-20 h-12 relative mb-6 group-hover/card:scale-110 transition-transform">
                  <Image src="/logos/Nubank-logo.png" alt="Nubank Logo" fill sizes="80px" className="object-contain" />
                </div>
                <h4 className="font-bold text-xl text-[#2C2A28] mb-1">Brayan Narvaez</h4>
                <p className="text-sm text-[#A39E98] mb-6 font-medium uppercase tracking-wider">Gestor de Ayuda (Nu)</p>
                <div className="w-full">
                  <button 
                    onClick={() => copyToClipboard('@BNV521')}
                    className={`flex items-center justify-between w-full px-5 py-4 rounded-xl font-bold transition-all border-2 ${copied === '@BNV521' ? 'bg-[#6B7A50] text-white border-[#6B7A50]' : 'bg-[#F4F1EA] border-transparent hover:border-[#D36B42] text-[#2C2A28]'}`}
                  >
                    <span className="text-xl tracking-widest">@BNV521</span>
                    {copied === '@BNV521' ? <CheckCircle2 className="w-6 h-6" /> : <Copy className="w-5 h-5 text-[#A39E98]" />}
                  </button>
                </div>
                <p className="text-[10px] text-[#A39E98] mt-4 font-medium uppercase">Transfiere por Nu usando esta llave</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox para QR */}
      {selectedQr && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-6 animate-fade-in"
          onClick={() => setSelectedQr(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors bg-white/10 p-3 rounded-full hover:bg-white/20"
            onClick={() => setSelectedQr(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div 
            className="relative w-full max-w-lg aspect-square bg-white rounded-[2rem] overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={selectedQr} 
              alt="QR Ampliado" 
              fill 
              sizes="(max-width: 768px) 90vw, 512px"
              className="object-contain p-4" 
            />
          </div>
          <p className="absolute bottom-10 text-white font-medium tracking-widest text-sm bg-white/10 px-6 py-2 rounded-full border border-white/20">
            ESCANEA PARA DONAR
          </p>
        </div>
      )}
    </section>
  );
}
