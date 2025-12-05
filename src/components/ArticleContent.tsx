import { AlertTriangle, ExternalLink, CheckCircle, Building2, Users, Ruler, ArrowUp, FileCheck, Clock, Home } from "lucide-react";

// Images
import tinyCommunityImage from "@/assets/tiny-community.jpg";
import tinyErfImage from "@/assets/tiny-erf.png";
import wetTinyImage from "@/assets/wet-tiny.png";
import mantelzorgImage from "@/assets/mantelzorg.png";
import kostenImage from "@/assets/kosten-tiny.png";
import caringHandsImage from "@/assets/caring-hands.png";
import blueprintImage from "@/assets/tiny-blueprint.png";
import tinyPergolaImage from "@/assets/tiny-pergola-garden.jpg";
import tinyModernDeckImage from "@/assets/tiny-modern-deck.jpg";
const SourceLink = ({
  url,
  text
}: {
  url: string;
  text: string;
}) => <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:text-primary/80 underline text-sm">
    {text}
    <ExternalLink className="h-3 w-3" />
  </a>;
const ArticleContent = () => {
  return <article className="pb-12">
      {/* Intro Section with side image */}
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Veel mensen willen een klein huis op eigen erf: voor ouders, (volwassen) kinderen, of iemand die zorg
              nodig heeft. Tot nu toe zit je dan vaak in een doolhof van bestemmingsplannen, vergunningen en
              uitzonderingen.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Vanaf 2026 komt er meer ruimte. Met de <strong>Wet versterking regie volkshuisvesting (Wvrv)</strong> en
              een nieuw Besluit daaronder wil de overheid het mogelijk maken om onder voorwaarden vergunningsvrij een
              mantelzorgwoning of familiewoning op eigen erf te plaatsen.
              <span className="block mt-1 text-sm"></span>
            </p>

            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-6 mt-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Belangrijk</p>
                  <p className="text-amber-700 dark:text-amber-300">
                    De grote lijnen liggen vast, maar een deel is nog ontwerp / in behandeling bij de Eerste Kamer en in
                    besluiten. Ik geef dus steeds aan wat nu al geldt, wat voorgesteld is en wat nog kan verschuiven.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <img src={tinyErfImage} alt="Rode tiny house op eigen erf met groene omgeving" className="rounded-2xl shadow-lg w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* Section 1 - Stand van zaken with background image */}
      <section id="stand-van-zaken" className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url(${blueprintImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }} />
        <div className="absolute inset-0 bg-muted/60" />

        <div className="container relative z-10 mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Stand van zaken: waar staan we eind 2025?
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  De Wet versterking regie volkshuisvesting
                </h3>
                <p className="text-muted-foreground mb-4">
                  Geeft Rijk, provincies en gemeenten extra instrumenten om te sturen op hoeveel, waar en voor wie er
                  wordt gebouwd, met als doel ieder jaar ca. 100.000 woningen te realiseren, waarvan 2/3 betaalbaar.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>3 juli 2025: aangenomen door Tweede Kamer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-amber-600" />
                    <span>Nu: in behandeling bij Eerste Kamer</span>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" /> |{" "}
                  <SourceLink url="https://eerstekamer.nl" text="eerstekamer.nl" />
                </div>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50">
                <h3 className="text-lg font-semibold text-foreground mb-4">1.2 Het onderliggende Besluit (ontwerp)</h3>
                <p className="text-muted-foreground mb-4">
                  De details over vergunningsvrij bouwen staan in het{" "}
                  <strong>Besluit versterking regie volkshuisvesting</strong> (AMvB).
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• April 2025: opnieuw in internetconsultatie geweest</li>
                  <li>• Familiewoningen op eigen erf worden vergunningsvrij</li>
                  <li>• Consultatie afgerond, verdere uitwerking volgt</li>
                </ul>
                <div className="mt-4 text-sm">
                  <SourceLink url="https://rijksoverheid.nl" text="rijksoverheid.nl" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <img src={wetTinyImage} alt="Wetgeving en regelgeving voor tiny houses" className="rounded-2xl shadow-lg w-full h-full object-cover min-h-[300px]" />
            </div>
          </div>

          <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
            <p className="font-medium text-foreground mb-2">Het doel blijft:</p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Meer regie op woningbouw</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Kortere procedures</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Extra ruimte bijzondere woonvormen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image break */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <img src={tinyModernDeckImage} alt="Modern tiny house met houten terras" className="rounded-2xl shadow-lg w-full h-64 md:h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* Section 2 - Wat verandert er */}
      <section id="wat-verandert" className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Wat verandert er voor tiny houses?</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="rounded-xl p-6 border border-primary bg-primary">
                <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">
                  Nu al veel mogelijk voor mantelzorgwoning
                </h3>
                <p className="mb-4 text-secondary-foreground">
                  Onder de huidige regels (Omgevingswet + "bruidsschat") kan een mantelzorgwoning in veel gevallen nu al
                  vergunningsvrij worden gebouwd als bijbehorend bouwwerk.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white/50 dark:bg-white/5 rounded-lg p-3">
                    <p className="font-medium text-sm text-accent-foreground">Op het achtererf</p>
                  </div>
                  <div className="bg-white/50 dark:bg-white/5 rounded-lg p-3">
                    <p className="font-medium text-sm text-accent-foreground">Max. oppervlakte bijgebouwen</p>
                  </div>
                  <div className="bg-white/50 dark:bg-white/5 rounded-lg p-3">
                    <p className="font-medium text-sm text-accent-foreground">Voldoen aan Bbl-eisen</p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-secondary-foreground">
                  <SourceLink url="https://iplo.nl" text="Informatiepunt Leefomgeving" />{" "}
                  | <SourceLink url="https://vng.nl" text="vng.nl" />
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <h3 className="text-xl font-semibold text-foreground mb-4">Nieuw: familiewoning op eigen erf</h3>
                <p className="text-muted-foreground mb-4">
                  Niet alleen mantelzorgwoningen, maar óók <strong>familiewoningen voor eerstegraads familie</strong>
                  (ouders/kinderen, inclusief adoptie- en pleegrelaties) kunnen vergunningsvrij worden.
                </p>
                <div className="bg-background rounded-lg p-4 mt-4">
                  <p className="font-medium text-primary mb-2">Voor tiny houses betekent dit:</p>
                  <p className="text-foreground">
                    Een compact huis in de tuin voor ouders, kinderen of pre-mantelzorg schuift van "grijs gebied" naar
                    een erkende vergunningsvrije vorm.
                  </p>
                </div>
                <div className="mt-4 text-sm">
                  <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <img src={mantelzorgImage} alt="Mantelzorg en familiebanden - moeder en dochter" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
              <img src={caringHandsImage} alt="Zorgende handen - mantelzorg symboliek" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - De regels */}
      <section id="regels" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <FileCheck className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">De voorgenomen vergunningsvrije regels</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Waar mag het staan?</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Bijbehorend bouwwerk bij een woning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Op het achtererf</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5" />
                  <span>Niet op het voorerf</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Voor wie?</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>
                    <strong>Mantelzorgwoning:</strong> zorgbehoevende of mantelzorger
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>
                    <strong>Familiewoning:</strong> eerstegraads familie
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Ook voor pre-mantelzorg</span>
                </li>
              </ul>
              <div className="mt-3 text-sm">
                <SourceLink url="https://volkshuisvestingnederland.nl" text="volkshuisvestingnederland.nl" />
              </div>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <Ruler className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Maximale oppervlakte</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="bg-muted/50 rounded-lg p-2">
                  <p className="font-medium">≤ 100 m²</p>
                  <p className="text-muted-foreground text-xs">Max. 50% bebouwd</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-2">
                  <p className="font-medium">100–300 m²</p>
                  <p className="text-muted-foreground text-xs">50 m² + 20% boven 100 m²</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-2">
                  <p className="font-medium">&gt; 300 m²</p>
                  <p className="text-muted-foreground text-xs">90 m² + 10%, max. 100 m²</p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <ArrowUp className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Maximale hoogte</h3>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>
                    Maximaal <strong>5 meter</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                  <span>Hoger dan 3m? Schuin dak</span>
                </div>
              </div>
              <div className="bg-primary/5 rounded-lg p-2 mt-3">
                <p className="text-xs text-foreground">Eén woonlaag met vide of compact huisje met kap is haalbaar.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50">
              <h3 className="font-semibold mb-3">Meerdere woningen mogelijk</h3>
              <p className="text-sm text-muted-foreground">
                Je kunt meerdere mantelzorg- en familiewoningen op je achtererf plaatsen (bijv. voor ouder én kind),
                maar de totale oppervlakte blijft beperkt tot max. 80–100 m² samen.
              </p>
            </div>

            <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50">
              <h3 className="font-semibold mb-3">Meldplicht in plaats van vergunning</h3>
              <p className="text-sm text-muted-foreground">
                Vergunningsvrij, maar mogelijk wel een informatieplicht. De mantelzorgverklaring verdwijnt
                waarschijnlijk als harde voorwaarde – minder bureaucratie, meer vertrouwen.
              </p>
              <div className="mt-3 text-sm">
                <SourceLink url="https://mantelzorg.nl" text="MantelzorgNL" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tiny house community image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            <img src={tinyCommunityImage} alt="Tiny house community met meerdere tiny houses" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
            <img src={tinyPergolaImage} alt="Luxe tiny house met pergola in de tuin" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      {/* Section 4 - Wat blijft hetzelfde */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Wat blijft hetzelfde, ook in 2026?</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {[{
            title: "Omgevingswet + omgevingsplan blijven de basis",
            desc: "Elke gemeente werkt de landelijke regels lokaal uit."
          }, {
            title: "Technische bouwregels (Bbl) blijven gelden",
            desc: "Veiligheid, gezondheid, brandveiligheid, geluid enz."
          }, {
            title: "Geen vrijbrief voor willekeurige verhuur",
            desc: "Alleen voor mantelzorg en eerstegraads familie."
          }, {
            title: "Gemeenten houden speelruimte",
            desc: "Accenten op parkeerdruk, ruimtelijke kwaliteit mogelijk."
          }].map((item, index) => <div key={index} className="bg-muted/30 rounded-xl p-5 border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Section 5 - Vergelijking */}
      <section id="vergelijking" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Nu vs. na inwerkingtreding</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background rounded-xl p-6 shadow-sm border border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-sm font-bold">
                  Nu
                </span>
                Situatie t/m 2025
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-foreground">Mantelzorgwoning</p>
                  <p className="text-muted-foreground">In veel gemeenten al vergunningsvrij via bruidsschat</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Familiewoning</p>
                  <p className="text-muted-foreground">Vaak via omgevingsvergunning (BOPA)</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Tiny house op eigen erf</p>
                  <p className="text-muted-foreground">Sterk afhankelijk van gemeente: pilots, maatwerk</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  2026
                </span>
                Na inwerkingtreding
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-foreground">Mantelzorgwoning op eigen erf</p>
                  <p className="text-muted-foreground">Landelijk vergunningsvrij onder voorwaarden</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Familiewoning op eigen erf</p>
                  <p className="text-muted-foreground">Nieuwe categorie, eveneens vergunningsvrij</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Procedures</p>
                  <p className="text-muted-foreground">Minder vergunningstrajecten, heldere route naar "ja"</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/30 rounded-xl p-6 mt-6 border border-amber-200 dark:border-amber-800">
            <p className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Let op:</p>
            <p className="text-amber-700 dark:text-amber-300 text-sm">
              De daadwerkelijke ingangsdatum hangt af van de Eerste Kamer, de novelle en publicatie in het Staatsblad.
              Doel is rond 2026, maar een exacte datum kan nog schuiven.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 - Voorbereiding */}
      <section id="voorbereiding" className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Hoe bereid je je nu al voor?</h2>
              </div>

              <div className="space-y-4">
                {[{
                step: 1,
                title: "Check je erf en bestemming",
                content: "Vraag bij de gemeente: bestemming perceel, grenzen bebouwingsgebied, hoeveel m² al bebouwd."
              }, {
                step: 2,
                title: "Bepaal je scenario",
                content: "Familiewoning (kind/ouders zonder zorgvraag) of mantelzorgwoning (met zorgbehoefte). Schrijf op wie er gaat wonen en wat de relatie is."
              }, {
                step: 3,
                title: "Ontwerp binnen de kaders",
                content: "Achtererfgebied, 40–70 m², max. 5 meter hoog met schuin dak, voldoen aan Bbl-eisen."
              }, {
                step: 4,
                title: "Leg je plan bij de gemeente neer",
                content: "Stuur situatietekening, grove plattegrond en uitleg. Verwijs naar het Besluit versterking regie volkshuisvesting."
              }, {
                step: 5,
                title: "Bouw juridisch én praktisch slim",
                content: "Leg alles schriftelijk vast, kies een ervaren bouwer, bouw flexibel zodat de functie later kan verschuiven."
              }].map(item => <div key={item.step} className="bg-background rounded-xl p-6 shadow-sm border border-border/50 flex gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.content}</p>
                    </div>
                  </div>)}
              </div>
            </div>

            <div className="lg:col-span-1 space-y-4">
              <img src={kostenImage} alt="Bouwkosten berekenen voor tiny house" className="rounded-2xl shadow-lg w-full h-auto object-cover" />
              <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                <p className="text-sm font-medium text-foreground">Tip:</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Begin nu al met het verzamelen van informatie over je perceel en de mogelijkheden in jouw gemeente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - FAQ */}
      <section id="faq" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Veelgestelde vragen</h2>

          <div className="space-y-4">
            {[{
            q: "Is het al 100% zeker dat ik in 2026 zonder vergunning mag bouwen?",
            a: "Nog niet. De richting ligt vast, maar de wet is nog bij de Eerste Kamer. Details en exacte datum kunnen nog verschuiven."
          }, {
            q: "Geldt dit alleen binnen de bebouwde kom?",
            a: "Nee, de regels richten zich op wonen op eigen erf bij een woning, ongeacht bebouwde kom."
          }, {
            q: "Kan ik de familiewoning verhuren aan iemand die geen familie is?",
            a: "Nee, de vergunningsvrije regeling is specifiek voor eerstegraads familie en mantelzorg."
          }, {
            q: "Moet een mantelzorgwoning weg als de zorg stopt?",
            a: "Nieuwe regels gaan richting meer flexibiliteit: bouwwerk kan blijven staan, gebruik moet aansluiten bij regels."
          }, {
            q: "Is het slim om te wachten tot alles definitief is?",
            a: "Niet per se. Je kunt nu al veel voorbereiden: erf analyseren, scenario kiezen, ontwerp maken, met gemeente spreken."
          }].map((item, index) => <div key={index} className="bg-background rounded-xl p-6 shadow-sm border border-border/50">
                <h4 className="font-semibold text-foreground mb-2">{item.q}</h4>
                <p className="text-sm text-muted-foreground">{item.a}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Section 8 - Verder lezen */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Verder lezen</h2>

          <p className="text-muted-foreground mb-8">Wil je alles rustig uitpluizen? Ga per deelonderwerp verder:</p>

          <div className="grid gap-4 sm:grid-cols-2">
            {[{
            name: "tinyhousewet.nl",
            url: "https://tinyhousewet.nl",
            desc: "Omgevingswet, omgevingsplan, definities"
          }, {
            name: "tinyhousevergunningsvrij.nl",
            url: "https://tinyhousevergunningsvrij.nl",
            desc: "Focus op vergunningsvrij bouwen"
          }, {
            name: "tinyhouseopeigengrond.nl",
            url: "https://tinyhouseopeigengrond.nl",
            desc: "Bestemmingen, kopen vs. pachten, erfgrenzen"
          }, {
            name: "tinyhousescompleet.nl",
            url: "https://tinyhousescompleet.nl",
            desc: "Overkoepelend stappenplan van droom tot oplevering"
          }].map(link => <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="group bg-background rounded-xl p-6 hover:shadow-md transition-all border border-border/50 hover:border-primary/30">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold text-primary group-hover:underline">{link.name}</h4>
                  <ExternalLink className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">{link.desc}</p>
              </a>)}
          </div>
        </div>
      </section>
    </article>;
};
export default ArticleContent;