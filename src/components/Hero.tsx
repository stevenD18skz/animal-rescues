import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-6 md:px-12 py-12 md:py-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-8 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
        <div className="inline-block bg-[#E5A93D] text-[#2C2A28] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase animate-pulse-slow">
          Urgente: Rescate en Curso
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-[#2C2A28]">
          Una segunda <br/> oportunidad para <span className="text-[#D36B42] inline-block hover:scale-105 transition-transform duration-300">Taylor</span>.
        </h1>
        <p className="text-lg md:text-xl text-[#5A5652] leading-relaxed max-w-xl">
          Rescatada de las calles, Taylor es una gatita valiente que actualmente lucha contra tumores cancerígenos. Necesitamos tu apoyo urgente para salvarla, encontrar un cálido hogar de paso y darle la vida que merece.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a 
            href="https://linktr.ee/Ayudagatica"
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-[#D36B42] hover:bg-[#B35834] text-[#F4F1EA] px-8 py-4 rounded-full text-lg font-medium text-center transition-all duration-300 shadow-lg hover:shadow-xl "
          >
            Hacer una Donación
          </a>
          <Link 
            href="#story" 
            className="border-2 border-[#2C2A28] hover:bg-[#2C2A28] hover:text-[#F4F1EA] text-[#2C2A28] px-8 py-4 rounded-full text-lg font-medium text-center transition-all duration-300 "
          >
            Conoce su Historia
          </Link>
        </div>
      </div>
      <div className="flex-1 w-full relative animate-fade-in" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
        <div className="aspect-4/5 md:aspect-square rounded-[3rem] overflow-hidden relative shadow-2xl group">
          <div className="absolute inset-0 bg-[#D36B42] mix-blend-multiply opacity-10 z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
          <Image
            src="/taylor/taylor-hero.jpeg"
            alt="Taylor - Imagen Promocional"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        {/* Mid-Century Decorative Elements */}
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#E5A93D] rounded-full -z-10 animate-fade-in" style={{ animationDelay: '600ms' }}></div>
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#3F787A] rounded-full opacity-50 -z-10 animate-fade-in" style={{ animationDelay: '700ms' }}></div>
        <div className="absolute top-1/2 -right-12 w-24 h-24 bg-[#6B7A50] rounded-tl-full rounded-bl-full -z-10 animate-fade-in" style={{ animationDelay: '800ms' }}></div>
      </div>
    </section>
  );
}
