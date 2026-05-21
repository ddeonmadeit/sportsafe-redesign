import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/PageShell";
import { GlassCard } from "@/components/GlassCard";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SportSafe Australia" },
      { name: "description", content: "Get in touch with SportSafe Australia / Doncaster East Denture & Mouthguard Clinic." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <PageHero
        eyebrow="Get in touch"
        title="How can we assist you?"
        description="Contact our friendly team and allow us to assist you with your mouthguard and dental needs."
      />

      <section className="px-4">
        <div className="mx-auto max-w-6xl grid md:grid-cols-[1.2fr_1fr] gap-6">
          <GlassCard>
            <h3 className="text-xl font-bold text-navy-deep">Send us a message</h3>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Your name
                  </span>
                  <input required type="text" className="mt-1.5 w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/40" />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Your email
                  </span>
                  <input required type="email" className="mt-1.5 w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/40" />
                </label>
              </div>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Subject
                </span>
                <input type="text" className="mt-1.5 w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/40" />
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Your message
                </span>
                <textarea required rows={5} className="mt-1.5 w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/40 resize-none" />
              </label>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-navy-deep to-navy text-primary-foreground px-6 py-3 font-semibold hover:shadow-xl transition-all"
              >
                <Send className="h-4 w-4" />
                {sent ? "Message sent" : "Send message"}
              </button>
            </form>
          </GlassCard>

          <div className="space-y-6">
            <GlassCard delay={0.1}>
              <h3 className="text-lg font-bold text-navy-deep">
                SportSafe Australia / Doncaster East Denture & Mouthguard Clinic
              </h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p>1B Jackson Court</p>
                    <p>Doncaster East, Victoria 3109</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <a href="tel:0420444744" className="hover:text-accent">0420 444 744</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <a href="mailto:info@sportsafeaustralia.com.au" className="hover:text-accent">
                    info@sportsafeaustralia.com.au
                  </a>
                </li>
              </ul>
            </GlassCard>
            <GlassCard delay={0.15}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Mailing address
              </h4>
              <p className="mt-3 text-sm">
                PO Box 4407<br />
                Doncaster Heights, Victoria 3109
              </p>
            </GlassCard>
            <GlassCard delay={0.2} className="!p-0 overflow-hidden">
              <iframe
                title="SportSafe Australia location"
                src="https://www.google.com/maps?q=1B%20Jackson%20Court%2C%20Doncaster%20East%20VIC%203109&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
              />
            </GlassCard>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
