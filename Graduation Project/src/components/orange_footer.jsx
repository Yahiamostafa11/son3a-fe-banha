import '../styles/orange_footer.css'

function OrangeFooter() {
  const testimonials = [
    {
      id: 1,
      name: 'سارة المنصور',
      handle: 'sara.mansour88',
      text: '"الخامات ممتازة وتعطي دفء غير طبيعي للمكان، التوصيل كان سريع جداً"',
      bg: 'white',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
    },
    {
      id: 2,
      name: 'خالد العامري',
      handle: 'k.alamri.archite',
      text: '"اشتريت الفازة الفخار، وزنها مثالي وخامتها بتحمل. التصميم عصري جداً ويمشي مع أي ركن في البيت سواء بورد أو من غيره هي ملفته للنظر. خدمة العملاء كانت متعاونة جداً في الرد على استفساراتي قبل الشراء"',
      bg: 'orange',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
    },
    {
      id: 3,
      name: 'كريم يحيى',
      handle: 'karem.yahia9',
      text: '"التابلوه جودته ممتازة والبرواز خشب متين ومحمل، مش مجرد شكل وخلاص، أضاف لمحة لغرفة المكتب عندي، يعتبر صفقة ناجحة جداً"',
      bg: 'white',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100'
    },
    {
      id: 4,
      name: 'عمر ابليكي',
      handle: 'omarablicki8',
      text: '"فازة أنيقة جداً وتفاصيلها دقيقة، قطعة فنية خلت شكل المكتب فخم"',
      bg: 'orange',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100'
    },
    {
      id: 5,
      name: 'عز الدين',
      handle: 'ezzeldeen10',
      text: '"طلبت مجموعة كاملة من التابلوهات والفازات لتجهيز شقتي الجديدة، والنتيجة كانت مبهرة، التناسق بين المنتجات يدل إن اللي يختارهم عنده ذوق رفيع."',
      bg: 'orange',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100'
    },
    {
      id: 6,
      name: 'هند سليم',
      handle: 'hind.salim9',
      text: '"الفازة ذوقها عالي جداً وخامتها ممتازة، نورت الركن عندي"',
      bg: 'white',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100'
    },
    {
      id: 7,
      name: 'ندى ناصر',
      handle: 'nadanaaser10',
      text: '"بصراحة كنت متخوفة من جودة القماش، بس لما وصلي الوسائد انبهرت بنعومة الملمس، الألوان مطابقة تماماً للصور اللي على الموقع، أضافت لمحة جمالية وراحة لغرفة المعيشة عندي"',
      bg: 'orange',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'
    },
    {
      id: 8,
      name: 'ليلى السيد',
      handle: 'lailasayed14',
      text: '"الألوان في الحقيقة أحلى بكثير من الصور، والبرواز جودته عالية وممتاز"',
      bg: 'white',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100'
    }
  ]

  return (
    <div className="footer-section-wrapper">
      
      <section className="testimonials-section">
        <h2 className="testimonials-title">هذا ما يقوله عملاؤنا</h2>
        <p className="testimonials-subtitle">
          "نعتز بآراء عملائنا التي تعكس جودة خدمتنا وتفانينا في التميز، ثقتكم هي دافعنا المستمر لتقديم الأفضل والبقاء دائماً عند حسن ظنكم"
        </p>

        <div className="masonry-grid">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className={`testimonial-card ${item.bg}-card`}
              style={item.bg === 'orange' ? { background: 'linear-gradient(135deg, #f27a54 0%, #e06d53 100%)' } : {}}
            >
              <div className="card-header">
                <img src={item.avatar} alt={item.name} className="user-avatar" />
                <div className="user-info">
                  <h3>{item.name}</h3>
                  <span>@{item.handle}</span>
                </div>
              </div>
              <p className="card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="features-section">
        <div className="features-container">
          <div className="feature-item">
            <div className="feature-icon">🎧</div>
            <div className="feature-text">
              <h4>دعم فني 24/7</h4>
              <p>دعم مخصص</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📦</div>
            <div className="feature-text">
              <h4>شحن مجاني</h4>
              <p>للطلبات فوق الـ 3000 جنية</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🛡️</div>
            <div className="feature-text">
              <h4>ضمان الحماية</h4>
              <p>لمدة عامين</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">⭐</div>
            <div className="feature-text">
              <h4>جودة عالية</h4>
              <p>صنع من أجود المواد</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="main-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">صُنِع في بنها</h2>
            <p className="brand-desc">مبادرة جامعة بنها لتحويل أفكار الطلاب ومشاريع تخرجهم إلى منتجات حقيقية.</p>
          </div>

          <div className="footer-links">
            <h3>تواصل معنا</h3>
            <p>madeinBanha@bu.edu.eg</p>
            <p>643 25</p>
            <p>جامعة بنها</p>
          </div>

          <div className="footer-apps">
            <div className="social-icons">
              <span className="social-icon">f</span>
              <span className="social-icon">📸</span>
              <span className="social-icon">🐦</span>
            </div>
            <h3>استكشف تطبيقنا</h3>
            <div className="app-buttons">
              <div className="app-btn store-google">Google Play</div>
              <div className="app-btn store-apple">App Store</div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          جميع الحقوق محفوظة @ madeinBenha
        </div>
      </footer>

    </div>
  )
}

export default OrangeFooter