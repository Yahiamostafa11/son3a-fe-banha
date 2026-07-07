import '../styles/Categories.css'
import { Link } from 'react-router-dom'

import argi from '../assets/home/argi.jpeg'
import Technology from '../assets/home/Technology.jpeg'
import art from '../assets/home/art.jpeg'

function Categories() {
  return (
    <section className="categories-section" id="categories-section">
      <h2 className="categories-title">ثلاثة مجالات مختلفة</h2>
      
      <div className="categories-container">

        {/* كارت الزراعة والغذاء - بيفتح صفحة green_home */}
        <Link to="/green_home" className="category-card agriculture-card" style={{ textDecoration: 'none' }}>
          <div className="card-bg-wrapper">
            <img src={argi} className="category-img" alt="" />
          </div>
          <div className="card-content">
            <h3 className="card-title">مجال الزراعة والغذاء</h3>
            <p className="card-description">منتجات زراعية وغذائية من طلاب كلية الزراعة</p>
          </div>
        </Link>

        {/* كارت التكنولوجيا والهندسة - بيفتح صفحة blue_home */}
        <Link to="/blue_home" className="category-card tech-card featured" style={{ textDecoration: 'none' }}>
          <div className="card-bg-wrapper">
            <img src={Technology} className="category-img" alt="" />
          </div>
          <div className="card-content">
            <h3 className="card-title">مجال التكنولوجيا والهندسة</h3>
            <p className="card-description">مشاريع تقنية وهندسية مبتكرة من طلاب الهندسة وعلوم الحاسب</p>
          </div>
        </Link>

        {/* كارت المجال الإبداعي والفني - بيفتح صفحة orange_home */}
        <Link to="/orange_home" className="category-card creative-card" style={{ textDecoration: 'none' }}>
          <div className="card-bg-wrapper">
            <img src={art} className="category-img" alt="" />
          </div>
          <div className="card-content">
            <h3 className="card-title">المجال الإبداعي والفني</h3>
            <p className="card-description">منتجات من طلاب الفنون التطبيقية والتصميم والحرف اليدوية</p>
          </div>
        </Link>

      </div>
    </section>
  )
}

export default Categories