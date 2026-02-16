export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    name: "Dario Garcia Landscaping",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dg6-Iy64Q7BjO438PukAODzQRu3cnHwNR5.webp",
    "@id": "https://dariogarcialandscaping.com",
    url: "https://dariogarcialandscaping.com",
    telephone: "+1-312-985-0996",
    email: "info@dariogarcialandscaping.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5818 S Archer Rd",
      addressLocality: "Summit",
      addressRegion: "IL",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.786,
      longitude: -87.81,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Summit, IL" },
      { "@type": "City", name: "Chicago, IL" },
      { "@type": "City", name: "Cicero, IL" },
      { "@type": "City", name: "Berwyn, IL" },
      { "@type": "City", name: "Lyons, IL" },
      { "@type": "City", name: "Bedford Park, IL" },
      { "@type": "City", name: "Justice, IL" },
      { "@type": "City", name: "Bridgeview, IL" },
      { "@type": "City", name: "Burbank, IL" },
      { "@type": "City", name: "Oak Lawn, IL" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "9",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Landscaping Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Landscaping",
            description:
              "Complete residential and commercial landscaping design and installation in Summit, IL and Chicago area.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lawn Care",
            description:
              "Regular mowing, fertilization, aeration, and seasonal lawn maintenance.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tree Removal",
            description:
              "Safe and efficient tree removal, trimming, and stump grinding services.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Snow Removal",
            description:
              "Reliable residential and commercial snow plowing, salting, and ice management.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brick Paving",
            description:
              "Custom brick paver patios, walkways, driveways, and retaining walls.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fence Installation",
            description:
              "Wood, vinyl, and chain-link fence installation for privacy and security.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Asphalt & Seal Coating",
            description:
              "Professional asphalt paving, repair, and seal coating for driveways and parking lots.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Synthetic Lawn Installation",
            description:
              "Maintenance-free synthetic turf installation for residential and commercial properties.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Drainage Solutions",
            description:
              "Expert drainage design and installation to protect your property from water damage.",
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
