import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { PageShell, PageHero, Reveal } from "@/components/PageShell";
import { clearSelection, toggleSelection, useSelection } from "@/lib/selection";

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
  const selected = useSelection();

  const prefilledSubject = useMemo(
    () => (selected.length ? `Mouthguard inquiry — ${selected.length} selected` : ""),
    [selected.length],
  );

  const prefilledMessage = useMemo(() => {
    if (!selected.length) return "";
    const list = selected.map((s, i) => `${i + 1}. ${s.name}\n   ${s.img}`).join("\n");
    return `Hi SportSafe team,\n\nI'd like to inquire about the following mouthguard${selected.length === 1 ? "" : "s"}:\n\n${list}\n\nPlease get in touch with more information.\n\nThanks!`;
  }, [selected]);

  const [subject, setSubject] = useState(prefilledSubject);
  const [message, setMessage] = useState(prefilledMessage);

  // sync when selection changes
  useEffect(() => { setSubject(prefilledSubject); }, [prefilledSubject]);
  useEffect(() => { setMessage(prefilledMessage); }, [prefilledMessage]);

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

            {selected.length > 0 && (
              <div className="mt-6 rounded-2xl border border-border p-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold">
                    {selected.length} attached mouthguard{selected.length === 1 ? "" : "s"}
                  </p>
                  <button
                    type="button"
                    onClick={() => clearSelection()}
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    Clear all
                  </button>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                  {selected.map((s) => (
                    <div key={s.id} className="relative group">
                      <div className="aspect-square rounded-lg overflow-hidden bg-muted/30 flex items-center justify-center p-1">
                        <img src={s.img} alt={s.name} className="max-h-full max-w-full object-contain" />
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleSelection(s)}
                        className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label={`Remove ${s.name}`}
                      >
                        <X className="h-3 w-3" />
                      </button>
                      <p className="mt-1 text-[10px] text-muted-foreground text-center truncate" title={s.name}>{s.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <form
              className="mt-8 space-y-6"
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            >
              {[
                { label: "Your name", type: "text", required: true },
                { label: "Your email", type: "email", required: true },
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
                <span className="text-sm text-muted-foreground">Subject</span>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-base transition-colors"
                />
              </label>
              <label className="block">
                <span className="text-sm text-muted-foreground">Your message</span>
                <textarea
                  required
                  rows={selected.length ? 8 : 4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-foreground outline-none py-2 text-base resize-none transition-colors"
                />
              </label>
              <button
                type="submit"
                className="link-brand font-medium text-base"
              >
                {sent ? "Message sent →" : "Send inquiry →"}
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
