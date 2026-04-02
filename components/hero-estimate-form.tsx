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
  "Landscaping",
  "Lawn Care",
  "Tree Removal",
  "Brick Paving",
  "Fence Installation",
  "Synthetic Lawn Installation",
  "Drainage Solutions",
  "4D Landscape Designs",
  "Asphalt & Seal Coating",
  "Snow Removal",
  "Other",
]

const WEBHOOK_URL =
  process.env.NODE_ENV === "development"
    ? "https://base64team.app.n8n.cloud/webhook-test/lead-intake/15b5294a-cb37-417f-a437-0d506b7f8d8d"
    : "https://base64team.app.n8n.cloud/webhook/lead-intake/15b5294a-cb37-417f-a437-0d506b7f8d8d"

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  propertyAddress?: string
  service?: string
  otherService?: string
  message?: string
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?[-\s\.]?[0-9]{3,4}[-\s\.]?[0-9]{4}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

function validateAddress(address: string): { isValid: boolean; error?: string } {
  const trimmed = address.trim()
  
  if (!trimmed) {
    return { isValid: false, error: "Property address is required" }
  }
  
  // Check for zip code (5 digits or 5+4 format)
  const zipRegex = /\b\d{5}(-\d{4})?\b/
  if (!zipRegex.test(trimmed)) {
    return { isValid: false, error: "Please include a ZIP code" }
  }
  
  // Check for city - should have at least one word followed by state or comma
  const hasCity = trimmed.split(/[,\s]+/).filter(part => 
    part.length > 1 && !/^\d+$/.test(part) && !/^[A-Z]{2}$/.test(part)
  ).length >= 2
  
  if (!hasCity) {
    return { isValid: false, error: "Include street address and city" }
  }
  
  return { isValid: true }
}

export function HeroEstimateForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (formData: FormData): FormErrors => {
    const newErrors: FormErrors = {}
    
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const propertyAddress = formData.get("propertyAddress") as string
    const service = selectedService
    const otherService = formData.get("otherService") as string
    const message = formData.get("message") as string

    if (!name || name.trim() === "") {
      newErrors.name = "Name is required"
    }

    if (!email || email.trim() === "") {
      newErrors.email = "Email is required"
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email format"
    }

    if (!phone || phone.trim() === "") {
      newErrors.phone = "Phone is required"
    } else if (!validatePhone(phone)) {
      newErrors.phone = "Invalid phone format"
    }

    const addressValidation = validateAddress(propertyAddress)
    if (!addressValidation.isValid) {
      newErrors.propertyAddress = addressValidation.error
    }

    if (!service) {
      newErrors.service = "Select a service"
    }

    if (service === "Other" && (!otherService || otherService.trim() === "")) {
      newErrors.otherService = "Describe the service needed"
    }

    if (!message || message.trim() === "") {
      newErrors.message = "Message is required"
    }

    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)
    
    const formErrors = validateForm(data)
    setErrors(formErrors)
    
    if (Object.keys(formErrors).length > 0) {
      return
    }

    setIsLoading(true)

    // If "Other" is selected, use the custom service description
    const serviceValue = selectedService === "Other" 
      ? `Other: ${data.get("otherService") as string}`
      : selectedService

    data.set("services", serviceValue)
    data.set("service_address", data.get("propertyAddress") as string)

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      setSubmitted(true)
      form.reset()
      setSelectedService("")
      setErrors({})
      setTimeout(() => setSubmitted(false), 5000)
    } catch {
      // allow fallback
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="animate-slide-up animation-delay-600 w-full max-w-md mx-auto lg:max-w-none">
      <div className="rounded-xl bg-card p-5 sm:p-6 shadow-xl border border-border">
        <h3 className="font-sans text-lg sm:text-xl font-bold text-foreground mb-4 text-center lg:text-left">
          Request Free Estimate
        </h3>

        {submitted && (
          <div className="mb-4 rounded-lg bg-green-50 p-3 text-sm text-green-800">
            Thank you! We&apos;ll contact you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <Input
              name="name"
              placeholder="Full Name *"
              required
              className={`text-sm ${errors.name ? "border-destructive" : ""}`}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p className="text-xs text-destructive mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <Input
              name="email"
              type="email"
              placeholder="Email *"
              required
              className={`text-sm ${errors.email ? "border-destructive" : ""}`}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-xs text-destructive mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <Input
              name="phone"
              type="tel"
              placeholder="Phone *"
              required
              className={`text-sm ${errors.phone ? "border-destructive" : ""}`}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <p className="text-xs text-destructive mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <Input
              name="propertyAddress"
              type="text"
              placeholder="123 Main St, Chicago, IL 60601 *"
              required
              className={`text-sm ${errors.propertyAddress ? "border-destructive" : ""}`}
              aria-invalid={!!errors.propertyAddress}
            />
            {errors.propertyAddress && (
              <p className="text-xs text-destructive mt-1">{errors.propertyAddress}</p>
            )}
          </div>

          <div>
            <Select 
              name="service" 
              required
              value={selectedService}
              onValueChange={(value) => {
                setSelectedService(value)
                if (errors.service) {
                  setErrors(prev => ({ ...prev, service: undefined }))
                }
              }}
            >
              <SelectTrigger 
                className={`text-sm ${errors.service ? "border-destructive" : ""}`}
                aria-invalid={!!errors.service}
              >
                <SelectValue placeholder="Select Service *" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.service && (
              <p className="text-xs text-destructive mt-1">{errors.service}</p>
            )}
          </div>

          {selectedService === "Other" && (
            <div>
              <Input
                name="otherService"
                placeholder="Describe the service needed *"
                required
                className={`text-sm ${errors.otherService ? "border-destructive" : ""}`}
                aria-invalid={!!errors.otherService}
              />
              {errors.otherService && (
                <p className="text-xs text-destructive mt-1">{errors.otherService}</p>
              )}
            </div>
          )}

          <div>
            <Textarea
              name="message"
              placeholder="Tell us about your project... *"
              rows={2}
              required
              className={`text-sm resize-none ${errors.message ? "border-destructive" : ""}`}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <p className="text-xs text-destructive mt-1">{errors.message}</p>
            )}
          </div>

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
