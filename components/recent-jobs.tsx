import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dg9-LPri7wSx8bUTJVMqyz6NtTfTfgRqFl.webp",
    alt: "Residential front yard landscaping with manicured lawn and ornamental trees in Chicago suburbs",
    label: "Residential Landscaping",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dg6-Iy64Q7BjO438PukAODzQRu3cnHwNR5.webp",
    alt: "Backyard lawn care and mulch bed installation with mature trees",
    label: "Backyard Design",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dg4-yFH7ys1iZn3qtZD5vqcCGSKzTIWPz9.webp",
    alt: "Aerial view of commercial asphalt paving project for restaurant parking lot",
    label: "Commercial Paving",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dg5-B5hWMTG8JLQsnX2JEmgO1hdHZzEsWJ.webp",
    alt: "White vinyl privacy fence installation on brick paver surface",
    label: "Fence & Paver Install",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dg2-PW2HTySl8BuhmfG6AeSW0JAT1js6NQ.webp",
    alt: "Commercial snow removal with cleared sidewalk path in Chicago winter",
    label: "Snow Removal",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dg7-MZP6rtWaSLDzvDY5UYft6NtNVdAvYy.webp",
    alt: "Fresh asphalt seal coating on commercial lot in Summit IL",
    label: "Seal Coating",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dg8-jIHyS2jxNUBsUqdgHZG1FlHjXsUFMC.webp",
    alt: "Residential lawn maintenance with trimmed hedges in front of brick home",
    label: "Lawn Maintenance",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dg10-JaVUJHbXEYMy8TqPSwEvYd1RkMLRmx.webp",
    alt: "Fresh mulch bed with new plantings and landscape lighting installation",
    label: "Garden & Planting",
  },
]

export function RecentJobs() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Our Work
          </span>
          <h2 className="mb-4 font-sans text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">Recent Jobs</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Browse some of our latest landscaping, paving, snow removal, and
            outdoor improvement projects across Summit, IL and the Chicago area.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <div
              key={project.label}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                loading={i < 4 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/0 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <span className="text-sm font-semibold text-background">
                  {project.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" asChild>
            <Link href="/gallery" className="gap-2">
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
