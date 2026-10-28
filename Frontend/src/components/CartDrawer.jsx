import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Tag, 
  ArrowRight, 
  Percent, 
  CheckCircle2, 
  ExternalLink,
  MessageCircle,
  MapPin
} from 'lucide-react';
import { RESTAURANT_INFO, LOCATIONS } from '../data/restaurantData';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQty, 
  onRemoveItem, 
  onClearCart 
}) {
  const [orderType, setOrderType] = useState('takeaway'); // 'takeaway' | 'delivery'
  const [selectedBranch, setSelectedBranch] = useState(LOCATIONS[0].name);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  if (!isOpen) return null;

  // Pricing calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  // 25% discount as per official promo FLAT25
  const discountPercent = 25;
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const packagingFee = subtotal > 0 ? 30 : 0;
  const grandTotal = Math.max(0, subtotal - discountAmount + packagingFee);

  const handleCheckoutWhatsApp = () => {
    if (cartItems.length === 0) return;

    let itemsListText = '';
    cartItems.forEach((item, index) => {
      itemsListText += `${index + 1}. ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}%0A`;
    });

    const orderMsg = 
      `*New Online Order - Chaitanya Food Court*%0A%0A` +
      `*Customer:* ${customerName || 'Guest'}%0A` +
      `*Phone:* ${customerPhone || 'Not provided'}%0A` +
      `*Order Type:* ${orderType.toUpperCase()}%0A` +
      `*Branch:* ${selectedBranch}%0A` +
      (orderType === 'delivery' ? `*Delivery Address:* ${deliveryAddress}%0A` : '') +
      `%0A*Items Ordered:*%0A${itemsListText}%0A` +
      `*Subtotal:* ₹${subtotal}%0A` +
      `*Discount (FLAT25 - 25% Off):* -₹${discountAmount}%0A` +
      `*Packaging Fee:* ₹${packagingFee}%0A` +
      `*Total Amount to Pay:* *₹${grandTotal}*%0A%0A` +
      `Please confirm my order and payment options!`;

    window.open(`https://wa.me/91${RESTAURANT_INFO.primaryPhone}?text=${orderMsg}`, '_blank');
  };

  return (
    <div className="cart-drawer-overlay" onClick={onClose}>
      <div className="cart-drawer-panel glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="cart-header">
          <div className="cart-header-title">
            <ShoppingBag size={20} color="var(--orange-primary)" />
            <h3>Your Order</h3>
            <span className="cart-item-count">
              {cartItems.reduce((acc, it) => acc + it.quantity, 0)} items
            </span>
          </div>
          <button onClick={onClose} className="drawer-close-btn" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Promo Code Applied Bar */}
        <div className="cart-discount-banner">
          <div className="discount-icon-badge">
            <Percent size={14} />
          </div>
          <div className="discount-info">
            <strong>Coupon FLAT25 Applied!</strong>
            <span>Flat 25% discount activated on all online orders</span>
          </div>
        </div>

        {/* Order Items List */}
        <div className="cart-items-scroller">
          {cartItems.length === 0 ? (
            <div className="cart-empty-view text-center">
              <ShoppingBag size={48} className="empty-cart-icon" />
              <h4>Your order tray is empty</h4>
              <p>Explore our menu and add authentic Hyderabadi biryanis, starters, or tiffins.</p>
              <button 
                onClick={onClose}
                className="btn btn-primary btn-sm"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-row">
                  <div className="cart-item-main">
                    <div className="cart-item-name-row">
                      <span className={`dish-diet-indicator ${item.isVeg ? 'veg' : 'non-veg'}`}>
                        <span className="diet-dot"></span>
                      </span>
                      <h4 className="cart-item-title">{item.name}</h4>
                    </div>
                    <div className="cart-item-unit-price">
                      ₹{item.price} each
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="cart-item-qty-actions">
                    <button 
                      onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                      className="qty-btn"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="qty-number">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                      className="qty-btn"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <div className="cart-item-total">
                    ₹{item.price * item.quantity}
                  </div>

                  <button 
                    onClick={() => onRemoveItem(item.id)}
                    className="cart-item-remove-btn"
                    title="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Checkout Options and Summary */}
        {cartItems.length > 0 && (
          <div className="cart-footer-pane">
            {/* Order Type Toggle */}
            <div className="order-type-tabs">
              <button
                onClick={() => setOrderType('takeaway')}
                className={`order-tab ${orderType === 'takeaway' ? 'active' : ''}`}
              >
                Self Takeaway
              </button>
              <button
                onClick={() => setOrderType('delivery')}
                className={`order-tab ${orderType === 'delivery' ? 'active' : ''}`}
              >
                Home Delivery
              </button>
            </div>

            {/* Branch Selection */}
            <div className="cart-branch-selector">
              <label className="cart-field-label">
                <MapPin size={14} color="var(--orange-primary)" /> Select Branch
              </label>
              <select 
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="cart-select"
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc.id} value={loc.name}>
                    {loc.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Quick Customer Details */}
            <div className="cart-customer-fields">
              <input 
                type="text" 
                placeholder="Your Name (e.g. Rahul)"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="cart-input"
              />
              <input 
                type="tel" 
                placeholder="Phone (e.g. 9618447733)"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="cart-input"
              />
              {orderType === 'delivery' && (
                <input 
                  type="text" 
                  placeholder="Delivery Address & Landmark"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  className="cart-input w-full"
                />
              )}
            </div>

            {/* Bill Summary */}
            <div className="cart-bill-summary">
              <div className="bill-row">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="bill-row discount">
                <span>Flat 25% Off (FLAT25)</span>
                <span>-₹{discountAmount}</span>
              </div>
              <div className="bill-row">
                <span>Container & Packaging</span>
                <span>₹{packagingFee}</span>
              </div>
              <div className="bill-divider"></div>
              <div className="bill-row grand-total">
                <strong>To Pay</strong>
                <strong>₹{grandTotal}</strong>
              </div>
            </div>

            {/* Checkout Action Buttons */}
            <div className="cart-checkout-actions">
              <button 
                onClick={handleCheckoutWhatsApp}
                className="btn btn-whatsapp w-full"
              >
                <MessageCircle size={18} /> Place Order via WhatsApp
              </button>

              <a 
                href={RESTAURANT_INFO.onlineOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark w-full btn-sm"
              >
                <span>Or Order on Portal</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
