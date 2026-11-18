import { useState } from 'react';
import { Camera, MapPin, X, ChevronLeft, ChevronRight, Sparkles, ZoomIn, ChevronDown, ChevronUp } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Memories() {
  const { memoriesSection } = siteConfig;
  const [showAll, setShowAll] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  const allPhotos = memoriesSection.photos;
  // Keep 4 images on screen initially, show all when user clicks "View All"
  const visiblePhotos = showAll ? allPhotos : allPhotos.slice(0, 4);

  const openLightbox = (index) => {
    setActivePhotoIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
    document.body.style.overflow = '';
  };

  const showNext = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev + 1) % allPhotos.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev - 1 + allPhotos.length) % allPhotos.length);
  };

  return (
    <section id="memories" className="py-12 sm:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header with Reduced Gap ── */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] text-[#087FCB] text-xs font-semibold tracking-wider uppercase mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>Travel Stories & Moments</span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B50] leading-tight mb-2">
            {memoriesSection.heading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
            {memoriesSection.supportingText}
          </p>
        </div>

        {/* ── Unified Image Grid (4 cards in one row on desktop) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {visiblePhotos.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 aspect-[4/3] bg-slate-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#062B50]/80 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              {/* Zoom hover indicator */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex items-center gap-1.5 text-[11px] text-[#EAF6FF] font-medium mb-0.5">
                  <MapPin className="w-3 h-3 text-[#1599ED]" />
                  <span>{item.location}</span>
                </div>
                <h3 className="font-sans font-bold text-sm sm:text-base text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* ── View All / Collapse Button ── */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#087FCB] hover:bg-[#1599ED] text-white text-xs sm:text-sm font-semibold shadow-md shadow-[#087FCB]/20 hover:shadow-lg transition-all duration-200 active:scale-95"
          >
            <span>{showAll ? 'Show Fewer Moments' : 'View All Memories'}</span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* ── Image Lightbox Modal ── */}
      {activePhotoIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={showPrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={showNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Lightbox Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden max-h-[70vh] shadow-2xl bg-black">
              <img
                src={allPhotos[activePhotoIndex].image}
                alt={allPhotos[activePhotoIndex].title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="mt-3 text-center text-white max-w-xl">
              <div className="flex items-center justify-center gap-2 text-xs text-[#1599ED] font-semibold mb-1 uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>{allPhotos[activePhotoIndex].location}</span>
                <span>•</span>
                <span>
                  {activePhotoIndex + 1} of {allPhotos.length}
                </span>
              </div>
              <h4 className="font-sans text-lg sm:text-xl font-bold mb-0.5">
                {allPhotos[activePhotoIndex].title}
              </h4>
              <p className="text-xs text-slate-300 font-light">
                {allPhotos[activePhotoIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
