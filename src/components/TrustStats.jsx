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
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      {/* Sleek, compact trust bar strictly in one line on all screen sizes */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg shadow-[#062B50]/8 border border-slate-100 py-2.5 px-1.5 sm:py-3.5 sm:px-6 travel-card-shadow">
        <div className="grid grid-cols-4 divide-x divide-slate-100 items-center">
          {statistics.map((stat, index) => {
            const IconComponent = iconMap[stat.id] || Users;

            return (
              <div
                key={stat.id}
                className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-3 text-center sm:text-left px-1 sm:px-3 lg:px-6 min-w-0`}
              >
                {/* Compact Icon */}
                <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-md sm:rounded-lg bg-[#EAF6FF] text-[#087FCB] flex items-center justify-center shrink-0">
                  <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                {/* Clean, perfectly fitting typography */}
                <div className="min-w-0 w-full sm:w-auto">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-1.5">
                    <span className="font-sans text-xs sm:text-lg lg:text-xl font-bold sm:font-extrabold text-[#062B50] tracking-tight leading-tight">
                      {stat.number}
                    </span>
                    <span className="text-[9px] sm:text-xs font-semibold text-slate-700 sm:text-[#172B45] truncate block leading-tight">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-normal leading-tight hidden lg:block truncate max-w-[170px] mt-0.5">
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
