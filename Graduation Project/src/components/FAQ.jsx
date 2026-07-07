import { useState } from 'react'
import '../styles/FAQ.css'

import argi2 from '../assets/home/argi2.jpg'
import techno from '../assets/home/techno.jpg'
import art2 from '../assets/home/art2.jpg'

function FAQ() {
  const [activeId, setActiveId] = useState(1)

  const faqData = [
    {
      id: 1,
      question: "إزاي بنضمن حقوق الملكية الفكرية والابتكار للطالب؟",
      answer: "لأنه نتاج دراسة أكاديمية مخلصة وحرية إبداعية بعيدة عن قيود التجارة؛ إحنا بس بنضيف له \"اللمسة السوقية\" ليتحول من فكرة لمنتج عالمي."
    },
    {
      id: 2,
      question: "هل المنصة بتقدم دعم لتطوير المنتج ولا مجرد عرض؟",
      answer: "من خلال \"بروتوكول توثيق\" لكل مشروع قبل عرضه، يضمن حق الطالب الأدبي والمادي كصاحب للفكرة أمام أي جهة استثمارية."
    },
    {
      id: 3,
      question: "إزاي بيتم تسعير مجهود وساعات عمل الطالب؟",
      answer: "إحنا \"مسرّعة أعمال\" فنية؛ بنساعدك تحسّن الخامات وطرق التنفيذ لتحويل \"النموذج الأولي\" لمنتج نهائي قابل للتصنيع والبيع."
    },
    {
      id: 4,
      question: "هل المنصة بتستهدف الأفراد ولا الشركات والمستثمرين؟",
      answer: "المنصة بتوفر حلقة الوصل الكاملة بين طاقة الطلاب الابتكارية وااحتياجات السوق الفعلي والشركات الكبرى."
    },
    {
      id: 5,
      question: "ليه \"مشروع تخرج\" ممكن ينافس منتجات السوق العالمية؟",
      answer: "لأن الأفكار قايمة على حلول مشاكل حقيقية بأبحاث علمية دقيقة وتحت إشراف نخبة من أساتذة الجامعة."
    },
    {
      id: 6,
      question: "إزاي بتحول \"نموذج تجريبي\" (Prototype) لمنتج نهائي مستدام؟",
      answer: "بنقدملك دعم تقني متكامل وفريق هندسي لمراجعة التصميمات وتعديلها لتناسب خطوط الإنتاج الضخمة."
    },
    {
      id: 7,
      question: "هل بتوفروا خامات أو أماكن لتنفيذ الطلبة؟",
      answer: "بنوفّر مساحات عمل مشتركة ومعامل مجهزة بأحدث الأدوات لمساعدة الطلاب في تصنيع نماذجهم الأولية."
    },
    {
      id: 8,
      question: "هل فيه شحن للمنتجات دي داخل وخارج مصر؟",
      answer: "نعم، المنصة بتتكفل بكافة العمليات اللوجستية وتوفير بوابات دفع آمنة وشحن محلي ودولي للمنتجات."
    }
  ]

  return (
    <div className="section-wrapper">
      
      <section className="categories-section" id="faq-section">
        <div className="categories-header">
          <div className="header-right">
            <h2 className="categories-title">إنت بتعمل مشروع عشان درجات... ولا عشان مستقبل؟</h2>
          </div>
          <div className="header-left">
            <p className="categories-subtitle">✨ مشروعك يستأهل يعيش ويكون ليه قيمة، مش مجرد تسليم وخلاص! إحنا هنا عشان نحول أفكارك لواقع ملموس يتشاف ويتحس ويتباع، من فكرة على ورق.. لحاجة حقيقية بتتعمل! 🚀💡</p>
          </div>
        </div>

        <div className="badges-container">
          <span className="badge badge-blue">✦ خراج فني احترافي</span>
          <span className="badge badge-purple">🌸 توجيه أكاديمي وعملي</span>
          <span className="badge badge-green">🍊 تطوير النماذج الأولية</span>
          <span className="badge badge-orange">📍 وصول للجمهور</span>
          <span className="badge badge-light-orange">☀️ تحويل الفكرة لواقع</span>
        </div>
        
        <div className="categories-container">
          <div className="poster-card">
            <div className="poster-img-wrapper">
              <img src={argi2} className="poster-img" alt="" />
            </div>
          </div>

          <div className="poster-card">
            <div className="poster-img-wrapper">
              <img src={techno} className="poster-img" alt="" />
            </div>
          </div>

          <div className="poster-card">
            <div className="poster-img-wrapper">
              <img src={art2} className="poster-img" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-header">
          <div className="faq-header-left">
            <h2 className="faq-answers-title">الإجابات</h2>
          </div>
          <div className="faq-header-right">
            <h2 className="faq-main-title">الأسئلة الشائعة :</h2>
          </div>
        </div>

        <div className="faq-content-container">
          
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