import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, Reveal } from "@/components/PageShell";

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
];

function Partners() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our partners"
        title="Trusted by Australian sport."
        description="Proudly partnered with leading leagues, clubs and organisations across Australia."
      />

      <section className="px-6">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-lg text-foreground/85 leading-relaxed">
              The South Metro Junior Football League (SMJFL) is pleased to welcome
              aboard SportSafe Australia as a Preferred Partner for mouthguards.
              With over 24 years experience, SportSafe Australia is one of
              Australia's leading custom-made professionally fitted sports
              mouthguard manufacturers — serving professional athletes, primary
              and secondary school students, dentists and dental prosthetists.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto max-w-5xl mt-20 grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-16">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <div className="aspect-square flex items-center justify-center">
                <img src={`${SRC}/${p.img}`} alt={p.name} loading="lazy" className="max-h-32 max-w-full object-contain" />
              </div>
              <p className="mt-4 text-center text-sm font-medium">{p.name}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
