import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CtaBanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Dario Garcia Landscaping, a family-owned landscaping and lawn care company serving Summit, IL, Chicago, and surrounding suburbs. Licensed, insured, and committed to quality.",
}

const milestones = [
  {
    title: "Family-Owned Business",
    text: "Dario Garcia Landscaping is a proud family-owned and operated business. We built our reputation one yard at a time through honest work and personal attention to every project.",
  },
  {
    title: "Deep Community Roots",
    text: "Based in Summit, IL, we are part of the community we serve. Our team lives and works in the same neighborhoods we care for, giving us a deep understanding of what local properties need.",
  },
  {
    title: "Comprehensive Expertise",
    text: "From landscaping design and lawn maintenance to snow removal and hardscaping, our team brings years of hands-on experience to every job, big or small.",
  },
  {
    title: "Year-Round Reliability",
    text: "Chicago weather is unpredictable, but our commitment is not. We are here for you every season, whether it is spring planting or winter snow clearing.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              About Us
            </span>
            <h1 className="mb-6 font-sans text-4xl font-bold text-foreground md:text-5xl">
              <span className="text-balance">
                About Dario Garcia Landscaping
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              At Dario Landscaping &amp; Snow Removal, we provide the highest quality residential and commercial landscaping, snow removal, and lawn care services. Our team works with you to create beautiful outdoor living spaces, no matter the size or scope of your project.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/dg13.webp"
                alt="The Dario Garcia Landscaping full crew standing in front of branded company vans"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Our Story
              </span>
              <h2 className="mb-6 font-sans text-3xl font-bold text-foreground md:text-4xl">
                <span className="text-balance">
                  Family-Owned, Community-Driven
                </span>
              </h2>
              <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
                <p>
                  Dario Landscaping &amp; Snow Removal is a family-owned business dedicated to providing the highest quality landscaping services. We specialize in residential and commercial landscaping, snow removal, and lawn care throughout Summit, Chicago, and the surrounding suburbs.
                </p>
                <p>
                  Our team of professionals works with you to create unique, beautiful outdoor living spaces no matter the size and scope of your project. From perfectly manicured lawns and custom paver patios to cleared driveways after Chicago snowstorms, we bring the same level of care and craftsmanship to every job.
                </p>
                <p>
                  We also provide snow and ice removal services designed to keep your residential or commercial property safe and clear during the cold winter months. Our commitment goes beyond landscaping -- we build lasting relationships with every customer we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Milestones */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              What Sets Us Apart
            </span>
            <h2 className="font-sans text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">
                More Than Just a Landscaping Company
              </span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {milestones.map((m) => (
              <div
                key={m.title}
                className="flex gap-4 rounded-lg border border-border bg-card p-6"
              >
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                    {m.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <a href="tel:3129850996" className="gap-2">
                  <Phone className="h-5 w-5" />
                  Call Us Today
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact" className="gap-2">
                  Request a Free Estimate
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
