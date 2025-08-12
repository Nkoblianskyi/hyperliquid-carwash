"use client"

import { Shield, Clock, Award, Users, Droplets, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WhyChooseUsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Premium Protection",
      description:
        "Advanced ceramic coatings and paint protection that keeps your vehicle looking showroom new for months.",
    },
    {
      icon: Clock,
      title: "Time Efficient",
      description:
        "Professional service that respects your schedule. Most services completed within 2-3 hours with appointment booking.",
    },
    {
      icon: Award,
      title: "Expert Technicians",
      description:
        "Certified professionals with years of experience in automotive detailing and advanced cleaning techniques.",
    },
    {
      icon: Users,
      title: "Trusted by Thousands",
      description:
        "Over 10,000 satisfied customers trust us with their luxury vehicles, from everyday cars to exotic supercars.",
    },
    {
      icon: Droplets,
      title: "Eco-Friendly Methods",
      description: "Water-saving techniques and biodegradable products that protect both your car and the environment.",
    },
    {
      icon: Sparkles,
      title: "Satisfaction Guarantee",
      description: "100% satisfaction guarantee on all services. If you're not completely happy, we'll make it right.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Choose <span className="text-blue-600">Hyperliquid</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Experience the difference that professional automotive care makes. We combine cutting-edge technology with
            meticulous attention to detail to deliver exceptional results every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full border-2 border-white"></div>
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full border-2 border-white"></div>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold">
                +
              </div>
            </div>
            <div className="text-left">
              <p className="font-bold text-slate-900">Join 10,000+ Happy Customers</p>
              <p className="text-sm text-slate-600">Rated 4.9/5 stars across all platforms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
