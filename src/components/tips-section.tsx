import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { tips } from "@/lib/mock-data"
import { ArrowRight } from "lucide-react"

export function TipsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Expert Tips & Advice</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn from our professionals with insider tips and techniques to keep your vehicle looking its best between
            services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {tips.map((tip) => (
            <Card key={tip.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={tip.image || "/placeholder.svg"}
                    alt={tip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full mb-3 capitalize">
                    {tip.category}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{tip.excerpt}</p>
                  <Button asChild variant="ghost" className="p-0 h-auto text-gray-900 hover:text-gray-600">
                    <Link href={`/tips#${tip.id}`} className="flex items-center gap-1">
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-gray-900 hover:bg-gray-800 px-8">
            <Link href="/tips">View All Tips</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
