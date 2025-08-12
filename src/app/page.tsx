import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { CarWashInfoSection } from "@/components/car-wash-info-section"
import { DetailingInfoSection } from "@/components/detailing-info-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { CarCareSection } from "@/components/car-care-section"
import { TipsSection } from "@/components/tips-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <CarWashInfoSection />
      <DetailingInfoSection />
      <WhyChooseUsSection />
      <CarCareSection />
      <TipsSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
