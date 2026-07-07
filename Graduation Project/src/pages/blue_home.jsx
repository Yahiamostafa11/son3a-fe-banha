import { useState } from 'react'
import '../styles/blue_home.css'
import { Link } from 'react-router-dom'
import bluePoster from '../assets/blue/blue_poster.png' 

import BlueProducts from '../components/blue_products'
import BlueOffers from '../components/blue_offers'
import BlueFooter from '../components/blue_footer'

function BlueHome() {
  const [langDropdown, setLangDropdown] = useState(false)
  const [currentLang, setCurrentLang] = useState('ar')

  const toggleLang = (lang) => {
    setCurrentLang(lang)
    setLangDropdown(false)
  }

  return (
    <div className="blue-home-wrapper">
      
      <nav className="blue-navbar">
        <div className="blue-nav-right">
          <span className="blue-logo-text">صُنع في بنها</span>
          <div className="blue-nav-links">
            <Link to="/home">عن المبادرة</Link>
            <a href="#top" className="blue-nav-active" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>المجالات</a>
            <Link to="/home#locations-section">منفذ بيع</Link>
            <a href="#cart">سلة التسوق</a>
          </div>
        </div>

        <div className="blue-nav-left">
          <Link to="/login" className="blue-login-btn">تسجيل الدخول</Link>
          <Link to="/signup" className="blue-signup-btn">إنشاء حساب</Link>
          
          <div className="blue-lang-selector-container">
            <div className="blue-lang-selector" onClick={() => setLangDropdown(!langDropdown)}>
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

      <section className="blue-hero-section" id="top">
        <div className="poster-container">
          <img src={bluePoster} alt="صنع في بنها - هندسة" className="main-blue-poster" />
        </div>
      </section>

      <BlueOffers />
      <BlueProducts />
      <BlueFooter />

    </div>
  )
}

export default BlueHome