import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/FAQ.css'

import argi2 from '../assets/home/argi2.jpg'
import techno from '../assets/home/techno.jpg'
import art2 from '../assets/home/art2.jpg'

function FAQ() {
  const { t } = useLanguage()
  const [activeId, setActiveId] = useState(1)

  const faqData = t('faq_items') || []

  return (
    <div className="section-wrapper">
      
      <section className="categories-section" id="faq-section">
        <div className="categories-header">
          <div className="header-right">
            <h2 className="categories-title">{t('faq_main_header')}</h2>
          </div>
          <div className="header-left">
            <p className="categories-subtitle">{t('faq_main_subheader')}</p>
          </div>
        </div>

        <div className="badges-container">
          <span className="badge badge-blue">{t('faq_badge_output')}</span>
          <span className="badge badge-purple">{t('faq_badge_guidance')}</span>
          <span className="badge badge-green">{t('faq_badge_prototype')}</span>
          <span className="badge badge-orange">{t('faq_badge_audience')}</span>
          <span className="badge badge-light-orange">{t('faq_badge_reality')}</span>
        </div>
        
        <div className="categories-container">
          <div className="poster-card reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="poster-img-wrapper">
              <img src={argi2} className="poster-img" alt="" />
            </div>
          </div>

          <div className="poster-card reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="poster-img-wrapper">
              <img src={techno} className="poster-img" alt="" />
            </div>
          </div>

          <div className="poster-card reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="poster-img-wrapper">
              <img src={art2} className="poster-img" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-header">
          <div className="faq-header-left">
            <h2 className="faq-answers-title">{t('faq_answers_label')}</h2>
          </div>
          <div className="faq-header-right">
            <h2 className="faq-main-title">{t('faq_main_label')}</h2>
          </div>
        </div>

        <div className="faq-content-container reveal">
          
          <div className="answers-column">
            {faqData.filter(item => item.id === activeId).map((item) => (
              <div key={`ans-${item.id}`} className="answer-card">
                <span className="star-icon">✵</span>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="questions-column">
            {faqData.map((item) => (
              <div
                key={item.id}
                className={`question-item ${item.id === activeId ? 'active' : ''}`}
                onClick={() => setActiveId(item.id)}
              >
                <span className="bullet-icon">✵</span>
                <p>{item.question}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}

export default FAQ