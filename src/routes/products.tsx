import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { useI18n } from "@/lib/i18n";
import { products, type Category } from "@/lib/products";
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

const categories: { key: Category | "all"; labelKey: string }[] = [
  { key: "all", labelKey: "products.filter.all" },
  { key: "kitchen", labelKey: "cats.kitchen" },
  { key: "bedroom", labelKey: "cats.bedroom" },
  { key: "living", labelKey: "cats.living" },
  { key: "office", labelKey: "cats.office" },
  { key: "custom", labelKey: "cats.custom" },
];

function ProductsPage() {
  const { t, lang } = useI18n();
  const [cat, setCat] = useState<Category | "all">("all");
  const [maxPrice, setMaxPrice] = useState(10000);

  const filtered = useMemo(
    () => products.filter((p) => (cat === "all" || p.category === cat) && (p.price === 0 || p.price <= maxPrice)),
    [cat, maxPrice]
  );

  return (
    <div className="container-x py-20">
      <div className="max-w-2xl mb-16">
        <div className="eyebrow mb-4">Catalog</div>
        <h1 className="font-display text-5xl md:text-6xl mb-4">{t("products.title")}</h1>
        <p className="text-muted-foreground text-lg">{t("products.subtitle")}</p>
      </div>

      <div className="grid lg:grid-cols-[260px_1fr] gap-12">
        {/* Filters */}
        <aside className="space-y-8">
          <div>
            <div className="eyebrow mb-4">{t("products.filter.category")}</div>
            <div className="flex flex-col gap-1">
              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setCat(c.key)}
                  className={`text-left text-sm py-2 border-l-2 pl-3 transition-colors ${
                    cat === c.key ? "border-accent text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t(c.labelKey as never)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow mb-4">{t("products.filter.price")}</div>
            <input
              type="range"
              min={500}
              max={10000}
              step={250}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-accent"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>€500</span>
              <span className="text-foreground">€{maxPrice.toLocaleString()}</span>
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div>
          {filtered.length === 0 ? (
            <div className="py-32 text-center text-muted-foreground">{t("products.empty")}</div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <article key={p.id} className="group">
                  <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted mb-4">
                    <img src={p.image} alt={p.name[lang]} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl">{p.name[lang]}</h3>
                      <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{p.material}</div>
                    </div>
                    <div className="font-display text-lg whitespace-nowrap">
                      {p.price > 0 ? `€${p.price.toLocaleString()}` : "—"}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.description[lang]}</p>
                  <div className="flex gap-3 mt-5">
                    <Button asChild size="sm" variant="outline" className="rounded-full">
                      <a href="#">{t("products.viewDetails")} <ArrowRight className="ml-1 h-3 w-3" /></a>
                    </Button>
                    <Button asChild size="sm" variant="ghost" className="rounded-full">
                      <a href="/contact">{t("products.requestQuote")}</a>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
