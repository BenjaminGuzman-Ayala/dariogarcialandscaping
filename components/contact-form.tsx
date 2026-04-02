"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const serviceOptions = [
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
  service?: string
  otherService?: string
  address?: string
  message?: string
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validatePhone(phone: string): boolean {
  // Accepts formats: (123) 456-7890, 123-456-7890, 1234567890, +1 123 456 7890
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
    return { isValid: false, error: "Please include a valid ZIP code (e.g., 60601)" }
  }
  
  // Check for city - should have at least one word followed by state or comma
  // Looking for patterns like "Chicago, IL" or "Chicago IL" or just city name with zip
  const hasCity = trimmed.split(/[,\s]+/).filter(part => 
    part.length > 1 && !/^\d+$/.test(part) && !/^[A-Z]{2}$/.test(part)
  ).length >= 2
  
  if (!hasCity) {
    return { isValid: false, error: "Please include street address and city" }
  }
  
  return { isValid: true }
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [errors, setErrors] = useState<FormErrors>({})

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <svg
            className="h-8 w-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-card-foreground">
          Thank You!
        </h3>
        <p className="text-muted-foreground">
          Your request has been submitted. We will contact you shortly to
          discuss your project.
        </p>
      </div>
    )
  }

  const validateForm = (formData: FormData): FormErrors => {
    const newErrors: FormErrors = {}
    
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const service = selectedService
    const otherService = formData.get("otherService") as string
    const address = formData.get("address") as string
    const message = formData.get("message") as string

    if (!name || name.trim() === "") {
      newErrors.name = "Full name is required"
    }

    if (!email || email.trim() === "") {
      newErrors.email = "Email is required"
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!phone || phone.trim() === "") {
      newErrors.phone = "Phone number is required"
    } else if (!validatePhone(phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    if (!service) {
      newErrors.service = "Please select a service"
    }

    if (service === "other" && (!otherService || otherService.trim() === "")) {
      newErrors.otherService = "Please describe the service you need"
    }

    const addressValidation = validateAddress(address)
    if (!addressValidation.isValid) {
      newErrors.address = addressValidation.error
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
    const serviceValue = selectedService === "other" 
      ? `Other: ${data.get("otherService") as string}`
      : selectedService
    
    data.set("services", serviceValue)
    data.set("service_address", data.get("address") as string)

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      setSubmitted(true)
    } catch {
      // allow fallback
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your full name"
          required
          aria-invalid={!!errors.name}
          className={errors.name ? "border-destructive" : ""}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name}</p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            aria-invalid={!!errors.email}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(312) 000-0000"
            required
            aria-invalid={!!errors.phone}
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="service">Service Needed *</Label>
        <Select 
          name="service" 
          value={selectedService}
          onValueChange={(value) => {
            setSelectedService(value)
            if (errors.service) {
              setErrors(prev => ({ ...prev, service: undefined }))
            }
          }}
        >
          <SelectTrigger 
            id="service"
            aria-invalid={!!errors.service}
            className={errors.service ? "border-destructive" : ""}
          >
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((option) => (
              <SelectItem key={option} value={option.toLowerCase()}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && (
          <p className="text-sm text-destructive">{errors.service}</p>
        )}
      </div>

      {selectedService === "other" && (
        <div className="flex flex-col gap-2">
          <Label htmlFor="otherService">Please Describe the Service Needed *</Label>
          <Input
            id="otherService"
            name="otherService"
            placeholder="Describe the service you need..."
            required
            aria-invalid={!!errors.otherService}
            className={errors.otherService ? "border-destructive" : ""}
          />
          {errors.otherService && (
            <p className="text-sm text-destructive">{errors.otherService}</p>
          )}
        </div>
      )}

      <div className="flex flex-col gap-2">
        <Label htmlFor="address">Property Address (Street, City, ZIP) *</Label>
        <Input
          id="address"
          name="address"
          placeholder="123 Main St, Chicago, IL 60601"
          required
          aria-invalid={!!errors.address}
          className={errors.address ? "border-destructive" : ""}
        />
        {errors.address && (
          <p className="text-sm text-destructive">{errors.address}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project..."
          rows={5}
          required
          aria-invalid={!!errors.message}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isLoading}>
        {isLoading ? "Sending..." : "Submit Request"}
      </Button>

      <p className="text-xs text-muted-foreground">
        By submitting this form, you agree to be contacted regarding your
        request. We respect your privacy and will never share your information.
      </p>
    </form>
  )
}
