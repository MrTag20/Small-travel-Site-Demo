/**
 * ══════════════════════════════════════════════════════════════════════════════
 * CENTRAL TEMPLATE CONFIGURATION FILE
 * ══════════════════════════════════════════════════════════════════════════════
 * This is the single source of truth for the entire travel agency template.
 * When selling to or customizing for a new client, update the fields below.
 * No component code changes are required for re-branding!
 */

export const siteConfig = {
  // ──────────────────────────────────────────────────────────────────────────
  // 1. BUSINESS PROFILE & BRANDING
  // ──────────────────────────────────────────────────────────────────────────
  business: {
    name: "Aura Voyages", // Change business name here
    shortName: "Aura",
    tagline: "Bespoke Journeys & Luxury Escapes",
    establishedYear: 2014,
    licenseNumber: "TA-984210-EXP",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 2. CONTACT & LOCATION
  // ──────────────────────────────────────────────────────────────────────────
  contact: {
    phone: "+91 98765 43210",
    phoneClean: "919876543210", // Digits only for tel: links
    whatsappNumber: "919876543210", // With country code for wa.me
    whatsappDefaultMessage: "Hello, I am interested in planning a trip. Please share more details.",
    email: "concierge@auravoyages.com",
    supportEmail: "support@auravoyages.com",
    address: "Suite 402, Horizon Heritage Tower, Park Avenue, Connaught Place, New Delhi 110001",
    officeHours: "Mon - Sat: 9:00 AM - 7:30 PM",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 3. NAVIGATION MENU
  // ──────────────────────────────────────────────────────────────────────────
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#why-us" },
    { label: "Packages", href: "#packages" },
    { label: "Services", href: "#services" },
    { label: "Our Memories", href: "#memories" },
    { label: "Contact", href: "#contact" },
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // 4. HERO SECTION
  // ──────────────────────────────────────────────────────────────────────────
  hero: {
    smallHeading: "EXPLORE • DISCOVER • EXPERIENCE",
    headline: "Your Next Adventure Awaits",
    description: "Discover breathtaking destinations, curated tour packages and unforgettable travel experiences with Aura Voyages.",
    primaryCta: {
      text: "Explore Packages",
      href: "#packages",
    },
    secondaryCta: {
      text: "Talk to AI Assistant",
      action: "open-ai-chat",
    },
    // Cinematic background images for automatic slider
    backgroundImages: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=85",
    ],
    backgroundImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 5. TRUST STATISTICS
  // ──────────────────────────────────────────────────────────────────────────
  statistics: [
    {
      id: "stat-1",
      number: "10,000+",
      label: "Happy Travellers",
      description: "Across 40+ countries with 99% satisfaction",
    },
    {
      id: "stat-2",
      number: "50+",
      label: "Destinations",
      description: "Worldwide curated routes and private villas",
    },
    {
      id: "stat-3",
      number: "4.8/5",
      label: "Average Rating",
      description: "Verified reviews on Google & TripAdvisor",
    },
    {
      id: "stat-4",
      number: "100%",
      label: "Customer Support",
      description: "24/7 on-tour emergency concierge team",
    },
  ],

  // ──────────────────────────────────────────────────────────────────────────
  // 6. WHY TRAVEL WITH US
  // ──────────────────────────────────────────────────────────────────────────
  whyChooseUs: {
    heading: "More Than a Trip, A Better Way to See the World.",
    supportingText: "We create thoughtfully designed travel experiences that are comfortable, personalised and truly memorable.",
    centerImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80",
    ctaText: "Plan Your Custom Trip",
    features: [
      {
        id: "feat-1",
        title: "Curated Experiences",
        description: "Handpicked itineraries for unique and memorable trips designed by destination experts.",
      },
      {
        id: "feat-2",
        title: "Personalised Planning",
        description: "Travel plans tailored to your style and budget with complete flexibility and care.",
      },
      {
        id: "feat-3",
        title: "Dedicated Support",
        description: "Assistance before, during and after your journey via 24/7 dedicated travel concierge.",
      },
      {
        id: "feat-4",
        title: "Trusted Travel Partner",
        description: "Reliable, safe and hassle-free travel experiences backed by accredited industry bonds.",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 7. TOUR PACKAGES
  // ──────────────────────────────────────────────────────────────────────────
  packagesSection: {
    heading: "Handpicked Tour Packages for Every Traveller.",
    supportingText: "Choose from our most requested curated holiday itineraries, complete with verified hotels, scenic tours, and private transfers.",
    viewAllButtonText: "View All Packages",
    packages: [
      {
        id: "pkg-swiss",
        name: "Swiss Alpine Escape",
        destination: "Switzerland",
        duration: "7 Days / 6 Nights",
        price: "₹1,29,000",
        priceNumber: 129000,
        currency: "₹",
        rating: "4.9",
        reviewsCount: 142,
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80",
        shortDescription: "Experience snow-capped peaks, scenic train rides through the Glacier Express, and pristine alpine lakes in Zurich, Lucerne & Interlaken.",
        inclusions: [
          "4-Star Alpine Chalets & Hotels",
          "Swiss Travel Pass (First Class)",
          "Jungfraujoch - Top of Europe Excursion",
          "Daily Gourmet Buffet Breakfasts",
          "Private Airport Transfers",
        ],
        itinerary: [
          "Day 1: Arrival in Zurich & Historic Old Town Stroll",
          "Day 2: Lucerne Lake Cruise & Mount Pilatus Cableway",
          "Day 3-4: Interlaken, Lauterbrunnen Waterfalls & Jungfrau Peak",
          "Day 5: Zermatt & Iconic Matterhorn Viewing Point",
          "Day 6: Scenic Glacier Express & Geneva Evening",
          "Day 7: Leisure Shopping & Departure",
        ],
      },
      {
        id: "pkg-bali",
        name: "Bali Tropical Retreat",
        destination: "Bali, Indonesia",
        duration: "5 Days / 4 Nights",
        price: "₹64,000",
        priceNumber: 64000,
        currency: "₹",
        rating: "4.8",
        reviewsCount: 218,
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80",
        shortDescription: "Immerse yourself in lush emerald rice terraces, sacred water temples, floating breakfasts, and golden ocean sunsets in Seminyak & Ubud.",
        inclusions: [
          "Private Luxury Pool Villa in Ubud",
          "Uluwatu Sunset Temple Tour & Kecak Dance",
          "Nusa Penida Island Private Speedboat Day Trip",
          "Traditional Balinese Massage Session",
          "Dedicated AC Vehicle with English Driver",
        ],
        itinerary: [
          "Day 1: Airport Welcome with Flower Garlands & Villa Check-in",
          "Day 2: Tegalalang Rice Terraces, Coffee Plantation & Jungle Swing",
          "Day 3: Full-Day Nusa Penida Island (Kelingking Beach & Broken Beach)",
          "Day 4: Tanah Lot & Uluwatu Cliffside Sunset Dinner",
          "Day 5: Souvenir Market & Airport Drop-off",
        ],
      },
      {
        id: "pkg-dubai",
        name: "Dubai Luxury Experience",
        destination: "Dubai, UAE",
        duration: "4 Days / 3 Nights",
        price: "₹79,000",
        priceNumber: 79000,
        currency: "₹",
        rating: "4.9",
        reviewsCount: 185,
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
        shortDescription: "A fusion of futuristic architectural wonders, golden desert dune safaris with luxury BBQs, and glamorous marina yacht cruises.",
        inclusions: [
          "5-Star Marina Waterfront Hotel Stay",
          "Burj Khalifa 124th Floor At The Top Access",
          "VIP Red Dune Desert Safari with BBQ Dinner",
          "Luxury Shared Yacht Cruise from Dubai Marina",
          "Private Luxury Chauffeur for Transfers",
        ],
        itinerary: [
          "Day 1: Private Luxury Transfer, Hotel Check-in & Dubai Mall Fountain Show",
          "Day 2: Museum of The Future & Sunset Desert Dune Bashing with Stargazing",
          "Day 3: Dubai Frame, Old Souks & Evening Marina Yacht Cruise",
          "Day 4: Atlantis Palm Jumeirah & Departure Transfer",
        ],
      },
      {
        id: "pkg-maldives",
        name: "Maldives Escape",
        destination: "Maldives",
        duration: "5 Days / 4 Nights",
        price: "₹1,09,000",
        priceNumber: 109000,
        currency: "₹",
        rating: "5.0",
        reviewsCount: 97,
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80",
        shortDescription: "Turquoise coral lagoons, private overwater villas, underwater coral reefs, and romantic barefoot dining under the equatorial stars.",
        inclusions: [
          "Overwater Sunrise Villa with Ocean Access",
          "Roundtrip Scenic Seaplane or Speedboat Transfer",
          "All-Inclusive Dining (Breakfast, Lunch, 4-Course Dinner)",
          "Guided Snorkelling with Marine Biologist",
          "Complimentary Sunset Dolphin Watching Cruise",
        ],
        itinerary: [
          "Day 1: Seaplane Arrival, Overwater Bungalow Check-in & Lagoon Dip",
          "Day 2: Guided Coral Reef Snorkelling & Signature Spa Retreat",
          "Day 3: Sunset Dolphin Cruise & Beachfront Candlelight Dinner",
          "Day 4: Water Sports, Paddleboarding & Sandbank Picnic",
          "Day 5: Leisure Champagne Breakfast & Seaplane to Malé Airport",
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 8. OUR SERVICES (COMPACT ONE-LINE ROW)
  // ──────────────────────────────────────────────────────────────────────────
  servicesSection: {
    heading: "Complete Travel Solutions for Every Journey.",
    supportingText: "From ticketing and expedited visas to private expeditions and 5-star accommodations, we manage every detail effortlessly.",
    services: [
      {
        id: "srv-flight",
        title: "Flight Booking",
        description: "Domestic & global tickets at competitive fares with flexible seat selection.",
        icon: "Plane",
      },
      {
        id: "srv-hotel",
        title: "Hotel Booking",
        description: "Curated 4-star, 5-star, and luxury boutique resorts with VIP perks.",
        icon: "Building",
      },
      {
        id: "srv-holiday",
        title: "Holiday Packages",
        description: "All-inclusive vacation packages tailored for couples, families, and solo travellers.",
        icon: "Palmtree",
      },
      {
        id: "srv-visa",
        title: "Visa Assistance",
        description: "Seamless visa documentation, expedited appointment slots, and expert review.",
        icon: "FileCheck",
      },
      {
        id: "srv-custom",
        title: "Custom Trip Planning",
        description: "100% tailor-made itineraries crafted around your exact dates, passions, and pace.",
        icon: "Compass",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 9. OUR MEMORIES / TRAVEL STORIES GALLERY (UNIFIED IN ONE PLACE)
  // ──────────────────────────────────────────────────────────────────────────
  memoriesSection: {
    heading: "Our Memories",
    supportingText: "A glimpse of our successful trips and the wonderful moments shared with our travellers.",
    photos: [
      {
        id: "mem-1",
        title: "Alpine Summit Highs",
        location: "Zermatt, Switzerland",
        caption: "Travellers celebrating a crystal clear morning with the Matterhorn behind them.",
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1000&q=85",
      },
      {
        id: "mem-2",
        title: "Bali Temple Reflection",
        location: "Ubud, Bali",
        caption: "Our private photography group capturing golden sunset reflections at Tirta Empul.",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "mem-3",
        title: "Desert Sunset Caravan",
        location: "Dubai Desert, UAE",
        caption: "Sunset camel trek across golden desert dunes followed by an open-air bedouin feast.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "mem-4",
        title: "Maldives Overwater Bliss",
        location: "Baa Atoll, Maldives",
        caption: "A joyful couple enjoying their private infinity pool over the crystalline turquoise lagoon.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "mem-5",
        title: "Kyoto Autumn Walk",
        location: "Kyoto, Japan",
        caption: "Travellers walking under vermilion torii gates amid fiery Japanese autumn leaves.",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "mem-6",
        title: "Santorini Cliffside Sunsets",
        location: "Oia, Greece",
        caption: "White-washed rooftops and cobalt domes catching the Aegean evening glow.",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "mem-7",
        title: "Arctic Aurora Lights",
        location: "Tromsø, Norway",
        caption: "Magical emerald northern lights dancing over snow-covered Scandinavian fjords.",
        image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1000&q=80",
      },
      {
        id: "mem-8",
        title: "Amalfi Coastal Haven",
        location: "Positano, Italy",
        caption: "Pastel cliffside villas cascading into the azure waters of the Mediterranean.",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 10. CUSTOMER TESTIMONIALS (8 TESTIMONIALS FOR 4-AT-A-TIME SLIDER)
  // ──────────────────────────────────────────────────────────────────────────
  testimonialsSection: {
    heading: "What Our Travellers Say",
    supportingText: "Genuine stories from travellers who trusted us to make their dream vacations seamless, safe, and truly unforgettable.",
    testimonials: [
      {
        id: "test-1",
        name: "Vikram & Ananya Malhotra",
        role: "Honeymoon Travellers",
        location: "Mumbai, India",
        destination: "Swiss Alpine Escape",
        rating: 5,
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
        review: "Our Swiss honeymoon with Aura Voyages was pure magic. Every train connection was pre-booked, our hotel had a stunning lake view, and the concierge was always reachable on WhatsApp.",
      },
      {
        id: "test-2",
        name: "Dr. Sameer & Family",
        role: "Family Holiday (6 Pax)",
        location: "Bengaluru, India",
        destination: "Bali Tropical Retreat",
        rating: 5,
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
        review: "Traveling with elderly parents and kids was stress-free. The private driver in Ubud was courteous and patient. Everything was timed to perfection.",
      },
      {
        id: "test-3",
        name: "Natasha Roy",
        role: "Solo Luxury Explorer",
        location: "Delhi, India",
        destination: "Maldives Escape",
        rating: 5,
        photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
        review: "Safety and seamless transfers were my top priorities. The overwater villa upgrade was breathtaking, and the marine biologist tour was unforgettable.",
      },
      {
        id: "test-4",
        name: "Rohan & Meera Verma",
        role: "Anniversary Getaway",
        location: "Hyderabad, India",
        destination: "Dubai Luxury Experience",
        rating: 5,
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
        review: "The private yacht cruise in Dubai Marina and VIP desert safari were five-star all the way. Truly a bespoke service that exceeded our expectations.",
      },
      {
        id: "test-5",
        name: "Karan Johar & Group",
        role: "Friends Reunion (8 Pax)",
        location: "Chandigarh, India",
        destination: "Swiss Glacier Tour",
        rating: 5,
        photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80",
        review: "Organizing a group of 8 is usually a headache, but the team handled our Swiss Travel Passes and ski rentals seamlessly. Outstanding support!",
      },
      {
        id: "test-6",
        name: "Pooja Hegde",
        role: "Cultural Enthusiast",
        location: "Pune, India",
        destination: "Bali Culture & Spas",
        rating: 5,
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
        review: "The curated cultural experiences at Tirta Empul and the private jungle swing tour were memories I will cherish forever. Highly recommended!",
      },
      {
        id: "test-7",
        name: "Arjun & Sneha Patel",
        role: "Family Vacation",
        location: "Ahmedabad, India",
        destination: "Dubai Family Adventure",
        rating: 5,
        photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80",
        review: "From the Burj Khalifa 124th floor visit to the Atlantis water park passes, our children had the absolute time of their lives. Flawless execution.",
      },
      {
        id: "test-8",
        name: "Siddharth Nair",
        role: "Photography Explorer",
        location: "Kochi, India",
        destination: "Maldives Coral Safari",
        rating: 5,
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
        review: "The underwater photography guides and scenic seaplane views were world-class. Aura Voyages is now my go-to luxury travel partner.",
      },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 11. CONTACT / ENQUIRY SECTION
  // ──────────────────────────────────────────────────────────────────────────
  contactSection: {
    heading: "Let's Plan Your Next Unforgettable Journey.",
    supportingText: "Tell us about your travel plans and our team will help you create the perfect experience.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80",
    destinationsList: [
      "Switzerland & Alps",
      "Bali, Indonesia",
      "Dubai & Desert Safari",
      "Maldives Overwater Resort",
      "Europe Grand Tour",
      "Japan Cherry Blossom",
      "Other Custom Destination",
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 12. FOOTER
  // ──────────────────────────────────────────────────────────────────────────
  footer: {
    description: "Premium travel agency crafting customized holiday packages, seamless flight bookings, expedited visas, and unforgettable bespoke journeys across the globe.",
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "Tour Packages", href: "#packages" },
      { label: "Our Services", href: "#services" },
      { label: "Travel Memories", href: "#memories" },
      { label: "Why Choose Us", href: "#why-us" },
      { label: "Contact Us", href: "#contact" },
    ],
    servicesLinks: [
      { label: "International Flight Bookings", href: "#services" },
      { label: "Luxury Resort Reservations", href: "#services" },
      { label: "Family Holiday Packages", href: "#packages" },
      { label: "Expedited Tourist Visas", href: "#services" },
      { label: "Escorted Group Departures", href: "#services" },
      { label: "Bespoke Honeymoon Itineraries", href: "#packages" },
    ],
    destinationsLinks: [
      { label: "Switzerland Alpine", href: "#packages" },
      { label: "Bali Island Escapes", href: "#packages" },
      { label: "Dubai & Desert Safaris", href: "#packages" },
      { label: "Maldives Luxury Overwater", href: "#packages" },
      { label: "Greece & Aegean Isles", href: "#memories" },
      { label: "Kyoto Cultural Journeys", href: "#memories" },
    ],
    social: [
      { platform: "Instagram", href: "https://instagram.com", icon: "Instagram" },
      { platform: "Facebook", href: "https://facebook.com", icon: "Facebook" },
      { platform: "Twitter", href: "https://twitter.com", icon: "Twitter" },
      { platform: "YouTube", href: "https://youtube.com", icon: "Youtube" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cancellation & Refund Policy", href: "#" },
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // 13. AI CHAT ASSISTANT (POWERED BY LIVE NVIDIA NIM API)
  // ──────────────────────────────────────────────────────────────────────────
  aiAssistant: {
    title: "AI Travel Assistant",
    subtitle: "Powered by Live AI Concierge",
    apiKey: import.meta.env.VITE_NVIDIA_API_KEY || "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",
    endpoint: import.meta.env.VITE_AI_ENDPOINT || "https://integrate.api.nvidia.com/v1/chat/completions",
    proxyEndpoint: "/api/nvidia/v1/chat/completions",
    model: import.meta.env.VITE_AI_MODEL || "minimaxai/minimax-m3.1-flash",
    welcomeMessage: "Hello Traveller! Where would you love to go next?",
    predefinedQuestions: [
      "Suggest me a destination.",
      "Show me tour packages.",
      "Help me plan a trip.",
      "I need a family holiday.",
    ],
    predefinedResponses: {
      "Suggest me a destination.":
        "For couples, I highly recommend our 7-Day Swiss Alpine Escape or Maldives Overwater Retreat. For culture and tropical vibes, Bali is unbeatable, while Dubai offers unmatched modern luxury and family entertainment!",
      "Show me tour packages.":
        "We have 4 featured packages right now:\n• Swiss Alpine Escape (7D) from ₹1,29,000\n• Bali Tropical Retreat (5D) from ₹64,000\n• Dubai Luxury Experience (4D) from ₹79,000\n• Maldives Escape (5D) from ₹1,09,000\nCheck out the Packages section above for full details!",
      "Help me plan a trip.":
        "I'd love to help! Tell us your preferred dates, budget, and group size using our Enquiry Form below, or click the WhatsApp button to chat live with our senior travel planner.",
      "I need a family holiday.":
        "For families, our Dubai (theme parks, desert safaris, marina cruise) and Bali (private pool villas, safari park, cultural dances) packages are customer favorites. Would you like a customized family quote?",
      defaultFallback:
        "Thank you for your question! Aura Voyages specializes in tailored itineraries. Please submit our quick Enquiry Form below or tap the WhatsApp button for an instant response from our dedicated planners.",
    },
  },
};
