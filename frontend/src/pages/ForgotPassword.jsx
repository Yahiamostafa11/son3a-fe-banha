import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import { useLanguage } from '../context/LanguageContext'
import '../styles/ForgotPassword.css'

import logo from '../assets/logo.png'
import Main_Img from '../assets/Main.png'

function ForgotPassword() {
  const navigate = useNavigate()
  const { t, locale } = useLanguage()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRequestCode = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setLoading(true)

    try {
      const data = await api.auth.forgotPassword(email)
      
      // Store email and demo reset code for the verification page
      localStorage.setItem('bu_reset_email', email)
      if (data.demoCode) {
        localStorage.setItem('bu_reset_democode', data.demoCode)
      }
      
      navigate('/verification')
    } catch (err) {
      setErrorMsg(err.message || (locale === 'ar' ? 'لا يوجد حساب مسجل بهذا البريد الإلكتروني' : 'No account registered with this email address'))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page-wrapper">

      <div className="top-shape"></div>
      <div className="bottom-shape"></div>

      <div className="login-container">

        <div className="login-image">
          <img src={Main_Img} alt="ForgotPassword_IMG" className="Main" />
        </div>

        <form className="login-form" onSubmit={handleRequestCode}>

          <img src={logo} alt="logo" className="logo" />

          <h1>{t('auth_forgot_title')}</h1>

          {errorMsg && <div className="error-message" style={{ color: '#ef4444', marginBottom: '15px', fontWeight: 'bold', fontSize: '0.9rem' }}>{errorMsg}</div>}

          <div className="name-row">

            <input
              type="text"
              placeholder={t('auth_first_name_placeholder')}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              type="text"
              placeholder={t('auth_last_name_placeholder')}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

          </div>

          <div className="name-row">

            <input
              type="email"
              placeholder={t('auth_email_placeholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder={t('auth_phone_placeholder')}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? (locale === 'ar' ? 'جاري الإرسال...' : 'Sending...') : t('auth_forgot_btn')}
          </button>

          <p className="terms-text">
            {locale === 'ar' ? 'شروط وأحكام "صنع في بنها"' : '"Made in Banha" Terms & Conditions'}
          </p>

        </form>

      </div>

    </div>
  )
}

export default ForgotPassword