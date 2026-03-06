'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const services = [
  'Landscaping',
  'Lawn Care',
  'Tree Removal',
  'Brick Paving',
  'Fence Installation',
  'Synthetic Lawn Installation',
  'Drainage Solutions',
  '4D Landscape Designs',
  'Asphalt & Seal Coating',
  'Snow Removal',
]

const WEBHOOK_URL =
  process.env.NODE_ENV === "development"
    ? "https://base64team.app.n8n.cloud/webhook-test/lead-intake/15b5294a-cb37-417f-a437-0d506b7f8d8d"
    : "https://base64team.app.n8n.cloud/webhook/lead-intake/15b5294a-cb37-417f-a437-0d506b7f8d8d"

export function HeroEstimateForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const form = e.currentTarget
    const data = new FormData(form)
    data.set("services", data.get("service") as string)
    data.set("service_address", data.get("propertyAddress") as string)

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      setSubmitted(true)
      form.reset()
      setTimeout(() => setSubmitted(false), 5000)
    } catch {
      // allow fallback
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="animate-slide-up animation-delay-600">
      <div className="rounded-xl bg-card p-6 shadow-xl border border-border">
        <h3 className="font-sans text-xl font-bold text-foreground mb-4">
          Request Free Estimate
        </h3>

        {submitted && (
          <div className="mb-4 rounded-lg bg-green-50 p-3 text-sm text-green-800">
            Thank you! We'll contact you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            name="name"
            placeholder="Full Name"
            required
            className="text-sm"
          />

          <Input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="text-sm"
          />

          <Input
            name="phone"
            type="tel"
            placeholder="Phone"
            required
            className="text-sm"
          />
          <Input
            name="propertyAddress"
            type="text"
            placeholder="Street address, city, zip code"
            required
            className="text-sm"
          />

          <Select name="service" required>
            <SelectTrigger className="text-sm">
              <SelectValue placeholder="Select Service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Textarea
            name="message"
            placeholder="Tell us about your project..."
            rows={2}
            className="text-sm resize-none"
          />

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? 'Sending...' : 'Get Free Estimate'}
          </Button>
        </form>
      </div>
    </div>
  )
}
