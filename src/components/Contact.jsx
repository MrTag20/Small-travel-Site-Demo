import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Contact({ prefilledDestination }) {
  const { contactSection, contact, business } = siteConfig;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    travellersCount: '2 Travellers',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledDestination) {
      setFormData((prev) => ({ ...prev, destination: prefilledDestination }));
    }
  }, [prefilledDestination]);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your contact phone number';
    }
    if (!formData.destination) {
      newErrors.destination = 'Please choose a destination';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      destination: '',
      travelDate: '',
      travellersCount: '2 Travellers',
    });
    setIsSubmitted(false);
    setErrors({});
  };

  const whatsappDirectUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    formData.destination
      ? `Hello ${business.name}, I would like to inquire about the ${formData.destination} package for ${formData.travellersCount}.`
      : contact.whatsappDefaultMessage
  )}`;

  return (
    <section id="contact" className="py-12 sm:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FF] text-[#087FCB] text-xs font-semibold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Your Journey</span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062B50] leading-tight mb-2">
            {contactSection.heading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
            {contactSection.supportingText}
          </p>
        </div>

        {/* ── Main Contact Container ── */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-[#062B50]/8 bg-white grid grid-cols-1 lg:grid-cols-12">
          {/* ── Left Column: Destination Photo & Details ── */}
          <div className="lg:col-span-5 relative bg-[#062B50] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src={contactSection.image}
                alt="Traveller looking towards distant horizon"
                className="w-full h-full object-cover opacity-25 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062B50] via-[#062B50]/90 to-[#062B50]/70" />
            </div>

            <div className="relative z-10">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#1599ED] block mb-2">
                Personalized Consultation
              </span>
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-white mb-3">
                Speak with our Destination Specialists
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                Whether you know your exact dates or need inspirational recommendations, our team crafts every itinerary from scratch with complete care.
              </p>

              {/* Contact Information List */}
              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`tel:${contact.phoneClean}`}
                  className="flex items-start gap-3 group hover:text-[#1599ED] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-[#087FCB] text-white flex items-center justify-center shrink-0 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Call Us Directly</span>
                    <span className="font-semibold">{contact.phone}</span>
                  </div>
                </a>

                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group hover:text-emerald-400 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 group-hover:bg-emerald-500 text-emerald-400 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">WhatsApp Quick Chat</span>
                    <span className="font-semibold">Chat with Planner on WhatsApp</span>
                  </div>
                </a>

                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-3 group hover:text-[#1599ED] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 group-hover:bg-[#087FCB] text-white flex items-center justify-center shrink-0 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Email Inquiries</span>
                    <span className="font-semibold">{contact.email}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Office Address</span>
                    <span className="text-xs text-slate-200 leading-snug block">{contact.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Hours</span>
                    <span className="text-xs text-slate-200 block">{contact.officeHours}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-white/10 text-[11px] text-slate-400">
              Strictly confidential. No spam or unsolicited promotions.
            </div>
          </div>

          {/* ── Right Column: The Enquiry Form (With Generous, Elegant Spacing) ── */}
          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-center bg-white">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-sans text-2xl font-bold text-[#062B50]">
                  Enquiry Received!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your customized travel inquiry for <strong>{formData.destination}</strong> has been logged in demo mode. Our senior tour designer would contact you within 2 hours.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full border border-slate-300 hover:border-[#087FCB] text-slate-700 text-xs font-semibold transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Reply</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
                        errors.fullName
                          ? 'border-red-400 bg-red-50/30'
                          : 'border-slate-200 focus:border-[#087FCB] focus:ring-1 focus:ring-[#087FCB]'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-500 mt-1 block">{errors.fullName}</span>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
                        errors.email
                          ? 'border-red-400 bg-red-50/30'
                          : 'border-slate-200 focus:border-[#087FCB] focus:ring-1 focus:ring-[#087FCB]'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-500 mt-1 block">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none ${
                        errors.phone
                          ? 'border-red-400 bg-red-50/30'
                          : 'border-slate-200 focus:border-[#087FCB] focus:ring-1 focus:ring-[#087FCB]'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-500 mt-1 block">{errors.phone}</span>
                    )}
                  </div>

                  {/* Destination Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                      Preferred Destination *
                    </label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none bg-white ${
                        errors.destination
                          ? 'border-red-400 bg-red-50/30'
                          : 'border-slate-200 focus:border-[#087FCB] focus:ring-1 focus:ring-[#087FCB]'
                      }`}
                    >
                      <option value="">Select Destination</option>
                      {contactSection.destinationsList.map((dest) => (
                        <option key={dest} value={dest}>
                          {dest}
                        </option>
                      ))}
                    </select>
                    {errors.destination && (
                      <span className="text-[11px] text-red-500 mt-1 block">{errors.destination}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Travel Date */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                      Estimated Travel Date
                    </label>
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm transition-all focus:outline-none focus:border-[#087FCB] focus:ring-1 focus:ring-[#087FCB]"
                    />
                  </div>

                  {/* Number of Travellers */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                      Number of Travellers
                    </label>
                    <select
                      name="travellersCount"
                      value={formData.travellersCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm transition-all focus:outline-none focus:border-[#087FCB] focus:ring-1 focus:ring-[#087FCB] bg-white"
                    >
                      <option value="Solo Explorer">Solo Explorer</option>
                      <option value="2 Travellers (Couple)">2 Travellers (Couple)</option>
                      <option value="3-5 Travellers (Family)">3-5 Travellers (Family)</option>
                      <option value="6+ Travellers (Group)">6+ Travellers (Group)</option>
                    </select>
                  </div>
                </div>

                {/* Submit Action with Generous Spacing */}
                <div className="pt-3 sm:pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-[#087FCB] hover:bg-[#1599ED] text-white font-semibold text-sm shadow-md shadow-[#087FCB]/20 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-98 disabled:opacity-70"
                  >
                    <span>{isSubmitting ? 'Sending Request...' : 'Send Enquiry'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

                {/* Optional WhatsApp Alternative Notice */}
                <div className="text-center pt-2">
                  <span className="text-xs text-slate-400">
                    Prefer direct messaging?{' '}
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 font-semibold underline underline-offset-2"
                    >
                      Connect instantly on WhatsApp
                    </a>
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
