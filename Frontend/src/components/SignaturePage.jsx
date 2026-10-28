import React from 'react';
import SubpageBanner from './SubpageBanner';
import SignatureDishes from './SignatureDishes';
import { Sparkles, Utensils, Calendar, ArrowRight, Award, ShieldCheck } from 'lucide-react';

export default function SignaturePage({ onNavigate, onAddToCart, cartItems }) {
  return (
    <div className="subpage-wrapper signature-page-wrapper">
      <SubpageBanner 
        title="Signature Dishes"
        subtitle="Our 8 Celebrated Masterpieces • Handcrafted with 80-Year Heritage Masalas, Authentic Ulavacharu & Royal Nizami Dum"
        breadcrumb="Signature Dishes"
        bgImage="/assets/signature-mint-biryani.png"
        onNavigate={onNavigate}
      />


      {/* Signature Dishes Grid */}
      <SignatureDishes onAddToCart={onAddToCart} cartItems={cartItems} />

      {/* Culinary Heritage Callout */}
      <section className="section-padding pt-0 signature-culinary-info">
        <div className="container">
          <div className="heritage-story-banner glass-card">
            <div className="heritage-story-grid">
              <div className="heritage-story-col">
                <span className="section-label">Our Culinary Secret</span>
                <h3 className="section-title">Why Our Signature Dishes Are Unmatched</h3>
                <p className="heritage-text">
                  At Chaitanya Food Court, every signature dish is rooted in authentic Andhra household traditions. We never use artificial essences, commercial food colorings, or pre-packaged gravy bases.
                </p>
                <div className="heritage-points-list">
                  <div className="h-point-item">
                    <Award size={18} color="var(--orange-primary)" />
                    <div>
                      <strong>Slow-Brewed Ulavacharu Broth:</strong>
                      <span>Simmered for over 8 hours using premium coastal Andhra horse gram for a deep earthy richness.</span>
                    </div>
                  </div>
                  <div className="h-point-item">
                    <Award size={18} color="var(--orange-primary)" />
                    <div>
                      <strong>Traditional Avakaya Infusion:</strong>
                      <span>Crafted with stone-ground Guntur chillies, cold-pressed sesame oil, and crunchy Krishna raw mangoes.</span>
                    </div>
                  </div>
                  <div className="h-point-item">
                    <Award size={18} color="var(--orange-primary)" />
                    <div>
                      <strong>Aged Long-Grain Basmati Rice:</strong>
                      <span>Steamed in sealed handis to capture every fragrant aroma of royal saffron and whole garam masalas.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="heritage-cta-col text-center glass-dark">
                <Sparkles size={36} color="var(--gold-light)" className="mb-14" />
                <h4 className="text-white mb-10">Hungry for More Flavours?</h4>
                <p className="text-white-muted mb-24">
                  Browse over 60+ verified dishes across tiffins, fiery starters, claypot pulavs, curries, and Krishna District's famous Jagapathi Pan.
                </p>
                <div className="heritage-btn-group">
                  <button onClick={() => onNavigate('menu')} className="btn btn-primary w-full mb-10">
                    <Utensils size={16} /> Explore Complete Menu
                  </button>
                  <button onClick={() => onNavigate('reservation')} className="btn btn-outline-cream w-full">
                    <Calendar size={16} /> Book Table for Family
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
