import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero, Reveal } from "@/components/PageShell";

export const Route = createFileRoute("/denture-clinic")({
  head: () => ({
    meta: [
      { title: "Denture & Mouthguard Clinic — SportSafe Australia" },
      { name: "description", content: "Visit the Doncaster East Denture & Mouthguard Clinic for custom-fitted sports mouthguards and full denture services." },
    ],
  }),
  component: Clinic,
});

const SRC = "https://www.sportsafeaustralia.com.au/wp-content/uploads";

function Clinic() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Doncaster East"
        title="Denture & Mouthguard Clinic."
        description="Custom-made, professionally fitted sports mouthguards are now also available at our private clinic in Doncaster East."
      />

      <Reveal className="px-6">
        <div className="mx-auto max-w-6xl">
          <img
            src={`${SRC}/2018/11/The-Clinic.jpg`}
            alt="The Doncaster East Denture & Mouthguard Clinic"
            loading="lazy"
            className="w-full h-[60vh] object-cover rounded-3xl"
          />
        </div>
      </Reveal>

      <section className="px-6 mt-20">
        <div className="mx-auto max-w-3xl space-y-5 text-lg text-foreground/85 leading-relaxed">
          <Reveal>
            <p>
              The clinic offers private appointments for custom-fitted sports
              mouthguards alongside full denture services. Our qualified dental
              prosthetists craft every mouthguard to the exact contours of your
              teeth and gums — for a fit made just for you.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-base text-muted-foreground">
              1B Jackson Court, Doncaster East, Victoria 3109<br />
              <a href="tel:0420444744" className="link-brand">0420 444 744</a>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/contact" className="link-brand font-medium">Book an appointment →</Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
