import { useState } from 'react';
import { Clock, MapPin, Star, ArrowRight, CheckCircle2, X, Calendar, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Packages({ onSelectPackageForBooking }) {
  const { packagesSection } = siteConfig;
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleBookNowFromModal = (pkg) => {
    setSelectedPackage(null);
    if (onSelectPackageForBooking) {
      onSelectPackageForBooking(pkg.destination);
    }
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-12 sm:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header with Reduced Gap ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] text-[#087FCB] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Journeys</span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B50] leading-tight mb-3">
            {packagesSection.heading}
          </h2>
          <p className="text-sm text-slate-500 font-normal leading-relaxed">
            {packagesSection.supportingText}
          </p>
        </div>

        {/* ── Responsive Packages Grid (4 on Desktop, 2 on Tablet, 1 on Mobile) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {packagesSection.packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-[#087FCB]/30 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              {/* Card Image Area with Duration & Rating Badges */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Duration Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 text-xs font-semibold text-[#062B50] shadow-xs">
                  <Clock className="w-3 h-3 text-[#087FCB]" />
                  <span>{pkg.duration}</span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-white shadow-xs">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span>{pkg.rating}</span>
                </div>

                {/* Destination Tag */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs text-white/95 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#1599ED]" />
                  <span>{pkg.destination}</span>
                </div>
              </div>

              {/* Card Body with Clean Sans-Serif Fonts */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-sans font-bold text-base sm:text-lg text-[#062B50] mb-1.5 group-hover:text-[#087FCB] transition-colors leading-snug">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
                    {pkg.shortDescription}
                  </p>
                </div>

                {/* Pricing & CTA with Normal Font Numbers */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-medium">
                      Starting From
                    </span>
                    <span className="font-sans text-base sm:text-lg font-bold text-[#087FCB]">
                      {pkg.price}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedPackage(pkg)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#EAF6FF] hover:bg-[#087FCB] text-[#087FCB] hover:text-white text-xs font-semibold transition-all duration-200"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── View All Packages Action Button ── */}
        <div className="mt-8 sm:mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#087FCB] text-[#087FCB] hover:bg-[#087FCB] hover:text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs hover:shadow-sm"
          >
            <span>{packagesSection.viewAllButtonText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* ── Package Detail Modal ── */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[88vh] overflow-y-auto shadow-2xl border border-slate-100 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image Header */}
            <div className="relative aspect-[16/9] w-full bg-slate-100">
              <img
                src={selectedPackage.image}
                alt={selectedPackage.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-full bg-[#087FCB] text-[10px] font-bold uppercase tracking-wider">
                    {selectedPackage.destination}
                  </span>
                  <span className="text-xs text-white/80 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {selectedPackage.duration}
                  </span>
                </div>
                <h3 className="font-sans text-xl sm:text-2xl font-bold">
                  {selectedPackage.name}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-6 space-y-4">
              <div>
                <h4 className="font-sans text-base font-bold text-[#062B50] mb-1">Overview</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {selectedPackage.shortDescription}
                </p>
              </div>

              {/* Inclusions */}
              <div>
                <h4 className="font-sans text-base font-bold text-[#062B50] mb-2">What's Included</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedPackage.inclusions.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day-by-Day Itinerary */}
              <div>
                <h4 className="font-sans text-base font-bold text-[#062B50] mb-2">Curated Itinerary</h4>
                <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                  {selectedPackage.itinerary.map((day, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#087FCB] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 font-medium">{day}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Book Action Bar */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Total Starting Price</span>
                  <span className="font-sans text-xl sm:text-2xl font-bold text-[#087FCB]">
                    {selectedPackage.price} <span className="text-xs font-normal text-slate-500">/ person</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleBookNowFromModal(selectedPackage)}
                  className="px-6 py-2.5 rounded-full bg-[#087FCB] hover:bg-[#1599ED] text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
                >
                  Book This Package
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
