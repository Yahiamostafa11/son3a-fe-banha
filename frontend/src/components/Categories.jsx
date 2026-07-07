import '../styles/Categories.css'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

import argi from '../assets/home/argi.jpeg'
import Technology from '../assets/home/Technology.jpeg'
import art from '../assets/home/art.jpeg'

function Categories() {
  const { t } = useLanguage()

  return (
    <section className="categories-section" id="categories-section">
      <h2 className="categories-title">{t('cat_section_title')}</h2>
      
      <div className="categories-container">

        {/* كارت الزراعة والغذاء - بيفتح صفحة green_home */}
        <Link to="/green_home" className="category-card agriculture-card reveal" style={{ textDecoration: 'none', transitionDelay: '0.1s' }}>
          <div className="card-bg-wrapper">
            <img src={argi} className="category-img" alt="" />
          </div>
          <div className="card-content">
            <h3 className="card-title">{t('cat_agri_title')}</h3>
            <p className="card-description">{t('cat_agri_desc')}</p>
          </div>
        </Link>

        {/* كارت التكنولوجيا والهندسة - بيفتح صفحة blue_home */}
        <Link to="/blue_home" className="category-card tech-card featured reveal" style={{ textDecoration: 'none', transitionDelay: '0.2s' }}>
          <div className="card-bg-wrapper">
            <img src={Technology} className="category-img" alt="" />
          </div>
          <div className="card-content">
            <h3 className="card-title">{t('cat_tech_title')}</h3>
            <p className="card-description">{t('cat_tech_desc')}</p>
          </div>
        </Link>

        {/* كارت المجال الإبداعي والفني - بيفتح صفحة orange_home */}
        <Link to="/orange_home" className="category-card creative-card reveal" style={{ textDecoration: 'none', transitionDelay: '0.3s' }}>
          <div className="card-bg-wrapper">
            <img src={art} className="category-img" alt="" />
          </div>
          <div className="card-content">
            <h3 className="card-title">{t('cat_art_title')}</h3>
            <p className="card-description">{t('cat_art_desc')}</p>
          </div>
        </Link>

      </div>
    </section>
  )
}

export default Categories