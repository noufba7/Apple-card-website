import lumeIcon from "@/assets/lume-icon.png";
import appScreen1 from "@/assets/app-screen-1.png";
import appScreen2 from "@/assets/app-screen-2.png";
import appScreen3 from "@/assets/app-screen-3.png";
import { Button } from "@/components/ui/button";

const LumeShowcase = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <img 
              src={lumeIcon} 
              alt="Lume App Icon" 
              className="w-24 h-24 md:w-28 md:h-28 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-8">
            Lume
          </h2>
          
          <div className="">
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Making skincare smart and simple through intelligent technology
            </p>
          </div>
          
          <p className="text-base bt-12 text-muted-foreground/80 mb-12">
            Our Project
          </p>
        </div>

        {/* App Screenshots */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <img 
              src={appScreen1} 
              alt="Lume App - Routines Screen" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <img 
              src={appScreen2} 
              alt="Lume App - Skin Analysis" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <img 
              src={appScreen3} 
              alt="Lume App - Product Recommendations" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center gap-4">
            <a
              href="https://github.com/noufba7/Lume-apple-academy-foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg"
                className="text-lg px-10 py-6 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                View Project on GitHub
              </Button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LumeShowcase;
