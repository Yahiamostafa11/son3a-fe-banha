import { useLanguage } from '../context/LanguageContext'
import '../styles/green_footer.css'

function GreenFooter() {
  const { t } = useLanguage()

  const testimonials = [
    {
      id: 1,
      name: t('t1_n'),
      handle: 'sara.mansour88',
      text: t('t1_t'),
      bg: 'white',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
    },
    {
      id: 2,
      name: t('t2_n'),
      handle: 'k.alamri.archite',
      text: t('t2_t'),
      bg: 'orange',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
    },
    {
      id: 3,
      name: t('t3_n'),
      handle: 'karem.yahia9',
      text: t('t3_t'),
      bg: 'white',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100'
    },
    {
      id: 4,
      name: t('t4_n'),
      handle: 'omarablicki8',
      text: t('t4_t'),
      bg: 'orange',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100'
    },
    {
      id: 5,
      name: t('t5_n'),
      handle: 'ezzeldeen10',
      text: t('t5_t'),
      bg: 'orange',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100'
    },
    {
      id: 6,
      name: t('t6_n'),
      handle: 'hind.salim9',
      text: t('t6_t'),
      bg: 'white',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100'
    },
    {
      id: 7,
      name: t('t7_n'),
      handle: 'nadanaaser10',
      text: t('t7_t'),
      bg: 'orange',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'
    },
    {
      id: 8,
      name: t('t8_n'),
      handle: 'lailasayed14',
      text: t('t8_t'),
      bg: 'white',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100'
    }
  ]

  return (
    <div className="footer-section-wrapper">
      <section className="testimonials-section reveal">
        <h2 className="testimonials-title">{t('testimonials_title')}</h2>
        <p className="testimonials-subtitle">
          "{t('testimonials_subtitle')}"
        </p>
        <div className="masonry-grid">
          {testimonials.map(item => (
            <div key={item.id} className={`testimonial-card ${item.bg}-card`}>
              <div className="card-header">
                <img src={item.avatar} alt={item.name} className="user-avatar" />
                <div className="user-info">
                  <h3>{item.name}</h3>
                  <span>@{item.handle}</span>
                </div>
              </div>
              <p className="card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="features-section reveal">
        <div className="features-container">
          <div className="feature-item">
            <div className="feature-icon">🎧</div>
            <div className="feature-text">
              <h4>{t('feature_support')}</h4>
              <p>{t('feature_support_desc')}</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📦</div>
            <div className="feature-text">
              <h4>{t('feature_shipping')}</h4>
              <p>{t('feature_shipping_desc')}</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🛡️</div>
            <div className="feature-text">
              <h4>{t('feature_warranty')}</h4>
              <p>{t('feature_warranty_desc')}</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">⭐</div>
            <div className="feature-text">
              <h4>{t('feature_quality')}</h4>
              <p>{t('feature_quality_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="main-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">{t('brand')}</h2>
            <p className="brand-desc">{t('footer_desc')}</p>
          </div>
          <div className="footer-links">
              <h3>{t('footer_contact')}</h3>
              <p>madeinBanha@bu.edu.eg</p>
              <p>25 643</p>
              <p>{t('footer_university')}</p>
          </div>
          <div className="footer-apps">
            <div className="social-icons">
              <span className="social-icon">f</span>
              <span className="social-icon">📸</span>
              <span className="social-icon">🐦</span>
            </div>
            <h3>{t('footer_explore_app')}</h3>
            <div className="app-buttons">
              <div className="app-btn">Google Play</div>
              <div className="app-btn">App Store</div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">{t('footer_copyright')}</div>
      </footer>
    </div>
  )
}

export default GreenFooter