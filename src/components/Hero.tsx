import { Button } from "@/components/ui/button";
import { ArrowDown, FileCheck } from "lucide-react";
import tinyHouseHero from "@/assets/tiny-house-hero.jpg";

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${tinyHouseHero})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-8">
            <FileCheck className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">Vergunningsgids voor tiny houses</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Tiny house vergunning: wanneer nodig en hoe regel je het slim?
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Niet elk tiny house is vergunningsvrij. Zeker als je er écht in wilt wonen, een nieuw huis op een kavel wilt plaatsen 
            of meerdere tiny houses op één terrein wilt neerzetten, kom je bijna altijd uit bij een vergunningstraject.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("artikel")} 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl px-8"
            >
              Lees de volledige gids
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { label: "Stappenplan", value: "6 stappen" },
              { label: "Scenario's", value: "4 types" },
              { label: "FAQ's", value: "7 vragen" },
              { label: "Fouten vermijden", value: "5 tips" },
            ].map((stat, index) => (
              <div key={index} className="bg-background/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20">
                <p className="text-2xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-sm text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;