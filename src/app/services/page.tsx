import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { services } from "@/lib/mock-data"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"

export default function ServicesPage() {
  const categories = {
    exterior: "Exterior Care",
    interior: "Interior Care",
    premium: "Premium Services",
    detailing: "Professional Detailing",
  }

  const groupedServices = services.reduce(
    (acc, service) => {
      if (!acc[service.category]) {
        acc[service.category] = []
      }
      acc[service.category].push(service)
      return acc
    },
    {} as Record<string, typeof services>,
  )

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of professional automotive care services, each designed to exceed your
              expectations and protect your investment.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(groupedServices).map(([category, categoryServices]) => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">
                {categories[category as keyof typeof categories]}
              </h2>

              <div className="space-y-8">
                {categoryServices.map((service) => (
                  <div
                    key={service.id}
                    className="flex flex-col lg:flex-row gap-8 p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <div className="lg:w-1/3">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.name}
                        className="w-full h-64 lg:h-48 object-cover rounded-lg"
                      />
                    </div>

                    <div className="lg:w-2/3 space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="font-serif text-2xl font-bold text-gray-900">{service.name}</h3>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {service.duration}
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed text-lg">{service.fullDescription}</p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">What's Included:</h4>
                        <ul className="grid md:grid-cols-2 gap-1 text-gray-600">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-4">
                        <Button asChild className="bg-gray-900 hover:bg-gray-800">
                          <Link href={`/services/${service.id}`}>
                            Learn More <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
