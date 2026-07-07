import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import '../styles/blue_home.css'
import '../styles/OrderConfirmed.css'

// Import thumbs-up robot image
import thumbsUpRobot from '../assets/home/thumbs_up_robot.jpg'

function OrderConfirmed() {
  const { locale, setLocale, t } = useLanguage()
  const [langDropdown, setLangDropdown] = useState(false)
  const [orderNumber, setOrderNumber] = useState('29120032912')

  useEffect(() => {
    const savedOrderNo = localStorage.getItem('bu_last_order_no')
    if (savedOrderNo) {
      setOrderNumber(savedOrderNo)
    }
  }, [])

  return (
    <div className="order-confirmed-wrapper">
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

      <main className="confirmation-content">
        
        {/* Robot visual with overlay text */}
        <div className="robot-visual-container">
          <img src={thumbsUpRobot} alt="شكراً على طلبك" className="robot-character" />
          
          {/* Overlay text positioned directly inside the robot's screen head */}
          <div className="screen-text-overlay">
            <span className="order-no-text">{t('confirmed_order_label')} ({orderNumber})</span>
            <h2 className="thank-you-title">{t('confirmed_thank_you')}</h2>
            <p className="confirmation-msg">
              {t('confirmed_msg')}
            </p>
          </div>
        </div>

        {/* Back button to go to Home */}
        <div className="back-home-btn-container">
          <Link to="/home" className="go-home-btn">
            {t('confirmed_btn_home')}
          </Link>
        </div>
      </main>

      {/* Mini Footer */}
      <footer className="confirmed-mini-footer">
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

export default OrderConfirmed
