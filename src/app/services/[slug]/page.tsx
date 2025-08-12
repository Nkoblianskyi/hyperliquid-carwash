import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { services } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock, CheckCircle, ArrowLeft } from "lucide-react"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.id === params.slug)

  if (!service) {
    notFound()
  }

  const relatedServices = services.filter((s) => s.id !== service.id && s.category === service.category).slice(0, 2)

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button asChild variant="ghost" className="text-gray-300 hover:text-white p-0 mr-4">
              <Link href="/services" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Services
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">{service.name}</h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">{service.fullDescription}</p>

              <div className="flex items-center text-gray-300 mb-8">
                <Clock className="h-5 w-5 mr-2" />
                <span className="text-lg">Duration: {service.duration}</span>
              </div>

              <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8">
                <Link href="/contact">Book This Service</Link>
              </Button>
            </div>

            <div className="lg:order-first">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.name}
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Service Details</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
                    <p className="text-gray-700">{service.duration}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Category</h3>
                    <p className="text-gray-700 capitalize">{service.category.replace("-", " ")}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Perfect For</h3>
                    <p className="text-gray-700">
                      {service.category === "exterior" &&
                        "Vehicle owners who want to maintain their car's exterior appearance and protection."}
                      {service.category === "interior" &&
                        "Those who spend significant time in their vehicle and value a clean, comfortable interior."}
                      {service.category === "premium" &&
                        "Discerning clients who demand the highest level of care and protection for their investment."}
                      {service.category === "detailing" &&
                        "Enthusiasts and collectors who require professional-grade restoration and maintenance."}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Ready to Experience {service.name}?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Book your appointment today and discover why Hyperliquid is the preferred choice for discerning vehicle
            owners.
          </p>
          <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 px-8">
            <Link href="/contact">Schedule Your Service</Link>
          </Button>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-12 text-center">You Might Also Like</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedServices.map((relatedService) => (
                <Card key={relatedService.id} className="group hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={relatedService.image || "/placeholder.svg"}
                        alt={relatedService.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{relatedService.name}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{relatedService.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 font-medium">{relatedService.duration}</span>
                        <Button asChild variant="ghost" className="p-0 h-auto text-gray-900 hover:text-gray-600">
                          <Link href={`/services/${relatedService.id}`} className="flex items-center gap-1">
                            Learn More <ArrowLeft className="h-4 w-4 rotate-180" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
