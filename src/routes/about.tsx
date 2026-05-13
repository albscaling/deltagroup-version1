import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import factory from "@/assets/about-factory.jpg";
import showroom from "@/assets/hero-showroom.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Rreth Nesh — Delta Group" },
      { name: "description", content: "Historia, misioni dhe vizioni i Delta Group — prodhues dhe rishitës ekskluziv mobiljesh në Shqipëri." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  return (
    <div>
      <section className="container-x py-24">
        <div className="max-w-3xl">
          <div className="eyebrow mb-6">{t("nav.about")}</div>
          <h1 className="font-display text-5xl md:text-7xl mb-8 leading-tight">{t("about.page.title")}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{t("about.page.intro")}</p>
        </div>
      </section>

      <section className="container-x grid md:grid-cols-2 gap-2">
        <div className="aspect-[4/3] overflow-hidden rounded-sm">
          <img src={showroom} alt="Showroom" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-sm">
          <img src={factory} alt="Factory" loading="lazy" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="container-x py-24 grid md:grid-cols-2 gap-16">
        <div>
          <div className="eyebrow mb-3">{t("about.mission.title")}</div>
          <h2 className="font-display text-3xl mb-4">{t("about.mission.title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("about.mission.body")}</p>
        </div>
        <div>
          <div className="eyebrow mb-3">{t("about.vision.title")}</div>
          <h2 className="font-display text-3xl mb-4">{t("about.vision.title")}</h2>
          <p className="text-muted-foreground leading-relaxed">{t("about.vision.body")}</p>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container-x max-w-3xl text-center">
          <div className="eyebrow mb-4">{t("about.exclusive.title")}</div>
          <h2 className="font-display text-4xl md:text-5xl mb-6">{t("about.exclusive.title")}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{t("about.exclusive.body")}</p>
        </div>
      </section>

      <section className="container-x py-24 grid md:grid-cols-3 gap-8 text-center">
        {[
          { n: "15+", l: { sq: "Vite eksperiencë", en: "Years of experience", it: "Anni di esperienza" } },
          { n: "2,500+", l: { sq: "Projekte të realizuara", en: "Projects delivered", it: "Progetti realizzati" } },
          { n: "20+", l: { sq: "Marka ekskluzive", en: "Exclusive brands", it: "Marchi esclusivi" } },
        ].map((s) => (
          <div key={s.n} className="border-t border-border pt-8">
            <div className="font-display text-6xl text-accent mb-2">{s.n}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">{s.l.sq}</div>
          </div>
        ))}
      </section>

      <section className="container-x pb-24 text-center">
        <Button asChild size="lg" className="rounded-full px-8 h-12">
          <Link to="/contact">{t("cta.btn")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </section>
    </div>
  );
}
