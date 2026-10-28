import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  MessageCircle, 
  Mail, 
  Send, 
  CheckCircle2, 
  Building,
  Check
} from 'lucide-react';
import { LOCATIONS, RESTAURANT_INFO } from '../data/restaurantData';

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0].id);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('Feedback / Inquiry');
  const [contactMessage, setContactMessage] = useState('');
  const [msgSent, setMsgSent] = useState(false);

  const activeLoc = LOCATIONS.find((l) => l.id === selectedLocation) || LOCATIONS[0];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactName || !contactEmail) return;

    // Send inquiry via mailto or whatsapp
    const text = `*Website Contact Inquiry*%0A%0A` +
      `*Name:* ${contactName}%0A` +
      `*Email:* ${contactEmail}%0A` +
      `*Subject:* ${contactSubject}%0A` +
      `*Message:* ${contactMessage}`;

    window.open(`https://wa.me/91${RESTAURANT_INFO.primaryPhone}?text=${text}`, '_blank');
    setMsgSent(true);
  };

  return (
    <section id="locations" className="section-padding locations-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-label">Find Your Nearest Branch</span>
          <h2 className="section-title">Our 5 Hyderabad Locations</h2>
          <p className="section-subtitle">
            Visit any of our convenient branches across Hyderabad for authentic Andhra delicacies, tiffins, and royal biryanis.
          </p>
        </div>

        {/* Location Selector Tabs */}
        <div className="location-tabs-bar">
          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setSelectedLocation(loc.id)}
              className={`location-tab-btn ${loc.id === selectedLocation ? 'active' : ''}`}
            >
              <MapPin size={16} />
              <span>{loc.name.split(' ')[0]}</span>
              {loc.isMain && <span className="loc-main-tag">Flagship</span>}
            </button>
          ))}
        </div>

        {/* Active Location Showcase */}
        <div className="active-location-display glass-card">
          <div className="location-detail-grid">
            {/* Info Column */}
            <div className="location-info-column">
              <div className="loc-badge-row">
                <span className="loc-pill-badge">
                  {activeLoc.isMain ? 'Flagship Campus' : 'Hyderabad Branch'}
                </span>
                <span className="loc-status-pill">● Open Now</span>
              </div>

              <h3 className="location-branch-name">{activeLoc.name}</h3>

              <div className="location-meta-list">
                <div className="loc-meta-item">
                  <MapPin size={20} className="meta-icon" />
                  <div>
                    <strong>Address:</strong>
                    <p>{activeLoc.address}</p>
                  </div>
                </div>

                <div className="loc-meta-item">
                  <Clock size={20} className="meta-icon" />
                  <div>
                    <strong>Timings:</strong>
                    <p>{activeLoc.timings}</p>
                  </div>
                </div>

                <div className="loc-meta-item">
                  <Phone size={20} className="meta-icon" />
                  <div>
                    <strong>Phone Numbers:</strong>
                    <p>
                      <a href={`tel:${activeLoc.phone}`}>+91 {activeLoc.phone}</a>
                      {activeLoc.secondaryPhone && (
                        <span> / <a href={`tel:${activeLoc.secondaryPhone}`}>+91 {activeLoc.secondaryPhone}</a></span>
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Facilities */}
              {activeLoc.facilities && (
                <div className="loc-facilities-block">
                  <strong>Available Facilities:</strong>
                  <div className="loc-facility-chips">
                    {activeLoc.facilities.map((fac, i) => (
                      <span key={i} className="facility-chip">
                        <Check size={12} color="var(--orange-primary)" /> {fac}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="location-action-btns">
                <a 
                  href={activeLoc.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Navigation size={16} /> Get Directions
                </a>

                <a 
                  href={`tel:${activeLoc.phone}`}
                  className="btn btn-secondary"
                >
                  <Phone size={16} /> Call Branch
                </a>

                <a 
                  href={`https://wa.me/91${activeLoc.phone}?text=Hello%20Chaitanya%20Food%20Court%20${encodeURIComponent(activeLoc.name)},%20I%20would%20like%20to%20order`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={16} /> WhatsApp Order
                </a>
              </div>
            </div>

            {/* Map Column */}
            <div className="location-map-column">
              <div className="map-frame-box">
                <iframe
                  title={`Map of ${activeLoc.name}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(activeLoc.name + ' ' + activeLoc.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '340px' }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div id="contact" className="contact-form-wrapper glass-card">
          <div className="contact-grid">
            <div className="contact-info-block">
              <span className="section-label">Get in Touch</span>
              <h3 className="contact-title">Connect with Our Team</h3>
              <p className="contact-desc">
                Have questions regarding banquet bookings, catering requirements, franchise opportunities, or feedback? Send us a message and our management team will reach out promptly.
              </p>

              <div className="contact-touchpoints">
                <div className="touchpoint-item">
                  <Phone size={18} color="var(--orange-primary)" />
                  <div>
                    <span className="touch-label">Direct Calling</span>
                    <a href={`tel:${RESTAURANT_INFO.primaryPhone}`} className="touch-val">
                      +91 {RESTAURANT_INFO.primaryPhone} / {RESTAURANT_INFO.secondaryPhone}
                    </a>
                  </div>
                </div>

                <div className="touchpoint-item">
                  <Mail size={18} color="var(--orange-primary)" />
                  <div>
                    <span className="touch-label">Email Us</span>
                    <a href={`mailto:${RESTAURANT_INFO.email}`} className="touch-val">
                      {RESTAURANT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="touchpoint-item">
                  <Building size={18} color="var(--orange-primary)" />
                  <div>
                    <span className="touch-label">Registered Office & Flagship</span>
                    <p className="touch-val">
                      MIG 25-26, 3rd Phase, JNTU - Hitech City Road, Hyderabad, Telangana 500085
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="contact-form-block">
              <h4 className="form-subheading">Write Us a Message</h4>
              
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Ananya Rao"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Your Email *</label>
                <input 
                  type="email" 
                  required
                  placeholder="ananya@example.com"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <select 
                  value={contactSubject}
                  onChange={(e) => setContactSubject(e.target.value)}
                  className="form-select"
                >
                  <option>Table Reservation Query</option>
                  <option>Outdoor / Wedding Catering</option>
                  <option>Franchise Opportunity in Hyderabad</option>
                  <option>Customer Feedback & Experience</option>
                  <option>Corporate Tie-ups</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Your Message</label>
                <textarea 
                  rows="4"
                  placeholder="Write your message or inquiry details here..."
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  className="form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full">
                <Send size={16} /> Send Message via WhatsApp / Support
              </button>

              {msgSent && (
                <div className="form-success-banner">
                  <CheckCircle2 size={16} /> Thank you! Your message has been prepared for dispatch.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
