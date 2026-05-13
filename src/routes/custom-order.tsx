import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/custom-order")({
  head: () => ({
    meta: [
      { title: "Porosi Personale — Delta Group" },
      { name: "description", content: "Kërko mobilje me porosi nga Delta Group — dizajn i personalizuar dhe prodhim cilësor." },
    ],
  }),
  component: CustomOrderPage,
});

function CustomOrderPage() {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    if (!name) return toast.error("Name required");
    setSubmitted(true);
    toast.success(t("custom.success"));
  };

  return (
    <div className="container-x py-24 max-w-3xl">
      <div className="eyebrow mb-4">{t("nav.custom")}</div>
      <h1 className="font-display text-5xl md:text-6xl mb-4">{t("custom.title")}</h1>
      <p className="text-muted-foreground text-lg mb-12">{t("custom.subtitle")}</p>

      {submitted ? (
        <div className="border border-border rounded-sm p-12 text-center bg-secondary/40">
          <CheckCircle2 className="h-12 w-12 text-accent mx-auto mb-4" />
          <h2 className="font-display text-3xl mb-2">{t("custom.success")}</h2>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">{t("custom.name")}</Label>
              <Input id="name" name="name" required maxLength={100} className="mt-2 h-12" />
            </div>
            <div>
              <Label htmlFor="phone">{t("custom.phone")}</Label>
              <Input id="phone" name="phone" type="tel" required maxLength={30} className="mt-2 h-12" />
            </div>
          </div>
          <div>
            <Label htmlFor="email">{t("custom.email")}</Label>
            <Input id="email" name="email" type="email" required maxLength={120} className="mt-2 h-12" />
          </div>
          <div>
            <Label htmlFor="description">{t("custom.description")}</Label>
            <Textarea id="description" name="description" required maxLength={2000} rows={6} className="mt-2" />
          </div>
          <div>
            <Label>{t("custom.upload")}</Label>
            <label className="mt-2 flex items-center gap-3 border border-dashed border-border rounded-sm p-6 cursor-pointer hover:bg-secondary/40 transition-colors">
              <Upload className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">
                {fileName || "PDF, JPG, PNG · max 10MB"}
              </span>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                className="hidden"
              />
            </label>
          </div>
          <Button type="submit" size="lg" className="rounded-full h-12 mt-2">
            {t("custom.submit")}
          </Button>
        </form>
      )}
    </div>
  );
}
