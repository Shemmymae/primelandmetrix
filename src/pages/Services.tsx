import Services from '../components/Services';
import { MapPin, Compass, Layers } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-emerald-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-emerald-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-amber-400">Services</span>
            </h1>
            <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
              Comprehensive surveying and mapping solutions designed for every phase of your project
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {[
                { icon: MapPin, label: 'Land Surveying' },
                { icon: Compass, label: 'Mapping Solutions' },
                { icon: Layers, label: 'Geospatial Data' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                  <item.icon className="text-amber-400" size={20} />
                  <span className="text-white font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Services />
    </main>
  );
}
