import '../styles/Services.css'

import idea from '../assets/home/idea.png'
import store from '../assets/home/store.png'
import rocket from '../assets/home/rocket.png'
import community from '../assets/home/community.png'

function Services() {
  return (
    <section className="services">

      <span className="services-subtitle">
        الفئة
      </span>

      <h2 className="services-title">
        نحن نقدم أفضل الخدمات
      </h2>

      <div className="services-container">

        <div className="service-card community">
          <img src={community} alt="" />
          <h3>مجتمع داعم</h3>
          <p>شبكة من الطلاب والخبراء والشركات</p>
        </div>

        <div className="service-card rocket">
          <img src={rocket} alt="" />
          <h3>تطوير المنتجات</h3>
          <p>دعم فني وتقني لتحويل المشاريع إلى منتجات</p>
        </div>

        <div className="service-card store">
          <img src={store} alt="" />
          <h3>عرض وبيع المنتجات</h3>
          <p>منصة فعلية للسوق والمنتجات</p>
        </div>

        <div className="service-card idea">
          <img src={idea} alt="" />
          <h3>أفكار مبتكرة</h3>
          <p>تحويل أفكار الطلبة إلى مشاريع قابلة للتنفيذ</p>
        </div>







      </div>

    </section>
  )
}

export default Services