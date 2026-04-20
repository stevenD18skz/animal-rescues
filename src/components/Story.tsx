export default function Story() {
  return (
    <section id="story" className="bg-[#EAE4D9] py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-center gap-16">
        <div className="flex-1 space-y-6 animate-fade-in-up" style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2C2A28]">
            La Historia de Taylor
          </h2>
          <div className="space-y-4 text-lg text-[#5A5652] leading-relaxed">
            <p>
              Taylor fue encontrada sola y vulnerable. Al rescatarla y brindarle atención médica, el diagnóstico fue desgarrador: tiene tumores cancerígenos que requieren tratamiento inmediato y cirugía especializada.
            </p>
            <p>
              Pero Taylor es una luchadora. A pesar del malestar, nunca ha dejado de ronronear. Es una gatita inmensamente cariñosa, que amasa sus cobijas y busca constantemente el calor y cariño humano. Tiene unas enormes ganas de vivir.
            </p>
            <p>
              Su camino a la recuperación será un proceso, pero con los cuidados oncológicos necesarios, Taylor puede tener una calidad de vida maravillosa. Por eso, hemos iniciado esta campaña de ayuda para darle la oportunidad que nunca tuvo.
            </p>
          </div>
        </div>
        <div className="flex-1 w-full relative animate-fade-in" style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 40%' }}>
          <div className="aspect-video rounded-3xl overflow-hidden shadow-xl border-8 border-[#F4F1EA] relative z-10 group bg-black">
             {/* Cambia src="/video1.mp4" por el nombre exacto de tu video */}
             <video
              src="/video1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="absolute -left-6 -bottom-6 w-full h-full border-4 border-[#D36B42] rounded-3xl z-0 transition-transform duration-500 hover:-translate-x-2 hover:translate-y-2"></div>
          <p className="text-center text-sm text-[#5A5652] mt-8 italic font-serif relative z-10">
            Taylor en sus primeros días de rescate, recuperando fuerzas.
          </p>
        </div>
      </div>
    </section>
  );
}
