import { Heart, Home, Smile } from "lucide-react";

export default function HowToHelp() {
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
        {/* Card 1 */}
        <div 
          className="bg-[#D36B42] p-8 rounded-3xl shadow-lg hover:shadow-2xl  transition-all duration-300 flex flex-col items-start relative overflow-hidden group animate-fade-in-up" 
          style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}
        >
          <div className="absolute -right-12 -top-12 w-40 h-40 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
            <Heart className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
          <h3 className="text-2xl font-serif font-bold mb-4 text-[#F4F1EA]">1. Donar</h3>
          <p className="text-[#EAE4D9] mb-8 flex-1 relative z-10">
            Los tratamientos oncológicos y cirugías son de alto costo. Tu aporte económico nos permite pagar sus facturas veterinarias y medicamentos.
          </p>
          <a href="https://linktr.ee/Ayudagatica" target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-[#F4F1EA] text-[#D36B42] py-3 rounded-xl font-medium hover:bg-white transition-colors relative z-10 shadow-md">
            Donar Ahora
          </a>
        </div>

        {/* Card 2 */}
        <div 
          className="bg-[#3F787A] p-8 rounded-3xl shadow-lg hover:shadow-2xl  transition-all duration-300 flex flex-col items-start relative overflow-hidden group animate-fade-in-up"
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
          className="bg-[#6B7A50] p-8 rounded-3xl shadow-lg hover:shadow-2xl  transition-all duration-300 flex flex-col items-start relative overflow-hidden group animate-fade-in-up"
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
      </div>
    </section>
  );
}
