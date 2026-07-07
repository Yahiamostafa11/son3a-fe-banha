import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import { useLanguage } from '../context/LanguageContext'
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

const imgMapping = { prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10, prod11, prod12 }

function OrangeProducts() {
  const navigate = useNavigate()
  const { t, locale } = useLanguage()
  const [activeTab, setActiveTab] = useState('all')
  const [productsData, setProductsData] = useState([])
  const [loading, setLoading] = useState(true)

  const tabs = [
    { id: 'all', label: t('dept_tabs_all_art') },
    { id: 'paintings', label: t('dept_tabs_paintings_art') },
    { id: 'antiques', label: t('dept_tabs_antiques_art') },
    { id: 'clay', label: t('dept_tabs_clay_art') },
    { id: 'furniture', label: t('dept_tabs_furniture_art') }
  ]

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true)
        const data = await api.products.get('art')
        setProductsData(data)
      } catch (err) {
        console.error('Failed to load art products:', err)
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
    <section className="art-products-section">
      <div className="section-header reveal">
        <h2 className="section-title">{t('dept_header_art')}</h2>
        <p className="section-subtitle">
          "{t('dept_desc_art')}"
        </p>
      </div>

      <div className="tabs-container reveal">
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

      <div className="products-grid-container reveal">
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product._id || product.id} className="product-card">
              <div className="product-img-wrapper">
                <img src={imgMapping[product.imgName] || prod1} alt={product.title} />
              </div>
              <div className="product-info">
                <div className="rating-stars">
                  {'★'.repeat(product.rating)}
                </div>
                <h3 className="product-title">{t(product.title)}</h3>
                <p className="product-type">{t(product.type)}</p>
                <div className="product-card-footer">
                  <span className="product-price">{product.price} {locale === 'ar' ? 'جنية' : 'EGP'}</span>
                  <button className="add-to-cart-btn" style={{ color: '#e06d53' }} onClick={() => navigate('/cart')}>
                    {t('dept_btn_add_cart')} <span className="cart-icon-mini">🛒</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="products-actions">
        <button className="action-orange-btn" style={{ backgroundColor: '#e06d53' }}>{t('dept_btn_go_store')}</button>
        <button className="action-white-btn">{t('dept_btn_show_more')}</button>
      </div>
    </section>
  )
}

export default OrangeProducts