import React, { useState } from 'react';
import { 
  Users, 
  Calendar, 
  Sparkles, 
  CheckCircle, 
  HeartHandshake, 
  Home, 
  Cake, 
  Baby, 
  Briefcase,
  Phone,
  Send,
  MessageCircle
} from 'lucide-react';
import { RESTAURANT_INFO, CATERING_SERVICES } from '../data/restaurantData';

export default function Catering() {
  const [guestCount, setGuestCount] = useState(150);
  const [eventType, setEventType] = useState('Wedding / Reception');
  const [mealType, setMealType] = useState('both'); // 'veg', 'nonveg', 'both'
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [venueAddress, setVenueAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Approximate cost per plate based on meal type
  const baseRate = mealType === 'veg' ? 399 : mealType === 'nonveg' ? 599 : 549;
  const estimatedMin = guestCount * baseRate;
  const estimatedMax = guestCount * (baseRate + 150);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Send via WhatsApp
    const message = `*New Catering Enquiry - Chaitanya Food Court*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Event Type:* ${eventType}%0A` +
      `*Expected Guests:* ${guestCount} Pax%0A` +
      `*Menu Preference:* ${mealType.toUpperCase()}%0A` +
      `*Event Date:* ${eventDate || 'Not specified'}%0A` +
      `*Venue/Address:* ${venueAddress || 'Not specified'}%0A` +
      `*Estimated Budget:* ₹${estimatedMin.toLocaleString()} - ₹${estimatedMax.toLocaleString()}`;

    window.open(`https://wa.me/91${RESTAURANT_INFO.primaryPhone}?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="catering" className="section-padding catering-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-label">Events & Banquets</span>
          <h2 className="section-title">Best Catering Services in Hyderabad</h2>
          <p className="section-subtitle">
            Renowned for delicious authentic flavours, top-notch quality, and elegant service. We craft both vegetarian and non-vegetarian menus in clean, hygienic kitchens for gatherings starting from 100 guests.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="catering-services-grid">
          {CATERING_SERVICES.map((srv, idx) => {
            const icons = {
              HeartHandshake: <HeartHandshake size={28} color="var(--orange-primary)" />,
              Sparkles: <Sparkles size={28} color="var(--orange-primary)" />,
              Home: <Home size={28} color="var(--orange-primary)" />,
              Cake: <Cake size={28} color="var(--orange-primary)" />,
              Baby: <Baby size={28} color="var(--orange-primary)" />,
              Briefcase: <Briefcase size={28} color="var(--orange-primary)" />
            };

            return (
              <div key={idx} className="catering-srv-card interactive-card">
                <div className="catering-icon-box">
                  {icons[srv.icon] || <Sparkles size={28} color="var(--orange-primary)" />}
                </div>
                <h4 className="catering-srv-title">{srv.title}</h4>
                <p className="catering-srv-desc">{srv.description}</p>
              </div>
            );
          })}
        </div>

        {/* Catering Estimator & Enquiry Form */}
        <div className="catering-calculator-wrap glass-card">
          <div className="calculator-header">
            <h3 className="calculator-title">Instant Catering Estimator & Inquiry</h3>
            <p className="calculator-sub">Get an instant estimate and connect directly with our master catering coordinator</p>
          </div>

          <form onSubmit={handleSubmit} className="catering-form-grid">
            {/* Left Column: Selections */}
            <div className="calculator-controls">
              {/* Event Type */}
              <div className="form-group">
                <label className="form-label">Event Type</label>
                <select 
                  value={eventType} 
                  onChange={(e) => setEventType(e.target.value)}
                  className="form-select"
                >
                  <option>Wedding / Reception</option>
                  <option>Engagement / Sangeet</option>
                  <option>House Warming & Get-Together</option>
                  <option>Birthday / Anniversary Celebration</option>
                  <option>Cradle Ceremony / Pooja Feast</option>
                  <option>Corporate Lunches & Conferences</option>
                  <option>Product Launch / Exhibition</option>
                </select>
              </div>

              {/* Guest Count Slider */}
              <div className="form-group">
                <div className="slider-label-row">
                  <label className="form-label">Number of Servings (Min 100)</label>
                  <span className="slider-value-pill">{guestCount} Guests</span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="2000" 
                  step="25"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="form-range"
                />
                <div className="range-hints">
                  <span>100</span>
                  <span>500</span>
                  <span>1000</span>
                  <span>2000+</span>
                </div>
              </div>

              {/* Menu Preference */}
              <div className="form-group">
                <label className="form-label">Menu Preference</label>
                <div className="meal-choice-group">
                  <button
                    type="button"
                    onClick={() => setMealType('veg')}
                    className={`meal-btn ${mealType === 'veg' ? 'active' : ''}`}
                  >
                    Pure Vegetarian
                  </button>
                  <button
                    type="button"
                    onClick={() => setMealType('nonveg')}
                    className={`meal-btn ${mealType === 'nonveg' ? 'active' : ''}`}
                  >
                    Non-Vegetarian Special
                  </button>
                  <button
                    type="button"
                    onClick={() => setMealType('both')}
                    className={`meal-btn ${mealType === 'both' ? 'active' : ''}`}
                  >
                    Veg & Non-Veg Spread
                  </button>
                </div>
              </div>

              {/* Cost Estimate Callout */}
              <div className="estimate-result-box">
                <div className="estimate-label">Estimated Budget Range</div>
                <div className="estimate-price">
                  ₹{estimatedMin.toLocaleString('en-IN')} – ₹{estimatedMax.toLocaleString('en-IN')}
                </div>
                <small className="estimate-note">*Subject to custom dish selections and live counter requirements</small>
              </div>
            </div>

            {/* Right Column: Contact & Submission */}
            <div className="calculator-contact-block">
              <div className="form-group">
                <label className="form-label">Your Full Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Ramesh Varma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. 9618447733"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Event Date</label>
                <input 
                  type="date" 
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Event Address / Venue Location</label>
                <input 
                  type="text" 
                  placeholder="e.g. Function Hall, Madhapur, Hyderabad"
                  value={venueAddress}
                  onChange={(e) => setVenueAddress(e.target.value)}
                  className="form-input"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full submit-catering-btn">
                <MessageCircle size={18} /> Request Official Quote via WhatsApp
              </button>

              {submitted && (
                <div className="form-success-banner">
                  <CheckCircle size={16} /> Opening WhatsApp to send your catering inquiry directly to our manager.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
