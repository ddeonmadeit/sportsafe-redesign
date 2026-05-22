import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, Reveal } from "@/components/PageShell";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import heroImage from "@/assets/hero.png";

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

const services = [
  { n: "01", t: "Mobile Club Fittings", d: "We come to your club — registration days, training nights, family days. Up to 80+ fittings per two-hour session, juniors and seniors." },
  { n: "02", t: "Custom Mouthguards", d: "Sixteen design ranges, from clean single colours to team logos, fangs, marbles and triple-colour combinations." },
  { n: "03", t: "Doncaster East Clinic", d: "Private chair-side fittings at our denture and mouthguard clinic — full denture services available alongside." },
  { n: "04", t: "Orthodontic Mouthguards", d: "Specially designed protection for athletes wearing braces — comfort, fit and full coverage without compromise." },
  { n: "05", t: "Schools & Academies", d: "Bulk fittings for schools and elite academies. We handle the scheduling, paperwork and the kids — you just play." },
  { n: "06", t: "Health Fund Rebates", d: "Item 151 receipts provided. Most major Australian health funds cover custom-fitted sports mouthguards." },
];

const styles = [
  { name: "Triple Colours", img: `${SRC}/2018/11/tricolor-e1541245972858.png` },
  { name: "Team Logos", img: `${SRC}/2018/11/customize-e1541248850926.png` },
  { name: "Names & Slogans", img: `${SRC}/2018/11/Slogan-e1541249212961.png` },
  { name: "Single Colour", img: `${SRC}/2018/11/single-e1541245184229.png` },
  { name: "Customised Fangs", img: `${SRC}/2018/11/fangs-e1541248912995.png` },
  { name: "Micro Harlequin", img: `${SRC}/2018/11/micro-e1541249174773.png` },
];

