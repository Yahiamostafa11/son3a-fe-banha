import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import '../styles/blue_home.css'
import '../styles/Cart.css'

// Import product images from assets
import prod6 from '../assets/orange/prod6.png'
import b8 from '../assets/blue/b8.jpg'
import g11 from '../assets/green/g11.jpg'

function Cart() {
  const navigate = useNavigate()
  const { locale, setLocale, t } = useLanguage()
  const [langDropdown, setLangDropdown] = useState(false)

  // State for quantities
  const [pillowQty, setPillowQty] = useState(1)
  const [ringQty, setRingQty] = useState(1)
  const [honeyQty, setHoneyQty] = useState(2)
  const [wrapProduct, setWrapProduct] = useState(false)

  // Calculations
  const pillowPrice = 750
  const ringPrice = 2200
  const honeyPrice = 250
  const wrapCost = 50

  const subtotal = 
    (pillowPrice * pillowQty) + 
    (ringPrice * ringQty) + 
    (honeyPrice * honeyQty) + 
    (wrapProduct ? wrapCost : 0)

  // Handlers
  const handleQtyChange = (product, change) => {
    if (product === 'pillow') {
      setPillowQty(prev => Math.max(0, prev + change))
    } else if (product === 'ring') {
      setRingQty(prev => Math.max(0, prev + change))
    } else if (product === 'honey') {
      setHoneyQty(prev => Math.max(0, prev + change))
    }
  }

  // Save details to localStorage to pass to checkout
  const handleCheckout = () => {
    const orderData = {
      items: [
        { id: 'pillow', title: t('طقم وسائد'), type: t('3 قطع بيج وترابي وخردلي'), price: pillowPrice, qty: pillowQty, img: prod6, bgClass: 'orange-item-bg' },
        { id: 'ring', title: t('الخواتم الذكية'), type: t('بلون رصاصي غامق'), price: ringPrice, qty: ringQty, img: b8, bgClass: 'blue-item-bg' },
        { id: 'honey', title: t('عسل نحل طبيعي'), type: t('عسل جبلي نقي'), price: honeyPrice, qty: honeyQty, img: g11, bgClass: 'green-item-bg' }
      ].filter(item => item.qty > 0),
      wrapProduct,
      wrapCost: wrapProduct ? wrapCost : 0,
      subtotal
    }
    localStorage.setItem('bu_graduation_order', JSON.stringify(orderData))
    navigate('/checkout')
  }

  return (
    <div className="cart-page-wrapper">
      <nav className="blue-navbar">
        <div className="blue-nav-right">
          <span className="blue-logo-text">{t('brand')}</span>
          <div className="blue-nav-links">
            <Link to="/home">{t('nav_about')}</Link>
            <Link to="/blue_home">{t('nav_fields')}</Link>
            <Link to="/home#locations-section">{t('nav_store')}</Link>
            <Link to="/cart" className="blue-nav-active">{t('nav_cart')}</Link>
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

      <main className="cart-container">
        <h1 className="cart-title">{t('cart_title')}</h1>

        <div className="cart-items-list">
          {/* Item 1: Pillows (Orange / Art) */}
          {pillowQty > 0 && (
            <div className="cart-item-row orange-item-bg">
              <div className="item-qty-controls">
                <button onClick={() => handleQtyChange('pillow', 1)} className="qty-btn">+</button>
                <span className="qty-number">{String(pillowQty).padStart(2, '0')}</span>
                <button onClick={() => handleQtyChange('pillow', -1)} className="qty-btn">-</button>
              </div>
              <div className="item-price">
                {pillowPrice * pillowQty} {locale === 'ar' ? 'جنية' : 'EGP'}
              </div>
              <div className="item-details">
                <h3>{t('طقم وسائد')}</h3>
                <p>{t('3 قطع بيج وترابي وخردلي')}</p>
              </div>
              <div className="item-image-wrapper">
                <img src={prod6} alt="طقم وسائد" />
              </div>
            </div>
          )}

          {/* Item 2: Smart Rings (Blue / Tech) */}
          {ringQty > 0 && (
            <div className="cart-item-row blue-item-bg">
              <div className="item-qty-controls">
                <button onClick={() => handleQtyChange('ring', 1)} className="qty-btn">+</button>
                <span className="qty-number">{String(ringQty).padStart(2, '0')}</span>
                <button onClick={() => handleQtyChange('ring', -1)} className="qty-btn">-</button>
              </div>
              <div className="item-price">
                {ringPrice * ringQty} {locale === 'ar' ? 'جنية' : 'EGP'}
              </div>
              <div className="item-details">
                <h3>{t('الخواتم الذكية')}</h3>
                <p>{t('بلون رصاصي غامق')}</p>
              </div>
              <div className="item-image-wrapper">
                <img src={b8} alt="الخواتم الذكية" />
              </div>
            </div>
          )}

          {/* Item 3: Honey (Green / Agri) */}
          {honeyQty > 0 && (
            <div className="cart-item-row green-item-bg">
              <div className="item-qty-controls">
                <button onClick={() => handleQtyChange('honey', 1)} className="qty-btn">+</button>
                <span className="qty-number">{String(honeyQty).padStart(2, '0')}</span>
                <button onClick={() => handleQtyChange('honey', -1)} className="qty-btn">-</button>
              </div>
              <div className="item-price">
                {honeyPrice * honeyQty} {locale === 'ar' ? 'جنية' : 'EGP'}
              </div>
              <div className="item-details">
                <h3>{t('عسل نحل طبيعي')}</h3>
                <p>{t('عسل جبلي نقي')}</p>
              </div>
              <div className="item-image-wrapper">
                <img src={g11} alt="عسل نحل طبيعي" />
              </div>
            </div>
          )}
        </div>

        {/* Gift wrapping options */}
        <div className="wrap-option-card">
          <label className="wrap-checkbox-label">
            <span className="wrap-text">{t('cart_wrap_option')}</span>
            <input 
              type="checkbox" 
              checked={wrapProduct} 
              onChange={(e) => setWrapProduct(e.target.checked)} 
              className="wrap-checkbox"
            />
          </label>
        </div>

        {/* Summary Footer */}
        <div className="cart-summary-section">
          <div className="subtotal-row">
            <span className="subtotal-label">{t('cart_subtotal')}</span>
            <span className="subtotal-val">{subtotal} {locale === 'ar' ? 'جنية' : 'EGP'}</span>
          </div>

          <button onClick={handleCheckout} className="checkout-btn" disabled={subtotal === 0}>
            {t('cart_btn_checkout')}
          </button>

          <Link to="/home" className="back-store-link">
            {t('cart_back_store')}
          </Link>
        </div>
      </main>

      {/* Mini Footer */}
      <footer className="cart-mini-footer">
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

export default Cart
