import Team from '../components/Team';
import { Users, Award, Zap } from 'lucide-react';

export default function TeamPage() {
  return (
    <main className="pt-20">
      <div className="relative bg-gradient-to-br from-gray-900 via-emerald-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNkb3RzKSIvPjwvc3ZnPg==')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full mb-6 shadow-lg">
              <Users className="text-white" size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Our <span className="text-amber-400">Team</span>
            </h1>
            <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
              Expert professionals bringing decades of combined experience in land surveying, geospatial analysis, and project management
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              {[
                { icon: Award, label: 'Licensed Professionals' },
                { icon: Users, label: 'Collaborative Approach' },
                { icon: Zap, label: 'Cutting-Edge Expertise' }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                  <item.icon className="text-amber-400 mx-auto mb-3" size={32} />
                  <p className="text-white font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Team />
    </main>
  );
}
