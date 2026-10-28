import React from 'react';
import SubpageBanner from './SubpageBanner';
import Gallery from './Gallery';

export default function GalleryPage({ onNavigate }) {
  return (
    <div className="subpage-wrapper">
      <SubpageBanner 
        title="Food & Ambience Gallery"
        subtitle="A visual celebration of authentic Andhra culinary craft, royal biryanis, and warm dining spaces"
        breadcrumb="Gallery"
        bgImage="/assets/restaurant-interior.jpg"
        onNavigate={onNavigate}
      />


      <Gallery />
    </div>
  );
}
