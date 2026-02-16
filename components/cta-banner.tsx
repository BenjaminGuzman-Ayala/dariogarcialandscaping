import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-4 font-sans text-3xl font-bold text-primary-foreground md:text-4xl">
          <span className="text-balance">
            Ready to Transform Your Property?
          </span>
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/85">
          Get a free, no-obligation estimate for your landscaping, lawn care, or
          snow removal project. Serving Summit, IL, Chicago, and all surrounding
          suburbs.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            variant="secondary"
            asChild
          >
            <a href="tel:3129850996" className="gap-2">
              <Phone className="h-5 w-5" />
              Call (312) 985-0996
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            asChild
          >
            <Link href="/contact" className="gap-2">
              Request Free Estimate
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
