export function DetailingInfoSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="/d2daa5954aeccaf2c10c607c4bfe349a.jpg"
              alt="Professional Car Detailing"
              className="w-full h-96 object-cover rounded-lg professional-shadow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent rounded-lg"></div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Expert Auto Detailing</h2>
            <div className="w-24 h-1 bg-amber-400 mb-8"></div>

            <div className="space-y-6 text-slate-600">
              <p className="text-lg leading-relaxed">
                Our master detailers bring decades of experience and passion to every vehicle. Using premium products
                and meticulous techniques, we restore and protect your car's finish to showroom condition.
              </p>

              <div className="grid grid-cols-1 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg border border-slate-200 professional-shadow">
                  <h3 className="font-semibold text-slate-900 text-xl mb-3">Paint Correction</h3>
                  <p className="text-slate-600">
                    Multi-stage polishing removes swirl marks, scratches, and oxidation for a flawless finish.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-slate-200 professional-shadow">
                  <h3 className="font-semibold text-slate-900 text-xl mb-3">Ceramic Coating</h3>
                  <p className="text-slate-600">
                    Advanced nanotechnology provides years of protection against environmental damage.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-slate-200 professional-shadow">
                  <h3 className="font-semibold text-slate-900 text-xl mb-3">Interior Restoration</h3>
                  <p className="text-slate-600">
                    Deep cleaning and conditioning of leather, fabric, and trim materials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
