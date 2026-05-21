import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Truck, Stethoscope, Sparkles, Quote } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { GlassCard } from "@/components/GlassCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SportSafe Australia — Custom Fitted Sports Mouthguards" },
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

const services = [
  {
    icon: Truck,
    title: "Free Mobile Service",
    body: "Our team comes to your club on a day or night that suits — registration days, training nights or family days.",
    to: "/mobile-service",
  },
  {
    icon: Stethoscope,
    title: "Doncaster East Clinic",
    body: "Visit our Denture & Mouthguard Clinic for custom fittings in a private, professional setting.",
    to: "/denture-clinic",
  },
  {
    icon: Sparkles,
    title: "Orthodontic Mouthguards",
    body: "Custom mouthguards for patients with fixed or removable orthodontics and children in transitional dentition.",
    to: "/orthodontics",
  },
  {
    icon: Shield,
    title: "Trusted Protection",
    body: "Over 24 years experience handcrafting mouthguards for AFL, AFLW, rugby, boxing and school athletes.",
    to: "/about",
  },
];

const styles = [
  { name: "Triple Colours", img: `${SRC}/2018/11/tricolor-e1541245972858.png` },
  { name: "Team Logos", img: `${SRC}/2018/11/customize-e1541248850926.png` },
  { name: "Names / Slogans", img: `${SRC}/2018/11/Slogan-e1541249212961.png` },
  { name: "Single Colour", img: `${SRC}/2018/11/single-e1541245184229.png` },
  { name: "Customised Fangs", img: `${SRC}/2018/11/fangs-e1541248912995.png` },
  { name: "Micro Harlequin", img: `${SRC}/2018/11/micro-e1541249174773.png` },
  { name: "Cartons & Cases", img: `${SRC}/2018/11/carton-e1541248787414.png` },
];

