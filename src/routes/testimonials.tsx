import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, Reveal } from "@/components/PageShell";

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
    quote: "I just want to say these guys are so professional at what they do. The mouthguards are pure AFL style custom made professionally fitted sports mouthguards. We are receiving lots of compliments. Thank you again.",
    name: "Andrew Gommers",
    role: "Marketing, Sponsorship & Events Manager, Northern Blues (VFL)",
    img: "BluesPortrait-128x128.png",
  },
  {
    quote: "SportSafe Australia has been coming to Sydney to supply mouthguards to our club since 2009 and the service they provide is excellent. We recommend SportSafe Australia to other sporting clubs in Sydney.",
    name: "Chris Denier",
    role: "Gymea Gorillas Junior Rugby League Club, Sydney",
    img: "gymea.png",
  },
  {
    quote: "Our junior football club has used SportSafe Australia as our main mouthguard supplier for over 10 years now and we recommend SportSafe Australia to all sporting codes.",
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
      />

      <section className="px-6 space-y-24">
        {items.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.06}>
            <div className="mx-auto max-w-3xl">
              <p className="text-2xl md:text-3xl leading-snug tracking-tight font-medium">
                "{t.quote}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img src={`${SRC}/${t.img}`} alt={t.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
    </PageShell>
  );
}
