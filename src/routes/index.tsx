import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, Reveal } from "@/components/PageShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SportSafe Australia — The Mouthguard Specialist" },
      {
        name: "description",
        content:
          "Custom-made, professionally fitted sports mouthguards for AFL, rugby, boxing, schools and clubs. Free mobile fitting service Australia-wide.",
      },
    ],
  }),
  component: Home,
});

const SRC = "https://www.sportsafeaustralia.com.au/wp-content/uploads";

const styles = [
  { name: "Triple Colours", img: `${SRC}/2018/11/tricolor-e1541245972858.png` },
  { name: "Team Logos", img: `${SRC}/2018/11/customize-e1541248850926.png` },
  { name: "Names & Slogans", img: `${SRC}/2018/11/Slogan-e1541249212961.png` },
  { name: "Single Colour", img: `${SRC}/2018/11/single-e1541245184229.png` },
  { name: "Customised Fangs", img: `${SRC}/2018/11/fangs-e1541248912995.png` },
  { name: "Micro Harlequin", img: `${SRC}/2018/11/micro-e1541249174773.png` },
];

const testimonials = [
  {
    quote:
      "These guys are so professional at what they do. The mouthguards are pure AFL style custom made professionally fitted. We're receiving lots of compliments.",
    name: "Andrew Gommers",
    role: "Northern Blues (VFL)",
  },
  {
    quote:
      "SportSafe Australia has been coming to Sydney to supply mouthguards to our club since 2009. The service they provide is excellent.",
    name: "Chris Denier",
    role: "Gymea Gorillas Junior Rugby League",
  },
  {
    quote:
      "Our junior football club has used SportSafe Australia as our main mouthguard supplier for over 10 years now.",
    name: "Bruce Plant",
    role: "South Melbourne District Sports Club",
  },
];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="px-6 pt-24 md:pt-36 pb-24 md:pb-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium link-brand"
        >
          The Mouthguard Specialist
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-4 mx-auto max-w-4xl text-6xl md:text-8xl font-semibold tracking-tight leading-[0.95]"
        >
          Play hard.
          <br />
          <span style={{ color: "var(--brand)" }}>Wear a mouthguard.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground"
        >
          Custom-made, professionally fitted sports mouthguards. Handcrafted
          protection for AFL & AFLW clubs, junior and senior sport, boxing,
          individual athletes and schools.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 flex flex-wrap gap-x-6 gap-y-3 justify-center text-base"
        >
          <Link to="/products" className="link-brand font-medium">
            Explore products →
          </Link>
          <Link to="/mobile-service" className="link-brand font-medium">
            Book a mobile fitting →
          </Link>
        </motion.div>
      </section>

      {/* HERO IMAGE */}
      <Reveal className="px-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl">
          <img
            src={`${SRC}/2021/04/1.jpg`}
            alt="Custom mouthguard fitting in progress"
            className="w-full h-[60vh] md:h-[70vh] object-cover"
            loading="eager"
          />
        </div>
      </Reveal>

      {/* STATS */}
      <section className="px-6 mt-32">
        <div className="mx-auto max-w-5xl grid grid-cols-3 gap-8 text-center">
          {[
            ["24+", "years of experience"],
            ["80+", "fittings per 2hr session"],
            ["100%", "handmade in Australia"],
          ].map(([n, l], i) => (
            <Reveal key={l} delay={i * 0.1}>
              <p className="text-5xl md:text-6xl font-semibold tracking-tight">{n}</p>
              <p className="mt-2 text-sm text-muted-foreground">{l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MOBILE SERVICE FEATURE */}
      <section className="px-6 mt-40">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="text-sm font-medium link-brand">Mobile Service</p>
            <h2 className="mt-3 text-5xl md:text-6xl font-semibold tracking-tight">
              We come to your club.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A free mobile fitting service for sporting clubs across Australia.
              Registration days, training nights, family days — juniors or seniors,
              we travel to you.
            </p>
            <Link to="/mobile-service" className="mt-6 inline-block link-brand font-medium">
              Learn more →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CLINIC FEATURE */}
      <section className="px-6 mt-40">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <p className="text-sm font-medium link-brand">Doncaster East Clinic</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              A private fitting, in our chair.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Visit our Denture & Mouthguard Clinic for custom mouthguard fittings
              alongside our full denture services. Crafted to the exact contours of
              your teeth — made just for you.
            </p>
            <Link to="/denture-clinic" className="mt-5 inline-block link-brand font-medium">
              Book a visit →
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={`${SRC}/2018/11/The-Clinic.jpg`}
              alt="The Doncaster East Denture & Mouthguard Clinic"
              loading="lazy"
              className="w-full h-[420px] object-cover rounded-3xl"
            />
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="px-6 mt-40">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className="text-sm font-medium link-brand">Our range</p>
            <h2 className="mt-3 text-5xl md:text-6xl font-semibold tracking-tight">
              A style for every team.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Sixteen design ranges — from clean single colours to bold team
              logos, fangs, marbles and more.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-14">
            {styles.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.05}>
                <div className="aspect-square flex items-center justify-center">
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="mt-4 text-center text-sm font-medium">{s.name}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Link to="/products" className="link-brand font-medium">
              See all 16 ranges →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section className="px-6 mt-40">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-sm font-medium link-brand">Preferred Partner</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Guarding and protecting SMJFL footballers.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              The South Metro Junior Football League welcomes SportSafe Australia
              as a Preferred Mouthguard Partner — extending our service across
              every club in the league.
            </p>
            <Link to="/partners" className="mt-5 inline-block link-brand font-medium">
              View all partners →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 mt-40">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className="text-sm font-medium link-brand">Testimonials</p>
            <h2 className="mt-3 text-5xl md:text-6xl font-semibold tracking-tight">
              What people say.
            </h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-12">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <p className="text-lg leading-relaxed">"{t.quote}"</p>
                <p className="mt-6 text-sm font-medium">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 mt-40">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
              Ready to protect your team?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Book a free mobile fitting for your club, or call us to arrange a
              visit to our Doncaster East clinic.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 justify-center text-base">
              <Link to="/contact" className="link-brand font-medium">
                Get in touch →
              </Link>
              <a href="tel:0420444744" className="link-brand font-medium">
                Call 0420 444 744 →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
