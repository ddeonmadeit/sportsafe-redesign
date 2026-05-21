import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { GlassCard } from "@/components/GlassCard";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SportSafe Australia" },
      { name: "description", content: "Over 24 years crafting custom-made professionally fitted sports mouthguards for athletes across Australia." },
    ],
  }),
  component: About,
});

const SRC = "https://www.sportsafeaustralia.com.au/wp-content/uploads";

function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About SportSafe"
        title="Australia's mouthguard specialists."
        description="One of the leading custom-made professionally fitted sports mouthguard manufacturers in Australia, for all sporting codes."
      />

      <section className="px-4">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
          <GlassCard>
            <p className="text-base leading-relaxed text-foreground/85">
              Our customers range from professional athletes to students in primary
              and secondary schools, dentists and dental prosthetists — a testament
              to our commitment to excellence in high-quality mouthguards, service
              and value. We not only supply custom-made mouthguards, but also help
              our customers choose the right mouthguard for the right sport.
            </p>
          </GlassCard>
          <GlassCard delay={0.1}>
            <p className="text-base leading-relaxed text-foreground/85">
              Using the latest techniques and technologies, we provide unparalleled
              service and unsurpassed results. Each service begins with a custom
              fitting, followed by a selection of colours, designs and customer
              graphics. Every mouthguard is then handcrafted under strict quality
              control and provided in a protective casing with care instructions.
            </p>
          </GlassCard>
        </div>

        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6 mt-6">
          <GlassCard className="!p-3" delay={0.05}>
            <img src={`${SRC}/2021/04/1.jpg`} alt="Mouthguard fitting" className="w-full h-80 object-cover rounded-2xl" loading="lazy" />
          </GlassCard>
          <GlassCard className="!p-3" delay={0.15}>
            <img src={`${SRC}/2021/04/2.jpg`} alt="SportSafe team at work" className="w-full h-80 object-cover rounded-2xl" loading="lazy" />
          </GlassCard>
        </div>

        <div className="mx-auto max-w-6xl mt-10">
          <GlassCard>
            <p className="text-base leading-relaxed text-foreground/85">
              Over <strong>24 years experience</strong> in the dental industry — we
              pride ourselves on repeat orders from satisfied customers. Our
              dedicated dental team takes pride in each handmade mouthguard, and we
              are always willing to test and evaluate improvements in materials and
              methodology so every customer receives a unique and exceptional
              product.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/85">
              We guarantee our service and prices are extremely cost competitive,
              with outstanding workmanship and customisation to the exact contours
              of your teeth and gums — so the mouthguard slips in, is ready to
              protect, and is made just for <strong>you</strong>.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-navy-deep to-navy text-primary-foreground px-5 py-3 font-semibold hover:shadow-xl transition-all"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </GlassCard>
        </div>
      </section>
    </PageShell>
  );
}
