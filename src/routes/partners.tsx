import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, Reveal } from "@/components/PageShell";
import { PartnersMarquee, partners } from "@/components/PartnersMarquee";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — SportSafe Australia" },
      { name: "description", content: "SportSafe Australia is the proud Preferred Mouthguard Partner of the SMJFL and works alongside leading sports organisations across Australia." },
    ],
  }),
  component: Partners,
});

function Partners() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our partners"
        title="Trusted by Australian sport."
        description="Proudly partnered with leading leagues, clubs, athletes and organisations across Australia."
      />

      <section className="py-12 border-y" style={{ borderColor: "var(--border)" }}>
        <PartnersMarquee />
      </section>

      <section className="px-[var(--px)] py-[clamp(64px,10vw,120px)]">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <Reveal>
            <span className="kicker"><span className="rule" />Preferred Partner</span>
            <h2 className="display mt-4" style={{ fontSize: "clamp(32px, 5vw, 56px)" }}>
              South Metro Junior Football League.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed" style={{ color: "var(--muted)" }}>
              The South Metro Junior Football League (SMJFL) is pleased to welcome
              aboard SportSafe Australia as a Preferred Partner for mouthguards.
              With over 24 years experience, SportSafe Australia is one of
              Australia's leading custom-made professionally fitted sports
              mouthguard manufacturers — serving professional athletes, primary
              and secondary school students, dentists and dental prosthetists.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-[var(--px)] pb-[clamp(64px,10vw,120px)]">
        <div className="wrap">
          <Reveal className="mb-12">
            <span className="kicker"><span className="rule" />All Partners</span>
            <h2 className="display mt-4" style={{ fontSize: "clamp(32px, 5vw, 56px)" }}>
              Clubs, leagues & athletes.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-14">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <div className="h-28 flex items-center justify-center">
                  <img src={p.img} alt={p.name} loading="lazy" className="max-h-full max-w-full object-contain" />
                </div>
                <p className="display mt-4 text-center" style={{ fontSize: 16 }}>{p.name}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
