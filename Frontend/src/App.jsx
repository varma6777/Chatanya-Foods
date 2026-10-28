import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import MenuPage from './components/MenuPage';
import SignaturePage from './components/SignaturePage';
import GalleryPage from './components/GalleryPage';
import CateringPage from './components/CateringPage';
import LocationsPage from './components/LocationsPage';
import FranchisePage from './components/FranchisePage';
import ReservationPage from './components/ReservationPage';
import ContactPage from './components/ContactPage';

import PhysicalMenuModal from './components/PhysicalMenuModal';
import ReservationModal from './components/ReservationModal';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { ShoppingBag, MessageCircle, Check } from 'lucide-react';
import { RESTAURANT_INFO } from './data/restaurantData';
import './App.css';

export default function App() {
  // Parse page and filters from URL hash (e.g. #about, #menu?cat=biryanis, #menu?diet=veg)
  const parseHashRoute = () => {
    const raw = window.location.hash.replace(/^#\/?/, '').trim();
    if (!raw) return { page: 'home', category: 'all', diet: 'all' };

    const [pathPart, queryPart] = raw.split('?');
    const cleanPath = pathPart.replace(/\/+$/, '').toLowerCase();

    // Friendly URL aliases for subpages
    const ALIASES = {
      '': 'home',
      'home': 'home',
      'about': 'about',
      'about-us': 'about',
      'story': 'about',
      'menu': 'menu',
      'dishes': 'menu',
      'signature': 'signature',
      'signatures': 'signature',
      'gallery': 'gallery',
      'photos': 'gallery',
      'ambience': 'gallery',
      'catering': 'catering',
      'banquet': 'catering',
      'locations': 'locations',
      'branches': 'locations',
      'franchise': 'franchise',
      'partner': 'franchise',
      'reservation': 'reservation',
      'reservations': 'reservation',
      'book': 'reservation',
      'book-table': 'reservation',
      'contact': 'contact',
      'contact-us': 'contact'
    };

    let page = ALIASES[cleanPath] || 'home';
    let category = 'all';
    let diet = 'all';

    // Handle nested format like #menu/biryani or #menu/veg
    if (cleanPath.startsWith('menu/')) {
      page = 'menu';
      const sub = cleanPath.replace('menu/', '');
      if (sub === 'veg' || sub === 'vegetarian') diet = 'veg';
      else if (sub === 'non-veg' || sub === 'nonveg') diet = 'non-veg';
      else category = sub;
    }

    if (queryPart) {
      const params = new URLSearchParams(queryPart);
      if (params.get('cat') || params.get('category')) {
        category = params.get('cat') || params.get('category');
      }
      if (params.get('diet')) {
        diet = params.get('diet');
      }
    }

    return { page, category, diet };
  };

  const initialRoute = parseHashRoute();
  const [currentPage, setCurrentPage] = useState(initialRoute.page);
  const [menuFilter, setMenuFilter] = useState({ 
    category: initialRoute.category, 
    diet: initialRoute.diet 
  });

  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('cfc_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isPhysicalMenuOpen, setIsPhysicalMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync with browser back/forward and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const { page, category, diet } = parseHashRoute();
      setCurrentPage(page);
      if (page === 'menu') {
        setMenuFilter({ category, diet });
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Save cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('cfc_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const navigateTo = (pageId, options = {}) => {
    if (pageId === 'menu') {
      const nextCat = options.category !== undefined ? options.category : (options.diet ? 'all' : menuFilter.category);
      const nextDiet = options.diet !== undefined ? options.diet : (options.category ? 'all' : menuFilter.diet);
      
      setMenuFilter({ category: nextCat, diet: nextDiet });

      if (options.openPhysicalMenu) {
        setIsPhysicalMenuOpen(true);
      }

      let hash = 'menu';
      if (nextCat && nextCat !== 'all') {
        hash += `?cat=${nextCat}`;
      } else if (nextDiet && nextDiet !== 'all') {
        hash += `?diet=${nextDiet}`;
      }

      setCurrentPage('menu');
      window.location.hash = hash;

      // Smoothly scroll down to menu section if already on menu or after route switch
      setTimeout(() => {
        const menuEl = document.getElementById('menu');
        if (menuEl) {
          menuEl.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 60);
      return;
    }

    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (dish) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...dish, quantity: 1 }];
      }
    });
    showToast(`Added "${dish.name}" to your order!`);
  };

  const handleUpdateQty = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, it) => acc + it.quantity, 0);

  // Render the active subpage component
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return (
          <AboutPage 
            onNavigate={navigateTo}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        );
      case 'signature':
        return (
          <SignaturePage 
            onNavigate={navigateTo}
            onAddToCart={handleAddToCart}
            cartItems={cartItems}
          />
        );
      case 'menu':
        return (
          <MenuPage 
            onNavigate={navigateTo}
            onAddToCart={handleAddToCart}
            cartItems={cartItems}
            onOpenPhysicalMenu={() => setIsPhysicalMenuOpen(true)}
            menuFilter={menuFilter}
          />
        );
      case 'gallery':
        return (
          <GalleryPage 
            onNavigate={navigateTo}
          />
        );
      case 'catering':
        return (
          <CateringPage 
            onNavigate={navigateTo}
          />
        );
      case 'locations':
        return (
          <LocationsPage 
            onNavigate={navigateTo}
          />
        );
      case 'franchise':
        return (
          <FranchisePage 
            onNavigate={navigateTo}
          />
        );
      case 'reservation':
        return (
          <ReservationPage 
            onNavigate={navigateTo}
          />
        );
      case 'contact':
        return (
          <ContactPage 
            onNavigate={navigateTo}
          />
        );
      case 'home':
      default:
        return (
          <HomePage 
            onNavigate={navigateTo}
            onAddToCart={handleAddToCart}
            cartItems={cartItems}
            onOpenReservation={() => setIsReservationOpen(true)}
            onOpenCart={() => setIsCartOpen(true)}
            onOpenPhysicalMenu={() => setIsPhysicalMenuOpen(true)}
          />
        );
    }
  };

  return (
    <div className="app-root">
      {/* Navigation Bar */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={navigateTo}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenPhysicalMenu={() => setIsPhysicalMenuOpen(true)}
      />

      {/* Main Content: Switches dynamically by active route/subpage */}
      <main className="main-content-area" id="main-content">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={navigateTo}
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenPhysicalMenu={() => setIsPhysicalMenuOpen(true)}
      />

      {/* Modals & Drawers */}
      <PhysicalMenuModal 
        isOpen={isPhysicalMenuOpen}
        onClose={() => setIsPhysicalMenuOpen(false)}
      />

      <ReservationModal 
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Action Buttons */}
      <div className="floating-actions-dock">
        {/* WhatsApp Floating Button */}
        <a 
          href={`https://wa.me/91${RESTAURANT_INFO.primaryPhone}?text=Hello%20Chaitanya%20Food%20Court,%20I%20have%20an%20inquiry`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn whatsapp-float"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={26} />
          <span className="floating-tooltip">Chat with us</span>
        </a>

        {/* Floating Cart Button */}
        {totalCartCount > 0 && (
          <button 
            onClick={() => setIsCartOpen(true)}
            className="floating-btn cart-float"
            aria-label="View Order Tray"
          >
            <ShoppingBag size={24} />
            <span className="cart-float-badge">{totalCartCount}</span>
            <span className="cart-float-text">View Order</span>
          </button>
        )}
      </div>

      {/* Notification Toast */}
      {toastMessage && (
        <div className="app-toast glass-dark">
          <Check size={18} color="#25d366" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
