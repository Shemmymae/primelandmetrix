import { FileText } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <main className="pt-20">
      <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-emerald-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full mb-6">
              <FileText className="text-white" size={36} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Terms of Service
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your access to and use of the PrimelandMetrix website
              and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you do not agree to these Terms, you may not access or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Services Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              PrimelandMetrix provides professional land surveying, mapping, and geospatial services including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Land surveying and boundary determination</li>
              <li>Topographic and ALTA/NSPS surveys</li>
              <li>Geospatial data analysis and GIS mapping</li>
              <li>Construction and engineering support</li>
              <li>Consulting and project advisory services</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Specific terms for each service will be outlined in individual service agreements or contracts.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When using our services, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Notify us immediately of any unauthorized use</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Comply with all applicable local, state, and federal laws</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content, materials, and intellectual property on our website and in our deliverables,
              including but not limited to text, graphics, logos, images, software, and survey data, are
              the property of PrimelandMetrix or our licensors.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Upon full payment for services, clients receive a limited license to use the survey data and
              deliverables for their intended purpose. This license does not transfer ownership of the
              intellectual property.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Payment terms for services will be specified in individual service agreements. General terms include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Quotes are valid for 30 days unless otherwise specified</li>
              <li>Payment is due upon completion of services or as specified in the contract</li>
              <li>Late payments may be subject to interest charges</li>
              <li>We reserve the right to suspend services for non-payment</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Standards and Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We maintain professional liability insurance and adhere to industry standards and best practices.
              Our services are performed by licensed professionals where required by law.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we strive for accuracy in all our work, surveying involves inherent limitations. Our
              liability is limited as follows:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Our total liability shall not exceed the fees paid for the specific service</li>
              <li>We are not liable for consequential, indirect, or punitive damages</li>
              <li>Claims must be made within one year of service completion</li>
              <li>Our surveys are valid only for the date performed and stated purpose</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Warranties and Disclaimers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We warrant that our services will be performed in a professional manner consistent with
              industry standards. However:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>We make no warranties regarding the suitability of our services for any particular purpose</li>
              <li>Underground utilities and other hidden features may not be detected</li>
              <li>Survey accuracy is subject to weather, terrain, and site conditions</li>
              <li>Third-party data sources may contain errors beyond our control</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES
              OF ANY KIND, EXPRESS OR IMPLIED.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless PrimelandMetrix, its officers, employees, and agents
              from any claims, damages, losses, or expenses arising from your use of our services or violation
              of these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to terminate or suspend access to our services at any time, with or
              without cause, with or without notice.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Upon termination, your right to use our services will immediately cease. All provisions of
              these Terms which by their nature should survive termination shall survive.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Governing Law and Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the United States,
              without regard to conflict of law provisions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Any disputes arising from these Terms or our services shall be resolved through binding arbitration
              in accordance with the rules of the American Arbitration Association, except where prohibited by law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of material changes
              by posting the updated Terms on our website with a new "Last Updated" date. Your continued use
              of our services after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about these Terms of Service, please contact us:
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
