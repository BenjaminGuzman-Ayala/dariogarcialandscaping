import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Dario Garcia Landscaping for a free estimate on landscaping, lawn care, tree removal, snow removal, and more in Summit, IL, Chicago, and surrounding suburbs. Call (312) 985-0996.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              Contact Us
            </span>
            <h1 className="mb-6 font-sans text-4xl font-bold text-foreground md:text-5xl">
              <span className="text-balance">Get Your Free Estimate</span>
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Ready to start your project? Give us a call or fill out the form
              below for a free, no-obligation estimate. We serve Summit, IL,
              Chicago, and all surrounding suburbs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="mb-6 font-sans text-2xl font-bold text-foreground">
                Get in Touch
              </h2>
              <p className="mb-8 leading-relaxed text-muted-foreground">
                Whether you have a question about our services or want to
                schedule a consultation, we are here to help. Reach out today
                and let us bring your outdoor vision to life.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a
                      href="tel:3129850996"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      (312) 985-0996
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a
                      href="mailto:info@dariogarcialandscaping.com"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      info@dariogarcialandscaping.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-muted-foreground">
                      5818 S Archer Rd
                      <br />
                      Summit, IL
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Business Hours
                    </h3>
                    <p className="text-muted-foreground">
                      Mon - Sat: 7:00 AM - 6:00 PM
                      <br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-10 rounded-lg border border-border bg-card p-6">
                <h3 className="mb-3 font-semibold text-card-foreground">
                  Service Areas
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Summit, IL &bull; Chicago, IL &bull; Cicero, IL &bull; Berwyn,
                  IL &bull; Lyons, IL &bull; Bedford Park, IL &bull; Justice, IL
                  &bull; Bridgeview, IL &bull; Burbank, IL &bull; Oak Lawn, IL
                  &bull; and surrounding suburbs.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-lg border border-border bg-card p-6 lg:p-8">
                <h2 className="mb-2 font-sans text-2xl font-bold text-card-foreground">
                  Request a Free Estimate
                </h2>
                <p className="mb-6 text-sm text-muted-foreground">
                  Fill out the form below and we will get back to you as soon as
                  possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="mt-16">
            <h2 className="mb-6 font-sans text-2xl font-bold text-foreground">
              Find Us
            </h2>
            <div className="aspect-[16/6] overflow-hidden rounded-lg border border-border">
              <iframe
                title="Dario Garcia Landscaping location in Summit, IL"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.8!2d-87.81!3d41.786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQ3JzEwLjAiTiA4N8KwNDgnMzYuMCJX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
