import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import WhyChooseUs from './components/WhyChooseUs';
import Packages from './components/Packages';
import Services from './components/Services';
import Memories from './components/Memories';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatAssistant from './components/AIChatAssistant';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);
  const [selectedDestinationForBooking, setSelectedDestinationForBooking] = useState('');

  const handleOpenAiChat = () => {
    setIsAiChatOpen(true);
  };

  const handleSelectPackage = (destinationName) => {
    setSelectedDestinationForBooking(destinationName);
  };

  return (
    <div className="min-h-screen bg-white text-[#172B45] font-sans antialiased relative selection:bg-[#087FCB] selection:text-white">
      {/* ── SECTION 01: HEADER / NAVIGATION ── */}
      <Header onOpenAiChat={handleOpenAiChat} />

      <main>
        {/* ── SECTION 02: HERO SECTION ── */}
        <Hero onOpenAiChat={handleOpenAiChat} />

        {/* ── SECTION 03: TRUST STATISTICS ── */}
        <TrustStats />

        {/* ── SECTION 04: WHY TRAVEL WITH US ── */}
        <WhyChooseUs />

        {/* ── SECTION 05: TOUR PACKAGES (with Details Modal) ── */}
        <Packages onSelectPackageForBooking={handleSelectPackage} />

        {/* ── SECTION 06: OUR SERVICES ── */}
        <Services />

        {/* ── SECTION 07: OUR MEMORIES (with Lightbox) ── */}
        <Memories />

        {/* ── SECTION 08: CUSTOMER TESTIMONIALS ── */}
        <Testimonials />

        {/* ── SECTION 09: CONTACT / ENQUIRY FORM ── */}
        <Contact prefilledDestination={selectedDestinationForBooking} />
      </main>

      {/* ── SECTION 10: FOOTER ── */}
      <Footer />

      {/* ── SECTION 11: FLOATING AI TRAVEL ASSISTANT ── */}
      {/* Positioned 100px from bottom edge to prevent Netlify badge overlap */}
      <AIChatAssistant isOpen={isAiChatOpen} setIsOpen={setIsAiChatOpen} />

      {/* ── SECTION 12: FLOATING WHATSAPP BUTTON ── */}
      {/* Positioned 160px from bottom edge (60px above AI assistant) */}
      <WhatsAppButton />
    </div>
  );
}
