import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export default function SubpageBanner({ title, subtitle, breadcrumb, onNavigate, bgImage }) {
  return (
    <div
      className="subpage-hero-banner"
      style={bgImage ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      {/* Overlay — tighter when there's a photo bg */}
      <div
        className="subpage-banner-bg"
        style={bgImage ? {
          background: 'linear-gradient(135deg, rgba(8,26,14,0.88) 0%, rgba(13,40,24,0.80) 60%, rgba(20,23,21,0.78) 100%)',
          backgroundImage: 'none',
        } : {}}
      />

      <div className="container subpage-banner-content text-center">
        <div className="subpage-banner-badge">Chaitanya Food Court</div>
        <h1 className="subpage-banner-title">{title}</h1>
        {subtitle && <p className="subpage-banner-sub">{subtitle}</p>}

        <nav className="subpage-breadcrumbs" aria-label="Breadcrumbs">
          <button onClick={() => onNavigate('home')} className="breadcrumb-link">
            <Home size={14} /> Home
          </button>
          <ChevronRight size={14} className="breadcrumb-arrow" />
          <span className="breadcrumb-current">{breadcrumb || title}</span>
        </nav>
      </div>
    </div>
  );
}
