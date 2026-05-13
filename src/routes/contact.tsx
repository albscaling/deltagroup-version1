import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontakt — Delta Group" },
      { name: "description", content: "Kontakto Delta Group për konsulencë, ofertë ose porosi mobiljesh në Shqipëri." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    if (!name) return toast.error("Name required");
    toast.success(t("contact.success"));
    e.currentTarget.reset();
  };

  return (
    <div className="container-x py-24">
      <div className="max-w-2xl mb-16">
        <div className="eyebrow mb-4">{t("nav.contact")}</div>
        <h1 className="font-display text-5xl md:text-6xl mb-4">{t("contact.title")}</h1>
        <p className="text-muted-foreground text-lg">{t("contact.subtitle")}</p>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
        <div className="space-y-8">
          {[
            { Icon: MapPin, title: t("footer.address"), value: "Tiranë, Shqipëri" },
            { Icon: Phone, title: t("contact.call"), value: "+355 69 123 4567", href: "tel:+355691234567" },
            { Icon: Mail, title: "Email", value: "info@deltagroup.al", href: "mailto:info@deltagroup.al" },
            { Icon: Clock, title: t("footer.hours"), value: t("footer.hours.value") },
          ].map(({ Icon, title, value, href }) => (
            <div key={title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="eyebrow mb-1">{title}</div>
                {href ? <a href={href} className="font-display text-xl hover:text-accent transition-colors">{value}</a> : <div className="font-display text-xl">{value}</div>}
              </div>
            </div>
          ))}

          <div className="flex gap-3 pt-4">
            <Button asChild className="rounded-full">
              <a href="tel:+355691234567"><Phone className="mr-2 h-4 w-4" /> {t("contact.call")}</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <a href="https://wa.me/355691234567" target="_blank" rel="noreferrer"><MessageCircle className="mr-2 h-4 w-4" /> {t("contact.whatsapp")}</a>
            </Button>
          </div>
        </div>

        <form onSubmit={onSubmit} className="bg-secondary/40 border border-border rounded-sm p-8 md:p-10 grid gap-5 h-fit">
          <div>
            <Label htmlFor="name">{t("contact.form.name")}</Label>
            <Input id="name" name="name" required maxLength={100} className="mt-2 h-12 bg-background" />
          </div>
          <div>
            <Label htmlFor="email">{t("contact.form.email")}</Label>
            <Input id="email" name="email" type="email" required maxLength={120} className="mt-2 h-12 bg-background" />
          </div>
          <div>
            <Label htmlFor="message">{t("contact.form.message")}</Label>
            <Textarea id="message" name="message" required rows={6} maxLength={2000} className="mt-2 bg-background" />
          </div>
          <Button type="submit" size="lg" className="rounded-full h-12">{t("contact.form.send")}</Button>
        </form>
      </div>
    </div>
  );
}
