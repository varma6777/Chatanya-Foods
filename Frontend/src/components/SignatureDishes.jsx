import React from 'react';
import { Sparkles, Star, Plus, Check, ShoppingBag, Eye } from 'lucide-react';
import { SIGNATURE_DISHES } from '../data/restaurantData';

export default function SignatureDishes({ onAddToCart, cartItems }) {
  return (
    <section id="signature" className="section-padding signature-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-label">Culinary Masterpieces</span>
          <h2 className="section-title">Our 8 Verified Signature Dishes</h2>
          <p className="section-subtitle">
            Crafted from treasured recipes featuring authentic Ulavacharu, Sambar, and Avakaya pickles harmoniously fused with royal Nizami flavours.
          </p>
        </div>

        {/* Signature Dishes Grid */}
        <div className="signature-grid">
          {SIGNATURE_DISHES.map((dish) => {
            const isInCart = cartItems.some((item) => item.id === dish.id);
            return (
              <div key={dish.id} className="signature-card interactive-card">
                {/* Image Wrap */}
                <div className="signature-img-wrap">
                  <span className="signature-badge-pill">{dish.badge}</span>
                  
                  {/* Dietary badge */}
                  <span className={`dish-diet-indicator ${dish.isVeg ? 'veg' : 'non-veg'}`}>
                    <span className="diet-dot"></span>
                  </span>

                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="signature-dish-img"
                    loading="lazy"
                  />
                </div>

                {/* Card Content */}
                <div className="signature-content">
                  <div className="signature-meta-row">
                    <span className="signature-category">{dish.category}</span>
                    <div className="signature-rating">
                      <Star size={13} fill="#d96b14" color="#d96b14" />
                      <span>{dish.rating}</span>
                    </div>
                  </div>

                  <h3 className="signature-name">{dish.name}</h3>
                  <p className="signature-desc">{dish.description}</p>

                  <div className="signature-footer">
                    <div className="signature-price-wrap">
                      <span className="price-currency">₹</span>
                      <span className="price-value">{dish.price}</span>
                      {dish.priceLarge && (
                        <span className="price-alt">/ ₹{dish.priceLarge} (L)</span>
                      )}
                    </div>

                    <button 
                      onClick={() => onAddToCart(dish)}
                      className={`btn btn-sm ${isInCart ? 'btn-secondary' : 'btn-primary'} signature-add-btn`}
                      aria-label={`Add ${dish.name} to order`}
                    >
                      {isInCart ? (
                        <>
                          <Check size={14} /> Added
                        </>
                      ) : (
                        <>
                          <Plus size={14} /> Add to Order
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
