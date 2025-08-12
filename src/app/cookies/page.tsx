import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Learn about how we use cookies and similar technologies to enhance your browsing experience on our
              website.
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-8">
                  <strong>Last Updated:</strong> 2025
                </p>

                <section className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you
                      visit a website. They are widely used to make websites work more efficiently and provide
                      information to website owners about how users interact with their sites.
                    </p>
                    <p>
                      Cookies can be "persistent" (remaining on your device until they expire or are deleted) or
                      "session" cookies (deleted when you close your browser). They can also be "first-party" (set by
                      the website you're visiting) or "third-party" (set by other websites whose content appears on the
                      page you're viewing).
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Hyperliquid uses cookies to enhance your browsing experience, provide personalized content, and
                      analyze website performance. We use cookies for the following purposes:
                    </p>

                    <h3 className="font-semibold text-gray-900 mt-6">Essential Cookies</h3>
                    <p>
                      These cookies are necessary for the website to function properly. They enable basic functions like
                      page navigation, access to secure areas, and form submissions. The website cannot function
                      properly without these cookies.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Session management and user authentication</li>
                      <li>Security and fraud prevention</li>
                      <li>Load balancing and website functionality</li>
                      <li>Cookie consent preferences</li>
                    </ul>

                    <h3 className="font-semibold text-gray-900 mt-6">Performance and Analytics Cookies</h3>
                    <p>
                      These cookies help us understand how visitors interact with our website by collecting and
                      reporting information anonymously. This helps us improve our website's performance and user
                      experience.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Google Analytics for website traffic analysis</li>
                      <li>Page load times and error tracking</li>
                      <li>Popular content and user journey analysis</li>
                      <li>A/B testing for website improvements</li>
                    </ul>

                    <h3 className="font-semibold text-gray-900 mt-6">Functional Cookies</h3>
                    <p>
                      These cookies enable enhanced functionality and personalization. They may be set by us or by
                      third-party providers whose services we use on our pages.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Language and region preferences</li>
                      <li>Personalized content recommendations</li>
                      <li>Social media integration</li>
                      <li>Live chat functionality</li>
                    </ul>

                    <h3 className="font-semibold text-gray-900 mt-6">Marketing and Advertising Cookies</h3>
                    <p>
                      These cookies are used to deliver relevant advertisements and track the effectiveness of our
                      marketing campaigns. They may also be used to limit the number of times you see an advertisement.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Targeted advertising based on interests</li>
                      <li>Retargeting campaigns for website visitors</li>
                      <li>Social media advertising pixels</li>
                      <li>Marketing campaign performance tracking</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      We work with trusted third-party service providers who may set cookies on our website to provide
                      their services. These include:
                    </p>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Google Analytics</h4>
                      <p className="text-sm">
                        We use Google Analytics to analyze website traffic and user behavior. Google Analytics uses
                        cookies to collect information about how you use our website, which helps us improve our
                        services.
                      </p>
                      <p className="text-sm mt-2">
                        Learn more:{" "}
                        <a
                          href="https://policies.google.com/privacy"
                          className="text-gray-900 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Google Privacy Policy
                        </a>
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Social Media Platforms</h4>
                      <p className="text-sm">
                        Our website may include social media features and widgets from platforms like Facebook,
                        Instagram, and Twitter. These features may collect information about your visit and set cookies
                        to enable proper functionality.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Payment Processors</h4>
                      <p className="text-sm">
                        When you make payments through our website, our payment processors may set cookies to ensure
                        secure transaction processing and fraud prevention.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>You have several options for managing cookies on our website and in your browser:</p>

                    <h3 className="font-semibold text-gray-900 mt-6">Cookie Consent Banner</h3>
                    <p>
                      When you first visit our website, you'll see a cookie consent banner that allows you to accept or
                      decline non-essential cookies. You can change your preferences at any time by clearing your
                      browser cookies and revisiting our site.
                    </p>

                    <h3 className="font-semibold text-gray-900 mt-6">Browser Settings</h3>
                    <p>Most web browsers allow you to control cookies through their settings. You can:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Block all cookies</li>
                      <li>Block third-party cookies only</li>
                      <li>Delete existing cookies</li>
                      <li>Set your browser to notify you when cookies are being set</li>
                    </ul>

                    <p className="text-sm text-gray-600 mt-4">
                      <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website and
                      your user experience.
                    </p>

                    <h3 className="font-semibold text-gray-900 mt-6">Browser-Specific Instructions</h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
                      </p>
                      <p>
                        <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data
                      </p>
                      <p>
                        <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
                      </p>
                      <p>
                        <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>Different types of cookies have different retention periods:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Session cookies:</strong> Deleted when you close your browser
                      </li>
                      <li>
                        <strong>Essential cookies:</strong> Typically expire after 1 year
                      </li>
                      <li>
                        <strong>Analytics cookies:</strong> Usually expire after 2 years
                      </li>
                      <li>
                        <strong>Marketing cookies:</strong> Vary from 30 days to 2 years depending on the provider
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      We may update this Cookie Policy from time to time to reflect changes in our practices, legal
                      requirements, or the cookies we use. We will notify you of any significant changes by posting the
                      updated policy on our website and updating the "Last Updated" date.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                  <div className="space-y-4 text-gray-700">
                    <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us:</p>
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
                          privacy@hyperliquidwash.com
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
