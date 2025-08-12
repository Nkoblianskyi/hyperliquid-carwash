import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-1 bg-gradient-to-r from-amber-400 to-transparent opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-32 bg-gradient-to-b from-amber-400 to-transparent opacity-60"></div>
        <div className="absolute bottom-40 left-20 w-24 h-1 bg-gradient-to-r from-blue-400 to-transparent opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-1 h-24 bg-gradient-to-b from-blue-400 to-transparent opacity-60"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-amber-400 rounded-full opacity-80"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-80"></div>
      </div>

      <div className="absolute inset-0">
        <img
          src="/56bbe63a310b3859257cb6282b8ce4de.jpg"
          alt="Hyperliquid Car Wash Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight text-white text-shadow">
          HYPERLIQUID
          <span className="block text-4xl md:text-5xl font-sans font-light mt-2 text-amber-400">
            Premium Car Care Excellence
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
          Experience unparalleled automotive care with our state-of-the-art facilities and expert detailing services
          designed for the most discerning car enthusiasts. Premium quality, exceptional results.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <Button
            asChild
            size="lg"
            className="gold-gradient text-slate-900 hover:scale-105 px-10 py-4 text-lg font-semibold professional-shadow hover:shadow-2xl transition-all duration-300 border-0 rounded-none"
          >
            <Link href="/services">EXPLORE SERVICES</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-10 py-4 text-lg font-semibold bg-transparent backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-none"
          >
            <Link href="/contact">BOOK APPOINTMENT</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
