import { useState } from 'react'
import '../styles/orange_products.css'

import prod1 from '../assets/orange/prod1.jpg'
import prod2 from '../assets/orange/prod2.jpg'
import prod3 from '../assets/orange/prod3.jpg'
import prod4 from '../assets/orange/prod4.jpg'
import prod5 from '../assets/orange/prod5.jpg'
import prod6 from '../assets/orange/prod6.png'
import prod7 from '../assets/orange/prod7.png'
import prod8 from '../assets/orange/prod8.jpg'
import prod9 from '../assets/orange/prod9.jpg'
import prod10 from '../assets/orange/prod10.jpg'
import prod11 from '../assets/orange/prod11.jpg'
import prod12 from '../assets/orange/prod12.jpg'

function OrangeProducts() {
  const [activeTab, setActiveTab] = useState('all')

  const tabs = [
    { id: 'all', label: 'اكتشف المنتجات' },
    { id: 'paintings', label: 'لوحات' },
    { id: 'antiques', label: 'المنحوتات' },
    { id: 'clay', label: 'الطواجن' },
    { id: 'furniture', label: 'الأثاث' }
  ]

  const productsData = [
    { id: 1, title: 'طقم فازات فخار', type: '3 قطع ذات تصميم ساحر', price: 2200, rating: 5, img: prod1 },
    { id: 2, title: 'لوحة جدارية', type: 'ألوان مائية مميزة', price: 950, rating: 5, img: prod2 },
    { id: 3, title: 'مصباح أرضي', type: 'أثاث وإضاءة فريدة', price: 850, rating: 5, img: prod3 },
    { id: 4, title: 'أثاث زهريات', type: 'فازات أسود مطفي', price: 950, rating: 5, img: prod4 },
    { id: 5, title: 'رباعية جدارية', type: '4 قطع مودرن منسقة', price: 3080, rating: 5, img: prod5 },
    { id: 6, title: 'طقم وسائد', type: '3 قطع بنقوش بارزة', price: 750, rating: 5, img: prod6 },
    { id: 7, title: 'طقم وسادتين', type: 'كاروهات نسيج دافئ', price: 600, rating: 5, img: prod7 },
    { id: 8, title: 'ثنائية جدارية', type: 'ألوان ترابية دافئة', price: 1200, rating: 5, img: prod8 },
    { id: 9, title: 'مصباح مكتب', type: 'ثلاثي اللون الذهبي', price: 2500, rating: 5, img: prod9 },
    { id: 10, title: 'ثنائية جدارية', type: 'سيدنا آل ياسين من خشب', price: 2800, rating: 5, img: prod10 },
    { id: 11, title: 'ثلاث زهريات', type: 'بيج أبيض منقط', price: 2304, rating: 5, img: prod11 },
    { id: 12, title: 'مصباح مكتب', type: 'معدني أسود عصري', price: 2700, rating: 5, img: prod12 }
  ]

  return (
    <section className="art-products-section">
      <div className="section-header">
        <h2 className="section-title">منتجات القسم الفني</h2>
        <p className="section-subtitle">
          "مجموعة مختارة من أجود الأدوات والخامات التي تمنح أفكاركم لمسة احترافية فريدة، هنا تجدون كل ما يلزم لتحويل الخيال إلى أعمال فنية تنبض بالدقة والجمال"
        </p>
      </div>

      <div className="tabs-container">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            style={activeTab === tab.id ? { background: 'linear-gradient(135deg, #f27a54 0%, #e06d53 100%)', color: '#ffffff', boxShadow: '0px 8px 20px rgba(224, 109, 83, 0.35)' } : {}}
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
                  <button className="add-to-cart-btn" style={{ color: '#e06d53' }}>
                    إضافة سلة <span className="cart-icon-mini">🛒</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="products-actions">
        <button className="action-orange-btn" style={{ backgroundColor: '#e06d53' }}>انتقال للمتجر</button>
        <button className="action-white-btn">عرض المزيد</button>
      </div>
    </section>
  )
}

export default OrangeProducts