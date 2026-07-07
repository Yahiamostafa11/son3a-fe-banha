import { useState } from 'react'
import '../styles/blue_products.css'
import b1 from '../assets/blue/b1.jpg'
import b2 from '../assets/blue/b2.jpg'
import b3 from '../assets/blue/b3.jpg'
import b4 from '../assets/blue/b4.png'
import b5 from '../assets/blue/b5.png'
import b6 from '../assets/blue/b6.png'
import b7 from '../assets/blue/b7.png'
import b8 from '../assets/blue/b8.jpg'
import b9 from '../assets/blue/b9.jpg'
import b10 from '../assets/blue/b10.png'
import b11 from '../assets/blue/b11.png'
import b12 from '../assets/blue/b12.png'

function BlueProducts() {
  const [activeTab, setActiveTab] = useState('all')

  const tabs = [
    { id: 'all', label: 'إلكترونيات عامة' },
    { id: 'medical', label: 'أجهزة طبية وهندسية' },
    { id: 'iot', label: 'أجهزة إنترنت الأشياء' },
    { id: 'vr', label: 'نظارات وسماعات' }
  ]

  const productsData = [
    { id: 1, title: 'محول ضغط تفاضلي', type: 'أجهزة قياس وتحكم ذكية', price: 2320, rating: 5, img: b1 },
    { id: 2, title: 'قفاز ربوت ذكي ذو تحكم', type: 'أجهزة استشعار متطورة', price: 5210, rating: 5, img: b2 },
    { id: 3, title: 'جهاز معايرة دقيق', type: 'أجهزة الفحص الهندسية المتقدمة', price: 3110, rating: 5, img: b3 },
    { id: 4, title: 'جهاز مراقبة وتحكم بالشبكة', type: 'نظم إدارة ومراقبة الطاقة الهندسية', price: 4720, rating: 5, img: b4 },
    { id: 5, title: 'جهاز قياس ضغط ذكي', type: 'أجهزة الفحص والمراقبة الطبية المستمرة', price: 2610, rating: 5, img: b5 },
    { id: 6, title: 'لوحة رسم وتخطيط إلكتروني', type: 'أدوات التصميم والابتكار للمهندسين المطورين', price: 2110, rating: 5, img: b6 },
    { id: 7, title: 'نظارة واقع افتراضي', type: 'تقنيات الواقع المعزز والبيئات الثلاثية الأبعاد', price: 4340, rating: 5, img: b7 },
    { id: 8, title: 'الخاتم الذكي', type: 'أجهزة تتبع البيانات الحيوية الذكية والمصغرة', price: 1730, rating: 5, img: b8 },
    { id: 9, title: 'أجهزة قياس ذكاء اصطناعي', type: 'أجهزة معالجة واستشعار البيانات والذكاء الاصطناعي', price: 1630, rating: 5, img: b9 },
    { id: 10, title: 'جهاز قياس انبعاثات ضوئي', type: 'أجهزة الفحص والتحليل البيئي المتقدمة والحديثة', price: 1940, rating: 5, img: b10 },
    { id: 11, title: 'شاحن طاقة شمسية محمول', type: 'نظم الطاقة المتجددة والمحمولة لحالات الطوارئ', price: 1130, rating: 5, img: b11 },
    { id: 12, title: 'جهاز قياس الضغط الرقمي', type: 'أجهزة الفحص والتحليل الطبي الدقيق والمتقدم السريع', price: 1910, rating: 5, img: b12 }
  ]

  return (
    <section className="tech-products-section">
      <div className="section-header">
        <h2 className="section-title">منتجات القسم التكنولوجي</h2>
        <p className="section-subtitle">
          "مجموعة مختارة من أحدث الأدوات والتقنيات الهندسية التي تمنح أفكاركم لمسة احترافية فريدة، هنا تجدون كل ما يلزم لتحويل الخيال إلى مشاريع تنبض بالدقة والجمال"
        </p>
      </div>

      <div className="tabs-container">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            style={activeTab === tab.id ? { background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', color: '#ffffff', boxShadow: '0px 8px 20px rgba(37, 99, 235, 0.35)' } : {}}
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
                  <button className="add-to-cart-btn" style={{ color: '#2563eb' }}>
                    إضافة سلة <span className="cart-icon-mini">🛒</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="products-actions">
        <button className="action-blue-btn" style={{ backgroundColor: '#2563eb' }}>انتقال للمتجر</button>
        <button className="action-white-btn">عرض المزيد</button>
      </div>
    </section>
  )
}

export default BlueProducts