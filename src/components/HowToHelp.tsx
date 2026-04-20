export default function HowToHelp() {
  return (
    <section id="help" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
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
          className="bg-white p-8 rounded-3xl shadow-sm border border-[#EAE4D9] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start relative overflow-hidden group animate-fade-in-up" 
          style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}
        >
          <div className="w-16 h-16 bg-[#FFF8EE] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
            <svg className="w-8 h-8 text-[#D36B42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-serif font-bold mb-4 text-[#2C2A28]">1. Donar</h3>
          <p className="text-[#5A5652] mb-8 flex-1">
            Los tratamientos oncológicos y cirugías son de alto costo. Tu aporte económico nos permite pagar sus facturas veterinarias y medicamentos.
          </p>
          <button className="w-full bg-[#D36B42] text-[#F4F1EA] py-3 rounded-xl font-medium hover:bg-[#B35834] transition-colors shadow-md hover:shadow-lg">
            Donar Ahora
          </button>
        </div>

        {/* Card 2 */}
        <div 
          className="bg-white p-8 rounded-3xl shadow-sm border border-[#EAE4D9] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start relative overflow-hidden group animate-fade-in-up"
          style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}
        >
          <div className="w-16 h-16 bg-[#F0F5F5] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
            <svg className="w-8 h-8 text-[#3F787A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <h3 className="text-2xl font-serif font-bold mb-4 text-[#2C2A28]">2. Hogar de Paso</h3>
          <p className="text-[#5A5652] mb-8 flex-1">
            Taylor necesita un ambiente tranquilo y limpio donde recuperarse sin estrés. Si tienes un espacio seguro, serás vital para su sanación.
          </p>
          <button className="w-full border-2 border-[#3F787A] text-[#3F787A] py-3 rounded-xl font-medium hover:bg-[#3F787A] hover:text-[#F4F1EA] transition-colors">
            Ofrecer Hogar
          </button>
        </div>

        {/* Card 3 */}
        <div 
          className="bg-[#6B7A50] p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start relative overflow-hidden group animate-fade-in-up"
          style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}
        >
          <div className="absolute -right-12 -top-12 w-40 h-40 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-serif font-bold mb-4 text-[#F4F1EA]">3. Adoptar</h3>
          <p className="text-[#EAE4D9] mb-8 flex-1 relative z-10">
            El objetivo final es encontrar a alguien con un corazón inmenso que quiera adoptar a Taylor y darle amor incondicional por el resto de su vida.
          </p>
          <button className="w-full bg-[#F4F1EA] text-[#6B7A50] py-3 rounded-xl font-medium hover:bg-white transition-colors relative z-10 shadow-md">
            Formulario de Adopción
          </button>
        </div>
      </div>
    </section>
  );
}
