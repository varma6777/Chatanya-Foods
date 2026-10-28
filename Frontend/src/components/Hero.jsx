import React, { useState, useEffect } from 'react';
import { 
  Award, 
  Utensils, 
  Calendar, 
  ShoppingBag, 
  ArrowRight, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Hero({ onOpenReservation, onOpenCart }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      badge: "Welcome to Chaitanya Food Court",
      title: "The Authentic Taste of India in Hyderabad",
      subtitle: "Experience the diverse flavours of India at Chaitanya Food Court. Handcrafted South and North Indian recipes, coastal curries, and royal biryanis cooked to perfection since 2008.",
      image: "/assets/hero-1.jpg",
      highlight: "Awarded Best Andhra QSR of the Year 2023",
      accent: "Authentic Andhra & Hyderabadi Fused Cuisines"
    },
    {
      badge: "Well Known For",
      title: "Best Sambar Rice in Hyderabad",
      subtitle: "Visit and experience the comforting essence of our legendary Sambar Rice — slow-simmered lentils, seasonal vegetables, and aromatic ghee tadka, available in Veg and Chicken variations.",
      image: "/assets/hero-3.jpg",
      highlight: "Hyderabad's Most Loved Comfort Food",
      accent: "Prepared Fresh with Pure Desi Ghee"
    },
    {
      badge: "Made Headlines For",
      title: "Best Ulavacharu Recipes in Hyderabad",
      subtitle: "Our signature horse gram extract (Ulavacharu) recipes have captivated food lovers across the twin cities. Indulge in our Ulavacharu Chicken, Mutton, Veg, and Prawns Biryanis.",
      image: "/assets/hero-2.jpg",
      highlight: "Authentic Coastal Andhra Heritage",
      accent: "Ulavacharu Biryanis & Vepudus"
    }
  ];

  // Auto advance slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const slide = heroSlides[activeSlide];

  return (
    <section id="home" className="hero-section">
      {/* Background Slides with Cross-Fade */}
      <div className="hero-bg-container">
        {heroSlides.map((s, index) => (
          <div 
            key={index}
            className={`hero-bg-slide ${index === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${s.image})` }}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content-wrapper">
        <div className="hero-grid">
          {/* Main Hero Content */}
          <div className="hero-text-block">
            {/* Top Award Badge */}
            <div className="hero-award-pill">
              <Award size={16} className="award-icon" />
              <span>{slide.highlight}</span>
            </div>

            {/* Slide Category Tag */}
            <div className="hero-tag-wrap">
              <span className="hero-tag">{slide.badge}</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-title">
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              {slide.subtitle}
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <a href="#menu" className="btn btn-primary btn-lg">
                <Utensils size={18} />
                <span>Explore Menu</span>
              </a>

              <button onClick={onOpenReservation} className="btn btn-outline-cream btn-lg">
                <Calendar size={18} />
                <span>Book a Table</span>
              </button>

              <button onClick={onOpenCart} className="btn btn-secondary btn-lg hero-order-btn">
                <ShoppingBag size={18} />
                <span>Order Online (25% OFF)</span>
              </button>
            </div>

            {/* Quick Highlights Ribbon */}
            <div className="hero-ribbon">
              <div className="ribbon-item">
                <div className="ribbon-num">16+</div>
                <div className="ribbon-lbl">Years of Heritage (Est. 2008)</div>
              </div>
              <div className="ribbon-divider"></div>
              <div className="ribbon-item">
                <div className="ribbon-num">5</div>
                <div className="ribbon-lbl">Prime Hyderabad Locations</div>
              </div>
              <div className="ribbon-divider"></div>
              <div className="ribbon-item">
                <div className="ribbon-num">100+</div>
                <div className="ribbon-lbl">Verified Authentic Dishes</div>
              </div>
              <div className="ribbon-divider"></div>
              <div className="ribbon-item">
                <div className="ribbon-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#f1cf8a" color="#f1cf8a" />
                  ))}
                </div>
                <div className="ribbon-lbl">1M+ Delighted Guests</div>
              </div>
            </div>
          </div>

          {/* Right Floating Visual Card */}
          <div className="hero-visual-card">
            <div className="hero-featured-card glass-dark">
              <div className="card-badge-top">
                <Sparkles size={14} color="var(--gold-light)" />
                <span>Specialty Focus</span>
              </div>
              
              <div className="featured-dish-preview">
                <img 
                  src={activeSlide === 1 ? "/assets/sambar-rice.png" : activeSlide === 2 ? "/assets/ulavacharu-chicken.png" : "/assets/mint-biryani.png"} 
                  alt="Featured Dish" 
                  className="featured-dish-img animate-float"
                />
              </div>

              <div className="featured-dish-info">
                <h3 className="featured-dish-title">
                  {activeSlide === 1 ? "Chicken Sambar Rice" : activeSlide === 2 ? "Ulavacharu Chicken Biryani" : "Mint Chicken Biryani"}
                </h3>
                <p className="featured-dish-desc">
                  {activeSlide === 1 
                    ? "Well known across Telangana for the best Sambar Rice recipe."
                    : activeSlide === 2 
                    ? "Made headlines for authentic coastal Andhra horse gram broth fusion."
                    : "Infused with organic mint, saffron and aromatic Nizam spices."}
                </p>
                <div className="featured-dish-footer">
                  <span className="featured-price">
                    {activeSlide === 1 ? "₹239" : activeSlide === 2 ? "₹429" : "₹429"}
                  </span>
                  <a href="#signature" className="featured-link">
                    View Signatures <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Slide Indicators */}
        <div className="hero-controls">
          <button 
            onClick={() => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
            className="hero-nav-arrow"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="hero-dots">
            {heroSlides.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`hero-dot ${idx === activeSlide ? 'active' : ''}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
            className="hero-nav-arrow"
            aria-label="Next Slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
