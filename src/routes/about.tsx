import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero, Reveal } from "@/components/PageShell";

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
        eyebrow="About"
        title="Australia's mouthguard specialists."
        description="One of the leading custom-made professionally fitted sports mouthguard manufacturers in Australia, for all sporting codes."
      />

      <section className="px-6">
        <div className="mx-auto max-w-3xl space-y-6 text-lg text-foreground/85 leading-relaxed">
          <Reveal>
            <p>
              Our customers range from professional athletes to students in
              primary and secondary schools, dentists and dental prosthetists — a
              testament to our commitment to excellence in high-quality
              mouthguards, service and value. We not only supply custom-made
              mouthguards, but also help our customers choose the right
              mouthguard for the right sport.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              Using the latest techniques and technologies, we provide
              unparalleled service and unsurpassed results. Each service begins
              with a custom fitting, followed by a selection of colours, designs
              and graphics. Every mouthguard is then handcrafted under strict
              quality control and provided in a protective casing with care
              instructions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 mt-20">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6">
          <Reveal>
            <img src={`${SRC}/2021/04/1.jpg`} alt="Mouthguard fitting" className="w-full h-[420px] object-cover rounded-3xl" loading="lazy" />
          </Reveal>
          <Reveal delay={0.1}>
            <img src={`${SRC}/2021/04/2.jpg`} alt="SportSafe team at work" className="w-full h-[420px] object-cover rounded-3xl" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="px-6 mt-20">
        <div className="mx-auto max-w-3xl space-y-6 text-lg text-foreground/85 leading-relaxed">
          <Reveal>
            <p>
              Over <strong>24 years experience</strong> in the dental industry —
              we pride ourselves on repeat orders from satisfied customers. Our
              dedicated dental team takes pride in each handmade mouthguard, and
              we're always willing to test and evaluate improvements in materials
              and methodology so every customer receives a unique and exceptional
              product.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              We guarantee our service and prices are extremely cost competitive,
              with outstanding workmanship and customisation to the exact contours
              of your teeth and gums — so the mouthguard slips in, is ready to
              protect, and is made just for <strong>you</strong>.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/contact" className="link-brand font-medium">Get in touch →</Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
