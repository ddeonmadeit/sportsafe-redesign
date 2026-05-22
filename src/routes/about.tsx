import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero, Reveal } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SportSafe Australia" },
      { name: "description", content: "Over 24 years crafting custom-made professionally fitted sports mouthguards for athletes across Australia. Learn about our process, orthodontic options, Special K AFLW program, gift cards and FAQs." },
    ],
  }),
  component: About,
});

const SRC = "https://www.sportsafeaustralia.com.au/wp-content/uploads";

const sports = [
  "AFL Football", "Basketball", "Kickboxing", "Rugby League", "Water Polo",
  "Boxing", "Rugby Union", "Hockey", "MMA", "Soccer", "Ice Hockey", "Taekwondo",
];

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "What is a mouthguard?",
    a: "A mouthguard (also known as a mouth protector, mouth piece or gumshield) is a protective device for the mouth that covers the teeth and gums to prevent and reduce injury to the teeth, lips and gums. Mouthguards are most often used to prevent injury in contact sports.",
  },
  {
    q: "Why should I wear a custom made mouthguard?",
    a: "To protect your mouth from injuries. The dental profession unanimously supports the use of custom made mouthguards in a variety of sports activities. More than 200,000 injuries to the mouth and jaw occur each year.",
  },
  {
    q: "Do mouthguards prevent injuries?",
    a: "A mouthguard can prevent serious injuries such as concussions, incidents of unconsciousness, jaw fractures and neck injuries by helping to avoid situations where the lower jaw gets jammed into the upper jaw. Mouthguards are effective in moving soft tissue in the oral cavity away from the teeth, preventing laceration and bruising of the lips and cheeks.",
  },
  {
    q: "Mouthguards for braces or other fixed orthodontic appliances",
    a: "Custom made mouthguards can accommodate some tooth movement for most people undergoing orthodontic treatment. They will not interfere with your braces or other fixed appliances, and provide a barrier between the braces and your cheek or lips, limiting the risk of soft tissue injuries. Please note — for kids undergoing any orthodontic treatment, please advise SportSafe Australia before an order is placed.",
  },
  {
    q: "Do I get a rebate from my private health insurance?",
    a: "Yes, however it will depend on the level of cover that you have. Ask your health provider.",
  },
  {
    q: "What if my child has loose or missing teeth?",
    a: "It is fine to take the impression (mould) with missing teeth, and also for kids with erupting teeth and mixed dentition. Our highly trained dental technicians will allow space for the new tooth to grow into.",
  },
  {
    q: "How long will my mouthguard last?",
    a: "For adults, a mouthguard can last several years depending on the frequency of use. If major changes occur to the teeth — such as large restorations or loss of teeth — the mouthguard may not fit as well and may need to be replaced. If the material has been bitten through during use it should also be replaced. For children, growth, loss of deciduous teeth or eruption of adult teeth may mean a new mouthguard is needed annually or more often. A poorly fitting mouthguard provides little protection and is less likely to be worn.",
  },
  {
    q: "How should I care for a custom made mouthguard?",
    a: "Rinse with cold water after every use, brush gently with a soft toothbrush, and store in its rigid case away from heat and direct sunlight to maintain its shape.",
  },
  {
    q: "In what types of sports should I wear a custom made mouthguard?",
    a: "Anytime there is a strong chance for contact with other participants or hard surfaces, it is advisable to wear a custom made mouthguard — including AFL, rugby league, rugby union, soccer, basketball, hockey, ice hockey, netball, water polo, boxing, kickboxing, MMA, karate, taekwondo, jiu jitsu, judo, muay thai, wrestling and more.",
  },
  {
    q: "Mouthguard tips",
    a: (
      <ul className="list-disc pl-6 space-y-1">
        <li>The Australian Dental Association strongly recommends investing in a custom-fitted mouthguard from your dental professional.</li>
        <li>Have your mouthguard checked every 12 months for optimal fit and protection.</li>
        <li>Keep your mouthguard clean and store it in a rigid container, away from heat to ensure it maintains its shape.</li>
      </ul>
    ),
  },
];

