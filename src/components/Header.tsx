import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

type NavItem =
  | { to: string; label: string }
  | { label: string; children: { to: string; label: string }[] };

const services: { to: string; label: string }[] = [
  { to: "/mobile-service", label: "Mobile Service" },
  { to: "/orthodontics", label: "Orthodontics" },
  { to: "/denture-clinic", label: "Denture Clinic" },
];

const nav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { label: "Services", children: services },
  { to: "/athletes", label: "Athletes" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 h-16 flex items-center gap-8 border-b"
      style={{
        background: "#ffffff",
        borderColor: scrolled ? "var(--border)" : "transparent",
        paddingLeft: "var(--px)",
        paddingRight: "var(--px)",
      }}
    >
      <Link to="/" className="flex items-center flex-shrink-0">
        <img src={logo} alt="SportSafe Australia" className="h-8 w-auto" />
      </Link>

      <nav className="hidden lg:flex items-center gap-7 ml-auto">
        {nav.map((item) =>
          "children" in item ? (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                className="flex items-center gap-1 text-[13px] font-semibold text-[var(--muted)] hover:text-[var(--text)] transition-colors pb-0.5"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                {item.label}
                <ChevronDown
                  className="h-3.5 w-3.5 transition-transform"
                  style={{ transform: servicesOpen ? "rotate(180deg)" : "none" }}
                />
              </button>
              {servicesOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3"
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleClose}
                >
                  <div
                    className="min-w-[200px] rounded-xl border shadow-lg p-2 flex flex-col"
                    style={{ background: "#ffffff", borderColor: "var(--border)" }}
                  >
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        onClick={() => setServicesOpen(false)}
                        className="px-3 py-2 rounded-lg text-[13px] font-semibold text-[var(--muted)] hover:text-[var(--text)] hover:bg-black/[0.04] transition-colors"
                        activeProps={{ style: { color: "var(--text)" } }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.to}
              to={item.to}
              className="relative text-[13px] font-semibold text-[var(--muted)] hover:text-[var(--text)] transition-colors pb-0.5"
              activeProps={{ style: { color: "var(--text)" } }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ),
        )}
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
          {nav.map((item) =>
            "children" in item ? (
              <div key={item.label} className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex items-center justify-between px-2 py-2 text-sm text-[var(--muted)] hover:text-[var(--text)]"
                  aria-expanded={mobileServicesOpen}
                >
                  {item.label}
                  <ChevronDown
                    className="h-4 w-4 transition-transform"
                    style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "none" }}
                  />
                </button>
                {mobileServicesOpen &&
                  item.children.map((c) => (
                    <Link
                      key={c.to}
                      to={c.to}
                      onClick={() => {
                        setOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="pl-6 pr-2 py-2 text-sm text-[var(--muted)] hover:text-[var(--text)]"
                    >
                      {c.label}
                    </Link>
                  ))}
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-2 py-2 text-sm text-[var(--muted)] hover:text-[var(--text)]"
              >
                {item.label}
              </Link>
            ),
          )}
        </div>
      )}
    </header>
  );
}
