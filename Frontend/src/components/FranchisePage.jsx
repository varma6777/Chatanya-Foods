import React, { useState } from 'react';
import { 
  Building2, 
  CheckCircle2, 
  TrendingUp, 
  Award, 
  ShieldCheck, 
  Users, 
  Store, 
  Send, 
  Sparkles,
  Phone,
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import SubpageBanner from './SubpageBanner';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function FranchisePage({ onNavigate }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Hyderabad');
  const [investmentBudget, setInvestmentBudget] = useState('₹25 Lakhs – ₹50 Lakhs');
  const [formatType, setFormatType] = useState('Full Dine-in Family Restaurant');
  const [experience, setExperience] = useState('Yes, in F&B / Retail');
  const [submitted, setSubmitted] = useState(false);

  const benefits = [
    {
      title: "Established 16+ Year Brand Name",
      desc: "Instant credibility and high recall among over 1 million happy customers in Hyderabad."
    },
    {
      title: "Secret Recipes & Standardized Masalas",
      desc: "Full access to Chaitanya's iconic Ulavacharu, Sambar, Avakaya, and Hyderabadi biryani formulations."
    },
    {
      title: "Centralized Supply & Training",
      desc: "Head chef guidance, kitchen team training, standard operating procedures, and raw material support."
    },
    {
      title: "Marketing Assets & Nationwide Campaigns",
      desc: "Digital marketing, local store launch buzz, food aggregator partnerships (Swiggy, Zomato), and branding assets."
    },
    {
      title: "Opening & Ongoing Operational Support",
      desc: "Assistance in site selection, interior layout, equipment sourcing, and day-to-day audit mechanisms."
    },
    {
      title: "High ROI & Attractive Payback Period",
      desc: "Strong gross margins, rapid inventory turnover, and high delivery/takeaway order volumes."
    }
  ];

  const formats = [
    {
      name: "QSR Express / Takeaway",
      space: "300 – 600 Sq. Ft.",
      investment: "₹18 – ₹30 Lakhs",
      highlights: "Quick service, Tiffins, Biryani takeaways, low overheads, high delivery volume."
    },
    {
      name: "Mall / Food Court Kiosk",
      space: "400 – 800 Sq. Ft.",
      investment: "₹25 – ₹45 Lakhs",
      highlights: "High footfall locations, combo meals, express counters, high impulse billing."
    },
    {
      name: "Full Dine-in Family Restaurant",
      space: "1,500 – 3,500 Sq. Ft.",
      investment: "₹50 Lakhs – ₹1.2 Crore",
      highlights: "Complete signature multi-cuisine dining, pure veg tiffins floor, banquet & family AC seating."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    const msg = `*Franchise Application Inquiry - Chaitanya Food Court*%0A%0A` +
      `*Applicant Name:* ${name}%0A` +
      `*Phone Number:* ${phone}%0A` +
      `*Email:* ${email || 'Not provided'}%0A` +
      `*Target City/Location:* ${city}%0A` +
      `*Preferred Format:* ${formatType}%0A` +
      `*Investment Capacity:* ${investmentBudget}%0A` +
      `*Prior Business Experience:* ${experience}`;

    window.open(`https://wa.me/91${RESTAURANT_INFO.primaryPhone}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="subpage-wrapper">
      <SubpageBanner 
        title="Chaitanya Food Court Franchise"
        subtitle="Serve the Taste of Happiness • Partner with Hyderabad's Premier Authentic Andhra QSR Brand"
        breadcrumb="Franchise Opportunity"
        onNavigate={onNavigate}
      />

      <div className="container section-padding">
        {/* Intro Story */}
        <div className="franchise-intro-grid">
          <div className="franchise-intro-text">
            <span className="section-label">Grow With Us</span>
            <h2 className="section-title">A Legacy Built on Authentic Taste</h2>
            <p className="franchise-lead">
              Food brings joy. It connects us to our roots, traditions, and memories. At Chaitanya Food Court, we have been serving happiness on a plate since 2008. What started as a flagship restaurant in Kukatpally, Hyderabad has today grown into a beloved brand across 5 locations.
            </p>
            <p className="franchise-p">
              The foundation of our culinary excellence was laid <strong>eight decades ago</strong> when Koti Jagapathi Rao started crafting his unique, legendary paan hailing from Pamarru in Krishna District. The next generation from the Koti family diversified into authentic South and North Indian cuisines with the same uncompromising commitment to quality.
            </p>
            <p className="franchise-p">
              After bringing joy to over a million homes in Hyderabad through our soul-stirring Ulavacharu Biryanis, Sambar Rice, and fiery Andhra vepudus, we are now expanding our footprint across India. We invite passionate entrepreneurs to share in this lucrative, culturally grounded journey.
            </p>
          </div>

          <div className="franchise-stat-card glass-card">
            <h3 className="stat-card-title">Why Franchise With CFC?</h3>
            <div className="stat-pills-list">
              <div className="stat-pill">
                <span className="stat-p-num">16+</span>
                <span className="stat-p-txt">Years Established Reputation</span>
              </div>
              <div className="stat-pill">
                <span className="stat-p-num">1M+</span>
                <span className="stat-p-txt">Satisfied Patrons Served</span>
              </div>
              <div className="stat-pill">
                <span className="stat-p-num">Awarded</span>
                <span className="stat-p-txt">Best Andhra QSR 2023</span>
              </div>
              <div className="stat-pill">
                <span className="stat-p-num">70+ Yrs</span>
                <span className="stat-p-txt">Heritage Recipe Authenticity</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="franchise-benefits-block">
          <div className="text-center mb-40">
            <span className="section-label">Franchise Advantage</span>
            <h3 className="section-title">What You Receive as a Franchise Partner</h3>
          </div>

          <div className="franchise-benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className="f-benefit-card interactive-card">
                <div className="f-benefit-icon">
                  <CheckCircle2 size={24} color="var(--orange-primary)" />
                </div>
                <h4 className="f-benefit-title">{b.title}</h4>
                <p className="f-benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Formats Grid */}
        <div className="franchise-formats-block">
          <div className="text-center mb-40">
            <span className="section-label">Tailored Models</span>
            <h3 className="section-title">Flexible Franchise Formats</h3>
          </div>

          <div className="franchise-formats-grid">
            {formats.map((fmt, idx) => (
              <div key={idx} className="f-format-card interactive-card">
                <div className="f-format-header">
                  <Store size={28} color="var(--orange-primary)" />
                  <h4 className="f-format-name">{fmt.name}</h4>
                </div>
                <div className="f-format-spec">
                  <div><strong>Required Area:</strong> <span>{fmt.space}</span></div>
                  <div><strong>Est. Investment:</strong> <span className="highlight-inv">{fmt.investment}</span></div>
                </div>
                <p className="f-format-hl">{fmt.highlights}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Franchise Application Form */}
        <div className="franchise-form-wrap glass-card">
          <div className="franchise-form-header text-center">
            <Sparkles size={24} color="var(--orange-primary)" />
            <h3 className="section-title">Submit Your Franchise Inquiry</h3>
            <p className="section-subtitle">Take the first step towards owning a thriving Chaitanya Food Court outlet.</p>
          </div>

          <form onSubmit={handleSubmit} className="f-application-form">
            <div className="res-grid-2">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Suresh Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Contact Phone Number *</label>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. 9618447733"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div className="res-grid-2">
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  placeholder="suresh@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Proposed City / Area *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Gachibowli, Hyderabad or Vijayawada"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div className="res-grid-2">
              <div className="form-group">
                <label className="form-label">Preferred Format</label>
                <select 
                  value={formatType}
                  onChange={(e) => setFormatType(e.target.value)}
                  className="form-select"
                >
                  <option>Full Dine-in Family Restaurant</option>
                  <option>QSR Express / Takeaway</option>
                  <option>Mall / Food Court Kiosk</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Investment Budget</label>
                <select 
                  value={investmentBudget}
                  onChange={(e) => setInvestmentBudget(e.target.value)}
                  className="form-select"
                >
                  <option>₹18 Lakhs – ₹30 Lakhs</option>
                  <option>₹30 Lakhs – ₹50 Lakhs</option>
                  <option>₹50 Lakhs – ₹1 Crore</option>
                  <option>Above ₹1 Crore</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full submit-franchise-btn">
              <MessageCircle size={18} /> Submit Franchise Application via WhatsApp / Desk
            </button>

            {submitted && (
              <div className="form-success-banner">
                <CheckCircle2 size={16} /> Opening WhatsApp to connect you directly with our Franchise Expansion Director!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
