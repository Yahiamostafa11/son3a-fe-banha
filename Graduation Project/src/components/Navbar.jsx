import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-right">

        <Link to="/home" className="active">
          الصفحة الرئيسية
        </Link>

        <a href="#hero-section">عن المبادرة</a>

        <a href="#categories-section">المجالات</a>

        <a href="#locations-section">منفذ بيع</a>

        <a href="#faq-section">المشاريع</a>

      </div>

      <div className="nav-left">

        <Link to="/login" className="login-link">
          تسجيل الدخول
        </Link>

        <Link to="/signup" className="signup-btn-navbar">
          إنشاء حساب
        </Link>

        <select className="language-select">
          <option value="ar">ع</option>
          <option value="en">EN</option>
        </select>

      </div>

    </nav>
  )
}

export default Navbar