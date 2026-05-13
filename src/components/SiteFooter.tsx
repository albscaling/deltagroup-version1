import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Linkedin } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="mt-32 border-t border-border bg-secondary/40">
      <div className="container-x py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary text-primary-foreground font-display text-xl">D</div>
            <div className="font-display text-xl">Delta Group</div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{t("footer.tagline")}</p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="eyebrow mb-4">{t("footer.contact")}</div>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" /><span>{t("footer.address")}</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" /><a href="tel:+355691234567">+355 69 123 4567</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" /><a href="mailto:info@deltagroup.al">info@deltagroup.al</a></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-accent shrink-0" /><span>{t("footer.hours.value")}</span></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">{t("nav.products")}</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/products" className="hover:text-foreground">{t("cats.kitchen")}</Link></li>
            <li><Link to="/products" className="hover:text-foreground">{t("cats.bedroom")}</Link></li>
            <li><Link to="/products" className="hover:text-foreground">{t("cats.living")}</Link></li>
            <li><Link to="/products" className="hover:text-foreground">{t("cats.office")}</Link></li>
            <li><Link to="/custom-order" className="hover:text-foreground">{t("cats.custom")}</Link></li>
          </ul>
        </div>
      </div>

      <div className="aspect-[16/4] w-full overflow-hidden border-t border-border">
        <iframe
          title="Delta Group location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.0!2d19.8189!3d41.3275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE5JzM5LjAiTiAxOcKwNDknMDguMCJF!5e0!3m2!1sen!2s!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(0.3) contrast(0.95)" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
          <div>© {new Date().getFullYear()} Delta Group. {t("footer.rights")}</div>
          <div>Tirana · Albania</div>
        </div>
      </div>
    </footer>
  );
}
