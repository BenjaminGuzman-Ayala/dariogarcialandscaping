import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"

const services = [
  { href: "/services#landscaping", label: "Landscaping" },
  { href: "/services#lawn-care", label: "Lawn Care" },
  { href: "/services#tree-removal", label: "Tree Removal" },
  { href: "/services#snow-removal", label: "Snow Removal" },
  { href: "/services#brick-paving", label: "Brick Paving" },
  { href: "/services#fences", label: "Fences" },
  { href: "/services#asphalt", label: "Asphalt & Seal Coating" },
  { href: "/services#synthetic-lawn", label: "Synthetic Lawn" },
  { href: "/services#drainage", label: "Drainage Solutions" },
  { href: "/services#4d-designs", label: "4D Landscape Designs" },
]

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand / NAP */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo.svg"
                alt="Dario Garcia Landscaping"
                width={160}
                height={54}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="mb-4 text-sm leading-relaxed text-background/70">
              Family-owned landscaping company proudly serving Summit, Chicago,
              and surrounding suburbs with quality outdoor solutions.
            </p>
            <div className="mb-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/dariogarcialandscaping"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-background/60 transition-colors hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/dariogarcialandscaping"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-background/60 transition-colors hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.yelp.com/biz/dario-garcia-landscaping-summit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yelp"
                className="text-background/60 transition-colors hover:text-primary"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.056-2.97c.282-.415.862-.46 1.225-.177l2.89 2.168c.424.318.424.998 0 1.176zM16.349 17.545l-2.89-3.736c-.565-.73.174-1.71 1.04-1.39l5.096 1.89c.47.175.645.76.352 1.176l-2.206 2.846c-.282.41-.862.41-1.176.177l-.216-.963zM13.052 7.85l-.962 5.273c-.174.96-1.457 1.09-1.845.188L6.507 4.26c-.174-.464.117-.962.597-1.073l5.683-1.3c.464-.112.907.246.907.72V7.85h-.642zM11.04 15.2c.108-.94-1.002-1.537-1.684-.907L4.612 18.9c-.346.318-.173.884.282 1.002l5.273 1.3c.464.112.907-.245.907-.72l-.034-5.282zM10.79 12.3c-.108-.94-1.326-1.22-1.844-.42L4.558 18.3c-.276.415.058.95.558.95h5.45c.464 0 .82-.392.758-.85l-.534-6.1z"/>
                </svg>
              </a>
            </div>
            <address className="flex flex-col gap-3 not-italic text-sm">
              <span className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                5818 S Archer Rd, Summit, IL
              </span>
              <a
                href="tel:3129850996"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                (312) 985-0996
              </a>
              <a
                href="mailto:info@dariogarcialandscaping.com"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                info@dariogarcialandscaping.com
              </a>
            </address>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Service Areas
            </h3>
            <p className="text-sm leading-relaxed text-background/70">
              Summit, IL &bull; Chicago, IL &bull; Cicero, IL &bull; Berwyn, IL
              &bull; Lyons, IL &bull; Bedford Park, IL &bull; Justice, IL &bull;
              Bridgeview, IL &bull; Burbank, IL &bull; Oak Lawn, IL &bull; and
              surrounding suburbs.
            </p>
            <div className="mt-6">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider">
                Business Hours
              </h3>
              <p className="text-sm text-background/70">
                Mon - Sat: 7:00 AM - 6:00 PM
                <br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center text-sm text-background/50 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Dario Garcia Landscaping. All
            rights reserved.
          </p>
          <p>
            5818 S Archer Rd, Summit, IL &bull;{" "}
            <a href="tel:3129850996" className="hover:text-primary">
              (312) 985-0996
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
