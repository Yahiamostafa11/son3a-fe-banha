import '../styles/Verification.css'

import logo from '../assets/logo.png'
import Main_Img from '../assets/Main.png'

function Verification() {
  return (
    <div className="page-wrapper">

      <div className="top-shape"></div>
      <div className="bottom-shape"></div>

      <div className="login-container">

        <div className="login-image">
          <img src={Main_Img} alt="Verification_IMG" className="Main" />
        </div>

        <div className="login-form">

          <img src={logo} alt="logo" className="logo" />

          <h1>أدخل رمز التأكيد</h1>

          <input
            type="text"
            placeholder="رمز التأكيد"
          />

          <button className="login-btn">
            استعادة الحساب
          </button>

          <p className="verification-text">
            لم يصلك رمز التأكيد؟
            <span> إعادة الإرسال الآن</span>
          </p>

        </div>

      </div>

    </div>
  )
}

export default Verification