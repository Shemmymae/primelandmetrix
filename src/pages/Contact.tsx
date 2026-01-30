import Contact from '../components/Contact';
import { Mail, MessageSquare, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="pt-20">
      <div className="relative bg-gradient-to-br from-emerald-600 via-blue-600 to-emerald-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full mb-6">
              <MessageSquare className="text-white" size={36} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="text-amber-400">Touch</span>
            </h1>
            <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
              Have questions about our services? We'd love to hear from you. Reach out to our team for a consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Mail, label: 'Email Us', value: 'info@primelandmetrix.com' },
                { icon: Phone, label: 'Call Us', value: 'Available upon request' }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl px-8 py-4">
                  <div className="flex items-center gap-3">
                    <item.icon className="text-amber-400" size={24} />
                    <div className="text-left">
                      <p className="text-white/80 text-sm">{item.label}</p>
                      <p className="text-white font-semibold">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </main>
  );
}
