import { Card, CardContent } from "@/components/ui/card"
import { Shield, Droplets, Sparkles, Clock } from "lucide-react"

export function CarCareSection() {
  const carePoints = [
    {
      icon: Shield,
      title: "Paint Protection",
      description:
        "Advanced ceramic coatings and protective treatments to maintain your vehicle's finish for years to come.",
    },
    {
      icon: Droplets,
      title: "Water-Safe Methods",
      description:
        "Eco-friendly cleaning solutions and water reclamation systems that protect both your car and the environment.",
    },
    {
      icon: Sparkles,
      title: "Premium Products",
      description:
        "Only the finest automotive care products from trusted brands, ensuring superior results every time.",
    },
    {
      icon: Clock,
      title: "Efficient Service",
      description:
        "Professional techniques and streamlined processes that deliver exceptional results without wasting your time.",
    },
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Professional Car Care</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence extends beyond just cleaning. We provide comprehensive care that protects your
            investment and maintains your vehicle's value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {carePoints.map((point, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 text-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <point.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{point.title}</h3>
                <p className="text-gray-300 leading-relaxed">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
