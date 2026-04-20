import { Heart } from "lucide-react";

export default function Story() {
  const timelineEvents = [
    {
      step: "01",
      date: "17 de Abril, 2026",
      title: "El Encuentro",
      description: "Encontramos a la gatica rondando por Ciudad 2000. Estaba muy perdida, sucia y con muchísima hambre. Nos acercamos a ella y le dimos comida.",
      media: { type: "image", src: "/taylor/taylor-image-3.jpeg" }
    },
    {
      step: "02",
      date: "18 de Abril, 2026",
      title: "Diagnóstico Médico",
      description: "Rescatamos oficialmente a la gatica y la llevamos al veterinario. Allí le hicieron una evaluación general y le descubrieron los tumores cancerígenos.",
      media: { type: "image", src: "/taylor/taylor-image-4.jpeg" }
    },
    {
      step: "03",
      date: "19 de Abril, 2026",
      title: "Primeros Cuidados",
      description: "Se le dieron ayudas primarias: se le dio buena comida, bebida, se bañó y se limpió. Luego, fue trasladada a un hogar de paso para ponerse a la espera de la cirugía de extirpación.",
      media: { type: "video", src: "/taylor/taylor-video-2.mp4" }
    },
    {
      step: "04",
      date: "El Futuro...",
      title: "La Historia por Venir",
      description: "La cirugía y la recuperación serán largas, pero no nos rendimos. Con tu ayuda, el próximo capítulo será su sanación y la búsqueda de su familia definitiva.",
      media: null
    }
  ];

  return (
    <section id="story" className="bg-[#EAE4D9] py-24 overflow-hidden">
      {/* Parte Inicial de la Historia */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-center gap-16 mb-32">
        <div className="w-full md:w-5/12 space-y-8 animate-fade-in-up" style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2C2A28] leading-tight">
            La Historia de Taylor
          </h2>
          <div className="space-y-6 text-xl text-[#5A5652] leading-relaxed">
            <p>
              Taylor fue encontrada sola y vulnerable. Al rescatarla y brindarle atención médica, el diagnóstico fue desgarrador: tiene tumores cancerígenos que requieren tratamiento inmediato y cirugía especializada.
            </p>
            <p>
              Pero Taylor es una luchadora. A pesar del malestar, nunca ha dejado de ronronear. Es una gatita inmensamente cariñosa, que amasa sus cobijas y busca constantemente el calor y cariño humano. Tiene unas enormes ganas de vivir.
            </p>
            <p>
              Su camino a la recuperación será un proceso, pero con los cuidados oncológicos necesarios, puede tener una calidad de vida maravillosa. Conoce cómo ha sido su proceso hasta ahora:
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-7/12 relative animate-fade-in" style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 40%' }}>
          <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-[#F4F1EA] relative z-10 group bg-black">
             <video
              src="/taylor/taylor-video-12.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="absolute -left-8 -bottom-8 w-full h-full border-4 border-[#D36B42] rounded-[2.5rem] z-0 transition-transform duration-500 hover:-translate-x-2 hover:translate-y-2"></div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto px-6 mt-12">
        {/* Línea Central (Punteada) */}
        <div className="absolute left-[47px] md:left-1/2 top-0 bottom-0 border-l-4 border-dotted border-[#D36B42] opacity-40 md:-translate-x-1/2"></div>
        
        <div className="space-y-20 md:space-y-32">
          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                
                {/* Círculo con Número */}
                <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-[#EAE4D9] border-4 border-[#D36B42] flex items-center justify-center z-10 shadow-md">
                  <span className="font-serif font-bold text-[#D36B42]">{event.step}</span>
                </div>

                {/* Contenido (Texto) */}
                <div className={`w-full md:w-5/12 pl-24 pt-2 md:pt-0 md:pl-0 animate-fade-in-up ${isEven ? 'md:text-right' : 'md:text-left'}`} style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}>
                  <span className="text-[#D36B42] font-bold tracking-widest text-sm uppercase">{event.date}</span>
                  <h3 className="text-3xl font-serif font-bold text-[#2C2A28] mt-2 mb-4">{event.title}</h3>
                  <p className="text-[#5A5652] text-lg leading-relaxed">{event.description}</p>
                </div>

                {/* Multimedia (Imagen/Video) */}
                <div className={`w-full md:w-5/12 pl-24 md:pl-0 animate-fade-in-up`} style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}>
                  {event.media ? (
                    <div className="aspect-square rounded-full overflow-hidden border-8 border-[#F4F1EA] shadow-xl relative group bg-black">
                      {event.media.type === 'image' ? (
                        <img src={event.media.src} alt={event.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                      ) : (
                        <video src={event.media.src} autoPlay muted loop playsInline className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                      )}
                    </div>
                  ) : (
                    <div className="aspect-square rounded-full border-8 border-[#F4F1EA] shadow-xl bg-[#6B7A50] flex flex-col items-center justify-center text-white p-8 text-center relative group overflow-hidden">
                       <div className="absolute inset-0 bg-[#3F787A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                       <Heart className="w-16 h-16 mb-4 relative z-10 text-white" />
                       <span className="font-serif font-bold text-xl relative z-10">Esperando su final feliz...</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
