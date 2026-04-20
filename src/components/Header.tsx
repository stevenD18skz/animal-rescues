import Link from "next/link";

export default function Header() {
  return (
    <header className="px-6 py-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto animate-fade-in-up">
      <div className="text-2xl font-serif font-bold text-[#D36B42] tracking-tight hover:scale-105 transition-transform duration-300">
        Taylor's Hope
      </div>
      <nav className="hidden md:flex gap-8 font-medium">
        <Link href="#story" className="hover:text-[#D36B42] hover:-translate-y-1 transition-all duration-300">Su Historia</Link>
        <Link href="#help" className="hover:text-[#D36B42] hover:-translate-y-1 transition-all duration-300">Cómo Ayudar</Link>
        <Link href="#gallery" className="hover:text-[#D36B42] hover:-translate-y-1 transition-all duration-300">Galería</Link>
      </nav>
      <a 
        href="https://linktr.ee/Ayudagatica" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#3F787A] hover:bg-[#2A5253] text-[#F4F1EA] px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        Ayudar a Taylor
      </a>
    </header>
  );
}
