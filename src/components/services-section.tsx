import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { services } from "@/lib/mock-data"
import { ArrowRight } from "lucide-react"

export function ServicesSection() {
  // Show only first 6 services on homepage for better color variety
  const featuredServices = services.slice(0, 6)

  const gradientClasses = [
    "service-gradient-1",
    "service-gradient-2",
    "service-gradient-3",
    "service-gradient-4",
    "service-gradient-5",
    "service-gradient-6",
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Premium Services</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of professional automotive care services, each designed to exceed your
            expectations and protect your investment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <Card
              key={service.id}
              className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden professional-shadow hover:scale-105 bg-white"
            >
              <CardContent className="p-0">
                <div
                  className={`aspect-video overflow-hidden relative ${gradientClasses[index % gradientClasses.length]}`}
                >
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white font-medium bg-amber-400/90 px-3 py-1 rounded text-sm backdrop-blur-sm">
                      {service.duration}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-end">
                    <Button
                      asChild
                      variant="ghost"
                      className="p-0 h-auto text-slate-700 hover:text-amber-600 group-hover:translate-x-1 transition-all duration-300 font-semibold"
                    >
                      <Link href={`/services/${service.id}`} className="flex items-center gap-1">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="gold-gradient text-slate-900 hover:scale-105 px-10 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 border-0 rounded-none font-semibold text-lg"
          >
            <Link href="/services">VIEW ALL SERVICES</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
