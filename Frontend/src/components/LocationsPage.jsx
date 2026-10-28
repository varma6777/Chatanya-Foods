import React from 'react';
import SubpageBanner from './SubpageBanner';
import Locations from './Locations';

export default function LocationsPage({ onNavigate }) {
  return (
    <div className="subpage-wrapper">
      <SubpageBanner 
        title="Our Locations"
        subtitle="5 prime dining destinations across Hyderabad: Kukatpally (Flagship), Nizampet, Kondapur, Banjara Hills & AAA Mall"
        breadcrumb="Locations"
        onNavigate={onNavigate}
      />

      <Locations />
    </div>
  );
}
