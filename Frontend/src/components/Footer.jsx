import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUp, 
  ShieldAlert,
  Heart,
  ExternalLink
} from 'lucide-react';
import { RESTAURANT_INFO, LOCATIONS } from '../data/restaurantData';

export default function Footer({ onNavigate, onOpenReservation, onOpenPhysicalMenu }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      window.location.hash = pageId;
    }
  };

  return (
    <footer className="footer-wrapper">
      {/* Disclaimer Marquee Bar (Verified from original site) */}
      <div className="footer-disclaimer-banner">
        <div className="container">
          <div className="disclaimer-content">
            <ShieldAlert size={16} className="disclaimer-icon" />
            <span>{RESTAURANT_INFO.disclaimer}</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container footer-main-content">
        <div className="footer-grid">
          {/* Column 1: Brand & Bio */}
          <div className="footer-col brand-col">
            <img 
              src="/assets/logo.png" 
              alt="Chaitanya Food Court" 
              className="footer-brand-logo"
            />
            <p className="footer-brand-desc">
              We welcome you to indulge in the true taste of Indian Cuisine with impeccable ambience to have a lavish dining experience. Hyderabad’s Best Restaurant awaits your presence.
            </p>

            <div className="footer-social-links">
              <a 
                href={RESTAURANT_INFO.socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-btn facebook"
                aria-label="Facebook Page"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href={RESTAURANT_INFO.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-btn instagram"
                aria-label="Instagram Page"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a 
                href={RESTAURANT_INFO.socials.pinterest} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-btn pinterest"
                aria-label="Pinterest Page"
              >
                <span className="pinterest-icon-text">P</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-link-list">
              <li><button onClick={() => handleLinkClick('home')} className="footer-btn-link">Home Page</button></li>
              <li><button onClick={() => handleLinkClick('about')} className="footer-btn-link">About Our Story</button></li>
              <li><button onClick={() => handleLinkClick('menu')} className="footer-btn-link">Finger-Licking Menu</button></li>
              <li><button onClick={onOpenPhysicalMenu} className="footer-btn-link">Physical Menu Cards</button></li>
              <li><button onClick={() => handleLinkClick('reservation')} className="footer-btn-link">Book a Table</button></li>
              <li><button onClick={() => handleLinkClick('catering')} className="footer-btn-link">Outdoor & Wedding Catering</button></li>
              <li><button onClick={() => handleLinkClick('gallery')} className="footer-btn-link">Food & Ambience Gallery</button></li>
              <li><button onClick={() => handleLinkClick('franchise')} className="footer-btn-link">Franchise Opportunities</button></li>
              <li><button onClick={() => handleLinkClick('contact')} className="footer-btn-link">Contact Us</button></li>
            </ul>
          </div>

          {/* Column 3: Verified Branches */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Branches</h4>
            <ul className="footer-link-list">
              {LOCATIONS.map((loc) => (
                <li key={loc.id}>
                  <button onClick={() => handleLinkClick('locations')} className="branch-link footer-btn-link">
                    <span>{loc.name}</span>
                    <small>{loc.address.split(',')[1] || loc.address.split(',')[0]}</small>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Timings */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact & Timings</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-row">
                <Phone size={16} color="var(--orange-primary)" />
                <div>
                  <span className="f-label">Call For Reservations / Orders:</span>
                  <a href={`tel:${RESTAURANT_INFO.primaryPhone}`} className="f-val">
                    +91 {RESTAURANT_INFO.primaryPhone}
                  </a>
                  <span className="f-val-sep"> / </span>
                  <a href={`tel:${RESTAURANT_INFO.secondaryPhone}`} className="f-val">
                    +91 {RESTAURANT_INFO.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="footer-contact-row">
                <Mail size={16} color="var(--orange-primary)" />
                <div>
                  <span className="f-label">Email:</span>
                  <a href={`mailto:${RESTAURANT_INFO.email}`} className="f-val">
                    {RESTAURANT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="footer-contact-row">
                <Clock size={16} color="var(--orange-primary)" />
                <div>
                  <span className="f-label">Operating Hours:</span>
                  <p className="f-val">Tiffins: {RESTAURANT_INFO.timings.tiffins}</p>
                  <p className="f-val">Regular Dining: {RESTAURANT_INFO.timings.dining}</p>
                </div>
              </div>

              <div className="footer-contact-row">
                <MapPin size={16} color="var(--orange-primary)" />
                <div>
                  <span className="f-label">Flagship Campus:</span>
                  <p className="f-val">MIG 25-26, 3rd Phase, JNTU - Hitech City Road, Hyderabad, Telangana 500085</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Chaitanya Food Court. All rights reserved. Bringing Back Desi Spice.
          </p>

          <button 
            onClick={scrollToTop} 
            className="footer-back-top-btn"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