function Section({ id, eyebrow, title, children }: { id?: string; eyebrow?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="px-6 mt-24 scroll-mt-28">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          {eyebrow && <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{eyebrow}</p>}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">{title}</h2>
        </Reveal>
        <div className="space-y-5 text-lg text-foreground/85 leading-relaxed">{children}</div>
      </div>
    </section>
  );
}

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
          <Reveal delay={0.1}>
            <p>
              Over <strong>24 years experience</strong> in the dental industry —
              we pride ourselves on repeat orders from satisfied customers. Our
              dedicated dental team takes pride in each handmade mouthguard, and
              we're always willing to test and evaluate improvements in materials
              and methodology so every customer receives a unique and exceptional
              product.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 mt-16">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6">
          <Reveal>
            <img src={`${SRC}/2021/04/1.jpg`} alt="Mouthguard fitting" className="w-full h-[420px] object-cover rounded-3xl" loading="lazy" />
          </Reveal>
          <Reveal delay={0.1}>
            <img src={`${SRC}/2021/04/2.jpg`} alt="SportSafe team at work" className="w-full h-[420px] object-cover rounded-3xl" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* In-page nav */}
      <section className="px-6 mt-20">
        <div className="mx-auto max-w-3xl flex flex-wrap gap-2 text-sm">
          {[
            ["custom", "Custom mouthguards"],
            ["orthodontics", "Orthodontics"],
            ["special-k", "Special K · AFLW"],
            ["gift-card", "Gift card"],
            ["faqs", "FAQs"],
          ].map(([id, label]) => (
            <a key={id} href={`#${id}`} className="rounded-full border border-border px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors">
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* Custom Made Mouthguards */}
      <Section id="custom" eyebrow="Custom made mouthguards" title='Play hard — "wear a mouthguard".'>
        <p>
          Each year, thousands of adults and children are treated for dental
          injuries that could have been prevented or minimised by simply wearing
          a custom made professionally fitted sports mouthguard. The Australian
          Dental Association strongly recommends the use of a mouthguard in any
          contact sport or activity where a collision is likely during games and
          training.
        </p>
        <h3 className="text-xl font-semibold pt-4">Who needs a mouthguard?</h3>
        <p>
          Anyone who plays a sport or undertakes an activity where a collision
          or contact to the face is a legitimate risk — AFL, rugby league, rugby
          union, soccer, basketball, hockey, ice hockey, netball, kickboxing,
          boxing, MMA, karate, taekwondo, jiu jitsu, extreme sports, water polo,
          judo, muay thai, wrestling and many more.
        </p>
        <h3 className="text-xl font-semibold pt-4">The damage</h3>
        <p>
          Dental trauma from sporting injury can include damage to the tooth
          nerve, fractured, cracked or knocked-out teeth, a broken jaw, damage
          to the tongue, cheeks and cut lips. A single case of dental trauma can
          lead to a lifetime of dental treatment. Prevention is always better
          than the cure — so play hard, wear a mouthguard.
        </p>
        <h3 className="text-xl font-semibold pt-4">Protecting your mouth</h3>
        <p>
          A custom made, professionally fitted sports mouthguard designed by a
          dental professional makes breathing and speaking a lot easier, and is
          far more comfortable than 'boil and bite' or stock mouthguards. Those
          off-the-shelf options offer less protection — they're ill-fitted and
          loose in the mouth, which can be dangerous on impact.
        </p>
        <h3 className="text-xl font-semibold pt-4">The custom process</h3>
        <p>
          Your dental professional takes an impression and creates a plaster
          model of your teeth. That model is used to accurately assess your
          mouth and design a uniquely custom-fitted mouthguard. Once fitted,
          you'll be advised on how to care for it properly.
        </p>
      </Section>

      {/* Orthodontics */}
      <Section id="orthodontics" eyebrow="Fixed / removable orthodontics" title="Mouthguards for braces and growing smiles.">
        <p>
          SportSafe Australia creates custom-made professionally fitted sports
          mouthguards for orthodontic patients and children in the transitional
          dentition. Young athletes with ever-changing teeth and those wearing
          fixed or removable orthodontic appliances can benefit from a custom
          mouthguard.
        </p>
        <p>
          For orthodontic patients the dental stone model is blocked out around
          the bonded brackets (braces) with a putty-like material, leaving a
          void between the mouthguard and the brackets once it's formed.
        </p>
        <p>
          In mixed dentition patients, tooth eruption and growth space can be
          incorporated on the dental stone model to accommodate movement and
          dental development — meaning one mouthguard can withstand several
          sports seasons.
        </p>
        <p>
          Traumatic impact to teeth during sport is common. Custom mouthguards
          for athletes with orthodontic appliances can minimise or eliminate
          mouth injuries — and fit far better than boil-and-bite alternatives.
        </p>
        <div className="rounded-2xl border border-border bg-muted/30 p-5">
          <p className="text-base">
            <strong>FREE consultation</strong> — mention "SportSafe Australia"
            for a free, no-obligation consultation with{" "}
            <a href="http://www.anglehouseorthodontics.com.au/" target="_blank" rel="noopener noreferrer" className="link-brand">
              Angle House Orthodontics
            </a>
            .
          </p>
        </div>
      </Section>

      {/* Special K */}
      <Section id="special-k" eyebrow="Special K × SportSafe" title="#RiseWithUs — AFLW mouthguard fittings.">
        <p>
          Would your AFLW club members like a professionally fitted mouthguard
          to help prepare for the start of the season? Special K are offering
          dentally fitted, custom mouthguards for your members at{" "}
          <strong>30% off RRP</strong> — and for every mouthguard sold, a{" "}
          <strong>$10 contribution</strong> goes back to your club to help grow
          AFLW at the grassroots.
        </p>
        <p>
          Register your club's interest by getting in touch — we'll arrange a
          fitting in line with your season commencing.
        </p>
        <Link to="/contact" className="link-brand font-medium">Register your club →</Link>
      </Section>

      {/* Gift Card */}
      <Section id="gift-card" eyebrow="Gift card" title="The SportSafe gift card.">
        <p>
          The SportSafe Australia Gift Card lets the recipient choose from a
          wide selection of mouthguard colours, designs and flavours. Load any
          amount between <strong>$100 and $160</strong>.
        </p>
        <p>
          The gift card must be presented to an authorised SportSafe Australia
          member at a sporting club we attend during mouthguard season. For
          more information call <strong>0420 444 744</strong>.
        </p>
      </Section>

      {/* FAQs */}
      <Section id="faqs" eyebrow="FAQs" title="Frequently asked questions.">
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <details key={i} className="group py-5">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="text-base md:text-lg font-medium text-foreground">{f.q}</span>
                <span className="mt-1 shrink-0 text-muted-foreground transition-transform group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <div className="mt-3 text-base text-foreground/80 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>

        <div className="pt-8">
          <h3 className="text-xl font-semibold mb-4">Sports where you should wear one</h3>
          <div className="flex flex-wrap gap-2">
            {sports.map((s) => (
              <span key={s} className="rounded-full bg-muted px-3 py-1.5 text-sm text-foreground/80">{s}</span>
            ))}
          </div>
        </div>
      </Section>

      <section className="px-6 mt-24 mb-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Link to="/contact" className="link-brand font-medium">Get in touch →</Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
