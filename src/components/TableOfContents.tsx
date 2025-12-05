import { FileText, Scale, Home, ClipboardList, HelpCircle, BookOpen } from "lucide-react";

const TableOfContents = () => {
  const sections = [
    { id: "stand-van-zaken", label: "Stand van zaken", icon: FileText, description: "Waar staan we eind 2025?" },
    { id: "wat-verandert", label: "Wat verandert er?", icon: Scale, description: "Mantelzorg- en familiewoningen" },
    { id: "regels", label: "De regels", icon: ClipboardList, description: "Vergunningsvrije voorwaarden" },
    { id: "vergelijking", label: "Nu vs. 2026", icon: BookOpen, description: "Vergelijking oude en nieuwe regels" },
    { id: "voorbereiding", label: "Voorbereiding", icon: Home, description: "5 stappen om je voor te bereiden" },
    { id: "faq", label: "FAQ", icon: HelpCircle, description: "Veelgestelde vragen" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Snel naar</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group bg-background rounded-xl p-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-border/50 text-left"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <section.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{section.label}</h3>
              <p className="text-xs text-muted-foreground line-clamp-2">{section.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;
