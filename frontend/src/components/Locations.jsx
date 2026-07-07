import '../styles/Locations.css'
import { useLanguage } from '../context/LanguageContext'
import map from '../assets/home/map.png'

function Locations() {
  const { t } = useLanguage()

  const translatedLocations = t('locations_items') || []

  const locationsList = [
    { id: 1, title: translatedLocations[0] || "كلية التجارة – جامعة بنها", className: "pink-item" },
    { id: 2, title: translatedLocations[1] || "كلية الفنون التطبيقية – جامعة بنها", className: "blue-item" },
    { id: 3, title: translatedLocations[2] || "كايرو فيستيفال سيتي مول", className: "green-item" },
    { id: 4, title: translatedLocations[3] || "القاهرة الجديدة (فعاليات وأسواق)", className: "yellow-item" },
    { id: 5, title: translatedLocations[4] || "بازار الزمالك (معرض بوب آب)", className: "orange-item" }
  ]

  return (
    <div className="locations-section-wrapper" id="locations-section">
      
      <section className="locations-container">
        
        <div className="sidebar-locations reveal-right">
          <div className="sidebar-header">
            <h3>{t('loc_title')}</h3>
            <span className="dot-icon">•</span>
          </div>
          <div className="locations-list">
            {locationsList.map((loc) => (
              <div key={loc.id} className={`location-item ${loc.className}`}>
                <p>{loc.title}</p>
                <div className="cart-icon-wrapper">
                  <span className="cart-icon">🛒</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="map-container reveal-left">
          <img src={map} className="map-bg-img" alt="" />
          <span className="pin pin-pink">📍</span>
          <span className="pin pin-blue">📍</span>
          <span className="pin pin-yellow">📍</span>
          <span className="pin pin-orange">📍</span>
          <span className="pin pin-green">📍</span>
          
          <div className="map-tooltip">
            <span className="tooltip-icon">📍</span>
            {t('loc_tooltip')}
          </div>
        </div>

      </section>

      <section className="newsletter-container reveal">
        <div className="paper-plane-badge">➔</div>
        
        <h2 className="newsletter-title">
          {t('newsletter_header')}
        </h2>

        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <button type="submit" className="subscribe-btn">
            {t('newsletter_btn')}
          </button>
          <div className="input-wrapper">
            <input 
              type="email" 
              placeholder={t('newsletter_placeholder')} 
              className="newsletter-input"
              required 
            />
            <span className="mail-icon">✉</span>
          </div>
        </form>
      </section>

    </div>
  )
}

export default Locations