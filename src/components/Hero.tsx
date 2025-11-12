import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-black px-6 py-20">
      <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in text-white">
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Nouf Baabbad
          </h1>
          <p className="text-white/80 text-base tracking-wide">
            Apple Developer Academy
          </p>
        </div>

        <div className="flex justify-center pt-6">
          <a href="#contact" className="inline-block">
            <Button
              size="lg"
              className="text-base px-8 py-5 bg-white text-black shadow-sm hover:shadow-md transition-all duration-300"
            >
              Get in Touch
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
