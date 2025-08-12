import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function TipsPage() {
  const expandedTips = [
    {
      id: "winter-care",
      title: "Winter Car Care Essentials",
      excerpt: "Protect your vehicle during harsh winter conditions with these professional tips.",
      content: `Winter weather can be brutal on your vehicle. Salt, snow, and freezing temperatures create the perfect storm for automotive damage. Regular washing during winter months is crucial to prevent salt corrosion, which can cause irreversible damage to your vehicle's undercarriage and body panels.

**Pre-Winter Preparation:**
Start by applying a high-quality wax or sealant before winter arrives. This creates a protective barrier against salt and road chemicals. Consider ceramic coating for maximum protection - it provides superior durability and makes cleaning easier throughout the season.

**Weekly Winter Washing:**
Wash your vehicle at least once a week during winter, focusing on the undercarriage where salt accumulates. Use a high-pressure rinse to remove salt deposits from wheel wells, suspension components, and the exhaust system. Don't forget to clean the door jambs and trunk areas where salt can hide.

**Interior Protection:**
Winter brings moisture, mud, and salt into your vehicle's interior. Use quality floor mats and consider seat covers during the harshest months. Regular vacuuming and interior cleaning prevent permanent staining and odors from developing.

**Professional Winter Services:**
Consider professional undercarriage treatments and paint protection services before winter. Our ceramic coating services provide year-round protection, while our interior protection treatments create barriers against moisture and stains.`,
      image: "/ddeeaea307c60cf78da3c355f27f7e4e.jpg",
      category: "seasonal",
    },
    {
      id: "leather-maintenance",
      title: "Leather Interior Maintenance",
      excerpt: "Keep your leather seats looking and feeling luxurious with proper care techniques.",
      content: `Leather interiors represent the pinnacle of automotive luxury, but they require specialized care to maintain their beauty and durability. Regular cleaning and conditioning are essential to prevent cracking, fading, and premature wear.

**Understanding Leather Types:**
Modern vehicles use various leather types, from full-grain to corrected-grain leather. Each requires specific care approaches. Full-grain leather needs minimal treatment but benefits from regular conditioning, while corrected-grain leather requires more frequent cleaning due to its protective coating.

**Monthly Cleaning Routine:**
Clean leather seats monthly using pH-balanced leather cleaners. Avoid household cleaners or harsh chemicals that can strip natural oils. Use a soft-bristled brush for textured leather and microfiber cloths for smooth surfaces. Always test products in an inconspicuous area first.

**Conditioning Schedule:**
Apply leather conditioner every 3-4 months, or more frequently in extreme climates. Quality conditioners replenish natural oils, maintain flexibility, and provide UV protection. Over-conditioning can make leather slippery and attract dirt, so follow manufacturer recommendations.

**Professional Leather Care:**
Annual professional leather treatment can extend the life of your interior significantly. Our specialized leather services include deep cleaning, conditioning, and protective treatments that aren't available in consumer products. We also offer leather repair services for minor damage.

**Prevention Tips:**
Park in shade when possible, use window tinting to reduce UV exposure, and clean spills immediately. Regular vacuuming prevents dirt from grinding into leather grain, which can cause permanent damage over time.`,
      image: "/ac8f916695aa6107347b06544711b8fe.jpg",
      category: "interior",
    },
    {
      id: "paint-protection",
      title: "Paint Protection Strategies",
      excerpt: "Learn how to maintain your vehicle's paint finish between professional services.",
      content: `Your vehicle's paint is constantly under attack from UV rays, bird droppings, tree sap, and environmental contaminants. Implementing a proper protection strategy can maintain that showroom shine for years while preserving your vehicle's value.

**The Two-Bucket Method:**
Always use the two-bucket washing method - one for soapy water, one for rinsing your wash mitt. This prevents dirt from being redistributed across your paint surface. Use grit guards in both buckets to trap contaminants at the bottom.

**Proper Drying Techniques:**
Never air-dry your vehicle or use old towels. Use clean, high-quality microfiber towels or a chamois designed for automotive use. Pat dry rather than dragging the towel across the surface to prevent micro-scratches.

**Weekly Maintenance:**
Inspect your vehicle weekly for new contaminants. Remove bird droppings, tree sap, and bug splatter immediately - these can permanently etch paint if left untreated. Use quick detailer sprays between washes to maintain protection and shine.

**Seasonal Protection:**
Apply carnauba wax in spring and fall for natural protection and depth of shine. Consider synthetic sealants for longer-lasting protection, especially if you drive frequently. For ultimate protection, invest in ceramic coating - it provides years of protection with minimal maintenance.

**Professional Paint Correction:**
Annual paint correction services remove accumulated damage like swirl marks, light scratches, and oxidation. This process restores paint clarity and provides the perfect foundation for protective coatings. Our paint correction services can make even older vehicles look brand new.

**Storage Considerations:**
If storing your vehicle, use a quality car cover designed for your specific model. Indoor storage is ideal, but if outdoor storage is necessary, ensure proper ventilation under the cover to prevent moisture buildup.`,
      image: "/3ed43d91f1490ffcecb1975efb2ce94e.jpg",
      category: "exterior",
    },
    {
      id: "interior-detailing",
      title: "Professional Interior Detailing Tips",
      excerpt: "Master the art of interior care with techniques used by professional detailers.",
      content: `A pristine interior enhances your driving experience and maintains your vehicle's value. Professional-level interior care requires the right techniques, products, and attention to detail.

**Systematic Approach:**
Start from top to bottom - headliner, dashboard, seats, then carpets. This prevents dirt and cleaning products from falling onto already-cleaned surfaces. Remove all personal items and floor mats before beginning.

**Dashboard and Trim Care:**
Use appropriate cleaners for different materials - leather, vinyl, plastic, and wood trim each require specific products. Avoid silicone-based products that create a greasy finish and attract dust. UV protectants are essential for preventing fading and cracking.

**Fabric Seat Maintenance:**
Vacuum thoroughly before applying any cleaning products. Use upholstery cleaners designed for automotive fabrics, and always test in an inconspicuous area. Work in small sections and use proper extraction techniques to prevent over-wetting.

**Carpet and Floor Mat Care:**
Deep clean carpets quarterly using hot water extraction methods. Pre-treat stains with appropriate spot cleaners. Rubber floor mats should be removed and cleaned separately with all-purpose cleaners and brushes.

**Glass and Mirror Cleaning:**
Use automotive glass cleaners and lint-free cloths for streak-free results. Clean windows in shade and when surfaces are cool. Don't forget interior mirrors and instrument cluster covers.

**Professional Interior Protection:**
Consider fabric and leather protection treatments that create invisible barriers against spills and stains. These treatments make future cleaning easier and extend the life of interior surfaces significantly.

**Air Quality Maintenance:**
Replace cabin air filters regularly and consider professional air duct cleaning. Use enzyme-based odor eliminators rather than masking fragrances for persistent odors.`,
      image: "/404f6a59b870d116c786ad3a57684fdf.jpg",
      category: "interior",
    },
    {
      id: "wheel-tire-care",
      title: "Wheel and Tire Care Excellence",
      excerpt: "Maintain your wheels and tires like a professional with these expert techniques.",
      content: `Wheels and tires are often the most neglected parts of vehicle maintenance, yet they're among the most visible and important for both appearance and safety. Proper care extends their life and maintains optimal performance.

**Wheel Cleaning Fundamentals:**
Different wheel finishes require specific cleaning approaches. Chrome wheels need gentle, acid-free cleaners, while powder-coated wheels can handle stronger degreasers. Always clean wheels when they're cool to the touch and in shade.

**Brake Dust Management:**
Brake dust is highly corrosive and bonds to wheel surfaces when heated. Weekly cleaning prevents permanent staining and pitting. Use dedicated wheel cleaners that dissolve brake dust without damaging wheel finishes.

**Tire Sidewall Care:**
Clean tire sidewalls with dedicated tire cleaners that remove browning and restore the original black appearance. Avoid petroleum-based products that can damage rubber compounds over time. Water-based tire dressings provide a natural, long-lasting finish.

**Pressure Maintenance:**
Check tire pressure monthly when tires are cold. Proper inflation improves fuel economy, extends tire life, and ensures optimal handling. Don't forget the spare tire - it should be checked quarterly.

**Rotation and Alignment:**
Follow manufacturer recommendations for tire rotation, typically every 5,000-7,500 miles. Annual alignment checks prevent uneven wear and improve vehicle handling. Watch for signs of misalignment like pulling or uneven tread wear.

**Professional Wheel Services:**
Annual professional wheel cleaning and protection services can restore heavily contaminated wheels and apply protective coatings that make future cleaning easier. We also offer wheel repair services for curb damage and refinishing for worn finishes.

**Seasonal Considerations:**
Winter requires more frequent wheel cleaning due to salt exposure. Consider wheel wax or ceramic coatings for added protection. Summer heat can accelerate tire aging, so regular inspection for cracking or unusual wear is essential.`,
      image: "/15a6c5938d60008876906a6cd192d060.jpg",
      category: "exterior",
    },
    {
      id: "ceramic-coating-care",
      title: "Ceramic Coating Maintenance",
      excerpt: "Maximize the benefits of your ceramic coating investment with proper maintenance.",
      content: `Ceramic coatings represent the pinnacle of paint protection technology, but they require proper maintenance to deliver their full benefits. Understanding how to care for ceramic-coated surfaces ensures maximum longevity and performance.

**Understanding Ceramic Coatings:**
Ceramic coatings create a semi-permanent bond with your paint, forming a protective layer that's harder than the paint itself. This layer provides superior protection against UV rays, chemical etching, and environmental contaminants while making cleaning significantly easier.

**Maintenance Washing:**
Use pH-neutral car shampoos specifically designed for ceramic coatings. Avoid aggressive detergents that can degrade the coating over time. The two-bucket method is still essential, even with ceramic protection.

**Drying Techniques:**
Ceramic coatings make drying easier due to their hydrophobic properties, but proper technique is still important. Use clean, high-quality microfiber towels or filtered compressed air for spot-free results.

**Contamination Removal:**
While ceramic coatings resist many contaminants, some substances like tree sap, bird droppings, and industrial fallout can still bond to the surface. Remove these immediately using appropriate solvents and techniques to prevent permanent bonding.

**Annual Maintenance:**
Even the best ceramic coatings benefit from annual professional maintenance. This includes decontamination, inspection for damage, and application of maintenance products that refresh the coating's properties.

**What to Avoid:**
Never use abrasive polishes, compounds, or automatic car washes with brushes on ceramic-coated surfaces. Avoid parking under trees that drop sap or near industrial areas with heavy fallout when possible.

**Professional Inspection:**
Annual professional inspection can identify areas where the coating may be wearing thin or damaged. Early intervention can extend coating life and maintain optimal protection levels.

**Realistic Expectations:**
While ceramic coatings dramatically reduce maintenance requirements, they don't eliminate the need for regular washing and care. Proper maintenance ensures you get the full 2-5 year lifespan from your coating investment.`,
      image: "/0512a2d8a3dbb4deba2791119ecb812d.jpg",
      category: "exterior",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Expert Tips & Advice</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Learn from our professionals with insider tips and techniques to keep your vehicle looking its best
              between services. Master the art of automotive care with our comprehensive guides.
            </p>
          </div>
        </div>
      </section>

      {/* Tips Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {expandedTips.map((tip) => (
              <article key={tip.id} id={tip.id} className="scroll-mt-24">
                <Card className="overflow-hidden shadow-xl">
                  <div className="aspect-video overflow-hidden">
                    <img src={tip.image || "/placeholder.svg"} alt={tip.title} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="inline-block px-3 py-1 bg-gray-900 text-white text-sm font-medium rounded-full capitalize">
                        {tip.category}
                      </span>
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">{tip.title}</h2>
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">{tip.excerpt}</p>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      {tip.content.split("\n\n").map((paragraph, index) => {
                        if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                          return (
                            <h3 key={index} className="font-semibold text-gray-900 text-xl mt-8 mb-4">
                              {paragraph.replace(/\*\*/g, "")}
                            </h3>
                          )
                        }
                        return (
                          <p key={index} className="mb-4">
                            {paragraph}
                          </p>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Need Professional Help?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            While these tips will help you maintain your vehicle between services, nothing replaces professional care.
            Let our experts handle the complex work while you enjoy the results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8">
              <Link href="/services">View Our Services</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 bg-transparent"
            >
              <Link href="/contact">Schedule Service</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
