import type { Metadata } from "next"
import Image from "next/image"
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
  Sprout,
  Phone,
  ArrowRight,
  Box,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CtaBanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full range of professional landscaping, lawn care, tree removal, snow removal, brick paving, fence installation, asphalt seal coating, and drainage services in Summit, IL, Chicago, and surrounding suburbs.",
}

const services = [
  {
    id: "landscaping",
    icon: TreePine,
    title: "Landscaping",
    location: "Summit, IL & Chicago Area",
    image: "/dg12.webp",
    imageAlt: "Beautiful curving mulch bed borders with ornamental shrubs and trees",
    description:
      "Transform your outdoor space with our professional landscaping services. We handle everything from garden design and planting to complete landscape overhauls for residential and commercial properties throughout Summit, IL and the greater Chicago area.",
    benefits: [
      "Custom landscape design tailored to your property",
      "Seasonal flower bed installation and maintenance",
      "Shrub and bush planting and trimming",
      "Mulching, edging, and ground cover installation",
      "Commercial property landscaping and maintenance",
    ],
  },
  {
    id: "lawn-care",
    icon: Leaf,
    title: "Lawn Care",
    location: "Chicago & Surrounding Suburbs",
    image: "/dg11.webp",
    imageAlt: "Professional power raking and dethatching on residential lawn",
    description:
      "Keep your lawn healthy, green, and beautiful year-round with our comprehensive lawn care programs. From regular mowing and trimming to fertilization and aeration, we provide everything your lawn needs to thrive in the Chicago climate.",
    benefits: [
      "Weekly and bi-weekly mowing programs",
      "Fertilization and weed control treatments",
      "Core aeration and overseeding",
      "Spring and fall cleanup services",
      "Edging and trimming for a polished look",
    ],
  },
  {
    id: "tree-removal",
    icon: Shovel,
    title: "Tree Removal",
    location: "Chicago Area",
    image: "/dg17.webp",
    imageAlt: "Crew working with equipment for tree and yard cleanup on residential street",
    description:
      "Our experienced tree service team handles everything from routine trimming to complete tree removal. We use proper equipment and safety protocols to protect your property and surrounding structures during every job in the Chicago area.",
    benefits: [
      "Safe and efficient tree removal",
      "Tree trimming and crown reduction",
      "Stump grinding and removal",
      "Emergency storm damage cleanup",
      "Hazardous tree assessment and removal",
    ],
  },
  {
    id: "snow-removal",
    icon: Snowflake,
    title: "Snow Removal",
    location: "Summit, IL & Chicagoland",
    image: "/dg2.webp",
    imageAlt: "Commercial snow removal with cleared sidewalk path next to brick building",
    description:
      "Do not let Chicago winters slow you down. Our reliable snow removal services keep your driveways, sidewalks, and parking lots clear and safe throughout the winter season. We offer both residential and commercial snow management plans.",
    benefits: [
      "Residential driveway and walkway clearing",
      "Commercial parking lot snow plowing",
      "Salt and de-icing application",
      "24/7 emergency snow removal during storms",
      "Seasonal contracts for worry-free winter care",
    ],
  },
  {
    id: "brick-paving",
    icon: Layers,
    title: "Brick Paving",
    location: "Summit, IL & Surrounding Areas",
    image: "/dg19.webp",
    imageAlt: "Herringbone brick paver driveway installation at residential home",
    description:
      "Add beauty and value to your property with professional brick paver installation. We create stunning patios, walkways, driveways, and retaining walls using high-quality materials and expert craftsmanship.",
    benefits: [
      "Custom patio design and installation",
      "Brick paver driveways and walkways",
      "Retaining walls and garden borders",
      "Paver repair and restoration",
      "Wide selection of colors, patterns, and materials",
    ],
  },
  {
    id: "fences",
    icon: Fence,
    title: "Fence Installation",
    location: "Chicago Suburbs",
    image: "/dg5.webp",
    imageAlt: "White vinyl privacy fence installation along brick paver walkway",
    description:
      "Enhance your property's privacy, security, and curb appeal with a professionally installed fence. We offer a variety of styles and materials to complement any property in the Chicago suburbs.",
    benefits: [
      "Wood privacy fences",
      "Vinyl and PVC fencing",
      "Chain-link fencing for security",
      "Gate installation and repair",
      "Custom designs to match your property",
    ],
  },
  {
    id: "asphalt",
    icon: Hammer,
    title: "Asphalt & Seal Coating",
    location: "Summit, IL & Chicago Area",
    image: "/dg7.webp",
    imageAlt: "Fresh asphalt seal coating on commercial lot in Summit IL",
    description:
      "Protect and restore your asphalt surfaces with our professional paving and seal coating services. We help extend the life of your driveway or parking lot while improving its appearance.",
    benefits: [
      "New asphalt driveway installation",
      "Parking lot paving and striping",
      "Seal coating to prevent cracks and damage",
      "Pothole repair and patching",
      "Cost-effective surface restoration",
    ],
  },
  {
    id: "synthetic-lawn",
    icon: Sprout,
    title: "Synthetic Lawn Installation",
    location: "Chicago & Surrounding Suburbs",
    image: "/dg6.webp",
    imageAlt: "Lush green lawn with mulch beds and mature trees in residential backyard",
    description:
      "Enjoy a perfect, maintenance-free lawn year-round with our synthetic turf installation. Ideal for homeowners and businesses who want a beautiful green space without the constant upkeep.",
    benefits: [
      "Professional-grade artificial turf",
      "Realistic look and feel",
      "Zero mowing, watering, or fertilizing required",
      "Pet-friendly and child-safe options",
      "Long-lasting with warranty coverage",
    ],
  },
  {
    id: "drainage",
    icon: Droplets,
    title: "Drainage Solutions",
    location: "Summit, IL & Chicago Suburbs",
    image: "/dg16.webp",
    imageAlt: "Crew working on yard grading and preparation with pavers and landscaping",
    description:
      "Protect your property from water damage with expert drainage solutions. We design and install systems that redirect water away from your foundation, lawn, and landscaped areas.",
    benefits: [
      "French drain installation",
      "Downspout extensions and rerouting",
      "Grading and slope correction",
      "Sump pump discharge lines",
      "Yard drainage to prevent pooling and flooding",
    ],
  },
  {
    id: "4d-designs",
    icon: Box,
    title: "4D Landscape Designs",
    location: "Summit, IL & Chicago Area",
    image: "/dg20.webp",
    imageAlt: "Aerial view of stunning brick paver patio design with integrated planters",
    description:
      "Visualize your dream outdoor space before a single shovel hits the ground. Our 4D landscape design service creates detailed, interactive renderings of your project so you can see exactly how your new landscape, patio, or outdoor living area will look and evolve through the seasons.",
    benefits: [
      "Photorealistic 3D renderings of your project",
      "Seasonal visualization to see your landscape year-round",
      "Interactive walk-through of your future outdoor space",
      "Accurate material and plant placement planning",
      "Revisions included to match your exact vision",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Our Services
            </span>
            <h1 className="mb-6 font-sans text-4xl font-bold text-foreground md:text-5xl">
              <span className="text-balance">
                Professional Landscaping &amp; Outdoor Services
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              From expert landscaping and lawn care to reliable snow removal and
              hardscaping, Dario Garcia Landscaping provides comprehensive
              outdoor solutions for homes and businesses in Summit, IL, Chicago,
              and surrounding suburbs.
            </p>
          </div>
        </div>
      </section>

      {/* Service sections */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-20">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32"
              >
                {/* Image + Text row */}
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  {/* Service Image */}
                  <div className={`relative aspect-[4/3] overflow-hidden rounded-lg ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      loading={i < 2 ? "eager" : "lazy"}
                    />
                  </div>

                  {/* Icon + Title + Description */}
                  <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                    <div className="mb-4 inline-flex rounded-md bg-primary/10 p-3">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="mb-1 font-sans text-2xl font-bold text-foreground md:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mb-4 text-sm font-medium text-primary">
                      {service.location}
                    </p>
                    <p className="mb-6 leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <div className="rounded-lg border border-border bg-card p-6">
                      <h3 className="mb-4 font-semibold text-card-foreground">
                        Key Benefits
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {service.benefits.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <Button asChild size="sm">
                          <Link href="/contact" className="gap-2">
                            Get a Free Estimate
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
