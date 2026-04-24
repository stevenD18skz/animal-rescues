import Link from "next/link";

export default function Header() {
  return (
    <header className="px-6 py-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto animate-fade-in-up">
      <Link href="/" className="flex items-center gap-3 text-2xl font-serif font-bold text-[#D36B42] tracking-tight hover:scale-105 transition-transform duration-300">
        <img src="/cat_icon_nina.svg" alt="Ícono de Taylor" className="w-10 h-10" />
        Taylor's Hope
      </Link>
      <nav className="hidden md:flex gap-8 font-medium">
        <Link href="#raffle" className="text-[#D63384] hover:text-[#FF6B9D] font-bold transition-all duration-300">Rifa</Link>
        <Link href="#help" className="hover:text-[#D36B42]  transition-all duration-300">Cómo Ayudar</Link>
        <Link href="#story" className="hover:text-[#D36B42]  transition-all duration-300">Su Historia</Link>
        <Link href="#gallery" className="hover:text-[#D36B42]  transition-all duration-300">Galería</Link>
      </nav>
      <div className="flex items-center gap-4">
        {/* Redes Sociales */}
        <div className="hidden md:flex items-center gap-3 border-r border-[#D36B42]/30 pr-4 mr-2">
          <a href="https://instagram.com/ayudaamanchitas" target="_blank" rel="noopener noreferrer" className="text-[#5A5652] hover:text-[#D36B42] transition-colors" title="Instagram">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://www.tiktok.com/@ayudaamanchitas" target="_blank" rel="noopener noreferrer" className="text-[#5A5652] hover:text-[#D36B42] transition-colors" title="TikTok">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
          </a>
          <a href="https://www.facebook.com/people/Ayuda-para-Taylor/61567591735239/" target="_blank" rel="noopener noreferrer" className="text-[#5A5652] hover:text-[#D36B42] transition-colors" title="Facebook">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
        </div>
        
        <Link 
          href="#help" 
          className="bg-[#3F787A] hover:bg-[#2A5253] text-[#F4F1EA] px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
        >
          Ayudar a Taylor
        </Link>
      </div>
    </header>
  );
}
