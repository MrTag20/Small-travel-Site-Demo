# 🌍 Aura Voyages — Premium Reusable Travel Agency Website Template

A modern, high-converting, fully responsive travel agency and tour operator website template built with **React**, **Vite**, and **Tailwind CSS**.

> **Designed for Agency Reselling**: This template is architected with a **single centralized configuration file** (`src/data/siteConfig.js`). You can customize the entire website for any client in minutes without touching React component code!

---

## 🎨 Design System & Palette

- **Primary Blue**: `#087FCB`
- **Electric Blue**: `#1599ED`
- **Deep Navy**: `#062B50`
- **Ice Blue**: `#EAF6FF`
- **Clean White**: `#FFFFFF`
- **Light Grey**: `#F5F8FC`
- **Text**: `#172B45`
- **Headings Font**: `Playfair Display` (Google Fonts Serif)
- **Body Font**: `Inter` (Google Fonts Sans-Serif)

---

## 📑 10 Required Sections (In Exact Sequence)

1. **Section 01 – Header / Navigation**:
   - Sticky navbar, transparent on top, solid white on scroll.
   - Configurable logo and brand name.
   - Quick phone direct link & "Plan Your Trip" CTA button.
   - Mobile hamburger menu with smooth drawer navigation.
2. **Section 02 – Hero Section**:
   - Cinematic full-width Swiss Alps mountain photography with subtle dark overlay.
   - Small badge: `EXPLORE • DISCOVER • EXPERIENCE`.
   - Main headline: *"Your Next Adventure Awaits"*.
   - Description with dynamic business name.
   - Dual CTAs: *"Explore Packages"* and *"Talk to AI Assistant"*.
   - Right-side traveller verification card with star rating.
3. **Section 03 – Trust Statistics**:
   - Horizontal trust bar positioned directly below the hero.
   - 4 key metrics: `10,000+ Happy Travellers`, `50+ Destinations`, `4.8/5 Average Rating`, `100% Customer Support`.
   - 2-column grid on mobile, 4-column on desktop.
4. **Section 04 – Why Travel With Us**:
   - Headline: *"More Than a Trip, A Better Way to See the World."*
   - 3-column layout: Left text & CTA, Middle circular destination photo with glowing ring, Right 4 feature cards (*Curated Experiences*, *Personalised Planning*, *Dedicated Support*, *Trusted Travel Partner*).
5. **Section 05 – Tour Packages**:
   - Headline: *"Handpicked Tour Packages for Every Traveller."*
   - 4 Demo Packages:
     1. **Swiss Alpine Escape** (Switzerland • 7 Days • ₹1,29,000)
     2. **Bali Tropical Retreat** (Bali, Indonesia • 5 Days • ₹64,000)
     3. **Dubai Luxury Experience** (Dubai, UAE • 4 Days • ₹79,000)
     4. **Maldives Escape** (Maldives • 5 Days • ₹1,09,000)
   - Interactive **Package Detail Modal** with day-by-day itinerary and inclusions.
   - *"View All Packages"* button.
6. **Section 06 – Our Services**:
   - Headline: *"Complete Travel Solutions for Every Journey."*
   - 6 service cards: Flight Booking, Hotel Booking, Holiday Packages, Visa Assistance, Group Tours, Custom Trip Planning.
7. **Section 07 – Our Travel Stories / Memories**:
   - Headline: *"Our Memories"*.
   - Editorial asymmetrical photo gallery with destination tags and hover zoom.
   - Built-in **Full-Screen Image Lightbox** with previous/next controls, caption details, and image counter.
8. **Section 08 – Customer Testimonials**:
   - Headline: *"What Our Travellers Say"*.
   - Smooth slider with customer photos, names, destinations, 5-star ratings, and slide controls.
9. **Section 09 – Contact / Enquiry Form**:
   - Headline: *"Let's Plan Your Next Unforgettable Journey."*
   - Left: Cinematic destination photography + direct phone, WhatsApp link, email, and address.
   - Right: Interactive enquiry form with full name, email, phone, destination selector, travel date, travellers count, input validation, and submission confirmation.
10. **Section 10 – Footer**:
    - Sophisticated dark navy (`#062B50`) 4-column master footer.
    - Brand description, Quick links, Service directory, Destinations, Social media channels, and Legal governance links.

---

## ⚡ Floating Interactive Elements & Netlify Compatibility

As required, both floating buttons are positioned **95px to 110px above the bottom edge** to ensure they **never collide with Netlify deployment badges** or browser bottom controls:

- **Floating WhatsApp Button** (Green): Positioned at `bottom-[160px] right-5`. Opens WhatsApp directly with a pre-filled message.
- **Floating AI Travel Assistant** (Blue & White): Positioned at `bottom-[100px] right-5`. Opens an interactive chat window with quick prompt suggestions (*"Suggest me a destination"*, *"Show me tour packages"*, *"Help me plan a trip"*, *"I need a family holiday"*).
  - *Developer Note*: The AI assistant logic is cleanly isolated in `src/components/AIChatAssistant.jsx` so you can connect live Gemini API keys or a backend proxy when desired.

---

## 🛠️ How to Customize for a New Client

Open `src/data/siteConfig.js` and edit:
1. `business.name`, `business.tagline`, `business.licenseNumber`
2. `contact.phone`, `contact.whatsappNumber`, `contact.email`, `contact.address`
3. `packagesSection.packages` (Add/edit destinations, prices, itineraries)
4. `memoriesSection.photos` (Replace gallery photos with client photos)
5. `testimonialsSection.testimonials` (Insert client client reviews)

---

## 🚀 Running the Project

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
# Server runs on http://localhost:5173/

# 3. Build for production (optimized output in dist/)
npm run build
```
