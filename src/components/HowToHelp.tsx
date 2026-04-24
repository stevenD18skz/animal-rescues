"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Home, Smile, Copy, CheckCircle2, X, Maximize2 } from "lucide-react";

export default function HowToHelp() {
  const [copied, setCopied] = useState<string | null>(null);
  const [selectedQr, setSelectedQr] = useState<string | null>(null);

  const monicaInfo = {
    name: "Monica Cortes",
    number: "3243892368",
    brebeKey: "@3243892368",
    qr: "/QRs/qr-monica.jpeg",
    role: "Rescatista de Taylor"
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="help" className="bg-[#EAE4D9] py-24 overflow-hidden">
      <div className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 animate-fade-in-up" style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2C2A28]">
            ¿Cómo Puedes Ayudar?
          </h2>
          <p className="text-lg text-[#5A5652]">
            Cada granito de arena hace una diferencia inmensa en la vida de Taylor. Aquí tienes tres formas de unirte a su causa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
          {/* Card 1 - Donar (Doble Ancho) */}
          <div 
            className="md:col-span-2 bg-[#D36B42] p-8 md:p-10 rounded-[2.5rem] shadow-lg flex flex-col md:flex-row gap-8 relative overflow-hidden group animate-fade-in-up"
            style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}
          >
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-white opacity-10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
            
            <div className="flex-1 flex flex-col relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 text-[#F4F1EA]">1. Donar</h3>
              <p className="text-[#EAE4D9] mb-8 text-lg leading-relaxed">
                Los tratamientos oncológicos y cirugías son de alto costo. Tu aporte nos permite cubrir facturas veterinarias y medicamentos vitales.
              </p>
              <div className="mt-auto hidden md:block">
                <p className="text-[#fcf8f2] text-sm font-medium">Información de contacto directa →</p>
              </div>
            </div>

            <div className="flex-1 bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 relative z-10">
               <DonationDetails monicaInfo={monicaInfo} copied={copied} copyToClipboard={copyToClipboard} setSelectedQr={setSelectedQr} />
            </div>
          </div>

          {/* Card 2 - Hogar de Paso */}
          <div 
            className="bg-[#3F787A] p-8 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-start relative overflow-hidden group animate-fade-in-up"
            style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}
          >
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
              <Home className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-[#F4F1EA]">2. Hogar de Paso</h3>
            <p className="text-[#EAE4D9] mb-8 flex-1 relative z-10 leading-relaxed">
              Taylor necesita un ambiente tranquilo y limpio donde recuperarse sin estrés.
            </p>
            <a href="https://wa.me/573243892368?text=Hola,%20quiero%20ofrecer%20un%20hogar%20de%20paso%20para%20la%20gatita%20Taylor" target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-[#F4F1EA] text-[#3F787A] py-3 rounded-xl font-bold hover:bg-white transition-colors relative z-10 shadow-md">
              Ofrecer Hogar
            </a>
          </div>

          {/* Card 3 - Adoptar */}
          <div 
            className="bg-[#6B7A50] p-8 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-start relative overflow-hidden group animate-fade-in-up"
            style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}
          >
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
              <Smile className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-[#F4F1EA]">3. Adoptar</h3>
            <p className="text-[#EAE4D9] mb-8 flex-1 relative z-10 leading-relaxed">
              El objetivo final es encontrar a alguien que quiera darle amor incondicional.
            </p>
            <a href="https://wa.me/573243892368?text=Hola,%20me%20interesa%20adoptar%20a%20la%20gatita%20Taylor" target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-[#F4F1EA] text-[#6B7A50] py-3 rounded-xl font-bold hover:bg-white transition-colors relative z-10 shadow-md">
              Adoptar a Taylor
            </a>
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
        </div>
      )}
    </section>
  );
}

function DonationDetails({ monicaInfo, copied, copyToClipboard, setSelectedQr }: any) {
  return (
    <div className="w-full h-full flex flex-col justify-between gap-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 relative rounded-lg p-1">
          <Image src="/logos/nequi-logo.png" alt="Nequi Logo" fill sizes="40px" className="object-contain" />
        </div>
        <div>
          <h4 className="font-bold text-white text-sm leading-none">{monicaInfo.name}</h4>
          <p className="text-[10px] text-[#EAE4D9]/70 font-bold uppercase tracking-wider mt-1">{monicaInfo.role}</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="space-y-1">
          <p className="text-[14px] font-bold uppercase tracking-tighter text-white ml-1">Número Nequi</p>
          <button 
            onClick={(e) => { e.stopPropagation(); copyToClipboard(monicaInfo.number); }}
            className={`flex items-center justify-between w-full px-4 py-3 rounded-xl font-bold transition-all border-2 ${copied === monicaInfo.number ? 'bg-[#6B7A50] text-white border-[#6B7A50]' : 'bg-white/10 border-white/20 hover:border-white text-white'} cursor-pointer`}
          >
            <span className="text-base tracking-widest">{monicaInfo.number}</span>
            {copied === monicaInfo.number ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-4 h-4 opacity-50" />}
          </button>
        </div>

        <div className="space-y-1">
          <p className="text-[14px] font-bold uppercase text-white ml-1">Llave de Bre-B</p>
          <button 
            onClick={(e) => { e.stopPropagation(); copyToClipboard(monicaInfo.brebeKey); }}
            className={`flex items-center justify-between w-full px-4 py-3 rounded-xl font-bold transition-all border-2 ${copied === monicaInfo.brebeKey ? 'bg-[#6B7A50] text-white border-[#6B7A50]' : 'bg-white/10 border-white/20 hover:border-white text-white'} cursor-pointer `}
          >
            <span className="text-base tracking-widest">{monicaInfo.brebeKey}</span>
            {copied === monicaInfo.brebeKey ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-4 h-4 opacity-50" />}
          </button>
        </div>
      </div>

      <button 
        className="w-full mt-2 flex items-center justify-center gap-2 py-3 bg-white text-[#D36B42] rounded-xl font-bold text-sm shadow-md hover:bg-[#F4F1EA] transition-all group/qr-btn cursor-pointer"
        onClick={() => setSelectedQr(monicaInfo.qr)}
      >
        Ver QR de Nequi <Maximize2 className="w-4 h-4 group-hover/qr-btn:scale-110 transition-transform" />
      </button>
    </div>
  );
}
