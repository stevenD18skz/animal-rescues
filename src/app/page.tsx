import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import HowToHelp from "@/components/HowToHelp";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#2C2A28] font-sans selection:bg-[#D36B42] selection:text-[#F4F1EA]">
      <Header />
      <main>
        <Hero />
        <HowToHelp />
        <Story />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
