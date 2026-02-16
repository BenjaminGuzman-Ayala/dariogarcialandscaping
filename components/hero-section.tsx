import Image from "next/image"
import Link from "next/link"
import { Phone, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroEstimateForm } from "@/components/hero-estimate-form"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px]">
      {/* Background image */}
      <Image
        src="/dglawn.webp"
        alt="Luxury residential backyard with lush green lawn and professional landscaping by Dario Garcia Landscaping"
        fill
        sizes="90vw"
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="relative mx-auto flex max-w-7xl gap-8 px-4 py-24 lg:py-32">
        {/* Left content column */}
        <div className="flex-1">
          <span className="mb-4 inline-block rounded-sm bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground animate-scale-in">
            Design &bull; Maintenance &bull; Improvement
          </span>
          <h1 className="mb-4 max-w-2xl font-sans text-4xl font-bold leading-tight text-background md:text-5xl lg:text-6xl animate-slide-up animation-delay-100">
            <span className="text-balance">
              Professional Landscaping &amp; Outdoor Solutions in Summit, IL
            </span>
          </h1>
          <p className="mb-6 max-w-xl text-lg leading-relaxed text-background/85 animate-fade-in animation-delay-200">
            We specialize in designing, maintaining, and improving outdoor spaces. Custom gardening, landscaping, and green space solutions that transform your property into a beautiful, functional environment.
          </p>

          {/* Value props */}
          <div className="mb-6 flex max-w-lg gap-6 animate-fade-in animation-delay-200">
            <div>
              <p className="font-semibold text-background text-sm mb-0.5">Easy to Get Started</p>
              <p className="text-xs text-background/70">Contact us and we make your outdoor dreams a reality.</p>
            </div>
            <div>
              <p className="font-semibold text-background text-sm mb-0.5">Guaranteed Quality</p>
              <p className="text-xs text-background/70">High-quality work that adds real value to your property.</p>
            </div>
          </div>

          {/* Google Reviews Badge */}
          <div className="mb-6 flex items-center gap-3 rounded-lg bg-background/10 px-4 py-3 backdrop-blur-sm animate-fade-in animation-delay-300 w-fit">
            <svg
              className="h-6 w-6 shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-background">4.8</span>
                <div className="flex items-center" aria-label="4.8 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < 5 ? 'fill-yellow-400 text-yellow-400' : ''}`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-xs text-background/75">
                Based on 501 Google Reviews
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row animate-fade-in animation-delay-400">
            <Button size="lg" asChild>
              <a href="tel:3129850996" className="gap-2">
                <Phone className="h-5 w-5" />
                Call (312) 985-0996
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/30 bg-background/10 text-background hover:bg-background/20 hover:text-background"
              asChild
            >
              <Link href="/contact" className="gap-2">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Right form column - hidden on smaller screens */}
        <div className="hidden w-80 shrink-0 lg:block sticky top-32 h-fit">
          <HeroEstimateForm />
        </div>
      </div>
    </section>
  )
}
