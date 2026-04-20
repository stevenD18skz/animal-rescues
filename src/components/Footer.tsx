export default function Footer() {
  return (
    <footer className="bg-[#1A1817] text-[#A39E98] py-12 text-center border-t-8 border-[#D36B42]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-serif font-bold text-[#F4F1EA] hover:text-[#D36B42] transition-colors duration-300">
          Taylor's Hope
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-[#E5A93D] transition-all duration-300">Instagram</a>
          <a href="#" className="hover:text-[#E5A93D] transition-all duration-300">Facebook</a>
          <a href="https://wa.me/573243892368?text=Hola,%20vengo%20desde%20la%20pagina%20de%20Taylor" target="_blank" rel="noopener noreferrer" className="hover:text-[#E5A93D] transition-all duration-300">WhatsApp</a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Ayudando a Taylor. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
