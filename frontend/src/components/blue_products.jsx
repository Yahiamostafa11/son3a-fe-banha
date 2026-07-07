import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import { useLanguage } from '../context/LanguageContext'
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

const imgMapping = { b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12 }

function BlueProducts() {
  const navigate = useNavigate()
  const { t, locale } = useLanguage()
  const [activeTab, setActiveTab] = useState('all')
  const [productsData, setProductsData] = useState([])
  const [loading, setLoading] = useState(true)

  const tabs = [
    { id: 'all', label: t('dept_tabs_all_tech') },
    { id: 'medical', label: t('dept_tabs_medical_tech') },
    { id: 'iot', label: t('dept_tabs_iot_tech') },
    { id: 'vr', label: t('dept_tabs_vr_tech') }
  ]

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true)
        const data = await api.products.get('tech')
        setProductsData(data)
      } catch (err) {
        console.error('Failed to load tech products:', err)
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  const filteredProducts = activeTab === 'all'
    ? productsData
    : productsData.filter(product => product.category === activeTab)

  return (
    <section className="tech-products-section">
      <div className="section-header reveal">
        <h2 className="section-title">{t('dept_header_tech')}</h2>
        <p className="section-subtitle">
          "{t('dept_desc_tech')}"
        </p>
      </div>

      <div className="tabs-container reveal">
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

      <div className="products-grid-container reveal">
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product._id || product.id} className="product-card">
              <div className="product-img-wrapper">
                <img src={imgMapping[product.imgName] || b1} alt={product.title} />
              </div>
              <div className="product-info">
                <div className="rating-stars">
                  {'★'.repeat(product.rating)}
                </div>
                <h3 className="product-title">{t(product.title)}</h3>
                <p className="product-type">{t(product.type)}</p>
                <div className="product-card-footer">
                  <span className="product-price">{product.price} {locale === 'ar' ? 'جنية' : 'EGP'}</span>
                  <button className="add-to-cart-btn" style={{ color: '#2563eb' }} onClick={() => navigate('/cart')}>
                    {t('dept_btn_add_cart')} <span className="cart-icon-mini">🛒</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="products-actions">
        <button className="action-blue-btn" style={{ backgroundColor: '#2563eb' }}>{t('dept_btn_go_store')}</button>
        <button className="action-white-btn">{t('dept_btn_show_more')}</button>
      </div>
    </section>
  )
}

export default BlueProducts