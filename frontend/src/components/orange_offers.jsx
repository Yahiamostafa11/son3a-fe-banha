import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/orange_offers.css'
import orangeGirl from '../assets/orange/orange_girl.png'

function OrangeOffers() {
  const { t } = useLanguage()
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 6,
    minutes: 5,
    seconds: 30
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        clearInterval(timer)
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatNumber = num => String(num).padStart(2, '0')

  return (
    <section className="monthly-offers-section">
      <div className="offers-container" style={{ backgroundColor: '#e06d53' }}>
        
        <div className="character-side">
          <img src={orangeGirl} alt="شخصية فنية" className="painter-character reveal-left" />
        </div>

        <div className="content-side reveal-right">
          <h2 className="offers-main-title">{t('dept_offers_title')}</h2>
          
          <div className="discount-badge-row">
            <div className="gold-discount-badge">
              <span className="gold-num">25%</span>
              <span className="gold-word">{t('dept_offers_discount')}</span>
            </div>
            <p className="discount-text">{t('offer_discount_text')}</p>
          </div>

          <button className="buy-now-btn" style={{ backgroundColor: '#bd4a31' }}>{t('dept_offers_btn')}</button>

          <div className="countdown-wrapper">
            <p className="countdown-title">{t('dept_offers_countdown')}</p>
            <div className="timer-grid">
              <div className="time-box">
                <div className="num-card" style={{ color: '#e06d53' }}>{formatNumber(timeLeft.seconds)}</div>
                <span>{t('countdown_seconds')}</span>
              </div>
              <div className="time-box">
                <div className="num-card" style={{ color: '#e06d53' }}>{formatNumber(timeLeft.minutes)}</div>
                <span>{t('countdown_minutes')}</span>
              </div>
              <div className="time-box">
                <div className="num-card" style={{ color: '#e06d53' }}>{formatNumber(timeLeft.hours)}</div>
                <span>{t('countdown_hours')}</span>
              </div>
              <div className="time-box">
                <div className="num-card" style={{ color: '#e06d53' }}>{formatNumber(timeLeft.days)}</div>
                <span>{t('countdown_days')}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default OrangeOffers