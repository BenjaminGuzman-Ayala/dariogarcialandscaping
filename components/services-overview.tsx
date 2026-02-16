import Link from "next/link"
import {
  TreePine,
  Snowflake,
  Fence,
  Shovel,
  Leaf,
  Hammer,
  Droplets,
  Layers,
  Box,
} from "lucide-react"

const services = [
  {
    icon: TreePine,
    title: "Landscaping",
    description:
      "Complete residential and commercial landscaping design and installation in Summit, IL and surrounding areas.",
    href: "/services#landscaping",
  },
  {
    icon: Leaf,
    title: "Lawn Care",
    description:
      "Regular mowing, fertilization, aeration, and seasonal lawn maintenance to keep your yard healthy year-round.",
    href: "/services#lawn-care",
  },
  {
    icon: Shovel,
    title: "Tree Removal",
    description:
      "Safe and efficient tree removal, trimming, and stump grinding services for the Chicago area.",
    href: "/services#tree-removal",
  },
  {
    icon: Snowflake,
    title: "Snow Removal",
    description:
      "Reliable residential and commercial snow plowing, salting, and ice management throughout the winter season.",
    href: "/services#snow-removal",
  },
  {
    icon: Layers,
    title: "Brick Paving",
    description:
      "Custom brick paver patios, walkways, driveways, and retaining walls to transform your outdoor space.",
    href: "/services#brick-paving",
  },
  {
    icon: Fence,
    title: "Fences",
    description:
      "Wood, vinyl, and chain-link fence installation for privacy, security, and curb appeal.",
    href: "/services#fences",
  },
  {
    icon: Hammer,
    title: "Asphalt & Seal Coating",
    description:
      "Professional asphalt paving, repair, and seal coating for driveways and parking lots.",
    href: "/services#asphalt",
  },
  {
    icon: Droplets,
    title: "Drainage Solutions",
    description:
      "Expert drainage design and installation to protect your property from water damage and flooding.",
    href: "/services#drainage",
  },
  {
    icon: Box,
    title: "4D Landscape Designs",
    description:
      "Photorealistic 4D renderings so you can visualize your dream outdoor space before construction begins.",
    href: "/services#4d-designs",
  },
]

export function ServicesOverview() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            What We Do
          </span>
          <h2 className="mx-auto max-w-2xl font-sans text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              Full-Service Landscaping &amp; Outdoor Solutions
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Whether you need regular lawn maintenance, a complete landscape
            overhaul, or reliable snow removal in Summit, IL and the greater
            Chicago area, we have you covered.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-md bg-primary/10 p-3">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground group-hover:text-primary">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View All Services
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
