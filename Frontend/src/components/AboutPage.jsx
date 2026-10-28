import React from 'react';
import SubpageBanner from './SubpageBanner';
import About from './About';
import { Award, Clock, Star, Users, Utensils, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function AboutPage({ onNavigate, onOpenReservation }) {
  const testimonials = [
    {
      name: "Srinivas Rao",
      date: "KPHB Colony, Hyderabad",
      text: "The Chicken Sambar Rice here is unrivaled in the entire city. The flavour of the ghee tadka and authentic homestyle spices brings back nostalgic childhood memories every single Sunday.",
      rating: 5,
      dish: "Chicken Sambar Rice"
    },
    {
      name: "Dr. Lakshmi Prasad",
      date: "Kondapur, Hyderabad",
      text: "Their Ulavacharu Chicken Biryani made headlines for a reason! Rich, perfectly seasoned, and authentic horse gram extract cooked with long basmati grains. Best Andhra restaurant in Kukatpally.",
      rating: 5,
      dish: "Ulavacharu Biryani"
    },
    {
      name: "Karthik Varma",
      date: "Nizampet, Hyderabad",
      text: "From 6:30 AM pure veg tiffins with Ghee Karam Dosa and steaming hot idlis to midnight biryani dinners, Chaitanya Food Court has been our family's trusted food destination since 2012.",
      rating: 5,
      dish: "Tiffins & Biryanis"
    }
  ];

  return (
    <div className="subpage-wrapper">
      <SubpageBanner 
        title="About Us"
        subtitle="Experience the Best South & North Indian Restaurant in Hyderabad • Bringing Back Desi Spice Since 2008"
        breadcrumb="About Us"
        bgImage="/assets/andhra-thali.jpg"
        onNavigate={onNavigate}
      />


      {/* Main Core About Content */}
      <About onOpenReservation={onOpenReservation} />

      {/* Verified Testimonials */}
      <div className="container section-padding pt-0">
        <div className="text-center mb-40">
          <span className="section-label">Patron Reviews</span>
          <h3 className="section-title">What Our Visitors Say</h3>
          <p className="section-subtitle">Real experiences from guests who cherish our authentic coastal Andhra and Hyderabadi flavours.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card interactive-card glass-card">
              <div className="testimonial-rating">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="#d96b14" color="#d96b14" />
                ))}
              </div>
              <p className="testimonial-quote">"{t.text}"</p>
              <div className="testimonial-footer">
                <span className="test-dish-tag">{t.dish}</span>
                <h5 className="test-author">{t.name}</h5>
                <span className="test-location">{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
