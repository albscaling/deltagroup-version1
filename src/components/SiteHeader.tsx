import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Globe, Search, Sparkles, ChevronDown, LayoutGrid } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import type { Lang } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { categories } from "@/lib/categories";

const langs: { code: Lang; flag: string; label: string }[] = [
  { code: "sq", flag: "🇦🇱", label: "Shqip" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "it", flag: "🇮🇹", label: "Italiano" },
];

export function SiteHeader() {
  const { t, lang, setLang } = useI18n();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [catsOpen, setCatsOpen] = useState(false);
  const [mobileCatsOpen, setMobileCatsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const path = useRouterState({ select: (s) => s.location.pathname });

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = search.trim();
    navigate({ to: "/products", search: q ? { q } : {} } as never);
    setOpen(false);
  };

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/products", label: t("nav.products") },
    { to: "/about", label: t("nav.about") },
    { to: "/custom-order", label: t("nav.custom") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  const current = langs.find((l) => l.code === lang)!;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-xl">
      {/* Top bar — logo, search, lang, quote */}
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary text-primary-foreground font-display text-xl">D</div>
          <div className="leading-tight">
            <div className="font-display text-xl tracking-wide">Delta Group</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Furniture · Albania</div>
          </div>
        </Link>

        <form onSubmit={onSearch} className="hidden md:flex items-center relative flex-1 max-w-xl">
          <Search className="absolute left-4 h-4 w-4 text-muted-foreground pointer-events-none" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("nav.search")}
            className="h-11 w-full rounded-full border border-border/70 bg-muted/40 pl-11 pr-4 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:border-accent focus:bg-background transition-all"
          />
        </form>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">{current.flag} {current.code.toUpperCase()}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {langs.map((l) => (
                <DropdownMenuItem
                  key={l.code}
                  onSelect={(e) => {
                    e.preventDefault();
                    setLang(l.code);
                  }}
                  className={lang === l.code ? "font-semibold text-accent" : ""}
                >
                  <span className="mr-2">{l.flag}</span> {l.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild size="sm" className="hidden xl:inline-flex">
            <Link to="/contact">{t("nav.quote")}</Link>
          </Button>

          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(!open)} aria-label={t("nav.menu")}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Bottom nav bar — Browse Categories + main links */}
      <div className="hidden lg:block border-t border-border/60 bg-muted/30">
        <div className="container-x flex h-12 items-center gap-2">
          {/* Browse Categories trigger */}
          <div
            className="relative h-full"
            onMouseEnter={() => setCatsOpen(true)}
            onMouseLeave={() => setCatsOpen(false)}
          >
            <button
              className="h-full flex items-center gap-3 px-5 bg-accent text-accent-foreground text-xs font-semibold tracking-[0.15em] uppercase hover:bg-accent/90 transition-colors"
            >
              <LayoutGrid className="h-4 w-4" />
              {t("nav.browseCategories")}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${catsOpen ? "rotate-180" : ""}`} />
            </button>
            {catsOpen && (
              <div className="absolute left-0 top-full w-80 z-50">
                <ul className="bg-background border border-border border-t-0 shadow-xl divide-y divide-border/60">
                  {categories.map((c) => (
                    <li key={c.slug}>
                      <Link
                        to="/products"
                        search={{ category: c.slug } as never}
                        onClick={() => setCatsOpen(false)}
                        className="block px-5 py-3 text-sm font-medium text-foreground hover:bg-muted hover:text-accent transition-colors"
                      >
                        {c[lang]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Main nav links */}
          <nav className="flex items-center gap-7 px-6">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`text-sm transition-colors ${
                  path === n.to ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/products"
              search={{ filter: "new" } as never}
              className="flex items-center gap-1.5 text-sm text-accent hover:text-foreground transition-colors"
            >
              <Sparkles className="h-3.5 w-3.5" /> {t("nav.newArrivals")}
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background max-h-[80vh] overflow-y-auto">
          <div className="container-x py-4 space-y-4">
            <form onSubmit={onSearch} className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t("nav.search")}
                className="h-11 w-full rounded-full border border-border bg-muted/40 pl-10 pr-4 text-sm focus:outline-none focus:border-accent"
              />
            </form>

            <Link
              to="/products"
              search={{ filter: "new" } as never}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-sm bg-accent/10 border border-accent/30 px-4 py-3"
            >
              <span className="flex items-center gap-2 text-sm font-medium">
                <Sparkles className="h-4 w-4 text-accent" /> {t("nav.newArrivals")}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent">{t("nav.viewAll")}</span>
            </Link>

            {/* Mobile Browse Categories accordion */}
            <div className="border border-border rounded-sm overflow-hidden">
              <button
                onClick={() => setMobileCatsOpen(!mobileCatsOpen)}
                className="w-full flex items-center justify-between bg-accent text-accent-foreground px-4 py-3"
              >
                <span className="flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase">
                  <LayoutGrid className="h-4 w-4" /> {t("nav.browseCategories")}
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileCatsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileCatsOpen && (
                <ul className="divide-y divide-border/60 bg-background">
                  {categories.map((c) => (
                    <li key={c.slug}>
                      <Link
                        to="/products"
                        search={{ category: c.slug } as never}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-3 text-sm"
                      >
                        {c[lang]}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <nav className="flex flex-col">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm border-b border-border/40"
                >
                  {n.label}
                </Link>
              ))}
            </nav>

            <Button asChild size="sm" className="w-full">
              <Link to="/contact" onClick={() => setOpen(false)}>{t("nav.quote")}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
