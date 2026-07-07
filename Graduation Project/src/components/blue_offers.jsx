import { useState, useEffect } from 'react'
import '../styles/blue_offers.css'
import blueBoy from '../assets/blue/blue_boy.png'

function BlueOffers() {
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
      <div className="offers-container" style={{ backgroundColor: '#2563eb' }}>
        <div className="character-side">
          <img src={blueBoy} alt="شخصية هندسية" className="painter-character" />
        </div>
        <div className="content-side">
          <h2 className="offers-main-title">عروض الشهر</h2>
          <div className="discount-badge-row">
            <div className="gold-discount-badge">
              <span className="gold-num">25%</span>
              <span className="gold-word">خصم</span>
            </div>
            <p className="discount-text">احصل على خصم عند شراء لوحة جدارية مع مجموعة فراريش احترافية متنوعة الأحجام</p>
          </div>
          
          <button className="buy-now-btn" style={{ backgroundColor: '#1d4ed8' }}>اشتري الآن</button>
          
          <div className="countdown-wrapper">
            <p className="countdown-title">أسرع، قبل فوات الأوان!</p>
            <div className="timer-grid">
              <div className="time-box">
                <div className="num-card" style={{ color: '#2563eb' }}>{formatNumber(timeLeft.seconds)}</div>
                <span>ثانية</span>
              </div>
              <div className="time-box">
                <div className="num-card" style={{ color: '#2563eb' }}>{formatNumber(timeLeft.minutes)}</div>
                <span>دقيقة</span>
              </div>
              <div className="time-box">
                <div className="num-card" style={{ color: '#2563eb' }}>{formatNumber(timeLeft.hours)}</div>
                <span>ساعة</span>
              </div>
              <div className="time-box">
                <div className="num-card" style={{ color: '#2563eb' }}>{formatNumber(timeLeft.days)}</div>
                <span>يوم</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlueOffers