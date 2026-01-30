import { Users } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-blue-600 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-emerald-700" size={40} />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Professionals You Can Trust
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Behind every successful project stands a team of certified specialists who understand that
              accuracy matters. Our professionals combine technical mastery with real-world problem-solving
              to deliver solutions that exceed expectations.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {[
                { title: 'Licensed Surveyors', description: 'Certified professionals with extensive field experience' },
                { title: 'GIS Specialists', description: 'Advanced geospatial data analysis experts' },
                { title: 'Project Managers', description: 'Dedicated coordinators ensuring timely delivery' },
              ].map((role, index) => (
                <div key={index} className="p-6 rounded-lg bg-gradient-to-br from-emerald-50 to-blue-50">
                  <h4 className="font-bold text-gray-900 mb-2">{role.title}</h4>
                  <p className="text-sm text-gray-600">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
