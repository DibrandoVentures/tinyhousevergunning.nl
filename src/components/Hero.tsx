import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import tinySolarPanels from "@/assets/tiny-solar-panels.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative bg-primary overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-90"></div>
      
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground">
            <p className="text-sm uppercase tracking-wider text-primary-foreground/70 mb-2">
              Actueel tot eind 2025
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tiny house 2026: nieuwe regels op eigen erf
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              Vanaf 2026 komt er meer ruimte voor tiny houses op eigen erf. Met de Wet versterking regie volkshuisvesting 
              wil de overheid het makkelijker maken om vergunningsvrij een mantelzorg- of familiewoning te plaatsen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                variant="secondary" 
                onClick={() => scrollToSection("artikel")} 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg"
              >
                Lees de volledige gids
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <img 
              src={tinySolarPanels} 
              alt="Moderne tiny house met zonnepanelen in groene omgeving" 
              className="rounded-3xl shadow-2xl w-full h-auto" 
            />
          </div>
        </div>
      </div>

      <div className="h-12 bg-background rounded-t-[3rem] relative z-10"></div>
    </section>
  );
};

export default Hero;
