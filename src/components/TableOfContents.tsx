import { FileCheck, Scale, MapPin, ListChecks, AlertTriangle, HelpCircle, BookOpen, ExternalLink } from "lucide-react";

const TableOfContents = () => {
  const sections = [
    { id: "wanneer-vergunning", label: "Wanneer vergunning?", icon: FileCheck, description: "Situaties waarin je vergunning nodig hebt" },
    { id: "verschil", label: "Vrij vs. plichtig", icon: Scale, description: "Het echte verschil uitgelegd" },
    { id: "regels", label: "Ruimtelijk & bouw", icon: MapPin, description: "Twee lagen van regelgeving" },
    { id: "scenarios", label: "Scenario's", icon: BookOpen, description: "4 typische tiny house situaties" },
    { id: "stappenplan", label: "6 stappen", icon: ListChecks, description: "Van idee naar vergunning" },
    { id: "fouten", label: "Fouten", icon: AlertTriangle, description: "5 veelgemaakte fouten" },
    { id: "faq", label: "FAQ", icon: HelpCircle, description: "Veelgestelde vragen" },
  ];

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
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold mb-4">In deze gids ontdek je</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Alles over wanneer je een vergunning nodig hebt, hoe het proces verloopt en hoe je fouten voorkomt.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group bg-card rounded-xl p-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-border/50 text-left"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <section.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{section.label}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{section.description}</p>
              </button>
            ))}
          </div>

          {/* External links */}
          <div className="bg-card rounded-2xl p-6 border border-border/50">
            <h3 className="font-semibold mb-4 text-center">Handige verdiepingslinks</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {externalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="inline-flex items-center gap-2 bg-secondary/50 hover:bg-secondary px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  <span>→ {link.name}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;