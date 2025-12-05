import { AlertTriangle, ExternalLink, CheckCircle, Building2, Users, Home, FileCheck, Clock, MapPin, Scale, ListChecks, XCircle } from "lucide-react";

// Images
import tinyCommunityImage from "@/assets/tiny-community.jpg";
import tinyErfImage from "@/assets/tiny-erf.png";
import tinyInterieurImage from "@/assets/tiny-interieur.jpg";
import tinyWheelsCoupleImage from "@/assets/tiny-wheels-couple.jpg";
import tinyModernDeckImage from "@/assets/tiny-modern-deck.jpg";
import tinyPergolaImage from "@/assets/tiny-pergola-garden.jpg";
const ArticleContent = () => {
  return <article className="pb-16">
      {/* Section 1 - Wanneer vergunning nodig */}
      <section id="wanneer-vergunning" className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                
                <span className="text-sm text-muted-foreground">Wanneer vergunning?</span>
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Wanneer heb je voor een tiny house een vergunning nodig?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Je hebt in de praktijk een vergunning nodig zodra jouw tiny house niet binnen de vergunningsvrije regels valt 
                of als het gebruikt wordt als (hoofd)woning.
              </p>

              <div className="space-y-4">
                {[{
                title: "Tiny house als hoofdwoning",
                desc: "Je tiny house is je echte woning en je wilt je op dat adres inschrijven."
              }, {
                title: "Op een nieuwe of lege kavel",
                desc: "Je koopt een kavel en plaatst daar een tiny house als nieuwe woning."
              }, {
                title: "Meerdere tiny houses op één locatie",
                desc: "Tiny house-buurtje, park of community met meerdere units."
              }, {
                title: "In strijd met de huidige bestemming",
                desc: "De bestemming is agrarisch, natuur of recreatie maar je wilt permanent wonen."
              }, {
                title: "Niet voldoet aan vergunningsvrije grenzen",
                desc: "Te groot, te hoog of op de verkeerde plek."
              }].map((item, index) => <div key={index} className="flex items-start gap-4 p-4 bg-destructive/5 rounded-xl border border-destructive/20">
                    <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>)}
              </div>
            </div>

            <div className="relative">
              <img src={tinyErfImage} alt="Tiny house op eigen erf" className="rounded-3xl shadow-2xl w-full h-auto" />
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-xl border border-border">
                <p className="text-sm text-muted-foreground">Wil je weten wanneer géén vergunning nodig is?</p>
                <a href="#" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">
                  tinyhousevergunningsvrij.nl <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Verschil vergunningsvrij vs plichtig */}
      <section id="verschil" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              
              <span className="text-sm text-muted-foreground">Het verschil</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vergunningsvrij vs. vergunningsplichtig
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Het echte onderscheid zit niet in de grootte, maar in het gebruik.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-3xl p-8 shadow-lg border border-border/50">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Vergunningsvrij</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Alleen bij bepaalde bijgebouwen op het achtererf</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Binnen strikte grenzen (hoogte, m², ligging)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>Ondergeschikt aan een bestaande woning (geen zelfstandige woning)</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary rounded-3xl p-8 shadow-lg text-primary-foreground">
              <div className="w-14 h-14 bg-primary-foreground/20 rounded-2xl flex items-center justify-center mb-6">
                <FileCheck className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Vergunningsplichtig</h3>
              <ul className="space-y-3 text-primary-foreground/90">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-primary-foreground mt-0.5 flex-shrink-0" />
                  <span>Zodra sprake is van een woning of nieuwe ontwikkeling</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-primary-foreground mt-0.5 flex-shrink-0" />
                  <span>Plan dat afwijkt van het omgevingsplan</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-primary-foreground mt-0.5 flex-shrink-0" />
                  <span>Grenzen van vergunningsvrij bouwen overschrijdt</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 bg-card rounded-2xl p-6 border border-border/50 text-center">
            <p className="text-lg font-medium text-foreground">
              <strong>Kort samengevat:</strong> Een tiny house als échte woning betekent in de praktijk: vergunning nodig.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - Ruimtelijke vs Bouwtechnische regels */}
      <section id="regels" className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                
                <span className="text-sm text-muted-foreground">Twee lagen</span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Ruimtelijke regels vs. bouwtechnische regels
              </h2>

              <div className="space-y-8">
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-bold">Ruimtelijke kant: mag het op deze plek?</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground ml-13">
                    <li>• Staat je tiny house op grond met een woonbestemming?</li>
                    <li>• Is het toegestaan om op deze kavel een extra woning te plaatsen?</li>
                    <li>• Voldoet je plan aan regels over bouwvlak, hoogte, afstand, parkeren?</li>
                    <li>• Past het uiterlijk in de omgeving (beeldkwaliteit/welstand)?</li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Dit is vaak de lastigste stap: hier gaat het over beleid, buren en de visie van de gemeente.
                  </p>
                  <div className="mt-4">
                    <a href="#" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">
                      Deep dive op tinyhousebestemmingsplan.nl <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Scale className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-serif text-xl font-bold"> Bouwtechnische kant: is het veilig?</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground ml-13">
                    <li>• Constructief veilig</li>
                    <li>• Brandveilig (vluchtroutes, materialen, installaties)</li>
                    <li>• Voldoende daglicht en ventilatie</li>
                    <li>• Goed geïsoleerd, met passende installaties</li>
                  </ul>
                  <p className="mt-4 text-sm font-medium text-foreground">
                    Een tiny house mag klein zijn, maar moet nog steeds een veilige, gezonde woning zijn.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <img src={tinyInterieurImage} alt="Tiny house interieur" className="rounded-2xl shadow-lg w-full h-auto" />
              <img src={tinyModernDeckImage} alt="Modern tiny house met terras" className="rounded-2xl shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Scenario's */}
      <section id="scenarios" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              
              <span className="text-sm text-muted-foreground">Scenario's</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Typische tiny house-scenario's
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[{
            number: "4.1",
            title: "Eén tiny house als hoofdwoning op eigen grond",
            image: tinyErfImage,
            desc: "Je koopt een kavel en wilt daar één tiny house neerzetten waarin je permanent gaat wonen.",
            conclusion: "Vrijwel altijd een volwaardige omgevingsvergunning nodig (ruimtelijk + bouwtechnisch)."
          }, {
            number: "4.2",
            title: "Klein tiny house achter je woning om in te wonen",
            image: tinyPergolaImage,
            desc: "Je zet een tiny house achter je huidige huis en gaat er fulltime in wonen.",
            conclusion: "Grote kans dat het vergunningplichtig is, ook als het bouwkundig 'vergunningsvrij' lijkt."
          }, {
            number: "4.3",
            title: "Tiny house-buurtje / project",
            image: tinyCommunityImage,
            desc: "Meerdere tiny houses op één terrein, eventueel met gedeelde faciliteiten.",
            conclusion: "Altijd vergunningsplichtig met extra zaken: participatie, verkeer, groen, water."
          }, {
            number: "4.4",
            title: "Tiny house op recreatiebestemming",
            image: tinyWheelsCoupleImage,
            desc: "Je plaatst een tiny house op een recreatiepark of grond met recreatiebestemming.",
            conclusion: "Voor permanente bewoning is een vergunningtraject nodig."
          }].map((scenario, index) => <div key={index} className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border/50">
                <div className="aspect-video overflow-hidden">
                  <img src={scenario.image} alt={scenario.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  
                  <h3 className="font-serif text-xl font-bold mt-2 mb-3">{scenario.title}</h3>
                  <p className="text-muted-foreground mb-4">{scenario.desc}</p>
                  <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                    <p className="text-sm font-medium text-foreground">
                      <strong>Gevolg:</strong> {scenario.conclusion}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Section 5 - Tijdelijke vs Permanente */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              
              <span className="text-sm text-muted-foreground">Vergunning types</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tijdelijke vs. permanente vergunningen
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-3xl p-8 shadow-lg border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold">Tijdelijke vergunning</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Toestemming voor een bepaalde periode, bijvoorbeeld 10–15 jaar.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                  <span className="text-sm">Meer kans dat de gemeente "ja" durft te zeggen</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                  <span className="text-sm">Goed voor pionierslocaties of experimenten</span>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <span className="text-sm">Onzekerheid na afloop</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-lg border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <Home className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-bold">Permanente vergunning</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Volledig ingepast als permanente woning in het omgevingsplan.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                  <span className="text-sm">Duurzame zekerheid</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                  <span className="text-sm">Beter voor financiering en waardevastheid</span>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <span className="text-sm">Traject is vaak zwaarder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Stappenplan */}
      <section id="stappenplan" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              
              <span className="text-sm text-muted-foreground">Stappenplan</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              In 6 stappen naar een tiny house-vergunning
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
            step: 1,
            title: "Jouw plan scherp krijgen",
            content: "Is het 1 tiny house of meerdere? Tijdelijk of permanent? Op welke locatie? Wat is het doel?"
          }, {
            step: 2,
            title: "Bestemming & regels checken",
            content: "Zoek de huidige bestemming op. Kijk of er al tiny house-beleid is in jouw gemeente."
          }, {
            step: 3,
            title: "Vergunningsvrij vs. plichtig bepalen",
            content: "Check of jouw plan in de buurt komt van vergunningsvrij bouwen. Twijfel? Behandel als vergunningsplichtig."
          }, {
            step: 4,
            title: "Vooroverleg met de gemeente",
            content: "Leg je idee, schetsen en globale opzet voor. De gemeente geeft aan of jouw locatie kansrijk is."
          }, {
            step: 5,
            title: "Aanvraag voorbereiden",
            content: "Plattegronden, situatietekening, omschrijving gebruik, onderbouwing en bouwkundige info."
          }, {
            step: 6,
            title: "Vergunning aanvragen",
            content: "Dien je aanvraag in via het Omgevingsloket. Houd rekening met doorlooptijd en eventuele bezwaren."
          }].map(item => <div key={item.step} className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.content}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Section 7 - Veelgemaakte fouten */}
      <section id="fouten" className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-destructive/10 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-destructive">07</span>
              <span className="text-sm text-muted-foreground">Vermijd deze fouten</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Veelgemaakte fouten bij tiny house-vergunningen
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {[{
            num: "7.1",
            title: '"Eerst neerzetten, daarna wel zien"',
            desc: "Risico: handhaving, dwangsommen en in het uiterste geval een sloop- of verwijderingsbevel."
          }, {
            num: "7.2",
            title: 'Tiny house als "schuurtje" vermommen',
            desc: "Een volwaardig mini-huis presenteren als simpel bijgebouw. Als gemeente of buren dit ontdekken, verdwijnt vertrouwen direct."
          }, {
            num: "7.3",
            title: "Geen rekening houden met buren",
            desc: "Geen aandacht voor inkijk, schaduw, parkeren of aanrijroutes. Buren worden verrast bij de officiële procedure."
          }, {
            num: "7.4",
            title: "Te laat starten met de gemeente",
            desc: "Je ontwerpt alles met een bouwer en komt pas bij de gemeente als alles vast ligt. Risico: kostbare wijzigingen."
          }, {
            num: "7.5",
            title: '"Bij gemeente X mocht dit ook"',
            desc: "Elke gemeente maakt eigen afwegingen: jouw gemeente kan streng, coulant of heel specifiek zijn."
          }].map((item, index) => <div key={index} className="flex items-start gap-4 p-6 bg-destructive/5 rounded-2xl border border-destructive/20">
                <span className="text-sm font-bold text-destructive bg-destructive/10 px-3 py-1 rounded-full">{item.num}</span>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Section 8 - FAQ */}
      <section id="faq" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-primary">08</span>
              <span className="text-sm text-muted-foreground">FAQ</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Veelgestelde vragen
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[{
            q: "Heb ik altijd een vergunning nodig voor een tiny house?",
            a: "Nee, niet altijd. Als je tiny house juridisch als bijgebouw telt en binnen de vergunningsvrije regels valt, is een vergunning soms niet nodig. Maar zodra het om een woning gaat, moet je er in de praktijk van uitgaan dat je wel een vergunning nodig hebt."
          }, {
            q: "Hoe weet ik zeker of mijn plan vergunningsplichtig is?",
            a: "Vergelijk je plan met de vergunningsvrije voorwaarden, doe de vergunningcheck in het Omgevingsloket, of laat je plan beoordelen door je gemeente of een adviseur."
          }, {
            q: "Hoelang duurt het vergunningstraject?",
            a: "De standaardprocedure duurt meestal enkele weken, maar bij complexe plannen kan het langer duren door extra onderzoek, overleg en eventuele bezwaren."
          }, {
            q: "Kan ik een tijdelijke vergunning krijgen?",
            a: "Dat kan. Veel gemeenten werken met tijdelijke vergunningen voor tiny houses, bijvoorbeeld voor 10–15 jaar."
          }, {
            q: "Moet mijn tiny house hetzelfde niveau hebben als nieuwbouw?",
            a: "Je moet rekening houden met eisen rond veiligheid, gezondheid, brandveiligheid en energie. Soms is er ruimte voor maatwerk bij tijdelijke projecten."
          }, {
            q: "Wat als de gemeente mijn plan afwijst?",
            a: "Je kunt het plan aanpassen, bezwaar maken tegen het besluit, of onderzoeken of een andere locatie of constructie kansrijker is."
          }, {
            q: "Waar kan ik meer lezen over de regels?",
            a: "Op tinyhouseregelgeving.nl vind je een overzicht van de regels en begrippen. Op tinyhousebestemmingsplan.nl alles over locatie en plannen."
          }].map((item, index) => <div key={index} className="bg-card rounded-2xl p-6 shadow-sm border border-border/50">
                <h4 className="font-semibold text-foreground mb-3">{item.q}</h4>
                <p className="text-sm text-muted-foreground">{item.a}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Van idee naar vergunde tiny house
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Een tiny house bouwen of plaatsen begint niet met hout en schroeven, maar met een plan dat binnen de regels past.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[{
              name: "tinyhouseregelgeving.nl",
              desc: "Regels & begrippen"
            }, {
              name: "tinyhousevergunningsvrij.nl",
              desc: "Wanneer zonder vergunning"
            }, {
              name: "tinyhousebestemmingsplan.nl",
              desc: "Locatie & bestemmingskeuze"
            }, {
              name: "tinyhousescompleet.nl",
              desc: "Types, voorbeelden & kosten"
            }].map(link => <a key={link.name} href="#" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm px-6 py-3 rounded-xl transition-colors">
                  <span className="font-semibold block">{link.name}</span>
                  <span className="text-sm text-primary-foreground/70">{link.desc}</span>
                </a>)}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-muted/50 rounded-2xl p-6 text-center">
            <h3 className="font-semibold text-sm text-foreground mb-2">Disclaimer</h3>
            <p className="text-xs text-muted-foreground">
              De informatie op tinyhousevergunning.nl is bedoeld als algemene uitleg over vergunningen voor tiny houses in Nederland. 
              Regels verschillen per gemeente en wijzigen in de tijd. Deze tekst is geen juridisch advies en vervangt geen formele 
              beoordeling door gemeente of specialist.
            </p>
          </div>
        </div>
      </section>
    </article>;
};
export default ArticleContent;