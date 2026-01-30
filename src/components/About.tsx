import { Target, Layers, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-emerald-700 to-blue-700 bg-clip-text text-transparent">PrimelandMetrix</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We transform complex land data into clear, actionable intelligence. From boundary determination
              to comprehensive site analysis, our services provide the foundation for confident decision-making
              in development and construction projects.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every survey we conduct combines technical precision with practical insight, ensuring you have
              the reliable information needed to move your projects forward efficiently and successfully.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: Target,
                title: 'Land Surveying',
                description: 'Specialized expertise in comprehensive land surveying solutions',
              },
              {
                icon: Layers,
                title: 'Geospatial Services',
                description: 'Advanced mapping and spatial data analysis capabilities',
              },
              {
                icon: TrendingUp,
                title: 'Mapping & Metrics',
                description: 'Precise measurements and actionable insights for every project',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-emerald-50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-emerald-700" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">What We Do</h3>
              <p className="text-gray-700">Professional surveying and spatial data services nationwide</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">How We Work</h3>
              <p className="text-gray-700">Advanced tools and methodologies for superior results</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Why Choose Us</h3>
              <p className="text-gray-700">Proven track record of delivering on time and on target</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
