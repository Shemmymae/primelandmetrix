import { Cookie } from 'lucide-react';

export default function CookiePolicyPage() {
  return (
    <main className="pt-20">
      <div className="relative bg-gradient-to-br from-gray-900 via-emerald-800 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full mb-6">
              <Cookie className="text-white" size={36} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-white/90">
              Last Updated: January 30, 2026
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Are Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit
              a website. They are widely used to make websites work more efficiently and provide information
              to website owners.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This Cookie Policy explains how PrimelandMetrix uses cookies and similar technologies on our website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies for several purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>To enable certain functions of the website</li>
              <li>To provide analytics and improve our services</li>
              <li>To store your preferences</li>
              <li>To enhance your user experience</li>
              <li>To understand how visitors interact with our website</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                These cookies are necessary for the website to function properly and cannot be disabled in our systems.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mt-3">
                <p className="text-sm text-gray-600"><strong>Purpose:</strong> Authentication, security, and basic website functionality</p>
                <p className="text-sm text-gray-600"><strong>Duration:</strong> Session or up to 1 year</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                These cookies help us understand how visitors interact with our website by collecting and
                reporting information anonymously.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mt-3">
                <p className="text-sm text-gray-600"><strong>Purpose:</strong> Website analytics and performance monitoring</p>
                <p className="text-sm text-gray-600"><strong>Duration:</strong> Up to 2 years</p>
                <p className="text-sm text-gray-600"><strong>Examples:</strong> Google Analytics, site usage statistics</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Functionality Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                These cookies enable enhanced functionality and personalization, such as remembering your
                preferences.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mt-3">
                <p className="text-sm text-gray-600"><strong>Purpose:</strong> Remember user preferences and settings</p>
                <p className="text-sm text-gray-600"><strong>Duration:</strong> Up to 1 year</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                These cookies track your online activity to help deliver more relevant advertising or to
                limit how many times you see an advertisement.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mt-3">
                <p className="text-sm text-gray-600"><strong>Purpose:</strong> Targeted advertising and marketing campaigns</p>
                <p className="text-sm text-gray-600"><strong>Duration:</strong> Up to 2 years</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In addition to our own cookies, we may use various third-party cookies to report usage
              statistics of the website and deliver advertisements on and through the website.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Third-party services we may use include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Google Analytics for website analytics</li>
              <li>Social media platforms for social sharing features</li>
              <li>Advertising partners for targeted marketing</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie
              preferences in several ways:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Browser Settings</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most web browsers automatically accept cookies, but you can modify your browser settings to
              decline cookies if you prefer. Here's how to manage cookies in popular browsers:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
              <li><strong>Firefox:</strong> Options &gt; Privacy & Security &gt; Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data</li>
              <li><strong>Edge:</strong> Settings &gt; Privacy, search, and services &gt; Cookies and site permissions</li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
              <p className="text-sm text-gray-700">
                <strong>Please note:</strong> Disabling cookies may affect the functionality of our website
                and limit your access to certain features.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Do Not Track Signals</h2>
            <p className="text-gray-700 leading-relaxed">
              Some browsers include a "Do Not Track" feature that signals to websites you visit that you do
              not want to have your online activity tracked. Currently, there is no industry standard for
              how to respond to Do Not Track signals. We do not currently respond to Do Not Track signals.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to This Cookie Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for
              other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly
              to stay informed about our use of cookies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">More Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For more information about how we handle your personal data, please see our{' '}
              <a href="/privacy-policy" className="text-emerald-600 hover:text-emerald-700 font-medium">Privacy Policy</a>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6">
              <p className="text-gray-700"><strong>Email:</strong> info@primelandmetrix.com</p>
              <p className="text-gray-700"><strong>Alternative:</strong> contact@primelandmetrix.com</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
