import { useState, useEffect } from 'react'
import '../styles/blue_home.css'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import bluePoster from '../assets/blue/blue_poster.png' 

import BlueProducts from '../components/blue_products'
import BlueOffers from '../components/blue_offers'
import BlueFooter from '../components/blue_footer'

function BlueHome() {
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
    <div className="blue-home-wrapper">
      
      <nav className="blue-navbar">
        <div className="blue-nav-right">
          <span className="blue-logo-text">{t('brand')}</span>
          <div className="blue-nav-links">
            <Link to="/home">{t('nav_about')}</Link>
            <a href="#top" className="blue-nav-active" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{t('nav_fields')}</a>
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

      <section className="blue-hero-section" id="top">
        <div className="poster-container reveal">
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