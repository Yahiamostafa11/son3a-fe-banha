import '../styles/ResetPassword.css'

import logo from '../assets/logo.png'
import Main_Img from '../assets/Main.png'

function ResetPassword() {
  return (
    <div className="page-wrapper">

      <div className="top-shape"></div>
      <div className="bottom-shape"></div>

      <div className="login-container">

        <div className="login-image">
          <img src={Main_Img} alt="ResetPassword_IMG" className="Main" />
        </div>

        <div className="login-form">

          <img src={logo} alt="logo" className="logo" />

          <h1>أدخل كلمة المرور الجديدة</h1>

          <input
            type="password"
            placeholder="كلمة مرور جديدة"
          />

          <input
            type="password"
            placeholder="تأكيد كلمة المرور"
          />

          <button className="login-btn">
            إرسال
          </button>

        </div>

      </div>

    </div>
  )
}

export default ResetPassword