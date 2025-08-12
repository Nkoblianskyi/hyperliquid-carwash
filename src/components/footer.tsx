import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center bg-white p-2 rounded-sm">
                <Image src="/favicon.ico" alt="Hyperliquid Logo" width={32} height={32} />
              </div>
              <span className="font-serif text-xl font-bold text-white">Hyperliquid</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Premium automotive care services that exceed expectations and protect your investment. Premium car care
              excellence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/services/express-wash" className="hover:text-white transition-colors">
                  Express Wash
                </Link>
              </li>
              <li>
                <Link href="/services/premium-wash" className="hover:text-white transition-colors">
                  Premium Wash
                </Link>
              </li>
              <li>
                <Link href="/services/ceramic-coating" className="hover:text-white transition-colors">
                  Ceramic Coating
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/tips" className="hover:text-white transition-colors">
                  Tips & Advice
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Hyperliquid. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Østerbrogade 52, 2100 København Ø, Denmark | (555) 123-4567
          </p>
        </div>
      </div>
    </footer>
  )
}
