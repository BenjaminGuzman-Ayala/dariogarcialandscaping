import Image from "next/image"
import { Award, Shield, CheckCircle2 } from "lucide-react"

export function BusinessAward() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Plaque-style container */}
        <div className="relative mx-auto max-w-4xl">
          {/* Outer plaque frame - gold border */}
          <div className="rounded-lg bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600 p-1.5 shadow-2xl">
            {/* Inner silver/chrome border */}
            <div className="rounded-md bg-gradient-to-b from-gray-200 via-gray-100 to-gray-300 p-1">
              {/* Black plaque body */}
              <div className="rounded bg-gradient-to-b from-neutral-900 via-black to-neutral-900 px-6 py-10 md:px-12 md:py-14">
                
                {/* Content layout */}
                <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
                  
                  {/* Award Image - Left side */}
                  <div className="flex-shrink-0">
                    {/* Gold frame around image */}
                    <div className="rounded-lg bg-gradient-to-b from-amber-300 via-amber-500 to-amber-600 p-1 shadow-lg">
                      <div className="rounded-md bg-gradient-to-b from-gray-100 to-gray-200 p-0.5">
                        <div className="overflow-hidden rounded bg-white p-2">
                          <Image
                            src="/Business Award Image_Dario Garcia Landscaping LLC.png"
                            alt="Business Award - Dario Garcia Landscaping LLC"
                            width={280}
                            height={350}
                            className="h-auto w-48 object-contain md:w-56"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text Content - Right side */}
                  <div className="flex-1 text-center lg:text-left">
                    {/* Award badge */}
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/50 bg-amber-500/10 px-4 py-1.5">
                      <Award className="h-4 w-4 text-amber-400" />
                      <span className="text-sm font-medium text-amber-400">Award-Winning Service</span>
                    </div>
                    
                    {/* Title with gold gradient text */}
                    <h2 className="mb-4 font-sans text-2xl font-bold md:text-3xl">
                      <span className="text-balance bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                        Recognized for Excellence in Landscaping
                      </span>
                    </h2>
                    
                    {/* Description in silver/light gray */}
                    <p className="mb-6 text-base leading-relaxed text-gray-400 md:text-lg">
                      We are proud to be recognized for our commitment to quality workmanship, 
                      exceptional customer service, and dedication to transforming outdoor spaces 
                      across the Chicagoland area.
                    </p>

                    {/* Trust badges with metallic styling */}
                    <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                      <div className="flex items-center gap-2 rounded border border-amber-500/30 bg-gradient-to-b from-neutral-800 to-neutral-900 px-4 py-2">
                        <Shield className="h-4 w-4 text-amber-400" />
                        <span className="text-sm font-medium text-gray-200">Licensed</span>
                      </div>
                      <div className="flex items-center gap-2 rounded border border-amber-500/30 bg-gradient-to-b from-neutral-800 to-neutral-900 px-4 py-2">
                        <CheckCircle2 className="h-4 w-4 text-amber-400" />
                        <span className="text-sm font-medium text-gray-200">Bonded</span>
                      </div>
                      <div className="flex items-center gap-2 rounded border border-amber-500/30 bg-gradient-to-b from-neutral-800 to-neutral-900 px-4 py-2">
                        <Shield className="h-4 w-4 text-amber-400" />
                        <span className="text-sm font-medium text-gray-200">Insured</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-amber-500/40 md:left-6 md:top-6" />
                <div className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-amber-500/40 md:right-6 md:top-6" />
                <div className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-amber-500/40 md:bottom-6 md:left-6" />
                <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-amber-500/40 md:bottom-6 md:right-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
