import { useState } from 'react'
import '../styles/green_products.css'
import g1 from '../assets/green/g1.jpg'
import g2 from '../assets/green/g2.jpg'
import g3 from '../assets/green/g3.jpg'
import g4 from '../assets/green/g4.jpg'
import g5 from '../assets/green/g5.jpg'
import g6 from '../assets/green/g6.jpg'
import g7 from '../assets/green/g7.jpg'
import g8 from '../assets/green/g8.jpg'
import g9 from '../assets/green/g9.jpg'
import g10 from '../assets/green/g10.jpg'
import g11 from '../assets/green/g11.jpg'
import g12 from '../assets/green/g12.jpg'

function GreenProducts() {
  const [activeTab, setActiveTab] = useState('all')

  const tabs = [
    { id: 'all', label: 'منتجات عامة' },
    { id: 'dairy', label: 'ألبان ومصنعاتها' },
    { id: 'crops', label: 'خضروات ومحاصيل' },
    { id: 'organic', label: 'منتجات عضوية' }
  ]

  const productsData = [
    { id: 1, title: 'مربى الفراولة الطبيعية', type: 'مربى طبيعية بدون مواد حافظة', price: 85, rating: 5, img: g1 },
    { id: 2, title: 'دقيق قمح نقي', type: 'مطحون من أجود حبات القمح', price: 45, rating: 5, img: g2 },
    { id: 3, title: 'حليب بقري طازج', type: 'كامل الدسم من المزرعة مباشرة', price: 38, rating: 5, img: g3 },
    { id: 4, title: 'زبدة فلاحي طبيعية', type: 'نقية ومصنعة بالطرق التقليدية', price: 310, rating: 5, img: g4 },
    { id: 5, title: 'ذرة صفراء طازجة', type: 'محصول نقي غني بالفيتامينات', price: 25, rating: 5, img: g5 },
    { id: 6, title: 'حليب بقري مبستر', type: 'معبأ بأعلى معايير الجودة والنظافة', price: 40, rating: 5, img: g6 },
    { id: 7, title: 'فلفل ألوان طازج', type: 'توليفة فلفل حلو من الصوبة مباشرة', price: 60, rating: 5, img: g7 },
    { id: 8, title: 'ثمار أفوكادو فاخرة', type: 'غني بالدهون الصحية وممتاز للوجبات', price: 180, rating: 5, img: g8 },
    { id: 9, title: 'ذرة سكرية ممتازة', type: 'حبات مقرمشة وحلوة المذاق طازجة', price: 30, rating: 5, img: g9 },
    { id: 10, title: 'مجموعة توابل شرقية', type: 'تشكيلة بهارات عطرية مطحونة بعناية', price: 120, rating: 5, img: g10 },
    { id: 11, title: 'عسل نحل جبلي نقي', type: 'عسل طبيعي حر مستخلص بعناية', price: 240, rating: 5, img: g11 },
    { id: 12, title: 'زيتون أخضر فاخر', type: 'ثمار زيتون طبيعية منتقاة ومخللة', price: 75, rating: 5, img: g12 }
  ]

  return (
    <section className="tech-products-section">
      <div className="section-header">
        <h2 className="section-title">منتجات القسم الزراعي</h2>
        <p className="section-subtitle">
          "مجموعة مختارة من أفضل المحاصيل والمنتجات الغذائية الطبيعية التي تمنح حياتكم لمسة صحية فريدة، هنا تجدون كل ما يلزم لغذاء ينبض بالجودة والجمال"
        </p>
      </div>

      <div className="tabs-container">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="products-grid-container">
        <div className="products-grid">
          {productsData.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-img-wrapper">
                <img src={product.img} alt={product.title} />
              </div>
              <div className="product-info">
                <div className="rating-stars">
                  {'★'.repeat(product.rating)}
                </div>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-type">{product.type}</p>
                <div className="product-card-footer">
                  <span className="product-price">{product.price} جنية</span>
                  <button className="add-to-cart-btn">
                    إضافة سلة <span className="cart-icon-mini">🛒</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="products-actions">
        <button className="action-green-btn">انتقال للمتجر</button>
        <button className="action-white-btn">عرض المزيد</button>
      </div>
    </section>
  )
}

export default GreenProducts