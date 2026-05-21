import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/mobile-service", label: "Mobile Service" },
  { to: "/orthodontics", label: "Orthodontics" },
  { to: "/denture-clinic", label: "Clinic" },
  { to: "/partners", label: "Partners" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto max-w-7xl transition-all duration-500 ${
          scrolled ? "glass-strong" : "glass"
        } rounded-2xl`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-navy-deep to-crimson grid place-items-center text-primary-foreground font-display font-bold">
              S
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-navy-deep tracking-tight">
                SportSafe
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Australia
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-lg transition-colors hover:bg-white/40"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:0420444744"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold bg-gradient-to-r from-navy-deep to-navy text-primary-foreground hover:shadow-lg hover:shadow-navy/30 transition-all"
            >
              <Phone className="h-4 w-4" />
              0420 444 744
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/40"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-white/40 px-3 py-3 grid grid-cols-2 gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm rounded-lg hover:bg-white/40"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
