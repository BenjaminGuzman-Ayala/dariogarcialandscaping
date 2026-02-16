import type { Metadata } from "next"
import Image from "next/image"
import { CtaBanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our portfolio of landscaping, brick paving, fence installation, snow removal, and lawn care projects in Summit, IL, Chicago, and surrounding suburbs.",
}

const projects = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dg19-op4r1oVeLErUVggUFzj76WlYQLBJ0W.webp",
    alt: "Herringbone brick paver driveway installation at residential home by Dario Garcia Landscaping",
    title: "Brick Paver Driveway",
    category: "Hardscaping",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dg20-VuaBJgAJmJ80xVHIdLfktd1AYb0KI9.webp",
    alt: "Aerial view of stunning brick paver patio with integrated planters and seating area",
    title: "Paver Patio Design",
    category: "Hardscaping",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dg1-Y3M3kAqJXbNYq3LhRbW4I4lFOx6sXP.webp",
    alt: "Commercial sidewalk snow removal with cleared path between snow banks in Chicago",
    title: "Commercial Snow Removal",
    category: "Snow Removal",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dg12-o94H0utvqDCBlSOggirYRC2xfMkgUB.webp",
    alt: "Beautiful curving mulch bed borders with ornamental shrubs and trees",
    title: "Landscape Design",
    category: "Landscaping",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dg14-0n2S1uXlhKLnSKu2FDnXaLQfJSWSwq.webp",
    alt: "Large brick home with red mulch flower beds and colorful plantings",
    title: "Flower Bed Installation",
    category: "Landscaping",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dg5-B5hWMTG8JLQsnX2JEmgO1hdHZzEsWJ.webp",
    alt: "White vinyl privacy fence installation on brick paver surface",
    title: "Privacy Fence Installation",
    category: "Fences",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dg3-DhyFLApPhB9M5z7RmXjxPaCmLiGLQS.webp",
    alt: "Commercial parking lot asphalt paving with yellow line striping",
    title: "Commercial Paving",
    category: "Asphalt",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dg18-tOVKlwiVk2Xf0UDPEJqGUJIiwUK7QL.webp",
    alt: "Modern home with professionally manicured lawn and rock edging landscaping",
    title: "Complete Lawn Care",
    category: "Lawn Care",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dg16-OgyytuU6FFAjNR8J2uhY5Zkw9D25zx.webp",
    alt: "Landscaping crew working on yard preparation with fence and pavers",
    title: "Yard Renovation",
    category: "Landscaping",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dg17-GY4yR80CQXYr9IiOTqM102VN6KyzBQ.webp",
    alt: "Fall cleanup crew working with equipment on residential street",
    title: "Fall Cleanup",
    category: "Lawn Care",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dg7-MZP6rtWaSLDzvDY5UYft6NtNVdAvYy.webp",
    alt: "Fresh asphalt seal coating on commercial lot in Summit IL",
    title: "Seal Coating",
    category: "Asphalt",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dg13-22gI6WfPNxHBLLOiAfEnk9I3SVOC9w.webp",
    alt: "Dario Garcia Landscaping full crew standing in front of branded company vans",
    title: "Our Team",
    category: "About Us",
  },
]

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Our Work
            </span>
            <h1 className="mb-6 font-sans text-4xl font-bold text-foreground md:text-5xl">
              <span className="text-balance">Project Gallery</span>
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Take a look at some of our completed landscaping, hardscaping, and
              snow removal projects across Summit, IL, Chicago, and surrounding
              communities.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <figure
                key={project.title}
                className="group overflow-hidden rounded-lg border border-border bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading={i < 3 ? "eager" : "lazy"}
                  />
                </div>
                <figcaption className="p-4">
                  <span className="mb-1 inline-block text-xs font-semibold uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <h2 className="text-lg font-semibold text-card-foreground">
                    {project.title}
                  </h2>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
