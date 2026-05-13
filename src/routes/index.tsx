import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ShieldCheck, Award, Hammer, Lightbulb, PenTool, Factory, Truck, Quote } from "lucide-react";
import hero from "@/assets/hero-showroom.jpg";
import factory from "@/assets/about-factory.jpg";
import kitchen from "@/assets/cat-kitchen.jpg";
import bedroom from "@/assets/cat-bedroom.jpg";
import living from "@/assets/cat-living.jpg";
import office from "@/assets/cat-office.jpg";
import custom from "@/assets/cat-custom.jpg";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Delta Group — Mobilim Premium në Shqipëri" },
      { name: "description", content: "Linjë e plotë prodhimi mobiljesh dhe rishitësi ekskluziv në Shqipëri. Cilësi italiane, dizajn modern." },
      { property: "og:title", content: "Delta Group — Premium Furniture" },
      { property: "og:description", content: "Italian-quality furniture, made and resold exclusively in Albania." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t, lang } = useI18n();

  const cats = [
    { key: "kitchen", img: kitchen, label: t("cats.kitchen") },
    { key: "bedroom", img: bedroom, label: t("cats.bedroom") },
    { key: "living", img: living, label: t("cats.living") },
    { key: "office", img: office, label: t("cats.office") },
    { key: "custom", img: custom, label: t("cats.custom") },
  ];

  const why = [
    { Icon: Award, title: t("why.q1.title"), body: t("why.q1.body") },
    { Icon: Sparkles, title: t("why.q2.title"), body: t("why.q2.body") },
    { Icon: ShieldCheck, title: t("why.q3.title"), body: t("why.q3.body") },
    { Icon: Hammer, title: t("why.q4.title"), body: t("why.q4.body") },
  ];

  const steps = [
    { Icon: Lightbulb, title: t("process.s1.title"), body: t("process.s1.body") },
    { Icon: PenTool, title: t("process.s2.title"), body: t("process.s2.body") },
    { Icon: Factory, title: t("process.s3.title"), body: t("process.s3.body") },
    { Icon: Truck, title: t("process.s4.title"), body: t("process.s4.body") },
  ];

  const testimonials = {
    sq: [
      { name: "Anila K.", role: "Klient privat, Tiranë", text: "Cilësi e jashtëzakonshme dhe shërbim shumë profesional. Mobiljet duken si në një katalog italian." },
      { name: "Hotel Palma", role: "Klient biznesi", text: "Bashkëpunim i shkëlqyer për mobilimin e dhomave. Afate të respektuara dhe rezultat premium." },
      { name: "Ardit M.", role: "Arkitekt", text: "Linja e tyre e prodhimit me porosi më ka mahnitur. Saktësi në çdo milimetër." },
    ],
    en: [
      { name: "Anila K.", role: "Private client, Tirana", text: "Outstanding quality and very professional service. The furniture looks straight out of an Italian catalogue." },
      { name: "Hotel Palma", role: "Business client", text: "Excellent partnership for the room outfitting. Deadlines respected and a premium result." },
      { name: "Ardit M.", role: "Architect", text: "Their custom production line amazed me. Precision down to the millimetre." },
    ],
    it: [
      { name: "Anila K.", role: "Cliente privato, Tirana", text: "Qualità eccezionale e servizio molto professionale. I mobili sembrano usciti da un catalogo italiano." },
      { name: "Hotel Palma", role: "Cliente business", text: "Ottima collaborazione per l'arredamento delle camere. Tempi rispettati e risultato premium." },
      { name: "Ardit M.", role: "Architetto", text: "La loro linea di produzione su misura mi ha stupito. Precisione al millimetro." },
    ],
  }[lang];

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        <img src={hero} alt="Delta Group showroom" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent" />
        <div className="container-x relative z-10 flex h-full items-center">
          <div className="max-w-2xl reveal">
            <div className="eyebrow mb-6">{t("hero.eyebrow")}</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-8 h-12">
                <Link to="/products">{t("hero.cta1")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-12 bg-background/60 backdrop-blur">
                <Link to="/contact">{t("hero.cta2")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="container-x py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="eyebrow mb-4">{t("about.eyebrow")}</div>
            <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">{t("about.title")}</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">{t("about.body")}</p>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/about">{t("nav.about")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-sm shadow-elegant">
            <img src={factory} alt="Delta Group factory" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-x py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow mb-4">{t("cats.eyebrow")}</div>
          <h2 className="font-display text-4xl md:text-5xl">{t("cats.title")}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cats.map((c, i) => (
            <Link
              to="/products"
              key={c.key}
              className={`group relative aspect-[4/5] overflow-hidden rounded-sm hover-lift ${i === 0 ? "lg:row-span-2 lg:aspect-auto" : ""}`}
            >
              <img src={c.img} alt={c.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <div className="font-display text-2xl">{c.label}</div>
                <div className="mt-1 text-xs uppercase tracking-widest opacity-80 flex items-center gap-2">
                  {t("products.viewDetails")} <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="bg-secondary/40 py-28 mt-12">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="eyebrow mb-4">{t("why.eyebrow")}</div>
            <h2 className="font-display text-4xl md:text-5xl">{t("why.title")}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {why.map(({ Icon, title, body }) => (
              <div key={title} className="bg-background border border-border p-8 rounded-sm hover-lift">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-x py-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow mb-4">{t("process.eyebrow")}</div>
          <h2 className="font-display text-4xl md:text-5xl">{t("process.title")}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ Icon, title, body }, i) => (
            <div key={title} className="relative">
              <div className="text-6xl font-display text-accent/20 absolute -top-4 -left-2">0{i + 1}</div>
              <div className="relative pt-8">
                <Icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-display text-xl mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-primary text-primary-foreground py-28">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.25em] opacity-70 mb-4">{t("test.eyebrow")}</div>
            <h2 className="font-display text-4xl md:text-5xl">{t("test.title")}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((tt) => (
              <div key={tt.name} className="border border-primary-foreground/10 p-8 rounded-sm">
                <Quote className="h-6 w-6 text-accent mb-4" />
                <p className="leading-relaxed mb-6 opacity-90">"{tt.text}"</p>
                <div className="font-display text-lg">{tt.name}</div>
                <div className="text-xs opacity-60 uppercase tracking-wider">{tt.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="container-x py-20 border-b border-border">
        <div className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10">Partners</div>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 opacity-50">
          {["Molteni", "Poliform", "B&B Italia", "Cassina", "Minotti", "Flexform"].map((p) => (
            <div key={p} className="font-display text-2xl tracking-wide">{p}</div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-28 text-center">
        <h2 className="font-display text-4xl md:text-5xl max-w-2xl mx-auto mb-4">{t("cta.title")}</h2>
        <p className="text-muted-foreground mb-8">{t("cta.body")}</p>
        <Button asChild size="lg" className="rounded-full px-10 h-12">
          <Link to="/contact">{t("cta.btn")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </section>
    </div>
  );
}
