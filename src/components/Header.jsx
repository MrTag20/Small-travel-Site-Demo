import { useState, useEffect } from 'react';
import { Compass, Phone, Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Header({ onOpenAiChat }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section spy
      const sections = siteConfig.navigation.map((item) => item.href.replace('#', ''));
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100'
          : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* ── Brand Logo & Name ── */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group"
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                isScrolled
                  ? 'bg-[#087FCB] text-white shadow-md shadow-[#087FCB]/20'
                  : 'bg-white text-[#087FCB] shadow-lg shadow-black/20'
              }`}
            >
              <Compass className="w-6 h-6 transition-transform group-hover:rotate-45 duration-300" />
            </div>
            <div>
              <span
                className={`font-sans text-xl sm:text-2xl font-bold tracking-tight block leading-tight ${
                  isScrolled ? 'text-[#062B50]' : 'text-white'
                }`}
              >
                {siteConfig.business.name}
              </span>
              <span
                className={`text-[10px] tracking-widest uppercase block font-medium ${
                  isScrolled ? 'text-slate-500' : 'text-slate-200'
                }`}
              >
                {siteConfig.business.tagline}
              </span>
            </div>
          </a>

          {/* ── Desktop Navigation Links ── */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteConfig.navigation.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isScrolled
                      ? isActive
                        ? 'text-[#087FCB] bg-[#EAF6FF] font-semibold'
                        : 'text-[#172B45] hover:text-[#087FCB] hover:bg-slate-50'
                      : isActive
                      ? 'text-white bg-white/20 backdrop-blur-sm font-semibold'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* ── Desktop Action Elements: Phone & CTA ── */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phoneClean}`}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                isScrolled ? 'text-[#062B50] hover:text-[#087FCB]' : 'text-white hover:text-[#EAF6FF]'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isScrolled ? 'bg-[#EAF6FF] text-[#087FCB]' : 'bg-white/15 text-white'
                }`}
              >
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{siteConfig.contact.phone}</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#087FCB] hover:bg-[#1599ED] text-white text-sm font-semibold shadow-md shadow-[#087FCB]/25 hover:shadow-lg hover:shadow-[#087FCB]/30 transition-all duration-200 active:scale-95"
            >
              <span>Plan Your Trip</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* ── Mobile Hamburger Button ── */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={`tel:${siteConfig.contact.phoneClean}`}
              className={`w-9 h-9 rounded-full flex items-center justify-center ${
                isScrolled ? 'bg-[#EAF6FF] text-[#087FCB]' : 'bg-white/20 text-white'
              }`}
              aria-label="Call Us"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-[#062B50] hover:bg-slate-100' : 'text-white hover:bg-white/15'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Navigation Drawer ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white text-[#172B45] border-b border-slate-100 shadow-xl px-5 py-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-800 hover:text-[#087FCB] hover:bg-[#EAF6FF] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-5 mt-4 border-t border-slate-100 space-y-3">
            <a
              href={`tel:${siteConfig.contact.phoneClean}`}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-50 text-slate-700 text-sm font-medium"
            >
              <Phone className="w-4 h-4 text-[#087FCB]" />
              <span>{siteConfig.contact.phone}</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block w-full py-3 text-center rounded-xl bg-[#087FCB] text-white font-semibold text-sm shadow-md shadow-[#087FCB]/20"
            >
              Plan Your Trip
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
