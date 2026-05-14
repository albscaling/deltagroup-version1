import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Produktet — Delta Group" },
      { name: "description", content: "Eksploro koleksionin e plotë të mobiljeve premium nga Delta Group." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { t, lang } = useI18n();

  return (
    <div className="container-x py-20">
      <div className="max-w-2xl mb-16">
        <div className="eyebrow mb-4">Catalog</div>
        <h1 className="font-display text-5xl md:text-6xl mb-4">{t("products.title")}</h1>
        <p className="text-muted-foreground text-lg">{t("products.subtitle")}</p>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {products.map((p) => (
          <article key={p.id} className="group">
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted mb-5">
              <img
                src={p.image}
                alt={p.name[lang]}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl">{p.name[lang]}</h3>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{p.material}</div>
              </div>
              <div className="font-display text-lg whitespace-nowrap shrink-0">
                {p.price > 0 ? `€${p.price.toLocaleString()}` : "—"}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.description[lang]}</p>
            <div className="flex gap-3 mt-5">
              <Button asChild size="sm" variant="outline" className="rounded-full">
                <a href="/contact">{t("products.viewDetails")} <ArrowRight className="ml-1 h-3 w-3" /></a>
              </Button>
              <Button asChild size="sm" variant="ghost" className="rounded-full">
                <a href="/contact">{t("products.requestQuote")}</a>
              </Button>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-24 text-center border-t border-border pt-16">
        <h2 className="font-display text-3xl md:text-4xl mb-4">{t("cta.title")}</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t("cta.body")}</p>
        <Button asChild size="lg" className="rounded-full px-10 h-12">
          <a href="/contact">{t("cta.btn")} <ArrowRight className="ml-2 h-4 w-4" /></a>
        </Button>
      </div>
    </div>
  );
}
