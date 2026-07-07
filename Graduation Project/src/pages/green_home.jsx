import { useState } from 'react'
import '../styles/green_home.css'
import { Link } from 'react-router-dom'
import greenPoster from '../assets/green/green_poster.png' 

import GreenProducts from '../components/green_products'
import GreenOffers from '../components/green_offers'
import GreenFooter from '../components/green_footer'

function GreenHome() {
  const [langDropdown, setLangDropdown] = useState(false)
  const [currentLang, setCurrentLang] = useState('ar')

  const toggleLang = (lang) => {
    setCurrentLang(lang)
    setLangDropdown(false)
  }

  return (
    <div className="green-home-wrapper">
      
      <nav className="green-navbar">
        <div className="green-nav-right">
          <span className="green-logo-text">صُنع في بنها</span>
          <div className="green-nav-links">
            <Link to="/home">عن المبادرة</Link>
            <a href="#top" className="green-nav-active" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>المجالات</a>
            <Link to="/home#locations-section">منفذ بيع</Link>
            <a href="#cart">سلة التسوق</a>
          </div>
        </div>

        <div className="green-nav-left">
          <Link to="/login" className="green-login-btn">تسجيل الدخول</Link>
          <Link to="/signup" className="green-signup-btn">إنشاء حساب</Link>
          
          <div className="green-lang-selector-container">
            <div className="green-lang-selector" onClick={() => setLangDropdown(!langDropdown)}>
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

      <section className="green-hero-section" id="top">
        <div className="poster-container">
          <img src={greenPoster} alt="صنع في بنها - زراعة" className="main-green-poster" />
        </div>
      </section>

      <GreenOffers />
      <GreenProducts />
      <GreenFooter />

    </div>
  )
}

export default GreenHome