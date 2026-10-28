import React, { useState } from 'react';
import SubpageBanner from './SubpageBanner';
import { Phone, Mail, MapPin, Building, Send, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO, LOCATIONS } from '../data/restaurantData';

export default function ContactPage({ onNavigate }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    const text = `*Contact Us Inquiry - Chaitanya Food Court*%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Email:* ${email}%0A` +
      `*Subject:* ${subject}%0A` +
      `*Message:* ${message}`;

    window.open(`https://wa.me/91${RESTAURANT_INFO.primaryPhone}?text=${text}`, '_blank');
    setSent(true);
  };

  return (
    <div className="subpage-wrapper">
      <SubpageBanner 
        title="Contact Us"
        subtitle="Connect with us for culinary inquiries, banquet feedback, and partnerships – let's create delicious moments together!"
        breadcrumb="Contact Us"
        onNavigate={onNavigate}
      />

      <div className="container section-padding">
        <div className="contact-grid glass-card p-40">
          <div className="contact-info-block">
            <span className="section-label">Reach Out</span>
            <h3 className="contact-title">We'd Love to Hear From You</h3>
            <p className="contact-desc">
              Whether you want to place a special bulk order, book a banquet feast, or share feedback on your dining experience, our management team is always here for you.
            </p>

            <div className="contact-touchpoints">
              <div className="touchpoint-item">
                <Phone size={20} color="var(--orange-primary)" />
                <div>
                  <span className="touch-label">Direct Calling</span>
                  <a href={`tel:${RESTAURANT_INFO.primaryPhone}`} className="touch-val">
                    +91 {RESTAURANT_INFO.primaryPhone}
                  </a>
                  <span className="text-muted"> / </span>
                  <a href={`tel:${RESTAURANT_INFO.secondaryPhone}`} className="touch-val">
                    +91 {RESTAURANT_INFO.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="touchpoint-item">
                <Mail size={20} color="var(--orange-primary)" />
                <div>
                  <span className="touch-label">Official Email</span>
                  <a href={`mailto:${RESTAURANT_INFO.email}`} className="touch-val">
                    {RESTAURANT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="touchpoint-item">
                <Building size={20} color="var(--orange-primary)" />
                <div>
                  <span className="touch-label">Flagship Campus Address</span>
                  <p className="touch-val">
                    MIG 25-26, 3rd Phase, Near Malaysian Township Circle, JNTU - Hitech City Road, KPHB Colony, Hyderabad, Telangana 500085
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form-block">
            <h4 className="form-subheading">Write Us a Message</h4>
            
            <div className="form-group">
              <label className="form-label">Your Name *</label>
              <input 
                type="text" 
                required
                placeholder="e.g. Priyadarshini Rao"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Your Email *</label>
              <input 
                type="email" 
                required
                placeholder="priya@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>
              <select 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="form-select"
              >
                <option>General Inquiry</option>
                <option>Outdoor / Banquet Catering</option>
                <option>Table Reservation Query</option>
                <option>Dining Feedback & Suggestions</option>
                <option>Franchise & Business Partnerships</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Your Message</label>
              <textarea 
                rows="4"
                placeholder="Tell us how we can assist you..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-textarea"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              <Send size={16} /> Send Message via WhatsApp / Support
            </button>

            {sent && (
              <div className="form-success-banner">
                <CheckCircle2 size={16} /> Opening WhatsApp to dispatch your message directly to our desk!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
