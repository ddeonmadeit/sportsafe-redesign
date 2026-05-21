import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { GlassCard } from "@/components/GlassCard";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — SportSafe Australia" },
      { name: "description", content: "SportSafe Australia is the proud Preferred Mouthguard Partner of the SMJFL and works alongside leading sports organisations." },
    ],
  }),
  component: Partners,
});

const SRC = "https://www.sportsafeaustralia.com.au/wp-content/uploads/2018/11";

const partners = [
  { name: "South Metro Junior Football League", img: "SMJ-150x150.png" },
  { name: "RookieMe", img: "RookieMe-150x150.png" },
  { name: "Pure", img: "Pure-150x150.png" },
  { name: "About Logo", img: "AboutLogo1.png" },
  { name: "About Logo Two", img: "AboutLogo2.png" },
  { name: "About Logo Four", img: "AboutLogo4.png" },
];

function Partners() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Partners"
        title="Trusted by Australian sport."
        description="Proudly partnered with leading leagues, clubs and organisations across Australia."
      />

      <section className="px-4">
        <div className="mx-auto max-w-5xl">
          <GlassCard className="!p-8 md:!p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-navy-deep">
              SMJFL — Preferred Mouthguard Partner.
            </h3>
            <p className="mt-4 text-foreground/85">
              The South Metro Junior Football League (SMJFL) is pleased to welcome
              aboard SportSafe Australia as a Preferred Partner for mouthguards.
              With over 24 years experience, SportSafe Australia is one of
              Australia's leading custom-made professionally fitted sports
              mouthguard manufacturers — serving professional athletes, primary
              and secondary school students, dentists and dental prosthetists.
            </p>
          </GlassCard>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-5">
            {partners.map((p, i) => (
              <GlassCard key={p.name} delay={i * 0.06} className="!p-6">
                <div className="aspect-square bg-white/60 rounded-2xl grid place-items-center p-6">
                  <img src={`${SRC}/${p.img}`} alt={p.name} loading="lazy" className="max-h-full max-w-full object-contain" />
                </div>
                <p className="mt-4 text-sm font-semibold text-navy-deep text-center">{p.name}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
