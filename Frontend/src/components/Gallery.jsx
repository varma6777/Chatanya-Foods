import React, { useState } from 'react';
import { Camera, X, ZoomIn, Sparkles } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/restaurantData';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'dishes', label: 'Signature Dishes' },
    { id: 'biryanis', label: 'Biryani Specialities' },
    { id: 'ambience', label: 'Dining Ambience' },
    { id: 'catering', label: 'Banquets & Catering' }
  ];

  const filteredImages = activeFilter === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="section-padding gallery-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-label">A Visual Feast</span>
          <h2 className="section-title">Our Food & Dining Gallery</h2>
          <p className="section-subtitle">
            Get a glimpse of our culinary craft, lively dining rooms, slow-cooked Hyderabadi biryanis, and warm hospitality.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="gallery-filter-tabs">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`gallery-filter-pill ${activeFilter === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="gallery-grid">
          {filteredImages.map((photo) => (
            <div 
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="gallery-item interactive-card"
            >
              <div className="gallery-thumb-wrap">
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  className="gallery-thumb-img"
                  loading="lazy"
                />
                <div className="gallery-overlay-hover">
                  <ZoomIn size={24} color="#ffffff" />
                  <span className="gallery-hover-title">{photo.title}</span>
                  <p className="gallery-hover-sub">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div className="modal-overlay" onClick={() => setSelectedPhoto(null)}>
            <div className="gallery-lightbox glass-dark" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="lightbox-close-btn"
                aria-label="Close photo view"
              >
                <X size={24} />
              </button>
              <img 
                src={selectedPhoto.src} 
                alt={selectedPhoto.title} 
                className="lightbox-full-img"
              />
              <div className="lightbox-caption-box">
                <h4 className="lightbox-title">{selectedPhoto.title}</h4>
                <p className="lightbox-caption">{selectedPhoto.caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