const testimonials = [
  {
    quote:
      "These guys are so professional at what they do. The mouthguards are pure AFL style custom made professionally fitted. We are receiving lots of compliments.",
    name: "Andrew Gommers",
    role: "Marketing, Sponsorship & Events Manager, Northern Blues (VFL)",
  },
  {
    quote:
      "SportSafe Australia has been coming to Sydney to supply mouthguards to our club since 2009 and the service they provide is excellent.",
    name: "Chris Denier",
    role: "Gymea Gorillas Junior Rugby League Club, Sydney",
  },
  {
    quote:
      "Our junior football club has used SportSafe Australia as our main mouthguard supplier for over 10 years now. We recommend them to all sporting codes.",
    name: "Bruce Plant",
    role: "South Melbourne District Sports Club",
  },
];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="px-4 -mt-28 pt-28">
        <div className="mx-auto max-w-7xl relative overflow-hidden rounded-[2rem] min-h-[80vh] flex items-center"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="absolute inset-0 opacity-30 mix-blend-screen"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1), transparent 50%)",
            }}
          />
          <div className="relative grid md:grid-cols-2 gap-10 items-center w-full p-8 md:p-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 glass-dark text-white rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.22em]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Custom Made · Professionally Fitted
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05 }}
                className="mt-6 text-5xl md:text-7xl font-bold text-white leading-[0.95]"
              >
                Play hard.
                <br />
                <span className="bg-gradient-to-r from-gold to-crimson bg-clip-text text-transparent">
                  Wear a mouthguard.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mt-6 text-lg text-white/80 max-w-lg"
              >
                Australia's mouthguard specialists. Handcrafted protection for
                AFL & AFLW clubs, junior and senior sports clubs, boxing clubs,
                individual athletes and schools.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  to="/products"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-white text-navy-deep px-6 py-3.5 font-semibold hover:shadow-2xl transition-all hover:scale-[1.02]"
                >
                  Explore Products
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/mobile-service"
                  className="inline-flex items-center gap-2 rounded-2xl glass-dark text-white px-6 py-3.5 font-semibold hover:bg-white/10 transition-all"
                >
                  Book Mobile Fitting
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-10 flex flex-wrap gap-6 text-white/70 text-sm"
              >
                <div><span className="text-2xl font-bold text-white block font-display">24+</span>years experience</div>
                <div><span className="text-2xl font-bold text-white block font-display">80+</span>fittings / 2hr session</div>
                <div><span className="text-2xl font-bold text-white block font-display">100%</span>handmade in Australia</div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="glass-strong rounded-3xl p-6 rotate-2 hover:rotate-0 transition-transform duration-700">
                <img
                  src={`${SRC}/2021/04/1.jpg`}
                  alt="Custom mouthguard fitting"
                  className="w-full h-80 object-cover rounded-2xl"
                  loading="eager"
                />
              </div>
              <div className="glass-strong rounded-3xl p-4 absolute -bottom-8 -left-8 -rotate-3 hover:rotate-0 transition-transform duration-700 w-56">
                <img
                  src={`${SRC}/2018/11/tricolor-e1541245972858.png`}
                  alt="Triple colour mouthguard"
                  className="w-full h-32 object-contain"
                />
                <p className="text-xs font-semibold text-navy-deep px-2 pb-1">Triple Colours</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 mt-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">What we do</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy-deep">
              Protection crafted around every athlete.
            </h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <GlassCard key={s.title} delay={i * 0.08}>
                <s.icon className="h-7 w-7 text-accent" />
                <h3 className="mt-4 text-lg font-bold text-navy-deep">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                <Link
                  to={s.to}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-accent transition-colors"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* STYLES */}
      <section className="px-4 mt-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">Our range</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy-deep">
                A style for every team.
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-accent"
            >
              View full range <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {styles.map((s, i) => (
              <GlassCard key={s.name} delay={i * 0.05} className="!p-5">
                <div className="aspect-square rounded-2xl bg-white/60 grid place-items-center overflow-hidden">
                  <img src={s.img} alt={s.name} loading="lazy" className="w-full h-full object-contain p-3" />
                </div>
                <p className="mt-4 text-sm font-semibold text-navy-deep text-center">{s.name}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP CALLOUT */}
      <section className="px-4 mt-24">
        <div className="mx-auto max-w-7xl">
          <GlassCard className="!p-10 md:!p-14">
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">Preferred Partner</p>
                <h3 className="mt-3 text-3xl md:text-4xl font-bold text-navy-deep">
                  Guarding and protecting SMJFL footballers.
                </h3>
                <p className="mt-5 text-muted-foreground">
                  The South Metro Junior Football League welcomes SportSafe Australia
                  as a Preferred Partner for mouthguards. With over 24 years in the
                  game, SportSafe is one of Australia's leading custom-made
                  mouthguard manufacturers — serving professional athletes, primary
                  and secondary school students, dentists and dental prosthetists.
                </p>
                <Link
                  to="/partners"
                  className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-navy-deep to-navy text-primary-foreground px-5 py-3 font-semibold hover:shadow-xl transition-all"
                >
                  View Partners <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["SMJ", "RookieMe", "Pure", "AboutLogo1"].map((p) => (
                  <div key={p} className="glass rounded-2xl aspect-square grid place-items-center p-4">
                    <img
                      src={`${SRC}/2018/11/${p}${p === "AboutLogo1" ? "" : "-150x150"}.png`}
                      alt={p}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-4 mt-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">Testimonials</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy-deep">
              What people say about us.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <GlassCard key={t.name} delay={i * 0.1}>
                <Quote className="h-7 w-7 text-accent/60" />
                <p className="mt-4 text-sm leading-relaxed text-foreground/85">"{t.quote}"</p>
                <div className="mt-6 pt-5 border-t border-white/40">
                  <p className="text-sm font-semibold text-navy-deep">{t.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 mt-24">
        <div className="mx-auto max-w-7xl">
          <div
            className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
            style={{ background: "var(--gradient-hero)" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
              Ready to protect your team?
            </h2>
            <p className="mt-5 text-white/75 max-w-xl mx-auto">
              Book a free mobile fitting day for your club, or call us to arrange a
              visit to our Doncaster East clinic.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link
                to="/contact"
                className="rounded-2xl bg-white text-navy-deep px-6 py-3.5 font-semibold hover:scale-[1.02] transition-transform"
              >
                Get in touch
              </Link>
              <a
                href="tel:0420444744"
                className="rounded-2xl glass-dark text-white px-6 py-3.5 font-semibold hover:bg-white/10 transition-colors"
              >
                Call 0420 444 744
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
