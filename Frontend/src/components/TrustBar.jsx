import React from 'react';
import { Award, UtensilsCrossed, Clock, Sparkles, MapPin, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function TrustBar() {
  const highlights = [
    {
      icon: <Award size={26} color="var(--orange-primary)" />,
      title: "Award-Winning Andhra QSR",
      desc: "Best Andhra QSR of the Year 2023 by Restaurant Awards"
    },
    {
      icon: <Clock size={26} color="var(--orange-primary)" />,
      title: "Pure Veg Tiffins from 6:00 AM",
      desc: "Idlis, Dosas, Wadas, Pongal & Kaapi till 11:30 PM"
    },
    {
      icon: <UtensilsCrossed size={26} color="var(--orange-primary)" />,
      title: "Ulavacharu & Sambar Pioneers",
      desc: "Well known across Hyderabad for authentic secret recipes"
    },
    {
      icon: <Sparkles size={26} color="var(--orange-primary)" />,
      title: "70-Year Old Jagapathi Pan",
      desc: "Krishna District's legendary post-meal royal sweet pan"
    }
  ];

  return (
    <div className="trust-bar-section">
      <div className="container">
        <div className="trust-bar-grid">
          {highlights.map((item, index) => (
            <div key={index} className="trust-item">
              <div className="trust-icon-box">
                {item.icon}
              </div>
              <div className="trust-text">
                <h4 className="trust-title">{item.title}</h4>
                <p className="trust-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
