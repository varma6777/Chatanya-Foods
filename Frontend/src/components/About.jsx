import React, { useState } from 'react';
import { 
  Building2, 
  Clock, 
  Utensils, 
  CheckCircle2, 
  Heart, 
  Award, 
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import { RESTAURANT_INFO, BUILDING_FLOORS } from '../data/restaurantData';

export default function About({ onOpenReservation }) {
  const [activeFloorTab, setActiveFloorTab] = useState(0);

  const pillars = [
    {
      title: "Cherished Cultural Heritage",
      desc: "Authentic coastal Andhra recipes featuring traditional Ulavacharu, Sambar, and zesty Avakaya pickles."
    },
    {
      title: "Fused with Nizam's Cuisine",
      desc: "Harmoniously combined with royal Hyderabadi dum techniques, saffron-infused biryanis, and rich Mughlai gravies."
    },
    {
      title: "Clean & Hygienic Kitchens",
      desc: "Prepared in state-of-the-art hygienic environments using unadulterated cold-pressed oils, pure desi ghee, and daily-fresh meats."
    },
    {
      title: "Catering Every Dining Need",
      desc: "From early morning pure veg tiffins at 6 AM to lavish midnight biryani dinners across 5 Hyderabad locations."
    }
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        {/* Section Header */}
        <div className="about-header text-center">
          <span className="section-label">Our Story & Heritage</span>
          <h2 className="section-title">Bringing Back Desi Spice Since 2008</h2>
          <p className="section-subtitle">
            Chaitanya Food Court was born in Kukatpally from a passion to serve authentic, homestyle Indian flavours that celebrate the culinary richness of Andhra Pradesh and Hyderabad.
          </p>
        </div>

        {/* Story Grid */}
        <div className="about-main-grid">
          {/* Left: Imagery Stack */}
          <div className="about-image-column">
            <div className="about-image-card">
              <img 
                src="/assets/about-dish.png" 
                alt="Chaitanya Food Court Traditional Spread" 
                className="about-main-img"
              />
              <div className="about-experience-badge glass-dark">
                <span className="badge-number">16+</span>
                <span className="badge-text">Years of Culinary Excellence</span>
              </div>
            </div>

            <div className="about-quote-box">
              <p className="about-quote-text">
                "We saw an opportunity to blend our cherished cultural heritage—featuring recipes with Ulavacharu, Sambar, and Avakaya pickles—harmoniously fused with the rich taste of Nizam’s cuisine."
              </p>
              <div className="about-quote-author">
                <span className="author-name">Chaitanya Food Court Family</span>
                <span className="author-title">Kukatpally, Hyderabad</span>
              </div>
            </div>
          </div>

          {/* Right: Narrative & Highlights */}
          <div className="about-content-column">
            <div className="about-tagline-box">
              <Award size={20} color="var(--orange-primary)" />
              <span>{RESTAURANT_INFO.award}</span>
            </div>

            <h3 className="about-headline">
              A Symphony of Andhra Heritage & Nizam's Royal Flavors
            </h3>

            <p className="about-paragraph">
              In <strong>2008</strong>, Chaitanya's Food Court opened its doors in Kukatpally with a mission to bring quality South and North Indian vegetarian and non-vegetarian dishes to the people of Hyderabad. Over the years, we have refined the preparation of our signature Hyderabadi biryanis, flavorful curries, regional dosas, Chinese-Indian favourites, and more.
            </p>

            <p className="about-paragraph">
              At Chaitanya Food Court, we believe that good food brings people together. Our cozy, welcoming dining spaces across <strong>5 premier Hyderabad locations</strong> allow guests to share and savor unforgettable meals together.
            </p>

            {/* Pillars Grid */}
            <div className="about-pillars-grid">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="about-pillar-item">
                  <div className="pillar-check">
                    <CheckCircle2 size={18} color="var(--orange-primary)" />
                  </div>
                  <div>
                    <h4 className="pillar-title">{pillar.title}</h4>
                    <p className="pillar-desc">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-action-row">
              <button onClick={onOpenReservation} className="btn btn-primary">
                Book a Table
              </button>
              <a href="#locations" className="btn btn-outline-dark">
                Explore Our 5 Branches
              </a>
            </div>
          </div>
        </div>

        {/* Multi-Floor Facility Showcase (Verified from menu card) */}
        <div className="facility-showcase-box">
          <div className="facility-header">
            <div className="facility-title-wrap">
              <Layers size={24} color="var(--orange-primary)" />
              <div>
                <h3 className="facility-title">Flagship Kukatpally Campus Experience</h3>
                <p className="facility-sub">Different culinary zones designed for every palate and occasion</p>
              </div>
            </div>
          </div>

          <div className="facility-cards-grid">
            {BUILDING_FLOORS.map((floor, i) => (
              <div key={i} className="facility-card interactive-card">
                <div className="facility-badge">{floor.floor}</div>
                <h4 className="facility-name">{floor.title}</h4>
                <div className="facility-time">
                  <Clock size={14} color="var(--orange-primary)" />
                  <span>{floor.timings}</span>
                </div>
                <p className="facility-desc">{floor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
