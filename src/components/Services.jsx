import { Plane, Building, Palmtree, FileCheck, Compass, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const serviceIcons = {
  Plane,
  Building,
  Palmtree,
  FileCheck,
  Compass,
};

export default function Services() {
  const { servicesSection } = siteConfig;

  return (
    <section id="services" className="py-12 sm:py-16 bg-[#F5F8FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header with Reduced Size ── */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] text-[#087FCB] text-xs font-semibold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>End-to-End Solutions</span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B50] leading-tight mb-2">
            {servicesSection.heading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
            {servicesSection.supportingText}
          </p>
        </div>

        {/* ── Services in One Clean Horizontal Line on Desktop (5 boxes in 1 line) ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {servicesSection.services.map((service) => {
            const IconComponent = serviceIcons[service.icon] || Plane;

            return (
              <div
                key={service.id}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-100 hover:border-[#087FCB]/30 shadow-xs hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  {/* Icon Container */}
                  <div className="w-10 h-10 rounded-xl bg-[#EAF6FF] text-[#087FCB] group-hover:bg-[#087FCB] group-hover:text-white flex items-center justify-center mb-3 transition-colors duration-200">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-sm sm:text-base text-[#062B50] mb-1.5 group-hover:text-[#087FCB] transition-colors leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Subtle Indicator */}
                <div className="mt-3 pt-2.5 border-t border-slate-50 flex items-center gap-1 text-[11px] font-semibold text-[#087FCB]">
                  <span>Learn more</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
