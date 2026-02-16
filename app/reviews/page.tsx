import type { Metadata } from "next"
import { Star } from "lucide-react"
import { CtaBanner } from "@/components/cta-banner"

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read customer reviews and testimonials for Dario Garcia Landscaping. See why homeowners and businesses in Summit, IL, Chicago, and surrounding suburbs trust us for their landscaping, lawn care, and snow removal needs.",
}

const reviews = [
  {
    name: "Maria L.",
    location: "Summit, IL",
    rating: 5,
    date: "November 2025",
    service: "Brick Paving",
    text: "Dario and his team completely transformed our backyard. The brick paving and landscaping look amazing. They were professional, on time, and the price was very fair. We get compliments from our neighbors all the time. Highly recommend!",
  },
  {
    name: "James R.",
    location: "Chicago, IL",
    rating: 5,
    date: "January 2026",
    service: "Snow Removal",
    text: "We've been using Dario Garcia Landscaping for snow removal for two winters now. They are always reliable, even during the worst storms. Our parking lot is always clear and safe for employees and customers. Best snow removal company in the area.",
  },
  {
    name: "Sandra K.",
    location: "Cicero, IL",
    rating: 5,
    date: "September 2025",
    service: "Synthetic Lawn",
    text: "Best landscaping company in the area. They did an incredible job with our front yard design and the synthetic lawn installation. It looks perfect year-round with zero maintenance. Dario was very knowledgeable and gave great suggestions.",
  },
  {
    name: "Robert M.",
    location: "Berwyn, IL",
    rating: 5,
    date: "October 2025",
    service: "Tree Removal",
    text: "Had a large dead tree that needed to come down. Dario's crew handled it safely and efficiently. They cleaned up everything perfectly. The stump grinding was included and the area looks great now. Very professional from start to finish.",
  },
  {
    name: "Patricia G.",
    location: "Lyons, IL",
    rating: 5,
    date: "August 2025",
    service: "Lawn Care",
    text: "I hired them for weekly lawn care and they have been fantastic. My yard has never looked better. The team is always polite, timely, and thorough. They also helped with seasonal flowers and mulching. Could not be happier with the service.",
  },
  {
    name: "Carlos V.",
    location: "Summit, IL",
    rating: 5,
    date: "June 2025",
    service: "Landscaping",
    text: "Dario Garcia Landscaping redesigned our entire front and back yard. The attention to detail was incredible. They worked with our budget and delivered results that exceeded our expectations. Our home value has definitely increased.",
  },
  {
    name: "Lisa T.",
    location: "Bedford Park, IL",
    rating: 5,
    date: "December 2025",
    service: "Snow Removal",
    text: "Switched to Dario Garcia for snow removal this year and it was the best decision. They always show up on time and do a thorough job. Our walkways and driveway are always clear before we even head to work. Excellent service.",
  },
  {
    name: "Michael D.",
    location: "Oak Lawn, IL",
    rating: 5,
    date: "July 2025",
    service: "Fence Installation",
    text: "Great experience with our new privacy fence. The team was professional, the installation was quick, and the fence looks beautiful. Dario walked us through the material options and helped us pick the perfect style for our property.",
  },
  {
    name: "Angela F.",
    location: "Bridgeview, IL",
    rating: 5,
    date: "May 2025",
    service: "Asphalt & Seal Coating",
    text: "Our driveway was cracking and looking rough. Dario and his team did an excellent seal coating job and it looks brand new. Fair pricing and quality work. They also fixed some drainage issues we had. Truly a one-stop shop for outdoor services.",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-accent text-accent" : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Testimonials
            </span>
            <h1 className="mb-6 font-sans text-4xl font-bold text-foreground md:text-5xl">
              <span className="text-balance">
                Customer Reviews &amp; Testimonials
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our customers are our best advocates. Read what homeowners and
              businesses across Summit, IL, Chicago, and surrounding suburbs
              have to say about working with Dario Garcia Landscaping.
            </p>
            {/* Aggregate Rating */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-lg bg-card px-5 py-3 shadow-sm">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">
                4.8 Average Rating
              </span>
              <span className="text-sm text-muted-foreground">
                501 Reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="flex flex-col rounded-lg border border-border bg-card p-6"
              >
                <div className="mb-3 flex items-center justify-between">
                  <StarRating rating={review.rating} />
                  <span className="text-xs text-muted-foreground">
                    {review.date}
                  </span>
                </div>
                <span className="mb-3 inline-block w-fit rounded-sm bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  {review.service}
                </span>
                <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
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

          {/* Google Review CTA */}
          <div className="mt-16 rounded-lg border border-border bg-card p-8 text-center">
            <h2 className="mb-2 font-sans text-2xl font-bold text-card-foreground">
              Enjoyed Our Service?
            </h2>
            <p className="mb-6 text-muted-foreground">
              We would love to hear from you! Leave us a review on Google and
              help other homeowners find quality landscaping services.
            </p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
