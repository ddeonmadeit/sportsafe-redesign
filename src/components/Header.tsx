import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/mobile-service", label: "Mobile" },
  { to: "/orthodontics", label: "Orthodontics" },
  { to: "/denture-clinic", label: "Clinic" },
  { to: "/partners", label: "Partners" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 h-16 flex items-center gap-8 border-b transition-colors"
      style={{
        background: scrolled
          ? "color-mix(in srgb, var(--bg) 88%, transparent)"
          : "transparent",
        borderColor: scrolled ? "var(--border)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        paddingLeft: "var(--px)",
        paddingRight: "var(--px)",
      }}
    >
      <Link to="/" className="flex items-center flex-shrink-0">
        <img src={logo} alt="SportSafe Australia" className="h-8 w-auto" />
      </Link>

      <nav className="hidden lg:flex items-center gap-7 ml-auto">
        {nav.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="relative text-[13px] font-semibold text-[var(--muted)] hover:text-[var(--text)] transition-colors pb-0.5"
            activeProps={{ style: { color: "var(--text)" } }}
            activeOptions={{ exact: item.to === "/" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2 ml-auto lg:ml-0 flex-shrink-0">
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center rounded-full px-5 py-2.5 text-[12px] font-bold tracking-[0.18em] uppercase"
          style={{ background: "var(--accent)", color: "var(--on-accent)" }}
        >
          Contact us
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden absolute top-16 inset-x-0 border-b py-4 flex flex-col gap-1 px-[var(--px)]"
          style={{ background: "var(--bg)", borderColor: "var(--border)" }}
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="px-2 py-2 text-sm text-[var(--muted)] hover:text-[var(--text)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
