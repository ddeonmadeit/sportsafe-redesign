import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14 grid md:grid-cols-4 gap-10 text-sm">
        <div className="md:col-span-2">
          <p className="font-semibold tracking-tight">SportSafe Australia</p>
          <p className="mt-2 text-muted-foreground max-w-sm">
            The Mouthguard Specialist. Custom-made, professionally fitted sports
            mouthguards. Over 24 years protecting Australian athletes.
          </p>
        </div>

        <div>
          <p className="font-medium mb-3">Explore</p>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/products" className="hover:text-foreground">Products</Link></li>
            <li><Link to="/mobile-service" className="hover:text-foreground">Mobile Service</Link></li>
            <li><Link to="/orthodontics" className="hover:text-foreground">Orthodontics</Link></li>
            <li><Link to="/denture-clinic" className="hover:text-foreground">Clinic</Link></li>
            <li><Link to="/testimonials" className="hover:text-foreground">Testimonials</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-medium mb-3">Contact</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>1B Jackson Court</li>
            <li>Doncaster East, VIC 3109</li>
            <li><a href="tel:0420444744" className="hover:text-foreground">0420 444 744</a></li>
            <li><a href="mailto:info@sportsafeaustralia.com.au" className="hover:text-foreground">info@sportsafeaustralia.com.au</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} SportSafe Australia. All rights reserved.</span>
          <span>Doncaster East Denture &amp; Mouthguard Clinic</span>
        </div>
      </div>
    </footer>
  );
}
