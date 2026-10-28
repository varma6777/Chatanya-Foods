import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Sparkles, 
  Plus, 
  Check, 
  BookOpen, 
  Flame, 
  Leaf, 
  Drumstick,
  Star
} from 'lucide-react';
import { MENU_CATEGORIES, ALL_MENU_ITEMS } from '../data/restaurantData';

export default function MenuSection({ 
  onAddToCart, 
  cartItems, 
  onOpenPhysicalMenu,
  categoryFilter = 'all',
  dietFilter: initialDiet = 'all'
}) {
  const [selectedCategory, setSelectedCategory] = useState(categoryFilter);
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState(initialDiet);

  useEffect(() => {
    if (categoryFilter) {
      setSelectedCategory(categoryFilter);
    }
  }, [categoryFilter]);

  useEffect(() => {
    if (initialDiet) {
      setDietFilter(initialDiet);
    }
  }, [initialDiet]);

  const filteredItems = useMemo(() => {
    return ALL_MENU_ITEMS.filter((item) => {
      // Category filter
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;

      // Diet filter
      const matchesDiet = 
        dietFilter === 'all' || 
        (dietFilter === 'veg' && item.isVeg) || 
        (dietFilter === 'non-veg' && !item.isVeg);

      // Search filter
      const matchesSearch = 
        searchQuery.trim() === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesDiet && matchesSearch;
    });
  }, [selectedCategory, dietFilter, searchQuery]);

  return (
    <section id="menu" className="section-padding menu-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-label">Discover Authentic Flavours</span>
          <h2 className="section-title">Our Finger-Licking Menu</h2>
          <p className="section-subtitle">
            Catering to all palates and appetites with authentic South Indian tiffins, royal biryanis, fiery starters, rich curries, and regional Andhra delicacies.
          </p>

          {/* Physical Menu Card Action Banner */}
          <div className="menu-flipbook-banner">
            <div className="flipbook-banner-content">
              <BookOpen size={22} color="var(--orange-primary)" />
              <div>
                <strong>Want to browse our physical restaurant menu?</strong>
                <p>View the official high-resolution 4-page menu cards with all prices and branch timings.</p>
              </div>
            </div>
            <button onClick={onOpenPhysicalMenu} className="btn btn-primary btn-sm">
              <Sparkles size={15} /> View Menu Cards
            </button>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="menu-controls-wrapper">
          {/* Search Box */}
          <div className="menu-search-box">
            <Search size={18} className="search-icon" />
            <input 
              type="text"
              placeholder="Search biryanis, starters, tiffins, curries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="menu-search-input"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="search-clear-btn">
                ✕
              </button>
            )}
          </div>

          {/* Diet Toggle */}
          <div className="diet-toggle-group">
            <button 
              onClick={() => setDietFilter('all')}
              className={`diet-btn ${dietFilter === 'all' ? 'active' : ''}`}
            >
              All Items
            </button>
            <button 
              onClick={() => setDietFilter('veg')}
              className={`diet-btn veg ${dietFilter === 'veg' ? 'active' : ''}`}
            >
              <Leaf size={14} /> Pure Veg
            </button>
            <button 
              onClick={() => setDietFilter('non-veg')}
              className={`diet-btn non-veg ${dietFilter === 'non-veg' ? 'active' : ''}`}
            >
              <Drumstick size={14} /> Non-Veg
            </button>
          </div>
        </div>

        {/* Category Pills Slider */}
        <div className="menu-categories-scroll">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`category-pill ${selectedCategory === cat.id ? 'active' : ''}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results Counter */}
        <div className="menu-results-meta">
          <span>Showing {filteredItems.length} verified dishes</span>
          {searchQuery && (
            <span className="search-query-tag">for "{searchQuery}"</span>
          )}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="menu-empty-state">
            <p>No dishes found matching your current filter. Try clearing your search.</p>
            <button 
              onClick={() => { setSelectedCategory('all'); setDietFilter('all'); setSearchQuery(''); }}
              className="btn btn-outline-dark btn-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="menu-items-grid">
            {filteredItems.map((item) => {
              const isInCart = cartItems.some((c) => c.id === item.id);
              return (
                <div key={item.id} className="menu-item-card interactive-card">
                  <div className="menu-item-header">
                    <div className="menu-item-title-row">
                      <span className={`dish-diet-indicator ${item.isVeg ? 'veg' : 'non-veg'}`}>
                        <span className="diet-dot"></span>
                      </span>
                      <h4 className="menu-item-name">{item.name}</h4>
                    </div>

                    <div className="menu-item-price-tag">
                      <span className="price-symbol">₹</span>
                      <span className="price-num">{item.price}</span>
                      {item.priceLarge && (
                        <span className="price-alt">/ ₹{item.priceLarge}</span>
                      )}
                    </div>
                  </div>

                  <p className="menu-item-desc">{item.description}</p>

                  <div className="menu-item-footer">
                    {item.popular && (
                      <span className="popular-badge">
                        <Flame size={12} color="#d96b14" /> Popular
                      </span>
                    )}
                    
                    <button 
                      onClick={() => onAddToCart(item)}
                      className={`btn btn-sm ${isInCart ? 'btn-secondary' : 'btn-outline-dark'} item-add-btn`}
                      aria-label={`Add ${item.name} to order`}
                    >
                      {isInCart ? (
                        <>
                          <Check size={14} /> Added
                        </>
                      ) : (
                        <>
                          <Plus size={14} /> Add
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
