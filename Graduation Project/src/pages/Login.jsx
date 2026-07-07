import '../styles/Login.css'

import logo from '../assets/logo.png'
import gmailIcon from '../assets/gmail.png'
import googleIcon from '../assets/google.webp'
import Main_Img from '../assets/Main.png'

function Login() {
  return (
    <div className="page-wrapper">

      <div className="top-shape"></div>
      <div className="bottom-shape"></div>

      <div className="login-container">

        <div className="login-image">
          <img src={Main_Img} alt="Login_IMG" className="Main" />
        </div>

        <div className="login-form">

          <img src={logo} alt="logo" className="logo" />

          <h1>تسجيل الدخول</h1>

          <div className="social-login">

            <button className="social-btn">
              <img src={gmailIcon} alt="" />
              التسجيل عبر البريد الإلكتروني
            </button>

            <button className="social-btn">
              <img src={googleIcon} alt="" />
              تسجيل الدخول بواسطة جوجل
            </button>

          </div>

          <div className="divider">
            <span></span>
            <p>أو</p>
            <span></span>
          </div>

          <input
            type="email"
            placeholder="البريد الإلكتروني"
          />

          <input
            type="password"
            placeholder="كلمة المرور"
          />

          <button className="login-btn">
            تسجيل الدخول
          </button>

          <button className="register-btn">
            سجل الآن
          </button>

          
          <p className="forgot-password">
            نسيت كلمة المرور؟
          </p>

        </div>

      </div>

    </div>
  )
}

export default Login