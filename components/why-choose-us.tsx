import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const reasons = [
  {
    title: "Family-Owned & Operated",
    description:
      "We treat every property like our own. As a family business, we take personal pride in every project we complete.",
  },
  {
    title: "Licensed & Insured",
    description:
      "Fully licensed and insured for your peace of mind. We meet all local requirements in Summit, IL and Cook County.",
  },
  {
    title: "Free Estimates",
    description:
      "No hidden fees. We provide honest, upfront pricing with free on-site estimates for all landscaping and outdoor projects.",
  },
  {
    title: "Year-Round Service",
    description:
      "From spring landscaping to winter snow removal, we keep your property looking great and safe every season.",
  },
  {
    title: "Local Expertise",
    description:
      "We know the Chicago-area climate, soil conditions, and what works best for properties in Summit and surrounding suburbs.",
  },
  {
    title: "Quality Guaranteed",
    description:
      "We stand behind our work with a commitment to quality craftsmanship and customer satisfaction on every job.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dg13-22gI6WfPNxHBLLOiAfEnk9I3SVOC9w.webp"
              alt="Dario Garcia Landscaping full crew in front of branded company vans"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Why Choose Us
            </span>
            <h2 className="mb-6 font-sans text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">
                Trusted by Homeowners &amp; Businesses Across Chicago
              </span>
            </h2>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Dario Garcia Landscaping has been the go-to choice for residential
              and commercial outdoor services in Summit, IL and the greater
              Chicago area. Our dedication to quality and customer care sets us
              apart.
            </p>

            <ul className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <li key={reason.title} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
