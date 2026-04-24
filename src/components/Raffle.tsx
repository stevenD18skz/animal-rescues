"use client";

import { useState, useMemo, useEffect } from "react";
import { Heart, Copy, CheckCircle2, Ticket, Trophy, Calendar, DollarSign, AlertCircle, Maximize2, X } from "lucide-react";
import Image from "next/image";

export default function Raffle() {
  // Números vendidos (según la imagen: 15, 24, 31, 50, 58)
  const [soldNumbers] = useState<number[]>([15, 24, 31, 50, 58]);
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const raffleInfo = {
    totalNumbers: 100,
    pricePerNumber: 5000,
    totalPrize: 150000,
    drawDate: "13 de Mayo",
    whatsapp: "3243892368",
    description: "Rifa para ayudar a Taylor con sus gastos médicos y recuperación de tumores mamarios cancerígenos"
  };

  // Generar números disponibles
  const availableNumbers = useMemo(() => {
    return Array.from({ length: raffleInfo.totalNumbers }, (_, i) => i + 1);
  }, [raffleInfo.totalNumbers]);

  const numbersAvailable = availableNumbers.filter(
    num => !soldNumbers.includes(num)
  ).length;

  const percentageSold = ((soldNumbers.length / raffleInfo.totalNumbers) * 100).toFixed(1);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBuyNumber = (num?: number) => {
    const message = num 
      ? `Hola, me interesa comprar el número ${num} de la rifa para Taylor. ¿Cuáles están disponibles?`
      : `Hola, me interesa comprar número(s) de la rifa para Taylor. ¿Cuáles están disponibles?`;
    
    window.open(
      `https://wa.me/57${raffleInfo.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="raffle" className="bg-[#EAE4D9] py-24 overflow-hidden">
      <div className="px-6 md:px-12 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in-up" style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}>
          <div className="inline-block bg-[#E5A93D] text-[#2C2A28] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
            ¡NUEVA FORMA DE AYUDAR!
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2C2A28]">
            La Rifa de Taylor
          </h2>
          <p className="text-lg text-[#5A5652]">
            {raffleInfo.description}
          </p>
        </div>

        {/* 3 Info Cards on Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Prize Card */}
          <div className="bg-[#D36B42] rounded-3xl p-8 text-[#F4F1EA] shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-white opacity-10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-sm shadow-inner">
                <Trophy className="w-8 h-8" strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs opacity-90 font-bold uppercase tracking-wider">Premio Total</p>
                <p className="text-3xl font-bold font-serif">
                  ${isMounted ? raffleInfo.totalPrize.toLocaleString() : raffleInfo.totalPrize}
                </p>
              </div>
            </div>
          </div>

          {/* Price Card */}
          <div className="bg-[#3F787A] rounded-3xl p-8 text-[#F4F1EA] shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-white opacity-10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm shadow-inner">
                <DollarSign className="w-8 h-8" strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs opacity-90 font-bold uppercase tracking-wider">Precio Número</p>
                <p className="text-3xl font-bold font-serif">
                  ${isMounted ? raffleInfo.pricePerNumber.toLocaleString() : raffleInfo.pricePerNumber}
                </p>
              </div>
            </div>
          </div>

          {/* Date Card */}
          <div className="bg-[#6B7A50] rounded-3xl p-8 text-[#F4F1EA] shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-white opacity-10 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm shadow-inner">
                <Calendar className="w-8 h-8" strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs opacity-90 font-bold uppercase tracking-wider">Fecha Sorteo</p>
                <p className="text-2xl font-bold font-serif">
                  {raffleInfo.drawDate}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Raffle Grid (Full Width) */}
        <div className="mb-12">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-[#EAE4D9]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Side: Progress and Grid */}
              <div className="lg:col-span-8 space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#2C2A28] mb-1">Estado de la Rifa</h3>
                    <p className="text-[#5A5652]">Selecciona tus números favoritos y ayúdanos a llegar a la meta.</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-4xl font-black text-[#D36B42]">{percentageSold}%</p>
                    <p className="text-xs text-[#A39E98] uppercase font-bold tracking-widest">Recaudado</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-4 bg-[#F4F1EA] rounded-full overflow-hidden shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-[#D36B42] to-[#B35834] transition-all duration-1000 ease-out rounded-full shadow-lg"
                    style={{ width: `${percentageSold}%` }}
                  ></div>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-6 py-4 border-b border-[#F4F1EA]">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#E5F3F3] border-2 border-[#3F787A] rounded-lg"></div>
                    <span className="text-sm font-medium text-[#5A5652]">Disponible ({numbersAvailable})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#D36B42] rounded-lg"></div>
                    <span className="text-sm font-medium text-[#5A5652]">Vendido ({soldNumbers.length})</span>
                  </div>
                </div>

                {/* Numbers Grid */}
                <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 md:gap-3 p-1">
                  {availableNumbers.map((num) => {
                    const isSold = soldNumbers.includes(num);
                    return (
                      <button
                        key={num}
                        onClick={!isSold ? () => handleBuyNumber(num) : undefined}
                        disabled={isSold}
                        className={`
                          aspect-square flex items-center justify-center font-black text-sm md:text-base rounded-xl
                          transition-all duration-300 transform
                          ${
                            isSold
                              ? "bg-[#D36B42] text-white cursor-not-allowed shadow-inner"
                              : "bg-[#F4F1EA] text-[#2C2A28] border border-[#EAE4D9] hover:scale-110 hover:shadow-lg hover:bg-[#3F787A] hover:text-white hover:border-[#3F787A] cursor-pointer"
                          }
                        `}
                      >
                        {num.toString().padStart(2, '0')}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Side: Instructions and CTA */}
              <div className="lg:col-span-4 space-y-8">
                <div className="bg-[#F4F1EA] rounded-[2rem] p-8 space-y-6 border border-[#EAE4D9]">
                  <h3 className="text-xl font-serif font-bold text-[#2C2A28]">¿Cómo participar?</h3>
                  <ul className="space-y-4">
                    {[
                      "Mira la tabla y elige tus números.",
                      "Escríbenos para confirmar disponibilidad.",
                      "Envía el comprobante de pago.",
                      "¡Listo! Ya estás apoyando a Taylor y participando para ganar."
                    ].map((step, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="flex-shrink-0 w-6 h-6 bg-[#D36B42] text-white rounded-full flex items-center justify-center text-xs font-bold">{i+1}</span>
                        <p className="text-sm text-[#5A5652]">{step}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-[#EAE4D9]">
                    <p className="text-xs text-[#A39E98] mb-2 uppercase font-bold tracking-widest">Contacto Directo</p>
                    <button
                      onClick={() => copyToClipboard(raffleInfo.whatsapp)}
                      className="flex items-center gap-3 text-lg font-bold text-[#2C2A28] hover:text-[#3F787A] transition-colors group cursor-pointer"
                    >
                      <span className="w-10 h-10 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">📱</span>
                      {raffleInfo.whatsapp}
                      {copied ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 opacity-40" />}
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => handleBuyNumber()}
                  className="w-full bg-[#3F787A] hover:bg-[#2A5253] text-[#F4F1EA] py-5 rounded-[2rem] font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 group cursor-pointer"
                >
                  <Ticket className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Comprar por WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Important Note 
        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 border border-white">
          <div className="w-16 h-16 bg-[#E5A93D]/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-[#E5A93D]">
            <AlertCircle className="w-8 h-8" />
          </div>
          <div>
            <h4 className="font-bold text-[#2C2A28] mb-1">Transparencia y Legalidad</h4>
            <p className="text-sm text-[#5A5652] leading-relaxed">
              El sorteo se realizará en vivo a través de nuestra página de Facebook e Instagram el 13 de mayo. Todos los fondos recaudados se destinan íntegramente a los gastos veterinarios de Taylor. ¡Gracias por creer en su recuperación!
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}


