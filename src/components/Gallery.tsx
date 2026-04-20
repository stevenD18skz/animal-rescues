export default function Gallery() {
  const medias = [
    { type: 'image', src: '/taylor/taylor-image-1.jpeg' },
    { type: 'video', src: '/taylor/taylor-video-2.mp4' },
    { type: 'image', src: '/taylor/taylor-image-2.jpeg' },
    { type: 'video', src: '/taylor/taylor-video-3.mp4' },
    { type: 'image', src: '/taylor/taylor-image-3.jpeg' },
    { type: 'video', src: '/taylor/taylor-video-4.mp4' },
    { type: 'image', src: '/taylor/taylor-image-4.jpeg' },
    { type: 'video', src: '/taylor/taylor-video-5.mp4' },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#2C2A28] text-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-12">
        <h2 className="text-4xl font-serif font-bold text-[#E5A93D] animate-fade-in-up" style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}>
          Momentos de Taylor
        </h2>
        <p className="text-lg text-[#A39E98] max-w-2xl mx-auto animate-fade-in-up" style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}>
          Un vistazo a la dulce personalidad de Taylor y su camino de sanación.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {medias.map((media, i) => (
            <div 
              key={i} 
              className="aspect-square rounded-3xl overflow-hidden border-2 border-[#5A5652] opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-105 hover:border-[#E5A93D] animate-fade-in-up bg-black"
              style={{ animationTimeline: 'view()', animationRange: 'entry 10% cover 30%' }}
            >
              {media.type === 'image' ? (
                <img src={media.src} alt="Galería de Taylor" className="w-full h-full object-cover" />
              ) : (
                <video src={media.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
