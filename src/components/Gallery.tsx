export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#2C2A28] text-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-12">
        <h2 className="text-4xl font-serif font-bold text-[#E5A93D] animate-fade-in-up" style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}>
          Momentos de Taylor
        </h2>
        <p className="text-lg text-[#A39E98] max-w-2xl mx-auto animate-fade-in-up" style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}>
          Un vistazo a la dulce personalidad de Taylor. Pronto reemplazaremos estos espacios con sus propios videos y fotos.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1974&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1936&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1915&auto=format&fit=crop"
          ].map((src, i) => (
            <div 
              key={i} 
              className="aspect-square rounded-3xl overflow-hidden border-2 border-[#5A5652] opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-105 hover:border-[#E5A93D] animate-fade-in-up"
              style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}
            >
              <img src={src} alt="Galería de Taylor" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <p className="text-[#A39E98] text-sm italic pt-4">
          *(Imágenes representativas por ahora)*
        </p>
      </div>
    </section>
  );
}
