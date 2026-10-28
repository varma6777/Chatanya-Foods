import React from 'react';
import SubpageBanner from './SubpageBanner';
import SignatureDishes from './SignatureDishes';
import MenuSection from './MenuSection';

export default function MenuPage({ 
  onNavigate, 
  onAddToCart, 
  cartItems, 
  onOpenPhysicalMenu,
  menuFilter = { category: 'all', diet: 'all' }
}) {
  return (
    <div className="subpage-wrapper">
      <SubpageBanner 
        title="Discover Our Menu"
        subtitle="Indulge in culinary poetry at Chaitanya Food Court – where authentic spices dance harmoniously!"
        breadcrumb="Menu"
        bgImage="/assets/signature-prawns-biryani.png"
        onNavigate={onNavigate}
      />

      {/* Signature Dishes Spotlight */}
      <SignatureDishes onAddToCart={onAddToCart} cartItems={cartItems} />

      {/* Comprehensive Categorized Menu */}
      <MenuSection 
        onAddToCart={onAddToCart} 
        cartItems={cartItems} 
        onOpenPhysicalMenu={onOpenPhysicalMenu}
        categoryFilter={menuFilter?.category || 'all'}
        dietFilter={menuFilter?.diet || 'all'}
      />
    </div>
  );
}
