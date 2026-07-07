import { useState, useEffect } from 'react'
import '../styles/orange_home.css'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import orangePoster from '../assets/orange/orange_poster.png' 

import OrangeProducts from '../components/orange_products'
import OrangeOffers from '../components/orange_offers'
import OrangeFooter from '../components/orange_footer'


function OrangeHome() {
  const { locale, setLocale, t } = useLanguage()
  const [langDropdown, setLangDropdown] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          obs.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    revealElements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [location])

  return (
    <div className="orange-home-wrapper">
      
      <nav className="orange-navbar">
        <div className="orange-nav-right">
          <span className="orange-logo-text">{t('brand')}</span>
          <Link to="/home">{t('nav_about')}</Link>
          <a href="#top" className="orange-nav-active" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{t('nav_fields')}</a>
          <Link to="/home#locations-section">{t('nav_store')}</Link>
          <Link to="/cart">{t('nav_cart')}</Link>
        </div>

        <div className="orange-nav-left">
          <Link to="/login" className="orange-login-btn">{t('nav_login')}</Link>
          <Link to="/signup" className="orange-signup-btn">{t('nav_signup')}</Link>
          
          <div className="orange-lang-selector-container">
            <div className="orange-lang-selector" onClick={() => setLangDropdown(!langDropdown)}>
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

      <section className="orange-hero-section" id="top">
        <div className="poster-container reveal">
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