import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, RotateCcw, Minimize2, User, Compass } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function AIChatAssistant({ isOpen, setIsOpen }) {
  const { aiAssistant, business, packagesSection } = siteConfig;

  const [messages, setMessages] = useState([
    {
      id: 'init-1',
      sender: 'bot',
      text: aiAssistant.welcomeMessage,
      time: 'Just now',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping]);

  /**
   * LIVE AI CONCIERGE INTEGRATION (Powered by NVIDIA NIM)
   * Configured for detailed package breakdowns & itineraries
   */
  const handleSendMessage = async (textToSend) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      const apiKey = aiAssistant.apiKey;
      const endpoint = aiAssistant.endpoint;

      // Rich system prompt for in-depth travel planning & itinerary details
      const systemPrompt = `You are the Senior AI Travel Concierge for ${business.name} (${business.tagline}).
Your mission is to provide detailed, inspiring, and comprehensive travel consultations for our guests.
When asked about packages, recommendations, or itineraries, provide rich, thorough details including:
• Package Name, Destination & Starting Price
• Detailed Day-by-Day Itinerary breakdown with iconic highlights
• Key Inclusions (Hotels, Meals, Private Transfers, Sightseeing)
• Best Season & insider travel tips

Our signature featured packages are:
1. Swiss Alpine Escape (Switzerland • 7 Days / 6 Nights • Starting ₹1,29,000/person):
   - Day 1: Zurich arrival & historic old town stroll
   - Day 2: Lucerne Lake Cruise & Mount Pilatus Cableway
   - Day 3-4: Interlaken, Lauterbrunnen Waterfalls & Jungfraujoch Top of Europe
   - Day 5: Zermatt & Matterhorn viewing point
   - Day 6: Scenic Glacier Express & Geneva evening
   - Day 7: Leisure shopping & departure
   - Inclusions: 4-Star Alpine Chalets, First-Class Swiss Travel Pass, Jungfrau Excursion, Daily Breakfasts, Airport Transfers.

2. Bali Tropical Retreat (Bali, Indonesia • 5 Days / 4 Nights • Starting ₹64,000/person):
   - Day 1: Flower garland welcome & Ubud private pool villa check-in
   - Day 2: Tegalalang Rice Terraces, coffee plantation & jungle swing
   - Day 3: Nusa Penida Island private speedboat trip (Kelingking Beach & Broken Beach)
   - Day 4: Tanah Lot & Uluwatu cliffside sunset dinner with Kecak dance
   - Day 5: Souvenir shopping & private airport transfer
   - Inclusions: Luxury Pool Villa in Ubud, Nusa Penida Day Trip, Balinese Massage, AC Vehicle with English Driver.

3. Dubai Luxury Experience (Dubai, UAE • 4 Days / 3 Nights • Starting ₹79,000/person):
   - Day 1: Private luxury transfer, Marina waterfront hotel check-in & Dubai Mall fountain show
   - Day 2: Museum of the Future & Red Dune Desert Safari with BBQ feast and stargazing
   - Day 3: Dubai Frame, old spice souks & evening luxury shared yacht cruise from Dubai Marina
   - Day 4: Atlantis Palm Jumeirah & departure
   - Inclusions: 5-Star Waterfront Hotel, Burj Khalifa 124th Floor tickets, VIP Desert Safari, Marina Yacht Cruise, Private Chauffeur.

4. Maldives Escape (Maldives • 5 Days / 4 Nights • Starting ₹1,09,000/person):
   - Day 1: Scenic seaplane arrival & Overwater Sunrise Villa check-in
   - Day 2: Guided coral reef snorkeling with marine biologist & signature spa retreat
   - Day 3: Sunset dolphin cruise & beachfront candlelight dinner under the stars
   - Day 4: Water sports, sandbank picnic & lagoon kayaking
   - Day 5: Leisure champagne breakfast & seaplane to Malé Airport
   - Inclusions: Overwater Sunrise Villa with Ocean Access, Roundtrip Seaplane Transfers, All-Inclusive Gourmet Dining, Snorkel Gear.

Always format your response cleanly with clear section headings, bullet points, and welcoming warmth. Conclude by encouraging the guest to fill our Enquiry Form or click the WhatsApp button to book with a dedicated travel designer.`;

      // Build conversation history (up to last 6 messages)
      const conversationHistory = messages.slice(-6).map((m) => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.text,
      }));

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: aiAssistant.model || 'minimaxai/minimax-m3.1-flash',
          messages: [
            { role: 'system', content: systemPrompt },
            ...conversationHistory,
            { role: 'user', content: query },
          ],
          max_tokens: 700,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`API returned status ${response.status}`);
      }

      const data = await response.json();
      let replyText = data?.choices?.[0]?.message?.content;

      if (!replyText || !replyText.trim()) {
        throw new Error('Empty response from model');
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: replyText.trim(),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (err) {
      console.warn('Live AI error, falling back to rich curated knowledge:', err);

      let replyText = '';
      const lower = query.toLowerCase();

      if (lower.includes('swiss') || lower.includes('switzerland')) {
        replyText = `🏔️ **Swiss Alpine Escape (7 Days / 6 Nights • Starting ₹1,29,000/person)**

**Detailed Itinerary:**
• **Day 1:** Arrival in Zurich & historic Old Town walking tour
• **Day 2:** Lucerne Lake Cruise & Mount Pilatus panoramic cableway
• **Day 3-4:** Interlaken, Lauterbrunnen Valley waterfalls & Jungfraujoch (Top of Europe)
• **Day 5:** Zermatt & iconic Matterhorn viewing excursion
• **Day 6:** Scenic Glacier Express ride & Geneva evening
• **Day 7:** Leisure shopping & departure transfer

**Inclusions:**
✓ 4-Star Alpine Chalets & Hotels
✓ 1st Class Swiss Travel Pass
✓ Jungfraujoch Excursion
✓ Daily Gourmet Breakfasts & Airport Transfers

Would you like to customize dates or request a booking? Tap WhatsApp or fill our Enquiry Form!`;
      } else if (lower.includes('bali')) {
        replyText = `🌴 **Bali Tropical Retreat (5 Days / 4 Nights • Starting ₹64,000/person)**

**Detailed Itinerary:**
• **Day 1:** Flower garland welcome & Ubud private pool villa check-in
• **Day 2:** Tegalalang Rice Terraces, coffee plantation & jungle swing
• **Day 3:** Full-Day Nusa Penida Island private speedboat trip (Kelingking & Broken Beach)
• **Day 4:** Tanah Lot & Uluwatu cliffside sunset dinner with Kecak dance
• **Day 5:** Souvenir market visit & private airport drop-off

**Inclusions:**
✓ Private Luxury Pool Villa in Ubud
✓ Nusa Penida Speedboat Day Tour
✓ Balinese Massage & Private AC Vehicle with English Driver`;
      } else if (lower.includes('dubai')) {
        replyText = `✨ **Dubai Luxury Experience (4 Days / 3 Nights • Starting ₹79,000/person)**

**Detailed Itinerary:**
• **Day 1:** Luxury airport transfer, 5-Star Marina hotel check-in & Dubai Mall Fountain Show
• **Day 2:** Museum of the Future & Red Dune Desert Safari with BBQ Dinner & Stargazing
• **Day 3:** Dubai Frame, Old Souks & 2-Hour Evening Marina Yacht Cruise
• **Day 4:** Atlantis Palm Jumeirah & departure transfer

**Inclusions:**
✓ 5-Star Waterfront Hotel Stay
✓ Burj Khalifa 124th Floor Tickets
✓ VIP Red Dune Desert Safari with Dinner
✓ Luxury Shared Yacht Cruise & Private Chauffeur`;
      } else if (lower.includes('maldives')) {
        replyText = `🏝️ **Maldives Escape (5 Days / 4 Nights • Starting ₹1,09,000/person)**

**Detailed Itinerary:**
• **Day 1:** Scenic Seaplane transfer & Overwater Sunrise Villa check-in
• **Day 2:** Guided coral reef snorkeling with marine biologist & signature spa
• **Day 3:** Sunset dolphin watching cruise & private candlelight beach dinner
• **Day 4:** Water sports, sandbank picnic & lagoon kayaking
• **Day 5:** Champagne breakfast & seaplane back to Malé Airport

**Inclusions:**
✓ Overwater Sunrise Villa with Ocean Access
✓ Roundtrip Scenic Seaplane Transfers
✓ All-Inclusive Gourmet Dining (Breakfast, Lunch, 4-Course Dinner)`;
      } else if (lower.includes('package') || lower.includes('tour')) {
        replyText = `🌟 **Aura Voyages Curated Tour Packages:**

1. **Swiss Alpine Escape (7D/6N)** — ₹1,29,000/person (Zurich, Lucerne, Interlaken, Jungfraujoch)
2. **Bali Tropical Retreat (5D/4N)** — ₹64,000/person (Ubud Pool Villa, Nusa Penida, Uluwatu)
3. **Dubai Luxury Experience (4D/3N)** — ₹79,000/person (5-Star Marina, Burj Khalifa, Desert Safari)
4. **Maldives Escape (5D/4N)** — ₹1,09,000/person (Overwater Villa, Seaplane, All-Inclusive)

Which destination would you like the complete day-by-day itinerary for?`;
      } else {
        replyText =
          aiAssistant.predefinedResponses[query] ||
          `Thank you for your inquiry! Aura Voyages specializes in bespoke itineraries with verified 4/5-star accommodations, private transfers, and curated excursions. Please let me know your preferred destination, duration, or budget, and I will share a complete day-by-day plan!`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'init-1',
        sender: 'bot',
        text: aiAssistant.welcomeMessage,
        time: 'Just now',
      },
    ]);
  };

  return (
    <>
      {/* ── FLOATING AI ASSISTANT BUTTON ── */}
      {/* Positioned 100px from bottom and 20px from right as strictly required */}
      <div className="fixed bottom-[100px] right-5 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative group w-13 h-13 rounded-full bg-[#087FCB] hover:bg-[#1599ED] text-white flex items-center justify-center shadow-xl shadow-[#087FCB]/35 border-2 border-white transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Toggle AI Travel Assistant"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#087FCB] opacity-30 animate-ping group-hover:opacity-50 pointer-events-none" />

          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative flex items-center justify-center">
              <Bot className="w-6 h-6" />
              <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-white animate-bounce" />
            </div>
          )}

          {/* Floating Tooltip Label on Hover (Desktop) */}
          <div className="hidden lg:group-hover:block absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#062B50] text-white text-xs font-medium whitespace-nowrap shadow-lg">
            Chat with Live AI Planner
          </div>
        </button>
      </div>

      {/* ── CHAT POPUP WINDOW ── */}
      {isOpen && (
        <div className="fixed bottom-[165px] right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[560px] max-h-[78vh] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="p-4 bg-[#062B50] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#087FCB] text-white flex items-center justify-center shadow-sm">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-sans font-bold text-sm tracking-wide">
                    {aiAssistant.title}
                  </h4>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/25 text-emerald-300 border border-emerald-400/40 uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    LIVE AI
                  </span>
                </div>
                <p className="text-[11px] text-slate-300">
                  {business.name} Virtual Concierge
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={resetChat}
                title="Reset conversation"
                className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Minimize"
                className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#F5F8FC]/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-[#EAF6FF] text-[#087FCB] flex items-center justify-center shrink-0 mt-1 shadow-xs">
                    <Compass className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#087FCB] text-white rounded-tr-none shadow-xs'
                      : 'bg-white text-slate-800 rounded-tl-none border border-slate-100 shadow-xs'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span
                    className={`text-[9px] mt-1.5 block ${
                      msg.sender === 'user' ? 'text-white/70' : 'text-slate-400'
                    }`}
                  >
                    {msg.time}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 mt-1">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-slate-400">
                <div className="w-7 h-7 rounded-full bg-[#EAF6FF] text-[#087FCB] flex items-center justify-center shrink-0">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <div className="bg-white rounded-xl px-3 py-2 border border-slate-100 shadow-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087FCB] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087FCB] animate-bounce [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087FCB] animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Predefined Clickable Questions Pills */}
          <div className="p-2 border-t border-slate-100 bg-white overflow-x-auto flex gap-1.5 no-scrollbar">
            {aiAssistant.predefinedQuestions.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(q)}
                className="px-2.5 py-1 rounded-full bg-[#EAF6FF] hover:bg-[#087FCB] text-[#087FCB] hover:text-white text-[11px] font-medium whitespace-nowrap transition-colors shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Form Bar */}
          <div className="p-3 bg-white border-t border-slate-100">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about packages, day-by-day itineraries..."
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#087FCB] focus:ring-1 focus:ring-[#087FCB]"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="w-9 h-9 rounded-xl bg-[#087FCB] hover:bg-[#1599ED] text-white flex items-center justify-center disabled:opacity-40 transition-colors shadow-xs shrink-0"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
