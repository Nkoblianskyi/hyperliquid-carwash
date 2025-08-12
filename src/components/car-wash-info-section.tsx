export function CarWashInfoSection() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Advanced Car Wash Technology</h2>
            <div className="w-24 h-1 bg-amber-400 mb-8"></div>

            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                Our state-of-the-art car wash facility features the latest in automotive cleaning technology. From
                touchless wash systems to eco-friendly cleaning solutions, we ensure your vehicle receives the most
                thorough and gentle care possible.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-800 p-6 rounded-lg">
                  <h3 className="font-semibold text-amber-400 text-xl mb-3">Touchless Technology</h3>
                  <p className="text-gray-300">
                    Advanced sensors and precision nozzles ensure thorough cleaning without physical contact.
                  </p>
                </div>

                <div className="bg-slate-800 p-6 rounded-lg">
                  <h3 className="font-semibold text-amber-400 text-xl mb-3">Eco-Friendly Solutions</h3>
                  <p className="text-gray-300">
                    Biodegradable soaps and water recycling systems protect the environment.
                  </p>
                </div>

                <div className="bg-slate-800 p-6 rounded-lg">
                  <h3 className="font-semibold text-amber-400 text-xl mb-3">Premium Wax Protection</h3>
                  <p className="text-gray-300">High-grade carnauba wax provides long-lasting shine and protection.</p>
                </div>

                <div className="bg-slate-800 p-6 rounded-lg">
                  <h3 className="font-semibold text-amber-400 text-xl mb-3">Quality Assurance</h3>
                  <p className="text-gray-300">Every wash is inspected to ensure it meets our exacting standards.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/5e724b57297a63898b5c4c88c8c8e86f.jpg"
              alt="Advanced Car Wash Technology"
              className="w-full h-96 object-cover rounded-lg professional-shadow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
