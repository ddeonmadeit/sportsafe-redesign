import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { GlassCard } from "@/components/GlassCard";
import { MapPin, Phone, ArrowRight } from "lucide-react";

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
        description="Custom-made, professionally fitted sports mouthguards are now also available at our private Denture & Mouthguard Clinic in Doncaster East."
      />

      <section className="px-4">
        <div className="mx-auto max-w-6xl grid md:grid-cols-[1.1fr_1fr] gap-6">
          <GlassCard className="!p-3">
            <img
              src={`${SRC}/2018/11/The-Clinic.jpg`}
              alt="The Doncaster East Denture & Mouthguard Clinic"
              loading="lazy"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </GlassCard>
          <GlassCard delay={0.1}>
            <h3 className="text-2xl font-bold text-navy-deep">Visit our clinic</h3>
            <p className="mt-3 text-foreground/85">
              The clinic offers private appointments for custom-fitted sports
              mouthguards alongside full denture services. Our qualified dental
              prosthetists craft every mouthguard to the exact contours of your
              teeth and gums — for a fit made just for you.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/85">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                1B Jackson Court, Doncaster East, Victoria 3109
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a href="tel:0420444744" className="hover:text-accent">0420 444 744</a>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-navy-deep to-navy text-primary-foreground px-5 py-3 font-semibold hover:shadow-xl transition-all"
            >
              Book an appointment <ArrowRight className="h-4 w-4" />
            </Link>
          </GlassCard>
        </div>
      </section>
    </PageShell>
  );
}
