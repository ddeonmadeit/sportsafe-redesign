import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 px-4 pb-6">
      <div className="mx-auto max-w-7xl glass-dark text-primary-foreground rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-4 gap-10 p-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-crimson to-gold grid place-items-center font-display font-bold">
                S
              </div>
              <div>
                <div className="font-display font-bold text-lg">SportSafe Australia</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Play Hard, Wear A Mouthguard
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/70 max-w-md">
              Custom-made, professionally fitted sports mouthguards. Over 24 years
              of craftsmanship protecting Australian athletes from juniors to
              professionals.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/products" className="hover:text-white">Products</Link></li>
              <li><Link to="/mobile-service" className="hover:text-white">Mobile Service</Link></li>
              <li><Link to="/orthodontics" className="hover:text-white">Orthodontics</Link></li>
              <li><Link to="/denture-clinic" className="hover:text-white">Denture Clinic</Link></li>
              <li><Link to="/testimonials" className="hover:text-white">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
                1B Jackson Court, Doncaster East, VIC 3109
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" />
                <a href="tel:0420444744" className="hover:text-white">0420 444 744</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" />
                <a href="mailto:info@sportsafeaustralia.com.au" className="hover:text-white">
                  info@sportsafeaustralia.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 px-10 py-5 text-xs text-white/50 flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} SportSafe Australia. All rights reserved.</span>
          <span>Doncaster East Denture &amp; Mouthguard Clinic</span>
        </div>
      </div>
    </footer>
  );
}
