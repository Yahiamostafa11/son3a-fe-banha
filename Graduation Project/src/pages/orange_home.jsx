import { useState } from 'react'
import '../styles/orange_home.css'
import { Link } from 'react-router-dom'
import orangePoster from '../assets/orange/orange_poster.png' 

import OrangeProducts from '../components/orange_products'
import OrangeOffers from '../components/orange_offers'
import OrangeFooter from '../components/orange_footer'


function OrangeHome() {
  const [langDropdown, setLangDropdown] = useState(false)
  const [currentLang, setCurrentLang] = useState('ar')

  const toggleLang = (lang) => {
    setCurrentLang(lang)
    setLangDropdown(false)
  }

  return (
    <div className="orange-home-wrapper">
      
      <nav className="orange-navbar">
        <div className="orange-nav-right">
          <span className="orange-logo-text">صُنع في بنها</span>
          <Link to="/home">عن المبادرة</Link>
          <a href="#top" className="orange-nav-active" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>المجالات</a>
          <Link to="/home#locations-section">منفذ بيع</Link>
          <a href="#cart">سلة التسوق</a>
        </div>

        <div className="orange-nav-left">
          <Link to="/login" className="orange-login-btn">تسجيل الدخول</Link>
          <Link to="/signup" className="orange-signup-btn">إنشاء حساب</Link>
          
          <div className="orange-lang-selector-container">
            <div className="orange-lang-selector" onClick={() => setLangDropdown(!langDropdown)}>
              <span>{currentLang === 'ar' ? 'ع' : 'EN'}</span>
              <span className={`arrow-down ${langDropdown ? 'open' : ''}`}>⌃</span>
            </div>
            
            {langDropdown && (
              <div className="lang-dropdown-menu">
                <div onClick={() => toggleLang('ar')}>عربي (ع)</div>
                <div onClick={() => toggleLang('en')}>English (EN)</div>
              </div>
            )}
          </div>
        </div>
      </nav>

      <section className="orange-hero-section" id="top">
        <div className="poster-container">
          <img src={orangePoster} alt="صنع في بنها - فنون تطبيقية" className="main-orange-poster" />
        </div>
      </section>

      <OrangeOffers />
      <OrangeProducts />
      <OrangeFooter />
      

    </div>
  )
}

export default OrangeHome