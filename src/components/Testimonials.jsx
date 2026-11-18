import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Testimonials() {
  const { testimonialsSection } = siteConfig;
  const testimonials = testimonialsSection.testimonials;

  // Responsive cards count based on viewport width
  // Desktop: 4 cards at a time | Tablet: 2 cards | Mobile: 1 card
  const [cardsPerView, setCardsPerView] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsPerView(1);
      } else if (width < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  // Keep currentIndex bounded when screen size or cardsPerView changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [cardsPerView, maxIndex, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-play timer (pauses when user hovers or interacts)
  useEffect(() => {
    if (isPaused || maxIndex === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(timer);
  }, [maxIndex, isPaused]);

  // Touch swipe support for smooth mobile swiping
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
  };

  // Percentage translation per slide step
  const stepPercentage = 100 / cardsPerView;
  const translateX = currentIndex * stepPercentage;

  return (
    <section className="py-12 sm:py-16 bg-[#F5F8FC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] text-[#087FCB] text-xs font-semibold tracking-wider uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Traveller Experiences</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B50] leading-tight">
              {testimonialsSection.heading}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1 max-w-xl">
              {testimonialsSection.supportingText}
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-[#087FCB] hover:bg-[#087FCB] hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-xs active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-[#087FCB] hover:bg-[#087FCB] hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-xs active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Responsive Slider Carousel ── */}
        <div
          className="overflow-hidden select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${translateX}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="shrink-0 px-2 sm:px-2.5 flex"
                style={{ width: `${stepPercentage}%` }}
              >
                <div className="w-full bg-white rounded-2xl p-5 border border-slate-100 hover:border-[#087FCB]/30 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                  <div>
                    {/* Stars & Verified Icon */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Verified
                      </span>
                    </div>

                    {/* Review Quote Text */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-4 mb-4">
                      "{item.review}"
                    </p>
                  </div>

                  {/* Customer Information with Normal Font */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-[#087FCB]/30 shrink-0 bg-slate-100">
                      <img
                        src={item.photo}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="truncate">
                      <h4 className="font-sans font-bold text-xs sm:text-sm text-[#062B50] truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#087FCB] font-medium truncate">
                        {item.destination}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-1.5 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                currentIndex === idx ? 'w-6 bg-[#087FCB]' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
