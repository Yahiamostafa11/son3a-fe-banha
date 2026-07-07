import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { api } from '../services/api'
import { useLanguage } from '../context/LanguageContext'
import '../styles/blue_home.css'
import '../styles/Checkout.css'

// Import images
import prod6 from '../assets/orange/prod6.png'
import b8 from '../assets/blue/b8.jpg'
import g11 from '../assets/green/g11.jpg'

function Checkout() {
  const navigate = useNavigate()
  const { locale, setLocale, t } = useLanguage()
  const [langDropdown, setLangDropdown] = useState(false)
  const [order, setOrder] = useState(null)
  const [promoCode, setPromoCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const [loading, setLoading] = useState(false)

  // Form states
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('مصر')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  
  const [cardNumber, setCardNumber] = useState('')
  const [expDate, setExpDate] = useState('')
  const [cvv, setCvv] = useState('')
  const [cardName, setCardName] = useState('')

  useEffect(() => {
    const savedOrder = localStorage.getItem('bu_graduation_order')
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder))
    } else {
      // Mock fallback order matching the screenshot
      const defaultOrder = {
        items: [
          { id: 'pillow', title: 'طقم وسائد', type: '3 قطع بيج وترابي وخردلي', price: 750, qty: 1, img: prod6, bgClass: 'orange-item-bg' },
          { id: 'ring', title: 'الخواتم الذكية', type: 'بلون رصاصي غامق', price: 2200, qty: 1, img: b8, bgClass: 'blue-item-bg' },
          { id: 'honey', title: 'عسل نحل طبيعي', type: 'عسل جبلي نقي', price: 250, qty: 2, img: g11, bgClass: 'green-item-bg' }
        ],
        wrapProduct: false,
        wrapCost: 0,
        subtotal: 3450
      }
      setOrder(defaultOrder)
    }
  }, [])

  if (!order) return null

  const shippingCost = 100
  const total = order.subtotal + shippingCost - discount

  const handleApplyPromo = (e) => {
    e.preventDefault()
    if (promoCode.trim().toLowerCase() === 'son3a') {
      setDiscount(Math.round(order.subtotal * 0.1)) // 10% off
      alert(locale === 'ar' ? 'تم تطبيق الكود بنجاح! خصم 10%' : 'Promo code applied successfully! 10% discount')
    } else {
      alert(locale === 'ar' ? 'كود خصم غير صحيح' : 'Invalid promo code')
    }
  }

  const handleSubmitPay = async (e) => {
    e.preventDefault()
    setLoading(true)

    const orderNo = Math.floor(10000000000 + Math.random() * 90000000000).toString()
    
    const orderPayload = {
      orderNumber: orderNo,
      email,
      shippingAddress: {
        country,
        firstName,
        lastName,
        address,
        city,
        zipCode
      },
      items: order.items.map(item => ({
        productId: item.id,
        title: item.title,
        price: item.price,
        qty: item.qty
      })),
      wrapProduct: order.wrapProduct,
      subtotal: order.subtotal,
      shippingCost,
      total
    }

    try {
      await api.orders.create(orderPayload)
      localStorage.setItem('bu_last_order_no', orderNo)
      localStorage.removeItem('bu_graduation_order') // Clear cart
      navigate('/order-confirmed')
    } catch (err) {
      alert((locale === 'ar' ? 'فشل إتمام العملية: ' : 'Process failed: ') + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="checkout-page-wrapper">
      <nav className="blue-navbar">
        <div className="blue-nav-right">
          <span className="blue-logo-text">{t('brand')}</span>
          <div className="blue-nav-links">
            <Link to="/home">{t('nav_about')}</Link>
            <Link to="/blue_home">{t('nav_fields')}</Link>
            <Link to="/home#locations-section">{t('nav_store')}</Link>
            <Link to="/cart">{t('nav_cart')}</Link>
          </div>
        </div>

        <div className="blue-nav-left">
          <Link to="/login" className="blue-login-btn">{t('nav_login')}</Link>
          <Link to="/signup" className="blue-signup-btn">{t('nav_signup')}</Link>
          
          <div className="blue-lang-selector-container">
            <div className="blue-lang-selector" onClick={() => setLangDropdown(!langDropdown)}>
              <span>{locale === 'ar' ? 'ع' : 'EN'}</span>
              <span className={`arrow-down ${langDropdown ? 'open' : ''}`}>⌃</span>
            </div>
            
            {langDropdown && (
              <div className="lang-dropdown-menu">
                <div onClick={() => { setLocale('ar'); setLangDropdown(false); }}>عربي (ع)</div>
                <div onClick={() => { setLocale('en'); setLangDropdown(false); }}>English (EN)</div>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="checkout-container">
        <h1 className="checkout-title">{t('checkout_title')}</h1>

        <div className="checkout-grid">
          {/* Right Column: Checkout Forms */}
          <form className="checkout-form-column" onSubmit={handleSubmitPay}>
            {/* Contact Info Panel */}
            <div className="form-panel">
              <div className="panel-header">
                <h2>{t('checkout_panel_contact')}</h2>
                <Link to="/login" className="panel-login-link">{t('auth_have_account')}</Link>
              </div>
              <input 
                type="email" 
                placeholder={t('auth_email_placeholder')} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="checkout-input"
                required
              />
            </div>

            {/* Shipping Address Panel */}
            <div className="form-panel">
              <h2>{t('checkout_panel_shipping')}</h2>
              
              <select 
                value={country} 
                onChange={(e) => setCountry(e.target.value)} 
                className="checkout-select"
              >
                <option value="مصر">{t('egypt')}</option>
                <option value="السعودية">{t('saudi')}</option>
                <option value="الإمارات">{t('uae')}</option>
              </select>

              <div className="input-row">
                <input 
                  type="text" 
                  placeholder={t('checkout_input_firstname')} 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="checkout-input"
                  required
                />
                <input 
                  type="text" 
                  placeholder={t('checkout_input_lastname')} 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="checkout-input"
                  required
                />
              </div>

              <input 
                type="text" 
                placeholder={t('checkout_input_address')} 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="checkout-input"
                required
              />

              <div className="input-row">
                <input 
                  type="text" 
                  placeholder={t('checkout_input_city')} 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="checkout-input"
                  required
                />
                <input 
                  type="text" 
                  placeholder={t('checkout_input_zip')} 
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="checkout-input"
                  required
                />
              </div>

              <label className="save-info-checkbox">
                <input type="checkbox" className="panel-checkbox" />
                <span>{t('checkout_save_info')}</span>
              </label>
            </div>

            {/* Payment Details Panel */}
            <div className="form-panel">
              <h2>{t('checkout_panel_payment')}</h2>
              
              <div className="payment-method-selector">
                <span className="selected-method-label">{t('checkout_payment_card')}</span>
              </div>

              <div className="card-number-wrapper">
                <input 
                  type="text" 
                  placeholder={t('checkout_card_num')} 
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="checkout-input card-input"
                  maxLength="19"
                  required
                />
                <span className="lock-icon">🔒</span>
              </div>

              <div className="input-row">
                <input 
                  type="text" 
                  placeholder={t('checkout_card_exp')} 
                  value={expDate}
                  onChange={(e) => setExpDate(e.target.value)}
                  className="checkout-input"
                  maxLength="5"
                  required
                />
                <input 
                  type="password" 
                  placeholder={t('checkout_card_cvv')} 
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="checkout-input"
                  maxLength="4"
                  required
                />
              </div>

              <input 
                type="text" 
                placeholder={t('checkout_card_holder')} 
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                className="checkout-input"
                required
              />

              <label className="save-info-checkbox">
                <input type="checkbox" className="panel-checkbox" />
                <span>{t('checkout_save_info')}</span>
              </label>
            </div>

            {/* Submit payment */}
            <button type="submit" className="pay-now-btn" disabled={loading}>
              {loading ? (locale === 'ar' ? 'جاري إتمام الطلب...' : 'Processing...') : t('checkout_btn_pay')}
            </button>
          </form>

          {/* Left Column: Order Summary */}
          <div className="checkout-summary-column">
            <div className="summary-items-list">
              {order.items.map((item) => (
                <div key={item.id} className="summary-item-card">
                  <div className="summary-item-image">
                    <img src={item.img} alt={item.title} />
                    <span className="item-qty-badge">{item.qty}</span>
                  </div>
                  <div className="summary-item-info">
                    <h3>{t(item.title)}</h3>
                    <p>{t(item.type)}</p>
                  </div>
                  <div className="summary-item-price">
                    {item.price * item.qty} {locale === 'ar' ? 'جنية' : 'EGP'}
                  </div>
                </div>
              ))}
            </div>

            {/* Promo Code Input */}
            <form className="promo-code-form" onSubmit={handleApplyPromo}>
              <button type="submit" className="apply-promo-btn">
                {t('checkout_promo_apply')}
              </button>
              <input 
                type="text" 
                placeholder={t('checkout_promo_placeholder')} 
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="promo-input"
              />
            </form>

            {/* Cost Breakdown */}
            <div className="cost-breakdown-section">
              <div className="cost-row">
                <span className="cost-label">{t('checkout_subtotal')}</span>
                <span className="cost-value">{order.subtotal} {locale === 'ar' ? 'جنية' : 'EGP'}</span>
              </div>
              {discount > 0 && (
                <div className="cost-row discount-row">
                  <span className="cost-label">{t('checkout_discount')}</span>
                  <span className="cost-value">-{discount} {locale === 'ar' ? 'جنية' : 'EGP'}</span>
                </div>
              )}
              <div className="cost-row">
                <span className="cost-label">{t('checkout_shipping')}</span>
                <span className="cost-value">{shippingCost} {locale === 'ar' ? 'جنية' : 'EGP'}</span>
              </div>
              <div className="cost-row total-row">
                <span className="cost-label">{t('checkout_total')}</span>
                <span className="cost-value">{total} {locale === 'ar' ? 'جنية' : 'EGP'}</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mini Footer */}
      <footer className="checkout-mini-footer">
        <div className="footer-grid">
          <div className="footer-links">
            <h3>{t('footer_contact')}</h3>
            <p>madeinBanha@bu.edu.eg</p>
            <p>643 25</p>
            <p>{t('footer_university')}</p>
          </div>
          <div className="footer-copyright">
            {t('footer_copyright')}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Checkout
