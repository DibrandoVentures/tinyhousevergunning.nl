import { ExternalLink } from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps = {}) => {
  const currentYear = new Date().getFullYear();
  
  const externalLinks = [
    { name: "tinyhousewet.nl", url: "https://tinyhousewet.nl" },
    { name: "tinyhousevergunningsvrij.nl", url: "https://tinyhousevergunningsvrij.nl" },
    { name: "tinyhouseopeigengrond.nl", url: "https://tinyhouseopeigengrond.nl" },
    { name: "tinyhousescompleet.nl", url: "https://tinyhousescompleet.nl" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={`bg-navy text-navy-dark py-12 border-t border-border ${className || ''}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">tinyhouse2026.nl</h3>
            <p className="text-sm text-navy-dark/80">
              Actuele informatie over de nieuwe regels voor tiny houses op eigen erf vanaf 2026.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-sm text-navy-dark/80 hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("artikel")}
                className="block text-sm text-navy-dark/80 hover:text-primary transition-colors"
              >
                De regels
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Gerelateerde sites</h4>
            <div className="space-y-2">
              {externalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-navy-dark/80 hover:text-primary transition-colors"
                >
                  {link.name}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/20 text-center text-sm text-navy-dark/60">
          <p>© {currentYear} tinyhouse2026.nl - Alle rechten voorbehouden</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
