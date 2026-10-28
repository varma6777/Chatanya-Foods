import React, { useState } from 'react';
import SubpageBanner from './SubpageBanner';
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Phone,
  MessageCircle
} from 'lucide-react';
import { LOCATIONS, RESTAURANT_INFO } from '../data/restaurantData';

export default function ReservationPage({ onNavigate }) {
  const [branch, setBranch] = useState(LOCATIONS[0].name);
  const [guests, setGuests] = useState('4 Guests');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('7:30 PM (Dinner)');
  const [seatingPref, setSeatingPref] = useState('Family AC Dining');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    const msg = `*Table Reservation Request - Chaitanya Food Court*%0A%0A` +
      `*Guest Name:* ${name}%0A` +
      `*Phone Number:* ${phone}%0A` +
      `*Branch:* ${branch}%0A` +
      `*Party Size:* ${guests}%0A` +
      `*Date:* ${date}%0A` +
      `*Time Slot:* ${timeSlot}%0A` +
      `*Seating Preference:* ${seatingPref}%0A` +
      `*Special Notes:* ${notes || 'None'}`;

    window.open(`https://wa.me/91${RESTAURANT_INFO.primaryPhone}?text=${msg}`, '_blank');
    setIsConfirmed(true);
  };

  return (
    <div className="subpage-wrapper">
      <SubpageBanner 
        title="Table Reservation"
        subtitle="Reserve your table at Chaitanya Food Court for a memorable family dining experience with zero waiting time"
        breadcrumb="Reservation"
        onNavigate={onNavigate}
      />

      <div className="container section-padding">
        <div className="reservation-page-card glass-card">
          {isConfirmed ? (
            <div className="reservation-success-pane text-center">
              <div className="success-icon-box">
                <CheckCircle2 size={54} color="#1b8a3b" />
              </div>
              <h3 className="success-title">Table Reservation Prepared!</h3>
              <p className="success-desc">
                Thank you <strong>{name}</strong>! We have dispatched your table reservation request for <strong>{guests}</strong> at our <strong>{branch}</strong> for <strong>{date} ({timeSlot})</strong>.
              </p>
              <p className="success-sub">
                Our front desk executive will contact you at <strong>+91 {phone}</strong> for seating confirmation.
              </p>
              <button onClick={() => setIsConfirmed(false)} className="btn btn-primary">
                Make Another Reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="reservation-full-form">
              <div className="res-intro text-center mb-36">
                <span className="section-label">Book Ahead</span>
                <h3 className="section-title">Select Your Preferred Table</h3>
                <p className="section-subtitle">Guaranteed seating for family feasts, group celebrations, and quiet gatherings.</p>
              </div>

              <div className="res-grid-2">
                <div className="form-group">
                  <label className="form-label"><MapPin size={15} color="var(--orange-primary)" /> Select Branch *</label>
                  <select 
                    value={branch} 
                    onChange={(e) => setBranch(e.target.value)}
                    className="form-select"
                  >
                    {LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.name}>
                        {loc.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label"><Users size={15} color="var(--orange-primary)" /> No. of Attendees *</label>
                  <select 
                    value={guests} 
                    onChange={(e) => setGuests(e.target.value)}
                    className="form-select"
                  >
                    <option>1 Guest</option>
                    <option>2 Guests (Couple)</option>
                    <option>3 Guests</option>
                    <option>4 Guests (Family)</option>
                    <option>5-6 Guests</option>
                    <option>7-10 Guests (Group)</option>
                    <option>10-15 Guests (Party)</option>
                    <option>15+ Large Celebration</option>
                  </select>
                </div>
              </div>

              <div className="res-grid-2">
                <div className="form-group">
                  <label className="form-label"><Calendar size={15} color="var(--orange-primary)" /> Reservation Date *</label>
                  <input 
                    type="date" 
                    required
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label"><Clock size={15} color="var(--orange-primary)" /> Preferred Time Slot *</label>
                  <select 
                    value={timeSlot} 
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="form-select"
                  >
                    <optgroup label="Tiffins / Breakfast (6 AM - 11:30 AM)">
                      <option>8:00 AM</option>
                      <option>9:30 AM</option>
                      <option>10:30 AM</option>
                    </optgroup>
                    <optgroup label="Lunch (11:30 AM - 4:00 PM)">
                      <option>12:30 PM (Lunch)</option>
                      <option>1:30 PM (Lunch)</option>
                      <option>2:30 PM (Lunch)</option>
                      <option>3:30 PM (Lunch)</option>
                    </optgroup>
                    <optgroup label="Dinner (7:00 PM - 11:30 PM)">
                      <option>7:30 PM (Dinner)</option>
                      <option>8:30 PM (Dinner)</option>
                      <option>9:30 PM (Dinner)</option>
                      <option>10:30 PM (Dinner)</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div className="res-grid-2">
                <div className="form-group">
                  <label className="form-label">Your Full Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Anand Murthy"
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="e.g. 9618447733"
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Special Occasion or Seating Requests (Optional)</label>
                <textarea 
                  rows="3"
                  maxLength={180}
                  placeholder="e.g. Birthday anniversary celebration, high chair requested for toddler, quieter corner table..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="form-textarea"
                ></textarea>
                <span className="char-counter">{notes.length} / 180 chars</span>
              </div>

              <button type="submit" className="btn btn-primary w-full submit-reservation-btn">
                <MessageCircle size={18} /> Confirm & Dispatch via WhatsApp / Desk
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
