import { GitCompareArrows, Heart, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1817] text-[#F4F1EA] pt-20 pb-10 border-t-8 border-[#D36B42]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo & Slogan */}
          <div className="space-y-6">
            <div className="text-3xl font-serif font-bold text-[#F4F1EA] tracking-tight">
              Taylor's<span className="text-[#D36B42]"> Hope</span>
            </div>
            <p className="text-[#A39E98] leading-relaxed max-w-xs">
              Dedicados a transformar la vida de una gatita valiente a través de la tecnología y la solidaridad.
            </p>
            <div className="flex gap-5">
              <a href="https://github.com/stevenD18skz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D36B42] hover:scale-110 transition-all duration-300 group">
                <GitCompareArrows className="w-5 h-5 text-[#A39E98] group-hover:text-white" />
              </a>
              <a href="https://github.com/Monica-Cortes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D36B42] hover:scale-110 transition-all duration-300 group">
                <GitCompareArrows className="w-5 h-5 text-[#A39E98] group-hover:text-white" />
              </a>
              <a href="https://wa.me/573243892368" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#3F787A] hover:scale-110 transition-all duration-300 group">
                <Heart className="w-5 h-5 text-[#A39E98] group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Our Mission / Student Context */}
          <div className="space-y-6 md:col-span-2 bg-white/5 p-8 rounded-3xl border border-white/10">
            <div className="flex items-center gap-3 text-[#E5A93D]">
              <Code2 className="w-6 h-6" />
              <h3 className="font-bold text-lg uppercase tracking-widest">Sobre el Proyecto</h3>
            </div>
            <div className="space-y-4">
              <p className="text-[#F4F1EA] text-lg font-serif">
                "No podemos costear sus cirugías, pero podemos construirle un megáfono digital."
              </p>
              <p className="text-[#A39E98] leading-relaxed">
                Este sitio web es una iniciativa de <strong>dos estudiantes de Ingeniería de Sistemas</strong>. 
                Aunque nuestra situación económica como estudiantes nos impide cubrir los altos costos médicos de Taylor, 
                hemos decidido aportar lo que mejor sabemos hacer: <strong>tecnología con propósito</strong>.
              </p>
              <p className="text-[#A39E98] leading-relaxed">
                Cada línea de código en este portal ha sido escrita para asegurar que la historia de Taylor llegue a corazones generosos. 
                Gracias por ser parte de este puente entre la necesidad y la ayuda.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#5A5652]">
          <p>
            © {new Date().getFullYear()} Taylor's Hope • Desarrollado por estudiantes para Taylor.
          </p>
          <div className="flex gap-8">
            <a href="#help" className="hover:text-[#D36B42] transition-colors">Donar Ahora</a>
            <a href="#story" className="hover:text-[#D36B42] transition-colors">Nuestra Historia</a>
            <a href="#gallery" className="hover:text-[#D36B42] transition-colors">Galería</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
