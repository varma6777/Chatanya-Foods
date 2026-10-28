import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut, Sparkles, RefreshCw } from 'lucide-react';
import { PHYSICAL_MENU_PAGES } from '../data/restaurantData';

// Direct imports so Vite bundles and resolves the exact asset URLs reliably
import menuPage1 from '../assets/menu-page-1.jpg';
import menuPage2 from '../assets/menu-page-2.png';
import menuPage3 from '../assets/menu-page-3.jpg';
import menuPage4 from '../assets/menu-page-4.jpg';

const MENU_IMAGES = [menuPage1, menuPage2, menuPage3, menuPage4];

export default function PhysicalMenuModal({ isOpen, onClose }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imageError, setImageError] = useState(false);

  if (!isOpen) return null;

  const current = PHYSICAL_MENU_PAGES[currentPage];
  const imgSrc = MENU_IMAGES[currentPage] || current?.src || `/assets/menu-page-${currentPage + 1}.jpg`;

  const handlePageChange = (idx) => {
    setCurrentPage(idx);
    setZoomLevel(1);
    setImageError(false);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="menu-modal-container glass-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="menu-modal-header">
          <div className="menu-modal-title-box">
            <Sparkles size={18} color="var(--orange-primary)" />
            <div>
              <h3 className="menu-modal-title">Official Physical Menu Card</h3>
              <p className="menu-modal-sub">
                Page {current.page} of {PHYSICAL_MENU_PAGES.length}: {current.title} — {current.subtitle}
              </p>
            </div>
          </div>

          <div className="menu-modal-actions">
            <button 
              onClick={() => setZoomLevel((z) => Math.min(Number((z + 0.25).toFixed(2)), 2.5))}
              className="modal-tool-btn"
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn size={18} />
            </button>
            <button 
              onClick={() => setZoomLevel((z) => Math.max(Number((z - 0.25).toFixed(2)), 0.75))}
              className="modal-tool-btn"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut size={18} />
            </button>
            <a 
              href={imgSrc} 
              download={`Chaitanya_Food_Court_Menu_Page_${current.page}`}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-tool-btn"
              title="Download or Open Full Size"
              aria-label="Download Page"
            >
              <Download size={18} />
            </a>
            <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Page Switcher Tabs */}
        <div className="menu-modal-tabs">
          {PHYSICAL_MENU_PAGES.map((p, idx) => (
            <button
              key={p.page}
              onClick={() => handlePageChange(idx)}
              className={`menu-tab-btn ${idx === currentPage ? 'active' : ''}`}
            >
              <span>Page {p.page}</span>
              <small>{p.title.replace(' Menu', '')}</small>
            </button>
          ))}
        </div>

        {/* Menu Viewer Area */}
        <div className="menu-modal-viewer">
          <div 
            className="menu-image-scroller"
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
          >
            {imageError ? (
              <div className="menu-image-fallback text-center">
                <p>Unable to preview page image directly.</p>
                <div className="fallback-actions">
                  <a href={imgSrc} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    Open Full Image in New Tab
                  </a>
                  <button onClick={() => setImageError(false)} className="btn btn-outline-cream btn-sm">
                    <RefreshCw size={14} /> Retry Loading
                  </button>
                </div>
              </div>
            ) : (
              <img 
                key={`${currentPage}-${imgSrc}`}
                src={imgSrc} 
                alt={`${current.title} - ${current.subtitle}`} 
                className="menu-page-full-img"
                onError={() => {
                  console.error('Failed to load menu card image:', imgSrc);
                  setImageError(true);
                }}
              />
            )}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={() => handlePageChange(Math.max(currentPage - 1, 0))}
            disabled={currentPage === 0}
            className="menu-page-arrow prev"
            aria-label="Previous page"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={() => handlePageChange(Math.min(currentPage + 1, PHYSICAL_MENU_PAGES.length - 1))}
            disabled={currentPage === PHYSICAL_MENU_PAGES.length - 1}
            className="menu-page-arrow next"
            aria-label="Next page"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
