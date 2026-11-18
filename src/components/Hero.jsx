import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Bot } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Hero({ onOpenAiChat }) {
  const { hero } = siteConfig;

  // Background images for automated crossfade slider
  const slides = hero.backgroundImages || [hero.backgroundImage];
  const [activeSlide, setActiveSlide] = useState(0);

  // Automatic slide progression every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToPackages = (e) => {
    e.preventDefault();
    const target = document.querySelector('#packages');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
      {/* ── Automated Background Image Slider (3 Images) ── */}
      <div className="absolute inset-0 z-0">
        {slides.map((imgUrl, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={imgUrl}
              alt={`Travel destination vista ${index + 1}`}
              className="w-full h-full object-cover object-center scale-100 transition-transform duration-[6000ms] ease-out"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}

        {/* ── Ultra-light overlay (darkness reduced by 2) ── */}
        {/* Soft gradient focused only on the left text area, keeping middle and right pure & bright */}
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />
      </div>

      {/* ── Hero Foreground Content (Placed on LEFT SIDE of Screen) ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT SIDE (7 Columns): All Hero Content Placed Here */}
          <div className="lg:col-span-7 text-white text-center sm:text-left">
            {/* Small Heading / Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-[#EAF6FF] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#1599ED]" />
              <span>{hero.smallHeading}</span>
            </div>

            {/* Main Headline with Normal Clean Font */}
            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-5 drop-shadow-md">
              {hero.headline}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/95 font-normal leading-relaxed max-w-xl mx-auto sm:mx-0 mb-8 drop-shadow-sm">
              {hero.description}
            </p>

            {/* Responsive Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3.5">
              <a
                href="#packages"
                onClick={scrollToPackages}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#087FCB] hover:bg-[#1599ED] text-white text-sm sm:text-base font-semibold shadow-xl shadow-black/20 hover:shadow-black/35 hover:-translate-y-0.5 transition-all duration-200 active:scale-95"
              >
                <span>{hero.primaryCta.text}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenAiChat}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-sm sm:text-base font-semibold backdrop-blur-md border border-white/30 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-200 active:scale-95 shadow-md"
              >
                <Bot className="w-5 h-5 text-[#1599ED]" />
                <span>{hero.secondaryCta.text}</span>
              </button>
            </div>

            {/* Slide Pagination Dots & Controls */}
            <div className="mt-8 flex items-center justify-center sm:justify-start gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    activeSlide === idx
                      ? 'w-8 bg-[#1599ED] shadow-sm'
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to background slide ${idx + 1}`}
                />
              ))}
              <span className="text-[11px] text-white/70 ml-2 font-mono">
                0{activeSlide + 1} / 0{slides.length}
              </span>
            </div>
          </div>

          {/* RIGHT SIDE (5 Columns): Clean & open to view the scenery */}
          <div className="hidden lg:block lg:col-span-5" />
        </div>
      </div>
    </section>
  );
}
