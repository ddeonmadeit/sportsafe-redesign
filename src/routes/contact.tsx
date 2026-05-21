import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero, Reveal } from "@/components/PageShell";

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
        title="How can we help?"
        description="Contact our friendly team and allow us to assist you with your mouthguard and dental needs."
      />

      <section className="px-6">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-16">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight">Send a message</h2>
            <form
              className="mt-8 space-y-6"
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            >
              {[
                { label: "Your name", type: "text", required: true },
                { label: "Your email", type: "email", required: true },
                { label: "Subject", type: "text", required: false },
              ].map((f) => (
                <label key={f.label} className="block">
                  <span className="text-sm text-muted-foreground">{f.label}</span>
                  <input
                    type={f.type}
                    required={f.required}
                    className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-base transition-colors"
                  />
                </label>
              ))}
              <label className="block">
                <span className="text-sm text-muted-foreground">Your message</span>
                <textarea
                  required
                  rows={4}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-base resize-none transition-colors"
                />
              </label>
              <button
                type="submit"
                className="link-brand font-medium text-base"
              >
                {sent ? "Message sent →" : "Send message →"}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-2xl font-semibold tracking-tight">Visit or call</h2>
            <div className="mt-8 space-y-6 text-base">
              <div>
                <p className="text-sm text-muted-foreground">Address</p>
                <p className="mt-1">1B Jackson Court<br />Doncaster East, Victoria 3109</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Mailing</p>
                <p className="mt-1">PO Box 4407<br />Doncaster Heights, Victoria 3109</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a href="tel:0420444744" className="mt-1 link-brand inline-block">0420 444 744</a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:info@sportsafeaustralia.com.au" className="mt-1 link-brand inline-block break-all">
                  info@sportsafeaustralia.com.au
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <div className="mx-auto max-w-6xl rounded-3xl overflow-hidden">
            <iframe
              title="SportSafe Australia location"
              src="https://www.google.com/maps?q=1B%20Jackson%20Court%2C%20Doncaster%20East%20VIC%203109&output=embed"
              className="w-full h-[420px] border-0"
              loading="lazy"
            />
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
