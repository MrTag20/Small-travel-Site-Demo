import { Users, Globe2, Star, Headphones } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const iconMap = {
  'stat-1': Users,
  'stat-2': Globe2,
  'stat-3': Star,
  'stat-4': Headphones,
};

export default function TrustStats() {
  const { statistics } = siteConfig;

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Sleek, compact trust bar with half-height and clean sans-serif typography */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg shadow-[#062B50]/8 border border-slate-100 py-3.5 px-4 sm:py-4 sm:px-6 travel-card-shadow">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x-0 lg:divide-x divide-slate-100">
          {statistics.map((stat, index) => {
            const IconComponent = iconMap[stat.id] || Users;

            return (
              <div
                key={stat.id}
                className={`flex items-center gap-3 justify-center sm:justify-start ${
                  index !== 0 ? 'lg:pl-6' : ''
                } ${index > 1 ? 'pt-2.5 sm:pt-0' : ''}`}
              >
                {/* Compact Icon */}
                <div className="w-9 h-9 rounded-lg bg-[#EAF6FF] text-[#087FCB] flex items-center justify-center shrink-0">
                  <IconComponent className="w-4 h-4" />
                </div>

                {/* Normal Clean Typography */}
                <div className="text-left">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-sans text-lg sm:text-xl font-extrabold text-[#062B50] tracking-tight leading-none">
                      {stat.number}
                    </span>
                    <span className="text-xs font-bold text-[#172B45] truncate">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-normal leading-tight hidden sm:block truncate max-w-[170px]">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
