import Link from "next/link"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Maria L.",
    location: "Summit, IL",
    rating: 5,
    text: "Dario and his team completely transformed our backyard. The brick paving and landscaping look amazing. They were professional, on time, and the price was very fair. Highly recommend!",
  },
  {
    name: "James R.",
    location: "Chicago, IL",
    rating: 5,
    text: "We've been using Dario Garcia Landscaping for snow removal for two winters now. They are always reliable, even during the worst storms. Our parking lot is always clear and safe.",
  },
  {
    name: "Sandra K.",
    location: "Cicero, IL",
    rating: 5,
    text: "Best landscaping company in the area. They did an incredible job with our front yard design and the synthetic lawn installation. It looks perfect year-round with zero maintenance.",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-accent text-accent"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  )
}

export function TestimonialsPreview() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Customer Reviews
          </span>
          <h2 className="font-sans text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              What Our Customers Say
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We take pride in delivering exceptional service. Here is what some
            of our valued customers have to say about their experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex flex-col rounded-lg border border-border bg-card p-6"
            >
              <StarRating rating={review.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-card-foreground">
                  {review.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {review.location}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Read More Reviews
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
