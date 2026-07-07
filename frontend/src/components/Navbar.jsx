import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

function Navbar() {
  const { locale, setLocale, t } = useLanguage()

  return (
    <nav className="navbar">

      <div className="nav-right">

        <Link to="/home" className="active">
          {t('nav_home')}
        </Link>

        <a href="#hero-section">{t('nav_about')}</a>

        <a href="#categories-section">{t('nav_fields')}</a>

        <a href="#locations-section">{t('nav_store')}</a>

        <a href="#faq-section">{t('nav_projects')}</a>

      </div>

      <div className="nav-left">

        <Link to="/login" className="login-link">
          {t('nav_login')}
        </Link>

        <Link to="/signup" className="signup-btn-navbar">
          {t('nav_signup')}
        </Link>

        <select 
          className="language-select" 
          value={locale} 
          onChange={(e) => setLocale(e.target.value)}
        >
          <option value="ar">ع</option>
          <option value="en">EN</option>
        </select>

      </div>

    </nav>
  )
}

export default Navbar