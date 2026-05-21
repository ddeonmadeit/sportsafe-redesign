import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero, Reveal } from "@/components/PageShell";

export const Route = createFileRoute("/orthodontics")({
  head: () => ({
    meta: [
      { title: "Orthodontic Mouthguards — SportSafe Australia" },
      { name: "description", content: "Custom-made mouthguards for orthodontic patients (fixed or removable) and children in transitional dentition." },
    ],
  }),
  component: Orthodontics,
});

const sections = [
  {
    title: "Fixed orthodontics",
    body: "For athletes with braces or fixed appliances, we craft mouthguards that accommodate brackets and wires while delivering full protection on the field.",
  },
  {
    title: "Removable appliances",
    body: "We design protective mouthguards that work alongside removable appliances — keeping your treatment on track without compromising safety in contact sport.",
  },
  {
    title: "Transitional dentition",
    body: "For children whose adult teeth are still coming through, our team builds mouthguards that allow for growth while protecting the gums and developing dentition. Regular check-ins ensure the fit stays perfect as your child grows.",
  },
];

function Orthodontics() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Orthodontics"
        title="Mouthguards for braces & transitional dentition."
        description="SportSafe Australia creates custom-made, professionally fitted sports mouthguards for orthodontic patients and children whose teeth are still developing."
      />

      <section className="px-6 space-y-16">
        {sections.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{s.title}</h2>
              <p className="mt-5 text-lg text-foreground/85 leading-relaxed">{s.body}</p>
            </div>
          </Reveal>
        ))}
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <Link to="/contact" className="link-brand font-medium">Arrange a consultation →</Link>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
