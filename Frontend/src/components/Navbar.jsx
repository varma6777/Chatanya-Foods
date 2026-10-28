import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Clock, 
  MapPin, 
  ShoppingBag, 
  Calendar, 
  Menu as MenuIcon, 
  X, 
  Percent, 
  Sparkles,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Navbar({ 
  currentPage, 
  onNavigate, 
  cartCount, 
  onOpenCart, 
  onOpenReservation, 
  onOpenPhysicalMenu 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [menuDropdown, setMenuDropdown] = useState(false);
  const [contactDropdown, setContactDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId, options = {}) => {
    onNavigate(pageId, options);
    setMobileMenuOpen(false);
    setAboutDropdown(false);
    setMenuDropdown(false);
    setContactDropdown(false);
  };

  return (
    <header className="navbar-wrapper">
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <div className="container announcement-inner">
          <div className="announcement-content">
            <span className="announcement-pill">
              <Percent size={13} /> Special Offer
            </span>
            <span className="announcement-text">
              <strong>Flat 25% Off</strong> on Online Orders! Limited Time Offer, Don't Miss Out!
            </span>
            <span className="announcement-code">Use Code: <strong>{RESTAURANT_INFO.promo.code}</strong></span>
          </div>

          <div className="announcement-contact">
            <a href={`tel:${RESTAURANT_INFO.primaryPhone}`} className="announcement-phone">
              <Phone size={13} /> +91 {RESTAURANT_INFO.primaryPhone}
            </a>
            <span className="announcement-divider">|</span>
            <span className="announcement-timings">
              <Clock size={13} /> Tiffins: 6 AM – 11:30 PM
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`main-nav ${isScrolled ? 'nav-scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="nav-logo-link" 
            aria-label="Chaitanya Food Court Home"
          >
            <img 
              src="/assets/logo.png" 
              alt="Chaitanya Food Court Logo" 
              className="nav-logo-img"
            />
          </button>

          {/* Desktop Nav Links */}
          <ul className="nav-links-desktop">
            <li>
              <button 
                onClick={() => handleNavClick('home')}
                className={`nav-link-btn ${currentPage === 'home' ? 'active' : ''}`}
              >
                Home
              </button>
            </li>

            {/* About Us with Dropdown */}
            <li 
              className="nav-item-has-dropdown"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <button 
                onClick={() => handleNavClick('about')}
                className={`nav-link-btn ${currentPage === 'about' ? 'active' : ''}`}
              >
                <span>About Us</span>
                <ChevronDown size={14} className="dropdown-caret" />
              </button>
              {aboutDropdown && (
                <ul className="nav-dropdown-menu glass-card">
                  <li>
                    <button 
                      onClick={() => handleNavClick('about')}
                      className={`dropdown-item ${currentPage === 'about' ? 'active' : ''}`}
                    >
                      Our Story & Heritage
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleNavClick('gallery')}
                      className={`dropdown-item ${currentPage === 'gallery' ? 'active' : ''}`}
                    >
                      Photo Gallery
                    </button>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <button 
                onClick={() => handleNavClick('signature')}
                className={`nav-link-btn ${currentPage === 'signature' ? 'active' : ''}`}
              >
                Signature
              </button>
            </li>

            <li className="nav-item-has-dropdown"
                onMouseEnter={() => setMenuDropdown(true)}
                onMouseLeave={() => setMenuDropdown(false)}
              >
                <button 
                  onClick={() => handleNavClick('menu')}
                  className={`nav-link-btn ${currentPage === 'menu' ? 'active' : ''}`}
                >
                  <span>Menu</span>
                  <ChevronDown size={14} className="dropdown-caret" />
                </button>
                {menuDropdown && (
                  <ul className="nav-dropdown-menu glass-card">
                    <li>
                      <button 
                        onClick={() => handleNavClick('menu', { openPhysicalMenu: true })}
                        className="dropdown-item"
                      >
                        Full Menu / Menu Card
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => handleNavClick('menu', { category: 'biryanis' })}
                        className="dropdown-item"
                      >
                        Biryani
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => handleNavClick('menu', { diet: 'veg' })}
                        className="dropdown-item"
                      >
                        Vegetarian
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => handleNavClick('menu', { diet: 'non-veg' })}
                        className="dropdown-item"
                      >
                        Non-Vegetarian
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => handleNavClick('menu', { category: 'starters-chicken' })}
                        className="dropdown-item"
                      >
                        Starters
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => handleNavClick('menu', { category: 'chinese' })}
                        className="dropdown-item"
                      >
                        Chinese
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => handleNavClick('menu', { category: 'desserts-drinks' })}
                        className="dropdown-item"
                      >
                        Beverages
                      </button>
                    </li>
                  </ul>
                )}
              </li>

            <li>
              <button 
                onClick={onOpenCart}
                className="nav-link-btn order-now-link"
              >
                Order Now
              </button>
            </li>

            <li>
              <button 
                onClick={() => handleNavClick('catering')}
                className={`nav-link-btn ${currentPage === 'catering' ? 'active' : ''}`}
              >
                Catering
              </button>
            </li>

            <li>
              <button 
                onClick={() => handleNavClick('locations')}
                className={`nav-link-btn ${currentPage === 'locations' ? 'active' : ''}`}
              >
                Locations
              </button>
            </li>

            <li>
              <button 
                onClick={() => handleNavClick('franchise')}
                className={`nav-link-btn ${currentPage === 'franchise' ? 'active' : ''}`}
              >
                Franchise
              </button>
            </li>

            {/* Contact Us with Dropdown */}
            <li 
              className="nav-item-has-dropdown"
              onMouseEnter={() => setContactDropdown(true)}
              onMouseLeave={() => setContactDropdown(false)}
            >
              <button 
                onClick={() => handleNavClick('contact')}
                className={`nav-link-btn ${currentPage === 'contact' ? 'active' : ''}`}
              >
                <span>Contact Us</span>
                <ChevronDown size={14} className="dropdown-caret" />
              </button>
              {contactDropdown && (
                <ul className="nav-dropdown-menu glass-card">
                  <li>
                    <button 
                      onClick={() => handleNavClick('contact')}
                      className={`dropdown-item ${currentPage === 'contact' ? 'active' : ''}`}
                    >
                      Contact Details & Map
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleNavClick('reservation')}
                      className={`dropdown-item ${currentPage === 'reservation' ? 'active' : ''}`}
                    >
                      Table Reservation
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          {/* Nav Actions */}
          <div className="nav-actions">
            {/* View Physical Menu Button */}
            <button 
              onClick={onOpenPhysicalMenu}
              className="btn btn-outline-dark btn-sm nav-menu-btn"
              title="View Original Menu Cards"
            >
              <Sparkles size={15} color="var(--orange-primary)" />
              <span>Menu Card</span>
            </button>

            {/* Book Table Button */}
            <button 
              onClick={() => handleNavClick('reservation')}
              className="btn btn-secondary btn-sm nav-reserve-btn"
            >
              <Calendar size={15} />
              <span>Book Table</span>
            </button>

            {/* Cart Trigger */}
            <button 
              onClick={onOpenCart} 
              className="nav-cart-btn"
              aria-label={`View cart with ${cartCount} items`}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle-btn"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'drawer-open' : ''}`}>
        <div className="drawer-overlay" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="drawer-panel">
          <div className="drawer-header">
            <img src="/assets/logo.png" alt="Chaitanya Food Court" className="drawer-logo" />
            <button onClick={() => setMobileMenuOpen(false)} className="drawer-close-btn">
              <X size={22} />
            </button>
          </div>

          <div className="drawer-promo">
            <div className="drawer-promo-badge">Flat 25% Off</div>
            <p>Order online & use coupon code <strong>FLAT25</strong></p>
          </div>

          <ul className="drawer-links">
            <li>
              <button 
                onClick={() => handleNavClick('home')}
                className={`drawer-link-item ${currentPage === 'home' ? 'active' : ''}`}
              >
                <span>Home</span>
                <ChevronRight size={18} />
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('about')}
                className={`drawer-link-item ${currentPage === 'about' ? 'active' : ''}`}
              >
                <span>About Us</span>
                <ChevronRight size={18} />
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('signature')}
                className={`drawer-link-item ${currentPage === 'signature' ? 'active' : ''}`}
              >
                <span>Signature Dishes</span>
                <ChevronRight size={18} />
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('gallery')}
                className={`drawer-link-item ${currentPage === 'gallery' ? 'active' : ''}`}
              >
                <span>Photo Gallery</span>
                <ChevronRight size={18} />
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('menu')}
                className={`drawer-link-item ${currentPage === 'menu' ? 'active' : ''}`}
              >
                <span>Menu</span>
                <ChevronRight size={18} />
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenCart(); }}
                className="drawer-link-item"
              >
                <span>Order Now (Tray)</span>
                <ChevronRight size={18} />
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('catering')}
                className={`drawer-link-item ${currentPage === 'catering' ? 'active' : ''}`}
              >
                <span>Catering Services</span>
                <ChevronRight size={18} />
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('locations')}
                className={`drawer-link-item ${currentPage === 'locations' ? 'active' : ''}`}
              >
                <span>Locations</span>
                <ChevronRight size={18} />
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('franchise')}
                className={`drawer-link-item ${currentPage === 'franchise' ? 'active' : ''}`}
              >
                <span>Franchise Opportunity</span>
                <ChevronRight size={18} />
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('contact')}
                className={`drawer-link-item ${currentPage === 'contact' ? 'active' : ''}`}
              >
                <span>Contact Us</span>
                <ChevronRight size={18} />
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('reservation')}
                className={`drawer-link-item ${currentPage === 'reservation' ? 'active' : ''}`}
              >
                <span>Table Reservation</span>
                <ChevronRight size={18} />
              </button>
            </li>
          </ul>

          <div className="drawer-actions">
            <button 
              onClick={() => handleNavClick('reservation')}
              className="btn btn-primary w-full"
            >
              <Calendar size={16} /> Book a Table
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenPhysicalMenu(); }}
              className="btn btn-outline-dark w-full"
            >
              <Sparkles size={16} /> View Physical Menu Cards
            </button>
            <a 
              href={`https://wa.me/91${RESTAURANT_INFO.primaryPhone}?text=Hello%20Chaitanya%20Food%20Court,%20I%20would%20like%20to%20place%20an%20order`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full"
            >
              WhatsApp Quick Order
            </a>
          </div>

          <div className="drawer-footer">
            <p className="drawer-phone">📞 +91 {RESTAURANT_INFO.primaryPhone}</p>
            <p className="drawer-address">MIG 25-26, 3rd Phase, JNTU - Hitech City Road, Hyderabad</p>
          </div>
        </div>
      </div>
    </header>
  );
}
