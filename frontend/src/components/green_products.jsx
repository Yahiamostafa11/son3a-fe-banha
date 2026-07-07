import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import { useLanguage } from '../context/LanguageContext'
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

const imgMapping = { g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12 }

function GreenProducts() {
  const navigate = useNavigate()
  const { t, locale } = useLanguage()
  const [activeTab, setActiveTab] = useState('all')
  const [productsData, setProductsData] = useState([])
  const [loading, setLoading] = useState(true)

  const tabs = [
    { id: 'all', label: t('dept_tabs_all_agri') },
    { id: 'dairy', label: t('dept_tabs_dairy_agri') },
    { id: 'crops', label: t('dept_tabs_crops_agri') },
    { id: 'organic', label: t('dept_tabs_organic_agri') }
  ]

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true)
        const data = await api.products.get('agri')
        setProductsData(data)
      } catch (err) {
        console.error('Failed to load agri products:', err)
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
        <h2 className="section-title">{t('dept_header_agri')}</h2>
        <p className="section-subtitle">
          "{t('dept_desc_agri')}"
        </p>
      </div>

      <div className="tabs-container reveal">
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

      <div className="products-grid-container reveal">
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product._id || product.id} className="product-card">
              <div className="product-img-wrapper">
                <img src={imgMapping[product.imgName] || g1} alt={product.title} />
              </div>
              <div className="product-info">
                <div className="rating-stars">
                  {'★'.repeat(product.rating)}
                </div>
                <h3 className="product-title">{t(product.title)}</h3>
                <p className="product-type">{t(product.type)}</p>
                <div className="product-card-footer">
                  <span className="product-price">{product.price} {locale === 'ar' ? 'جنية' : 'EGP'}</span>
                  <button className="add-to-cart-btn" onClick={() => navigate('/cart')}>
                    {t('dept_btn_add_cart')} <span className="cart-icon-mini">🛒</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="products-actions">
        <button className="action-green-btn">{t('dept_btn_go_store')}</button>
        <button className="action-white-btn">{t('dept_btn_show_more')}</button>
      </div>
    </section>
  )
}

export default GreenProducts