const testimonials = [
  { quote: "These guys are so professional at what they do. The mouthguards are pure AFL style custom made professionally fitted. We're receiving lots of compliments.", name: "Andrew Gommers", role: "Northern Blues (VFL)" },
  { quote: "SportSafe Australia has been coming to Sydney to supply mouthguards to our club since 2009. The service they provide is excellent.", name: "Chris Denier", role: "Gymea Gorillas Junior Rugby League" },
  { quote: "Our junior football club has used SportSafe Australia as our main mouthguard supplier for over 10 years now.", name: "Bruce Plant", role: "South Melbourne District Sports Club" },
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="dark relative flex items-end overflow-hidden" style={{ minHeight: "100svh", paddingTop: 64, paddingBottom: "clamp(56px, 8vw, 100px)", background: "#020a18", color: "var(--text)" }}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(2,10,24,0.55) 0%, rgba(2,10,24,0.75) 55%, rgba(2,10,24,0.95) 100%), radial-gradient(120% 80% at 50% 40%, rgba(2,10,24,0.25) 0%, rgba(2,10,24,0.85) 100%)",
            }}
          />
        </div>
        <div className="relative z-[1] w-full mx-auto" style={{ maxWidth: "var(--maxw)", paddingLeft: "var(--px)", paddingRight: "var(--px)" }}>
          <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="eyebrow mb-5">
            <span className="rule" />Custom Mouthguards · Australia Wide
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="display"
            style={{ fontSize: "clamp(64px, 13vw, 170px)", marginBottom: 24, maxWidth: "12ch" }}
          >
            Play hard.<br /><span className="acc">Wear a mouthguard.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-9"
            style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "var(--muted)", maxWidth: "52ch" }}
          >
            Custom-made, professionally fitted sports mouthguards. Handcrafted protection for AFL & AFLW clubs, junior and senior sport, boxing, individual athletes and schools — for over 24 years.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="flex flex-wrap gap-3 mb-14">
            <Link to="/contact" className="btn btn--primary">Contact us <Arrow /></Link>
            <Link to="/mobile-service" className="btn btn--ghost">Book mobile fitting <Arrow /></Link>
          </motion.div>
          <div className="flex flex-wrap pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            {[["24+ Years","Experience"],["80+","Fittings / 2hrs"],["AU Made","100% Handcrafted"],["Item 151","Health Rebates"]].map(([v,l]) => (
              <div key={l} className="hstat">
                <span className="hstat__val">{v}</span>
                <span className="hstat__lbl">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {Array.from({ length: 2 }).flatMap((_, k) => (
            ["CUSTOM MOUTHGUARDS","MOBILE SERVICE","AFL · AFLW","RUGBY · BOXING","SCHOOLS & CLUBS","MADE IN AUSTRALIA"].map((s, i) => (
              <span key={`${k}-${i}`}>{s}<span className="sep mx-4">◆</span></span>
            ))
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="py-[clamp(64px,10vw,120px)]" id="services">
        <div className="wrap">
          <Reveal className="mb-12">
            <span className="kicker"><span className="rule" />What We Do</span>
            <h2 className="display mt-4" style={{ fontSize: "clamp(38px, 6vw, 82px)" }}>
              Protecting smiles.<br />Across every sport.
            </h2>
          </Reveal>
          <ul className="svc-list">
            {services.map((s) => (
              <Reveal key={s.n}>
                <li className="svc-row">
                  <div className="svc-num">{s.n}</div>
                  <div className="svc-body">
                    <h3 className="display">{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* PRODUCTS PREVIEW */}
      <section className="py-[clamp(64px,10vw,120px)]" style={{ background: "var(--s1)" }}>
        <div className="wrap">
          <Reveal className="mb-12">
            <span className="kicker"><span className="rule" />Our Range</span>
            <h2 className="display mt-4" style={{ fontSize: "clamp(38px, 6vw, 82px)" }}>
              A style for<br />every team.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-12">
            {styles.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.05}>
                <div className="aspect-square flex items-center justify-center">
                  <img src={s.img} alt={s.name} loading="lazy" className="max-h-full max-w-full object-contain" />
                </div>
                <p className="display mt-4 text-center" style={{ fontSize: 18 }}>{s.name}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Link to="/products" className="btn btn--ghost">See all 16 ranges <Arrow /></Link>
          </Reveal>
        </div>
      </section>

      {/* CLINIC FEATURE */}
      <section className="py-[clamp(64px,10vw,120px)]">
        <div className="wrap grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <span className="kicker"><span className="rule" />Doncaster East Clinic</span>
            <h2 className="display mt-4" style={{ fontSize: "clamp(32px, 5vw, 60px)" }}>
              A private fit.<br />In our chair.
            </h2>
            <p className="mt-5 text-[16px]" style={{ color: "var(--muted)" }}>
              Visit our Denture & Mouthguard Clinic for custom mouthguard fittings alongside our full denture services. Crafted to the exact contours of your teeth — made just for you.
            </p>
            <div className="mt-6">
              <Link to="/denture-clinic" className="btn btn--ghost">Book a visit <Arrow /></Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <img src={`${SRC}/2018/11/The-Clinic.jpg`} alt="The Doncaster East Denture & Mouthguard Clinic" loading="lazy" className="w-full h-[420px] object-cover rounded-2xl" />
          </Reveal>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-[clamp(56px,8vw,100px)] border-y" style={{ borderColor: "var(--border)" }}>
        <div className="wrap">
          <Reveal className="mb-10 text-center">
            <span className="kicker justify-center"><span className="rule" />Our Partners</span>
            <h2 className="display mt-4" style={{ fontSize: "clamp(32px, 5vw, 60px)" }}>
              Trusted by Australian sport.
            </h2>
          </Reveal>
        </div>
        <PartnersMarquee />
      </section>

      {/* TESTIMONIALS */}
      <section className="py-[clamp(64px,10vw,120px)]" style={{ background: "var(--s1)" }}>
        <div className="wrap">
          <Reveal className="mb-12">
            <span className="kicker"><span className="rule" />Testimonials</span>
            <h2 className="display mt-4" style={{ fontSize: "clamp(38px, 6vw, 82px)" }}>
              What clubs say.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <p className="text-[17px] leading-relaxed">"{t.quote}"</p>
                <p className="display mt-6" style={{ fontSize: 18 }}>{t.name}</p>
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mt-1" style={{ color: "var(--muted)" }}>{t.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-[clamp(80px,12vw,140px)]" style={{ background: "var(--s2)" }}>
        <div className="absolute pointer-events-none" style={{ top: "-10%", right: "-5%", width: "70vw", height: "70vw", background: "radial-gradient(circle, color-mix(in srgb,var(--accent) 14%,transparent) 0%, transparent 65%)" }} />
        <div className="wrap relative z-[1]" style={{ maxWidth: 720 }}>
          <Reveal>
            <span className="kicker"><span className="rule" />Get In Touch</span>
            <h2 className="display mt-4" style={{ fontSize: "clamp(52px, 9vw, 110px)" }}>
              Ready to<br />protect your team?
            </h2>
            <p className="mt-6 text-[16px]" style={{ color: "var(--muted)", maxWidth: "48ch" }}>
              Book a free mobile fitting for your club, or call us to arrange a visit to our Doncaster East clinic. Australia-wide service.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn--primary">Contact us <Arrow /></Link>
              <Link to="/mobile-service" className="btn btn--ghost">Book mobile fitting <Arrow /></Link>
            </div>
            <p className="mt-7 text-[12px] font-semibold tracking-[0.16em] uppercase" style={{ color: "var(--muted)" }}>
              1B Jackson Court, Doncaster East VIC 3109
            </p>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
