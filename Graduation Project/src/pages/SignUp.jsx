import '../styles/SignUp.css'

import logo from '../assets/logo.png'
import gmailIcon from '../assets/gmail.png'
import googleIcon from '../assets/google.webp'
import Main_Img from '../assets/Main.png'

function SignUp() {
  return (
    <div className="page-wrapper">

      <div className="top-shape"></div>
      <div className="bottom-shape"></div>

      <div className="login-container">

        {/* Image Section */}
        <div className="login-image">
          <img src={Main_Img} alt="SignUp_IMG" className="Main" />
        </div>

        {/* Form Section */}
        <div className="login-form">

          <img src={logo} alt="logo" className="logo" />

          <h1>إنشاء حساب</h1>

          <div className="social-login">

            <button className="social-btn">
              <img src={gmailIcon} alt="gmail" />
              التسجيل عبر البريد الإلكتروني
            </button>

            <button className="social-btn">
              <img src={googleIcon} alt="google" />
              تسجيل الدخول بواسطة جوجل
            </button>

          </div>

          <div className="divider">
            <span></span>
            <p>أو</p>
            <span></span>
          </div>

          {/* First Row */}
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

          {/* Second Row */}
          <div className="name-row">

            <input
              type="tel"
              placeholder="رقم الهاتف"
            />

            <input
              type="email"
              placeholder="البريد الإلكتروني"
            />

          </div>

          {/* Password */}
          <input
            type="password"
            placeholder="كلمة المرور"
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="تأكيد كلمة المرور"
          />

          <button className="login-btn">
            إنشاء حسابك
          </button>

          <p className="forgot-password">
            لديك حساب بالفعل؟ تسجيل الدخول
          </p>

        </div>

      </div>

    </div>
  )
}

export default SignUp