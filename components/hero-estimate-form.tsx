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
  'Lawn Care',
  'Tree Removal',
  'Snow Removal',
  'Brick Paving',
  'Fencing',
  'Asphalt/Seal Coating',
  'Drainage Solutions',
  '4D Landscape Designs',
  'General Landscaping',
  'Other',
]

export function HeroEstimateForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
        ;(e.target as HTMLFormElement).reset()
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
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
          <div className="grid grid-cols-2 gap-3">
            <Input
              name="firstName"
              placeholder="First Name"
              required
              className="text-sm"
            />
            <Input
              name="lastName"
              placeholder="Last Name"
              required
              className="text-sm"
            />
          </div>

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
            placeholder="Project Details"
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
