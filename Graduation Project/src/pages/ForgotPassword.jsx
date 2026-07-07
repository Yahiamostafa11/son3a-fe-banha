import '../styles/ForgotPassword.css'

import logo from '../assets/logo.png'
import Main_Img from '../assets/Main.png'

function ForgotPassword() {
  return (
    <div className="page-wrapper">

      <div className="top-shape"></div>
      <div className="bottom-shape"></div>

      <div className="login-container">

        <div className="login-image">
          <img src={Main_Img} alt="ForgotPassword_IMG" className="Main" />
        </div>

        <div className="login-form">

          <img src={logo} alt="logo" className="logo" />

          <h1>هل نسيت كلمة المرور؟</h1>

          <div className="name-row">

            <input
              type="text"
              placeholder="الاسم الأول"
            />

            <input
              type="text"
              placeholder="اسم العائلة"
            />

          </div>

          <div className="name-row">

            <input
              type="email"
              placeholder="البريد الإلكتروني"
            />

            <input
              type="tel"
              placeholder="رقم الهاتف"
            />

          </div>

          <button className="login-btn">
            إرسال رمز التأكيد
          </button>

          <p className="terms-text">
            شروط وأحكام "صنع في بنها"
          </p>

        </div>

      </div>

    </div>
  )
}

export default ForgotPassword