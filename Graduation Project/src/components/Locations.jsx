import '../styles/Locations.css'
import map from '../assets/home/map.png'

function Locations() {
  const locationsList = [
    { id: 1, title: "كلية التجارة – جامعة بنها", className: "pink-item" },
    { id: 2, title: "كلية الفنون التطبيقية – جامعة بنها", className: "blue-item" },
    { id: 3, title: "كايرو فيستيفال سيتي مول", className: "green-item" },
    { id: 4, title: "القاهرة الجديدة (فعاليات وأسواق)", className: "yellow-item" },
    { id: 5, title: "بازار الزمالك (معرض بوب آب)", className: "orange-item" }
  ]

  return (
    <div className="locations-section-wrapper" id="locations-section">
      
      <section className="locations-container">
        
        <div className="sidebar-locations">
          <div className="sidebar-header">
            <h3>منافذ البيع</h3>
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

        <div className="map-container">
          <img src={map} className="map-bg-img" alt="" />
          <span className="pin pin-pink">📍</span>
          <span className="pin pin-blue">📍</span>
          <span className="pin pin-yellow">📍</span>
          <span className="pin pin-orange">📍</span>
          <span className="pin pin-green">📍</span>
          
          <div className="map-tooltip">
            <span className="tooltip-icon">📍</span>
            انقر على أي موقع مباشر للطلب
          </div>
        </div>

      </section>

      <section className="newsletter-container">
        <div className="paper-plane-badge">➔</div>
        
        <h2 className="newsletter-title">
          اشترك للحصول على المعلومات، وآخر الأخبار، وغيرها من العروض المثيرة للاهتمام حول "صُنع في بنها"
        </h2>

        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <button type="submit" className="subscribe-btn">
            اشترك
          </button>
          <div className="input-wrapper">
            <input 
              type="email" 
              placeholder="بريدك الإلكتروني" 
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