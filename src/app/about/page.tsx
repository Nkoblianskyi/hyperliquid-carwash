import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Users, Shield, Clock, Star, Zap, Target, Heart } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { number: "15+", label: "Years of Excellence", icon: Award },
    { number: "50,000+", label: "Vehicles Serviced", icon: Star },
    { number: "98%", label: "Customer Satisfaction", icon: Heart },
    { number: "24/7", label: "Customer Support", icon: Clock },
  ]

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in every service we provide, using only premium products and proven techniques.",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Your satisfaction is our priority. We listen to your needs and exceed your expectations with personalized service.",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description:
        "Built on integrity and transparency, we've earned the trust of thousands of discerning vehicle owners.",
      gradient: "from-emerald-600 to-teal-600",
    },
    {
      icon: Clock,
      title: "Efficiency",
      description:
        "We respect your time while never compromising on quality, delivering exceptional results when promised.",
      gradient: "from-orange-600 to-red-600",
    },
  ]

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-gold-400 rotate-45"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border border-gold-400 rotate-12"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-gold-400 rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-gold-400/20 rounded-full text-gold-400 text-sm font-medium mb-6">
              Premium Automotive Care Since 2009
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gold-200 bg-clip-text text-transparent">
              About Hyperliquid
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover the story behind Copenhagen's premier automotive care destination, where passion meets precision
              in every service we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-gold-400" />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-slate-100 rounded-full text-slate-600 text-sm font-medium mb-6">
                Our Journey
              </div>
              <h2 className="font-serif text-4xl font-bold text-slate-900 mb-8 leading-tight">
                Crafting Excellence Since <span className="text-gold-600">2009</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  Founded in the heart of Copenhagen, Hyperliquid began as a vision to revolutionize the automotive care
                  industry. Our founder, Marcus Sterling, a former automotive engineer with a passion for perfection,
                  recognized the need for a premium car care service that combined cutting-edge technology with
                  old-world craftsmanship.
                </p>
                <p>
                  What started as a small operation has grown into Copenhagen's most trusted automotive care
                  destination. We've built our reputation on an unwavering commitment to excellence, treating every
                  vehicle as a masterpiece.
                </p>
                <p>
                  Today, our state-of-the-art facility spans 15,000 square feet and houses the most advanced automotive
                  care equipment available, operated by certified professionals who share our dedication to perfection.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8">
                  <Link href="/contact">Experience Our Service</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-gold-400 to-gold-600 rounded-3xl opacity-20 blur-xl"></div>
                <img
                  src="/33c98f7bca12a5405dcf4f49fbeb2363.jpg"
                  alt="Hyperliquid Facility"
                  className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white rounded-full text-slate-600 text-sm font-medium mb-6">
              What Drives Us
            </div>
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              These principles guide every decision we make and every service we provide, ensuring consistency in our
              commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className={`h-2 bg-gradient-to-r ${value.gradient}`}></div>
                  <div className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-slate-400 to-slate-600 rounded-3xl opacity-20 blur-xl"></div>
                <img
                  src="/470a5a89fcd3c0e1c83f861f1814c358.jpg"
                  alt="Our Professional Team"
                  className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
            <div>
              <div className="space-y-12">
                <div>
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-gold-600 mr-3" />
                    <h2 className="font-serif text-3xl font-bold text-slate-900">Our Mission</h2>
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    To provide unparalleled automotive care services that exceed our clients' expectations. We preserve
                    and enhance the beauty, value, and performance of every vehicle while delivering an experience that
                    reflects sophistication and excellence.
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <Zap className="h-8 w-8 text-gold-600 mr-3" />
                    <h2 className="font-serif text-3xl font-bold text-slate-900">Our Vision</h2>
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    To be recognized as the definitive leader in premium automotive care, setting industry standards for
                    excellence. We envision Hyperliquid as synonymous with quality, innovation, and customer
                    satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-40 h-40 border border-gold-400 rotate-45"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-gold-400 rotate-12"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gold-400/20 rounded-full text-gold-400 text-sm font-medium mb-6">
              Visit Us Today
            </div>
            <h2 className="font-serif text-4xl font-bold mb-6">Our Copenhagen Location</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Conveniently located in Østerbro, our facility is easily accessible and offers premium service in the
              heart of Copenhagen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Address",
                content: "Østerbrogade 142\nCopenhagen, 2100\nDenmark",
                icon: Target,
              },
              {
                title: "Contact",
                content: "Phone: +45 33 41 7147 \nEmail: info@hyperliquidwash.com\nWeb: hyperliquidwash.com",
                icon: Users,
              },
              {
                title: "Hours",
                content: "Mon-Fri: 7:00 AM - 7:00 PM\nSaturday: 8:00 AM - 6:00 PM\nSunday: 9:00 AM - 5:00 PM",
                icon: Clock,
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl mb-4">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed whitespace-pre-line">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-slate-900 px-8 font-semibold">
              <Link href="/contact">Schedule Your Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
