import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { GlassCard } from "@/components/GlassCard";
import { Calendar, Users, ShieldCheck, HeartPulse } from "lucide-react";

export const Route = createFileRoute("/mobile-service")({
  head: () => ({
    meta: [
      { title: "Mobile Service — SportSafe Australia" },
      { name: "description", content: "Free mobile mouthguard fitting service for sporting clubs, schools and teams. We come to you on a day or night that suits." },
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

function MobileService() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Mobile Service"
        title="We come to your club."
        description="A free mobile service for sporting clubs — registration days, family club days, dedicated mouthguard fitting days or training nights. Juniors or seniors, we come to you."
      />

      <section className="px-4">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6">
          <GlassCard>
            <Calendar className="h-7 w-7 text-accent" />
            <h3 className="mt-4 text-xl font-bold text-navy-deep">Bookings</h3>
            <p className="mt-3 text-foreground/85">
              SportSafe Australia provides a free mobile service to sporting clubs at
              a mutually convenient day or night. Our qualified and experienced
              dentists, prosthetists and technicians are friendly, efficient and
              focused on your needs.
            </p>
          </GlassCard>
          <GlassCard delay={0.1}>
            <Users className="h-7 w-7 text-accent" />
            <h3 className="mt-4 text-xl font-bold text-navy-deep">Process of Fittings</h3>
            <p className="mt-3 text-foreground/85">
              Each fitting takes approximately <strong>2 minutes</strong>. Our team
              of 5 — two taking orders, two dental professionals taking impressions
              and one assistant — keeps the flow fast. We can accommodate over{" "}
              <strong>80 mouthguards in a 2 hour session</strong>.
            </p>
          </GlassCard>
          <GlassCard delay={0.15}>
            <HeartPulse className="h-7 w-7 text-accent" />
            <h3 className="mt-4 text-xl font-bold text-navy-deep">Health Insurance</h3>
            <p className="mt-3 text-foreground/85">
              Claimable under dental extras cover, item number{" "}
              <strong>151</strong>. Rebates range from 50% up to 100% of the
              mouthguard fee depending on cover. Quote item 151 to your provider —
              HCF, nib, Medibank Private, Bupa, Australian Unity, HBA, MBF and more.
            </p>
            <img
              src={`${SRC}/2018/11/Icons-264x300.jpg`}
              alt="Supported health insurers"
              loading="lazy"
              className="mt-5 rounded-xl w-full max-w-xs"
            />
          </GlassCard>
          <GlassCard delay={0.2}>
            <ShieldCheck className="h-7 w-7 text-accent" />
            <h3 className="mt-4 text-xl font-bold text-navy-deep">Working With Children Accredited</h3>
            <p className="mt-3 text-foreground/85">
              Every SportSafe Australia team member holds a current Working With
              Children Check. The WWC Check creates a mandatory minimum checking
              standard across Australia, helping keep children safe in paid and
              volunteer settings.
            </p>
          </GlassCard>
        </div>

        <div className="mx-auto max-w-6xl mt-6">
          <GlassCard>
            <h3 className="text-xl font-bold text-navy-deep">Sports we cater for</h3>
            <p className="mt-2 text-muted-foreground">
              SportSafe Australia caters for all contact sports — including:
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {sports.map((s) => (
                <span
                  key={s}
                  className="glass rounded-full px-4 py-1.5 text-sm font-medium text-navy-deep"
                >
                  {s}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="mx-auto max-w-6xl mt-6">
          <GlassCard>
            <h3 className="text-xl font-bold text-navy-deep">Sponsorship</h3>
            <p className="mt-3 text-foreground/85">
              If SportSafe Australia is nominated as your club's official mouthguard
              supplier, your club will receive a rebate or sponsorship. Tell us
              about the packages your club has to offer and we'll consider the best
              option for both parties.
            </p>
          </GlassCard>
        </div>
      </section>
    </PageShell>
  );
}
