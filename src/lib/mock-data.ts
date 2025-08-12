export interface Service {
  id: string
  name: string
  description: string
  fullDescription: string
  image: string
  features: string[]
  duration: string
  category: "exterior" | "interior" | "premium" | "detailing"
}

export const services: Service[] = [
  {
    id: "premium-wash",
    name: "Premium Exterior Wash",
    description: "Complete exterior cleaning with premium products and hand-drying finish.",
    fullDescription:
      "Our premium exterior wash service combines advanced cleaning technology with meticulous hand-finishing. We use only the finest automotive shampoos and protective coatings to ensure your vehicle receives the ultimate care it deserves.",
    image: "/56e9e24ad9a385fed7b3f8b6e9484415.jpg",
    features: [
      "Pre-wash foam treatment",
      "Hand wash with premium soap",
      "Wheel and tire cleaning",
      "Hand drying with microfiber towels",
      "Tire shine application",
    ],
    duration: "45-60 minutes",
    category: "exterior",
  },
  {
    id: "interior-detailing",
    name: "Interior Deep Clean",
    description: "Comprehensive interior cleaning including leather treatment and fabric protection.",
    fullDescription:
      "Transform your vehicle's interior with our comprehensive deep cleaning service. From leather conditioning to fabric protection, we ensure every surface is meticulously cleaned and protected.",
    image: "/3454f42079e17a2d03c5aa9cd8deccc9.jpg",
    features: [
      "Vacuum all surfaces",
      "Leather cleaning and conditioning",
      "Dashboard and console treatment",
      "Window cleaning",
      "Air freshening",
    ],
    duration: "60-90 minutes",
    category: "interior",
  },
  {
    id: "ceramic-coating",
    name: "Ceramic Paint Protection",
    description: "Advanced ceramic coating for long-lasting paint protection and enhanced gloss.",
    fullDescription:
      "Protect your investment with our professional ceramic coating service. This advanced treatment provides unmatched protection against environmental contaminants while delivering a stunning, mirror-like finish.",
    image: "/34da8808b3ddc4314539bca237c6f25d.jpg",
    features: [
      "Paint decontamination",
      "Surface preparation",
      "Ceramic coating application",
      "Curing process",
      "2-year protection warranty",
    ],
    duration: "4-6 hours",
    category: "premium",
  },
  {
    id: "full-detailing",
    name: "Complete Detailing Package",
    description: "The ultimate car care experience combining all our premium services.",
    fullDescription:
      "Experience the pinnacle of automotive care with our complete detailing package. This comprehensive service combines every aspect of our expertise to deliver showroom-quality results.",
    image: "/d64a6a6fdc465a152d31359fe2a995e6.jpg",
    features: [
      "Full exterior wash and wax",
      "Complete interior detailing",
      "Engine bay cleaning",
      "Headlight restoration",
      "Paint correction",
    ],
    duration: "6-8 hours",
    category: "premium",
  },
  {
    id: "express-wash",
    name: "Express Wash",
    description: "Quick and efficient exterior wash perfect for regular maintenance.",
    fullDescription:
      "When time is of the essence, our express wash delivers professional results in minimal time. Perfect for busy professionals who demand quality without compromise.",
    image: "/34df3a56ef8f0c6645a68ab950615b8f.jpg",
    features: ["Automated pre-wash", "High-pressure rinse", "Soap application", "Final rinse and dry", "Tire shine"],
    duration: "15-20 minutes",
    category: "exterior",
  },
  {
    id: "paint-correction",
    name: "Paint Correction",
    description: "Professional paint restoration to remove swirls, scratches, and imperfections.",
    fullDescription:
      "Restore your vehicle's paint to its original glory with our expert paint correction service. Using advanced polishing techniques and professional-grade compounds, we eliminate imperfections and restore that showroom shine.",
    image: "/a062636326a69e9c7ebf40e47e1a5f86.jpg",
    features: [
      "Paint assessment",
      "Multi-stage polishing",
      "Swirl mark removal",
      "Scratch elimination",
      "Final protection application",
    ],
    duration: "3-5 hours",
    category: "detailing",
  },
]

export const tips = [
  {
    id: "winter-care",
    title: "Winter Car Care Essentials",
    excerpt: "Protect your vehicle during harsh winter conditions with these professional tips.",
    content:
      "Winter weather can be brutal on your vehicle. Salt, snow, and freezing temperatures create the perfect storm for automotive damage. Regular washing during winter months is crucial to prevent salt corrosion...",
    image: "/ddeeaea307c60cf78da3c355f27f7e4e.jpg",
    category: "seasonal",
  },
  {
    id: "leather-maintenance",
    title: "Leather Interior Maintenance",
    excerpt: "Keep your leather seats looking and feeling luxurious with proper care techniques.",
    content:
      "Leather interiors represent the pinnacle of automotive luxury, but they require specialized care to maintain their beauty and durability. Regular cleaning and conditioning are essential...",
    image: "/ac8f916695aa6107347b06544711b8fe.jpg",
    category: "interior",
  },
  {
    id: "paint-protection",
    title: "Paint Protection Strategies",
    excerpt: "Learn how to maintain your vehicle's paint finish between professional services.",
    content:
      "Your vehicle's paint is constantly under attack from UV rays, bird droppings, tree sap, and environmental contaminants. Implementing a proper protection strategy...",
    image: "/3ed43d91f1490ffcecb1975efb2ce94e.jpg",
    category: "exterior",
  },
]

export const reviews = [
  {
    id: 1,
    name: "Marcus Thompson",
    rating: 5,
    comment: "Absolutely exceptional service. My BMW has never looked better. The attention to detail is unmatched.",
    service: "Complete Detailing Package",
    date: "2025-05-15",
  },
  {
    id: 2,
    name: "David Rodriguez",
    rating: 5,
    comment:
      "Professional team, premium results. The ceramic coating has kept my car looking showroom fresh for months.",
    service: "Ceramic Paint Protection",
    date: "2025-07-10",
  },
  {
    id: 3,
    name: "James Wilson",
    rating: 5,
    comment: "Quick, efficient, and thorough. Perfect for my busy schedule without compromising on quality.",
    service: "Express Wash",
    date: "2025-06-08",
  },
  {
    id: 4,
    name: "Robert Chen",
    rating: 5,
    comment: "The paint correction service transformed my car. Years of swirl marks completely eliminated.",
    service: "Paint Correction",
    date: "2025-08-05",
  },
]

export const companyInfo = {
  name: "Hyperliquid",
  tagline: "Premium Car Care Excellence",
  phone: "+45 33 41 7147",
  email: "info@hyperliquid.com",
  address: "Østerbrogade 120, 2100 København Ø, Denmark",
}
