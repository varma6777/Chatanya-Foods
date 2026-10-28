import React from 'react';
import SubpageBanner from './SubpageBanner';
import Catering from './Catering';

export default function CateringPage({ onNavigate }) {
  return (
    <div className="subpage-wrapper">
      <SubpageBanner 
        title="Best Catering Services in Hyderabad"
        subtitle="Flawless catering for gatherings of all sizes starting from 100 guests • Clean, hygienic kitchens & master chefs"
        breadcrumb="Catering Services"
        bgImage="/assets/catering-hero.jpg"
        onNavigate={onNavigate}
      />


      <Catering />
    </div>
  );
}
