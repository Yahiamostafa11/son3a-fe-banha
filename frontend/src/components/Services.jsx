import '../styles/Services.css'
import { useLanguage } from '../context/LanguageContext'

import idea from '../assets/home/idea.png'
import store from '../assets/home/store.png'
import rocket from '../assets/home/rocket.png'
import community from '../assets/home/community.png'

function Services() {
  const { t } = useLanguage()

  return (
    <section className="services">

      <span className="services-subtitle">
        {t('serv_subtitle')}
      </span>

      <h2 className="services-title">
        {t('serv_title')}
      </h2>

      <div className="services-container">

        <div className="service-card community reveal" style={{ transitionDelay: '0.1s' }}>
          <img src={community} alt="" />
          <h3>{t('serv1_h')}</h3>
          <p>{t('serv1_p')}</p>
        </div>

        <div className="service-card rocket reveal" style={{ transitionDelay: '0.2s' }}>
          <img src={rocket} alt="" />
          <h3>{t('serv2_h')}</h3>
          <p>{t('serv2_p')}</p>
        </div>

        <div className="service-card store reveal" style={{ transitionDelay: '0.3s' }}>
          <img src={store} alt="" />
          <h3>{t('serv3_h')}</h3>
          <p>{t('serv3_p')}</p>
        </div>

        <div className="service-card idea reveal" style={{ transitionDelay: '0.4s' }}>
          <img src={idea} alt="" />
          <h3>{t('serv4_h')}</h3>
          <p>{t('serv4_p')}</p>
        </div>







      </div>

    </section>
  )
}

export default Services