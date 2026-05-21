import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { GlassCard } from "@/components/GlassCard";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — SportSafe Australia" },
      { name: "description", content: "Hear from clubs and customers about our custom mouthguards and mobile fitting service." },
    ],
  }),
  component: Testimonials,
});

const SRC = "https://www.sportsafeaustralia.com.au/wp-content/uploads/2018/11";

const items = [
  {
    quote:
      "I just want to say these guys are so professional at what they do. The mouthguards are pure AFL style custom made professionally fitted sports mouthguards. We are receiving lots of compliments. Thank you again.",
    name: "Andrew Gommers",
    role: "Marketing, Sponsorship & Events Manager @ Northern Blues (VFL)",
    img: "BluesPortrait-128x128.png",
  },
  {
    quote:
      "SportSafe Australia has been coming to Sydney to supply mouthguards to our club since 2009 and the service they provide is excellent. We recommend SportSafe Australia to other sporting clubs in Sydney.",
    name: "Chris Denier",
    role: "Gymea Gorillas Junior Rugby League Club, Sydney",
    img: "gymea.png",
  },
  {
    quote:
      "Our junior football club has used SportSafe Australia as our main mouthguard supplier for over 10 years now and we recommend SportSafe Australia to all sporting codes.",
    name: "Bruce Plant",
    role: "South Melbourne District Sports Club",
    img: "swans.jpeg",
  },
];

function Testimonials() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Testimonials"
        title="What people say about us."
        description="A few words from the clubs and customers we've protected over the years."
      />

      <section className="px-4">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <GlassCard key={t.name} delay={i * 0.08} className={i === items.length - 1 ? "md:col-span-2" : ""}>
              <Quote className="h-8 w-8 text-accent/60" />
              <p className="mt-4 text-base leading-relaxed text-foreground/85">"{t.quote}"</p>
              <div className="mt-6 pt-5 border-t border-white/40 flex items-center gap-3">
                <img src={`${SRC}/${t.img}`} alt={t.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="text-sm font-semibold text-navy-deep">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
