import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { RecentJobs } from "@/components/recent-jobs"
import { WhyChooseUs } from "@/components/why-choose-us"
import { TestimonialsPreview } from "@/components/testimonials-preview"
import { CtaBanner } from "@/components/cta-banner"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <RecentJobs />
      <WhyChooseUs />
      <TestimonialsPreview />
      <CtaBanner />
    </>
  )
}
