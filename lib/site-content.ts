export const siteContent = {
  brand: {
    shortName: "Prime Auto",
    fullName: "Prime Auto Deals",
    tagline: "Premium Services",
  },
  contact: {
    phoneDisplay: "888 286 8307",
    phoneHref: "tel:+18882868307",
    email: "query@primeautodeals.live",
    emailHref: "mailto:query@primeautodeals.live",
    addressLine1: "1916 E 51ST Street 2FL",
    addressLine2: "Brooklyn, NY 11234",
    fullAddress: "1916 E 51ST Street 2FL, Brooklyn, NY 11234",
  },
  hours: {
    weekdayLabel: "Monday – Saturday",
    weekdayHours: "8:00 AM – 6:00 PM",
    sundayLabel: "Sunday",
    sundayHours: "Closed",
    weeklySummary: "Mon – Sat: 8:00 AM – 6:00 PM",
  },
  nav: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    // { name: "Finance", href: "/finance" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/policies/privacy-policy" },
    { name: "Refund Policy", href: "/policies/refund-policy" },
  ],
  cta: {
    primary: "Get a Quote",
    secondary: "Send a Message",
    phone: "Call Now",
    schedule: "Book Appointment",
  },
  services: [
    { name: "Performance Upgrades", price: "$500+", href: "/services" },
    { name: "Computer Diagnostics", price: "$100+", href: "/services" },
    { name: "Brake Service", price: "$150+", href: "/services" },
    { name: "AC Service", price: "$120+", href: "/services" },
    { name: "Lube, Oil & Filters", price: "$60+", href: "/services" },
    { name: "Engine Diagnostics", price: "$150+", href: "/services" },
  ],
  seo: {
    siteUrl: "https://primeautodeals.tech",
    defaultTitle: "Prime Auto Deals | Premium Auto Care in Brooklyn, NY",
    defaultDescription:
      "Prime Auto Deals delivers detailed diagnostics, maintenance, repair, and financing support for Brooklyn drivers who want technical precision and clear service communication.",
    titleTemplate: `%s | Prime Auto Deals`,
    openGraphDescription:
      "Technical auto repair, maintenance, and financing support from Prime Auto Deals in Brooklyn, NY.",
    twitterDescription:
      "Detailed auto repair, maintenance, and financing support from Prime Auto Deals in Brooklyn, NY.",
  },
} as const;
