import Hero from "@/components/Hero";
import LumeShowcase from "@/components/LumeShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <LumeShowcase />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
