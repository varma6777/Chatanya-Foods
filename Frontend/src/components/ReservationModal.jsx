import React, { useState } from 'react';
import { 
  X, 
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

export default function ReservationModal({ isOpen, onClose }) {
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

  if (!isOpen) return null;

  const handleBooking = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Send formatted reservation to WhatsApp
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

  const handleReset = () => {
    setIsConfirmed(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-top-bar">
          <div className="modal-title-wrap">
            <Calendar size={20} color="var(--orange-primary)" />
            <h3 className="modal-heading">Table Reservation</h3>
          </div>
          <button onClick={onClose} className="modal-close-icon" aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        {isConfirmed ? (
          <div className="reservation-success-pane text-center">
            <div className="success-icon-box">
              <CheckCircle2 size={48} color="#1b8a3b" />
            </div>
            <h4 className="success-title">Reservation Request Forwarded!</h4>
            <p className="success-desc">
              Thank you <strong>{name}</strong>! Your table reservation details for <strong>{guests}</strong> at our <strong>{branch}</strong> on <strong>{date} ({timeSlot})</strong> have been prepared.
            </p>
            <p className="success-sub">
              Our reservation manager will confirm your table seating via phone or WhatsApp at <strong>+91 {phone}</strong>.
            </p>
            <div className="success-actions">
              <button onClick={handleReset} className="btn btn-primary">
                Done & Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="reservation-form">
            <p className="modal-intro-text">
              Reserve your table at Chaitanya Food Court for a memorable family dining experience with zero wait times.
            </p>

            <div className="res-grid-2">
              {/* Branch */}
              <div className="form-group">
                <label className="form-label">Select Branch *</label>
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

              {/* Number of Attendees */}
              <div className="form-group">
                <label className="form-label">No. of Attendees *</label>
                <select 
                  value={guests} 
                  onChange={(e) => setGuests(e.target.value)}
                  className="form-select"
                >
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5-6 Guests</option>
                  <option>7-10 Guests</option>
                  <option>10-15 Guests</option>
                  <option>15+ Large Group / Party</option>
                </select>
              </div>
            </div>

            <div className="res-grid-2">
              {/* Date */}
              <div className="form-group">
                <label className="form-label">Reservation Date *</label>
                <input 
                  type="date" 
                  required
                  value={date} 
                  onChange={(e) => setDate(e.target.value)}
                  className="form-input"
                />
              </div>

              {/* Time Slot */}
              <div className="form-group">
                <label className="form-label">Preferred Time Slot *</label>
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
              {/* Name */}
              <div className="form-group">
                <label className="form-label">Your Full Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Vikram Reddy"
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </div>

              {/* Phone */}
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

            {/* Special Request / Message */}
            <div className="form-group">
              <label className="form-label">Special Requests (Optional)</label>
              <textarea 
                rows="2"
                maxLength={180}
                placeholder="Birthday celebration, high chair needed, dietary restrictions..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="form-textarea"
              ></textarea>
              <span className="char-counter">{notes.length} / 180 chars</span>
            </div>

            <button type="submit" className="btn btn-primary w-full submit-reservation-btn">
              <MessageCircle size={18} /> Confirm & Send via WhatsApp
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
