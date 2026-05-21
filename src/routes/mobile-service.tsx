import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, Reveal } from "@/components/PageShell";

export const Route = createFileRoute("/mobile-service")({
  head: () => ({
    meta: [
      { title: "Mobile Service — SportSafe Australia" },
      { name: "description", content: "Free mobile mouthguard fitting service for sporting clubs, schools and teams across Australia." },
    ],
  }),
  component: MobileService,
});

const SRC = "https://www.sportsafeaustralia.com.au/wp-content/uploads";

const sports = [
  "AFL Football","Rugby League","Rugby Union","Soccer","Basketball","Hockey",
  "Ice Hockey","Netball","Kickboxing","Boxing","MMA","Karate","Taekwondo",
  "Jiu Jitsu","Extreme Sports","Water Polo","Judo","Muay Thai","Wrestling",
];

const sections = [
  {
    title: "Bookings",
    body: "SportSafe Australia provides a free mobile service to sporting clubs at a mutually convenient day or night — whether it's a registration day, family club day, a dedicated mouthguard fitting day or a training night. Our qualified dentists, prosthetists and technicians are friendly, efficient and focused on your needs.",
  },
  {
    title: "Process of fittings",
    body: "Each fitting takes approximately two minutes. Our team of five — two taking orders, two dental professionals taking impressions and one assistant — keeps everything moving. We can comfortably accommodate over 80 mouthguards in a 2-hour session.",
  },
  {
    title: "Health insurance",
    body: "Our custom mouthguards are claimable under dental extras cover, item number 151. Rebates range from 50% up to 100% of the mouthguard fee depending on your level of cover. Simply quote item 151 to your provider — HCF, nib, Medibank Private, Bupa, Australian Unity, HBA, MBF and many more.",
  },
  {
    title: "Working With Children accredited",
    body: "Every SportSafe Australia team member holds a current Working With Children Check. The WWC Check creates a mandatory minimum checking standard across Australia, helping keep children safe in both paid and volunteer settings.",
  },
  {
    title: "Sponsorship",
    body: "If SportSafe Australia is nominated as your club's official mouthguard supplier, your club will receive a rebate or sponsorship. Tell us about the packages your club has to offer and we'll work out the best option for both parties.",
  },
];

function MobileService() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Mobile Service"
        title="We come to your club."
        description="A free mobile fitting service for sporting clubs — registration days, family days, fitting days or training nights. Juniors or seniors, we come to you."
      />

      <section className="px-6 space-y-20">
        {sections.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{s.title}</h2>
              <p className="mt-5 text-lg text-foreground/85 leading-relaxed">{s.body}</p>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <div className="mx-auto max-w-3xl">
            <img
              src={`${SRC}/2018/11/Icons-264x300.jpg`}
              alt="Supported health insurers"
              loading="lazy"
              className="rounded-2xl max-w-xs"
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Sports we cater for</h2>
            <p className="mt-5 text-lg text-foreground/85 leading-relaxed">
              SportSafe Australia caters for all contact sports — including:
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-base text-muted-foreground">
              {sports.map((s, i) => (
                <span key={s}>
                  {s}
                  {i < sports.length - 1 && <span className="ml-5 text-border">·</span>}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
