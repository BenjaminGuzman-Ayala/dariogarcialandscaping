import Image from "next/image"
import { Award, Shield, CheckCircle2 } from "lucide-react"

export function BusinessAward() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-foreground to-foreground/90 px-6 py-12 md:px-12 lg:py-16">
          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/5" />
          
          <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Award-Winning Service</span>
              </div>
              
              <h2 className="mb-4 font-sans text-3xl font-bold text-background md:text-4xl">
                <span className="text-balance">
                  Recognized for Excellence in Landscaping
                </span>
              </h2>
              
              <p className="mb-8 text-lg leading-relaxed text-background/70">
                We are proud to be recognized for our commitment to quality workmanship, 
                exceptional customer service, and dedication to transforming outdoor spaces 
                across the Chicagoland area.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                <div className="flex items-center gap-2 rounded-lg bg-background/10 px-4 py-2.5">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-background">Licensed</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-background/10 px-4 py-2.5">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-background">Bonded</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-background/10 px-4 py-2.5">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-background">Insured</span>
                </div>
              </div>
            </div>

            {/* Award Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 scale-95 rounded-xl bg-primary/20 blur-2xl" />
                <div className="relative overflow-hidden rounded-xl border-2 border-primary/30 bg-background/5 p-4 backdrop-blur-sm">
                  <Image
                    src="/Business Award Image_Dario Garcia Landscaping LLC.png"
                    alt="Business Award - Dario Garcia Landscaping LLC"
                    width={400}
                    height={500}
                    className="h-auto w-full max-w-sm rounded-lg object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
