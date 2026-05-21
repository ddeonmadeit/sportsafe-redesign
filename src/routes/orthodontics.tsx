import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { GlassCard } from "@/components/GlassCard";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/orthodontics")({
  head: () => ({
    meta: [
      { title: "Orthodontic Mouthguards — SportSafe Australia" },
      { name: "description", content: "Custom-made professionally fitted sports mouthguards for orthodontic patients (fixed/removable) and children in transitional dentition." },
    ],
  }),
  component: Orthodontics,
});

function Orthodontics() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Orthodontics"
        title="Mouthguards for braces & transitional dentition."
        description="SportSafe Australia creates custom-made, professionally fitted sports mouthguards for orthodontic patients and children whose teeth are still developing."
      />

      <section className="px-4">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-6">
          <GlassCard>
            <h3 className="text-xl font-bold text-navy-deep">Fixed orthodontics</h3>
            <p className="mt-3 text-foreground/85">
              For athletes with braces or fixed appliances, we craft mouthguards
              that accommodate the brackets and wires while delivering full
              protection on the field.
            </p>
          </GlassCard>
          <GlassCard delay={0.1}>
            <h3 className="text-xl font-bold text-navy-deep">Removable appliances</h3>
            <p className="mt-3 text-foreground/85">
              We design protective mouthguards that work alongside removable
              appliances — keeping your treatment on track without compromising
              safety in contact sport.
            </p>
          </GlassCard>
          <GlassCard delay={0.15} className="md:col-span-2">
            <h3 className="text-xl font-bold text-navy-deep">Transitional dentition</h3>
            <p className="mt-3 text-foreground/85">
              For children whose adult teeth are still coming through, our team
              builds mouthguards that allow for growth while protecting the gums
              and developing dentition. Regular check-ins ensure the fit stays
              perfect as your child grows.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-navy-deep to-navy text-primary-foreground px-5 py-3 font-semibold hover:shadow-xl transition-all"
            >
              Arrange a consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </GlassCard>
        </div>
      </section>
    </PageShell>
  );
}
