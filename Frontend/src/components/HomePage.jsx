import React from 'react';
import Hero from './Hero';
import TrustBar from './TrustBar';
import SignatureDishes from './SignatureDishes';
import { 
  ArrowRight, 
  Sparkles, 
  Utensils, 
  MapPin, 
  Calendar, 
  HeartHandshake, 
  Camera, 
  Layers, 
  Award 
} from 'lucide-react';
import { BUILDING_FLOORS, LOCATIONS } from '../data/restaurantData';

export default function HomePage({ 
  onNavigate, 
  onAddToCart, 
  cartItems, 
  onOpenReservation, 
  onOpenCart, 
  onOpenPhysicalMenu 
}) {
  return (
    <div className="home-page-wrapper">
      {/* Hero Section */}
      <Hero 
        onOpenReservation={() => onNavigate('reservation')}
        onOpenCart={onOpenCart}
      />

      {/* Trust Badges Bar */}
      <TrustBar />

      {/* About Teaser Section */}
      <section className="section-padding home-about-teaser">
        <div className="container">
          <div className="home-teaser-grid">
            <div className="teaser-image-wrap">
              <img 
                src="/assets/about-dish.png" 
                alt="Chaitanya Food Court Tradition" 
                className="teaser-img"
              />
              <div className="teaser-badge glass-dark">
                <Award size={20} color="var(--gold-light)" />
                <span>Best Andhra QSR 2023</span>
              </div>
            </div>

            <div className="teaser-content">
              <span className="section-label">Welcome to Chaitanya Food Court</span>
              <h2 className="section-title">A Heritage of Flavour in Kukatpally Since 2008</h2>
              <p className="teaser-text">
                In 2008, Chaitanya's Food Court opened its doors in Kukatpally with a mission to bring quality South and North Indian vegetarian and non-vegetarian dishes to the people of Hyderabad. We saw an opportunity to blend our cherished cultural heritage, featuring recipes with Ulavacharu, Sambar, and Avakaya pickles harmoniously fused with the rich taste of Nizam’s cuisine.
              </p>

              <div className="teaser-highlights-list">
                <div className="teaser-hl-item">
                  <strong>4-Floor Flagship Campus</strong>
                  <span>Pure veg tiffins, family AC dining, curry point & hotel rooms</span>
                </div>
                <div className="teaser-hl-item">
                  <strong>Pioneers of Ulavacharu & Sambar</strong>
                  <span>Well known across Hyderabad for authentic secret spice recipes</span>
                </div>
              </div>

              <div className="teaser-btn-row">
                <button onClick={() => onNavigate('about')} className="btn btn-primary">
                  <span>Know More About Our Story</span>
                  <ArrowRight size={16} />
                </button>

                <button onClick={() => onNavigate('reservation')} className="btn btn-outline-dark">
                  <Calendar size={16} /> Book Table
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Spotlight */}
      <SignatureDishes onAddToCart={onAddToCart} cartItems={cartItems} />

      {/* Menu Teaser Banner */}
      <section className="home-menu-callout section-padding">
        <div className="container">
          <div className="menu-callout-card glass-dark text-center">
            <span className="section-label" style={{ color: 'var(--gold-light)' }}>Explore Our Kitchen</span>
            <h2 className="section-title text-white">Discover Our Finger-Licking Menu</h2>
            <p className="section-subtitle text-white-muted">
              Over 100+ verified authentic recipes ranging from early morning steaming idlis and dosas, fiery chicken and mutton starters, royal Hyderabadi biryanis, clay oven naans, and Krishna District's 70-year-old Jagapathi Pan.
            </p>

            <div className="menu-callout-actions">
              <button onClick={() => onNavigate('menu')} className="btn btn-primary btn-lg">
                <Utensils size={18} />
                <span>Explore Full Menu</span>
              </button>
              <button onClick={onOpenPhysicalMenu} className="btn btn-outline-cream btn-lg">
                <Sparkles size={18} />
                <span>View Menu Cards</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Teaser */}
      <section className="home-catering-teaser section-padding">
        <div className="container">
          <div className="catering-teaser-box glass-card">
            <div className="catering-teaser-content">
              <span className="section-label">Outdoor & Wedding Banquets</span>
              <h2 className="section-title">Best Catering Services in Hyderabad</h2>
              <p className="catering-teaser-desc">
                From intimate cradle ceremonies and housewarming feasts to grand wedding receptions with live counters and corporate galas. We cater gatherings starting from 100 guests with hygienic preparation and master chefs.
              </p>
              <button onClick={() => onNavigate('catering')} className="btn btn-primary">
                <span>View Catering Services & Pricing Estimator</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="catering-teaser-stats">
              <div className="cat-stat-box">
                <span className="cat-stat-num">100+</span>
                <span className="cat-stat-lbl">Minimum Guests Catering</span>
              </div>
              <div className="cat-stat-box">
                <span className="cat-stat-num">500+</span>
                <span className="cat-stat-lbl">Weddings & Banquets Hosted</span>
              </div>
              <div className="cat-stat-box">
                <span className="cat-stat-num">100%</span>
                <span className="cat-stat-lbl">Clean & Hygienic Kitchens</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Gallery Teaser */}
      <section className="home-gallery-teaser section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Visual Delights</span>
            <h2 className="section-title">A Glimpse Into Our Culinary World</h2>
            <p className="section-subtitle">
              From aromatic earthen biryani pots to vibrant family feasts, browse our photo gallery.
            </p>
          </div>

          <div className="gallery-teaser-grid">
            <div className="gallery-teaser-item" onClick={() => onNavigate('gallery')}>
              <img src="/assets/signature-mint-biryani.png" alt="Signature Mint Chicken Biryani" />
              <div className="g-teaser-overlay">
                <span>Mint Chicken Biryani</span>
              </div>
            </div>
            <div className="gallery-teaser-item" onClick={() => onNavigate('gallery')}>
              <img src="/assets/signature-avakaya-biryani.png" alt="Avakaya Mutton Biryani" />
              <div className="g-teaser-overlay">
                <span>Avakaya Mutton Biryani</span>
              </div>
            </div>
            <div className="gallery-teaser-item" onClick={() => onNavigate('gallery')}>
              <img src="/assets/signature-prawns-biryani.png" alt="Golconda Prawns Biryani" />
              <div className="g-teaser-overlay">
                <span>Golconda Prawns Biryani</span>
              </div>
            </div>
            <div className="gallery-teaser-item" onClick={() => onNavigate('gallery')}>
              <img src="/assets/about-dish.png" alt="Heritage Andhra Meals" />
              <div className="g-teaser-overlay">
                <span>Heritage Andhra Cuisine</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-36">
            <button onClick={() => onNavigate('gallery')} className="btn btn-outline-dark">
              <Camera size={16} />
              <span>Explore Full Photo Gallery</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Franchise Opportunity Teaser */}
      <section className="home-franchise-teaser section-padding">
        <div className="container">
          <div className="franchise-teaser-box glass-card">
            <div className="franchise-teaser-content">
              <span className="section-label">Business Opportunities</span>
              <h2 className="section-title">Partner with Chaitanya Food Court</h2>
              <p className="franchise-teaser-desc">
                Join Hyderabad's premier authentic Andhra brand with 16+ years of trust, secret standardized masalas, and 3 proven business models (Dine-in, Food Court, QSR).
              </p>
              <div className="franchise-teaser-models">
                <div className="ft-model-pill">QSR Express</div>
                <div className="ft-model-pill">Mall Food Court</div>
                <div className="ft-model-pill">Full Dine-in Family</div>
              </div>
              <div className="teaser-btn-row">
                <button onClick={() => onNavigate('franchise')} className="btn btn-primary">
                  <HeartHandshake size={16} />
                  <span>Explore Franchise Models & Apply</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
            <div className="franchise-teaser-badge glass-dark">
              <Award size={36} color="var(--gold-light)" />
              <h4>Best Andhra QSR 2023</h4>
              <p>Over 1 Million+ Satisfied Diners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Snapshot */}
      <section className="home-locations-teaser section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Visit Us Today</span>
            <h2 className="section-title">5 Convenient Branches Across Hyderabad</h2>
            <p className="section-subtitle">
              Authentic taste is always nearby. Drop by our nearest location or order directly to your doorstep.
            </p>
          </div>

          <div className="locations-preview-grid">
            {LOCATIONS.map((loc) => (
              <div 
                key={loc.id} 
                className="loc-preview-card interactive-card"
                onClick={() => onNavigate('locations')}
              >
                <div className="loc-card-top">
                  <MapPin size={20} color="var(--orange-primary)" />
                  {loc.isMain && <span className="loc-flagship-pill">Flagship</span>}
                </div>
                <h4 className="loc-card-title">{loc.name}</h4>
                <p className="loc-card-addr">{loc.address}</p>
                <div className="loc-card-footer">
                  <span className="loc-view-link">View Maps & Details <ArrowRight size={14} /></span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-36">
            <button onClick={() => onNavigate('locations')} className="btn btn-outline-dark">
              <span>View All Branches on Google Maps</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Table Reservation Callout */}
      <section className="home-reservation-banner section-padding">
        <div className="container">
          <div className="reservation-cta-card glass-dark text-center">
            <span className="section-label" style={{ color: 'var(--gold-light)' }}>Hassle-Free Dining</span>
            <h2 className="section-title text-white">Reserve Your Table In Advance</h2>
            <p className="section-subtitle text-white-muted">
              Skip the weekend queue! Book your preferred floor, time slot, and seating at any of our 5 Hyderabad branches.
            </p>
            <div className="res-cta-actions">
              <button onClick={() => onNavigate('reservation')} className="btn btn-primary btn-lg">
                <Calendar size={18} />
                <span>Book Table Online</span>
              </button>
              <button onClick={() => onNavigate('contact')} className="btn btn-outline-cream btn-lg">
                <span>Contact Front Desk</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
