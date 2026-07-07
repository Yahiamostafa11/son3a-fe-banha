import { useState, useEffect } from 'react'
import '../styles/green_home.css'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import greenPoster from '../assets/green/green_poster.png' 

import GreenProducts from '../components/green_products'
import GreenOffers from '../components/green_offers'
import GreenFooter from '../components/green_footer'

function GreenHome() {
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
    <div className="green-home-wrapper">
      
      <nav className="green-navbar">
        <div className="green-nav-right">
          <span className="green-logo-text">{t('brand')}</span>
          <div className="green-nav-links">
            <Link to="/home">{t('nav_about')}</Link>
            <a href="#top" className="green-nav-active" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{t('nav_fields')}</a>
            <Link to="/home#locations-section">{t('nav_store')}</Link>
            <Link to="/cart">{t('nav_cart')}</Link>
          </div>
        </div>

        <div className="green-nav-left">
          <Link to="/login" className="green-login-btn">{t('nav_login')}</Link>
          <Link to="/signup" className="green-signup-btn">{t('nav_signup')}</Link>
          
          <div className="green-lang-selector-container">
            <div className="green-lang-selector" onClick={() => setLangDropdown(!langDropdown)}>
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

      <section className="green-hero-section" id="top">
        <div className="poster-container reveal">
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