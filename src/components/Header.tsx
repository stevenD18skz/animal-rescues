import Link from "next/link";

export default function Header() {
  return (
    <header className="px-6 py-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto animate-fade-in-up">
      <div className="text-2xl font-serif font-bold text-[#D36B42] tracking-tight hover:scale-105 transition-transform duration-300">
        Taylor's Hope
      </div>
      <nav className="hidden md:flex gap-8 font-medium">
        <Link href="#story" className="hover:text-[#D36B42]  transition-all duration-300">Su Historia</Link>
        <Link href="#help" className="hover:text-[#D36B42]  transition-all duration-300">Cómo Ayudar</Link>
        <Link href="#gallery" className="hover:text-[#D36B42]  transition-all duration-300">Galería</Link>
      </nav>
      <div className="flex items-center gap-4">
        {/* Redes Sociales */}
        <div className="hidden md:flex items-center gap-3 border-r border-[#D36B42]/30 pr-4 mr-2">
          <a href="https://www.tiktok.com/@ayudaamanchitas" target="_blank" rel="noopener noreferrer" className="text-[#5A5652] hover:text-[#D36B42] transition-colors" title="TikTok">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
          </a>
          <a href="https://www.facebook.com/people/Ayuda-para-Taylor/61567591735239/" target="_blank" rel="noopener noreferrer" className="text-[#5A5652] hover:text-[#D36B42] transition-colors" title="Facebook">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" /></svg>
          </a>
          <a href="https://wa.me/573243892368?text=Hola%20tengo%20inter%C3%A9s%20en%20ayudar%20a%20la%20gatita%20Taylor." target="_blank" rel="noopener noreferrer" className="text-[#5A5652] hover:text-[#D36B42] transition-colors" title="Canal de WhatsApp">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
          </a>
        </div>
        
        <a 
          href="https://linktr.ee/Ayudagatica" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#3F787A] hover:bg-[#2A5253] text-[#F4F1EA] px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
        >
          Ayudar a Taylor
        </a>
      </div>
    </header>
  );
}
