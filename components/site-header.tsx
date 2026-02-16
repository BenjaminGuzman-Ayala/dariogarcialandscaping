"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Phone, Menu, X, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <span>Serving Summit, Chicago & Surrounding Suburbs</span>
          <a
            href="tel:3129850996"
            className="flex items-center gap-1.5 font-semibold hover:underline"
          >
            <Phone className="h-3.5 w-3.5" />
            (312) 985-0996
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="animate-fade-in">
            <Image
              src="/images/logo.svg"
              alt="Dario Garcia Landscaping"
              width={180}
              height={60}
              className="h-12 w-auto lg:h-14 transition-transform group-hover:scale-105"
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col leading-tight animate-fade-in animation-delay-100">
            <span className="font-sans text-sm font-bold text-foreground lg:text-base">
              Dario Garcia
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Landscaping
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <a
              href="https://www.facebook.com/dariogarcialandscaping"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Facebook className="h-[18px] w-[18px]" />
            </a>
            <a
              href="https://www.instagram.com/dariogarcialandscaping"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-[18px] w-[18px]" />
            </a>
            <a
              href="https://www.yelp.com/biz/dario-garcia-landscaping-summit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Yelp"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.056-2.97c.282-.415.862-.46 1.225-.177l2.89 2.168c.424.318.424.998 0 1.176zM16.349 17.545l-2.89-3.736c-.565-.73.174-1.71 1.04-1.39l5.096 1.89c.47.175.645.76.352 1.176l-2.206 2.846c-.282.41-.862.41-1.176.177l-.216-.963zM13.052 7.85l-.962 5.273c-.174.96-1.457 1.09-1.845.188L6.507 4.26c-.174-.464.117-.962.597-1.073l5.683-1.3c.464-.112.907.246.907.72V7.85h-.642zM11.04 15.2c.108-.94-1.002-1.537-1.684-.907L4.612 18.9c-.346.318-.173.884.282 1.002l5.273 1.3c.464.112.907-.245.907-.72l-.034-5.282zM10.79 12.3c-.108-.94-1.326-1.22-1.844-.42L4.558 18.3c-.276.415.058.95.558.95h5.45c.464 0 .82-.392.758-.85l-.534-6.1z"/>
              </svg>
            </a>
          </div>
          <div className="h-5 w-px bg-border" />
          <Button asChild>
            <a href="tel:3129850996" className="gap-2">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="border-t border-border bg-background px-4 pb-6 pt-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-base font-medium text-foreground transition-colors hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-4">
            <Button asChild className="w-full">
              <a href="tel:3129850996" className="gap-2">
                <Phone className="h-4 w-4" />
                Call (312) 985-0996
              </a>
            </Button>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.facebook.com/dariogarcialandscaping"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/dariogarcialandscaping"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.yelp.com/biz/dario-garcia-landscaping-summit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yelp"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.056-2.97c.282-.415.862-.46 1.225-.177l2.89 2.168c.424.318.424.998 0 1.176zM16.349 17.545l-2.89-3.736c-.565-.73.174-1.71 1.04-1.39l5.096 1.89c.47.175.645.76.352 1.176l-2.206 2.846c-.282.41-.862.41-1.176.177l-.216-.963zM13.052 7.85l-.962 5.273c-.174.96-1.457 1.09-1.845.188L6.507 4.26c-.174-.464.117-.962.597-1.073l5.683-1.3c.464-.112.907.246.907.72V7.85h-.642zM11.04 15.2c.108-.94-1.002-1.537-1.684-.907L4.612 18.9c-.346.318-.173.884.282 1.002l5.273 1.3c.464.112.907-.245.907-.72l-.034-5.282zM10.79 12.3c-.108-.94-1.326-1.22-1.844-.42L4.558 18.3c-.276.415.058.95.558.95h5.45c.464 0 .82-.392.758-.85l-.534-6.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
