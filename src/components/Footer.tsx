import { ExternalLink } from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps = {}) => {
  const currentYear = new Date().getFullYear();
  
  const externalLinks = [
    { name: "tinyhouseregelgeving.nl", url: "#" },
    { name: "tinyhousevergunningsvrij.nl", url: "#" },
    { name: "tinyhousebestemmingsplan.nl", url: "#" },
    { name: "tinyhousescompleet.nl", url: "#" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={`bg-foreground text-background py-16 ${className || ''}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif font-bold text-2xl mb-4">tinyhousevergunning.nl</h3>
            <p className="text-sm text-background/70 leading-relaxed">
              Alle situaties waarin je wél een vergunning nodig hebt voor een tiny house. 
              Ontdek wanneer je een vergunning nodig hebt en hoe je het slim regelt.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigatie</h4>
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-sm text-background/70 hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("wanneer-vergunning")}
                className="block text-sm text-background/70 hover:text-primary transition-colors"
              >
                Wanneer vergunning?
              </button>
              <button
                onClick={() => scrollToSection("stappenplan")}
                className="block text-sm text-background/70 hover:text-primary transition-colors"
              >
                Stappenplan
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block text-sm text-background/70 hover:text-primary transition-colors"
              >
                FAQ
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Gerelateerde sites</h4>
            <div className="space-y-3">
              {externalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  {link.name}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 text-center text-sm text-background/50">
          <p>© {currentYear} tinyhousevergunning.nl - Alle rechten voorbehouden</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;