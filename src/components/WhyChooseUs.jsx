import { Sparkles, Compass, Sliders, Headphones, ShieldCheck, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const featureIcons = {
  'feat-1': Compass,
  'feat-2': Sliders,
  'feat-3': Headphones,
  'feat-4': ShieldCheck,
};

export default function WhyChooseUs() {
  const { whyChooseUs } = siteConfig;

  const scrollToContact = (e) => {
    e.preventDefault();
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="why-us" className="py-12 sm:py-16 bg-[#F5F8FC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* ── Left Column: Heading, Description & CTA (4 cols) ── */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] text-[#087FCB] text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Why Travel With Us</span>
            </div>

            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B50] leading-tight mb-4">
              {whyChooseUs.heading}
            </h2>

            <p className="text-sm text-slate-600 font-normal leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
              {whyChooseUs.supportingText}
            </p>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#087FCB] hover:bg-[#1599ED] text-white font-semibold text-sm shadow-md shadow-[#087FCB]/20 hover:shadow-lg transition-all duration-200"
            >
              <span>{whyChooseUs.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* ── Middle Column: Modern Rectangle Destination Image (4 cols) ── */}
          <div className="lg:col-span-4 flex justify-center items-center">
            <div className="relative w-full max-w-sm rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-[#062B50]/10 border-4 border-white aspect-[4/3] group">
              <img
                src={whyChooseUs.centerImage}
                alt="Traveller overlooking scenic horizons"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062B50]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase tracking-widest font-semibold block text-[#EAF6FF]">
                  Tailored Horizons
                </span>
                <span className="font-sans text-base font-bold">Unforgettable Memories</span>
              </div>
            </div>
          </div>

          {/* ── Right Column: 4 Feature Cards (4 cols) ── */}
          <div className="lg:col-span-4 space-y-3">
            {whyChooseUs.features.map((feature) => {
              const Icon = featureIcons[feature.id] || Compass;

              return (
                <div
                  key={feature.id}
                  className="p-4 rounded-xl bg-white border border-slate-100 hover:border-[#087FCB]/30 shadow-xs hover:shadow-md transition-all duration-200 group flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EAF6FF] group-hover:bg-[#087FCB] text-[#087FCB] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-200">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-sm text-[#062B50] mb-0.5 group-hover:text-[#087FCB] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
