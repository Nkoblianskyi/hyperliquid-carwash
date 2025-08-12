import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal
              information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-8">
                  <strong>Last Updated:</strong> January 1, 2024
                </p>

                <section className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                  <div className="space-y-4 text-gray-700">
                    <h3 className="font-semibold text-gray-900">Personal Information</h3>
                    <p>
                      We collect personal information that you voluntarily provide to us when you schedule services,
                      contact us, or interact with our website. This may include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Name and contact information (email, phone number, address)</li>
                      <li>Vehicle information (make, model, year, license plate)</li>
                      <li>Service preferences and history</li>
                      <li>Payment information (processed securely through third-party providers)</li>
                      <li>Communication preferences</li>
                    </ul>

                    <h3 className="font-semibold text-gray-900 mt-6">Automatically Collected Information</h3>
                    <p>
                      When you visit our website, we automatically collect certain information about your device and
                      usage patterns:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>IP address and location data</li>
                      <li>Browser type and version</li>
                      <li>Pages visited and time spent on our site</li>
                      <li>Referring website information</li>
                      <li>Device information (type, operating system)</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>We use the information we collect for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Providing and improving our automotive care services</li>
                      <li>Scheduling appointments and managing service requests</li>
                      <li>Processing payments and maintaining service records</li>
                      <li>Communicating with you about services, appointments, and promotions</li>
                      <li>Personalizing your experience and service recommendations</li>
                      <li>Analyzing website usage to improve functionality and content</li>
                      <li>Complying with legal obligations and protecting our rights</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      We do not sell, trade, or rent your personal information to third parties. We may share your
                      information in the following limited circumstances:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Service Providers:</strong> With trusted third-party vendors who assist in operating our
                        business (payment processors, scheduling software, etc.)
                      </li>
                      <li>
                        <strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights
                        and safety
                      </li>
                      <li>
                        <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of
                        business assets
                      </li>
                      <li>
                        <strong>Consent:</strong> With your explicit consent for specific purposes
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      We implement appropriate technical and organizational security measures to protect your personal
                      information against unauthorized access, alteration, disclosure, or destruction. These measures
                      include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Encryption of sensitive data in transit and at rest</li>
                      <li>Regular security assessments and updates</li>
                      <li>Access controls and employee training</li>
                      <li>Secure payment processing through PCI-compliant providers</li>
                      <li>Regular backups and disaster recovery procedures</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">5. Your Rights and Choices</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>You have the following rights regarding your personal information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Access:</strong> Request a copy of the personal information we hold about you
                      </li>
                      <li>
                        <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                      </li>
                      <li>
                        <strong>Deletion:</strong> Request deletion of your personal information (subject to legal
                        requirements)
                      </li>
                      <li>
                        <strong>Portability:</strong> Request transfer of your data to another service provider
                      </li>
                      <li>
                        <strong>Opt-out:</strong> Unsubscribe from marketing communications at any time
                      </li>
                    </ul>
                    <p>
                      To exercise these rights, please contact us at{" "}
                      <a href="mailto:privacy@hyperliquidwash.com" className="text-gray-900 underline">
                        privacy@liquiddetailing.com
                      </a>
                      .
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      We use cookies and similar tracking technologies to enhance your browsing experience and analyze
                      website usage. For detailed information about our cookie practices, please see our{" "}
                      <a href="/cookies" className="text-gray-900 underline">
                        Cookie Policy
                      </a>
                      .
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      We retain your personal information for as long as necessary to provide our services and comply
                      with legal obligations. Specifically:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Customer service records: 7 years after last service</li>
                      <li>Marketing communications: Until you opt-out</li>
                      <li>Website analytics: 26 months</li>
                      <li>Payment information: As required by financial regulations</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Our services are not directed to children under 13 years of age. We do not knowingly collect
                      personal information from children under 13. If we become aware that we have collected personal
                      information from a child under 13, we will take steps to delete such information.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                      requirements. We will notify you of any material changes by posting the updated policy on our
                      website and updating the "Last Updated" date. Your continued use of our services after such
                      changes constitutes acceptance of the updated policy.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p>
                        <strong>Hyperliquid Car Wash</strong>
                        <br />
                        Østerbrogade 52
                        <br />
                        2100 København Ø, Denmark
                        <br />
                        Phone: +45 33 41 7147
                        <br />
                        Email:{" "}
                        <a href="mailto:privacy@hyperliquidwash.com" className="text-gray-900 underline">
                          privacy@liquiddetailing.com
                        </a>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
