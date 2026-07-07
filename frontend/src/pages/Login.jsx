import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import { useLanguage } from '../context/LanguageContext'
import '../styles/Login.css'

import logo from '../assets/logo.png'
import gmailIcon from '../assets/gmail.png'
import googleIcon from '../assets/google.webp'
import Main_Img from '../assets/Main.png'

function Login() {
  const navigate = useNavigate()
  const { t, locale } = useLanguage()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setLoading(true)

    try {
      const data = await api.auth.login({ email, password })
      
      // Store token and details
      localStorage.setItem('bu_user_token', data.token)
      localStorage.setItem('bu_user_email', data.email)
      localStorage.setItem('bu_user_name', `${data.firstName} ${data.lastName}`)
      
      navigate('/home')
    } catch (err) {
      setErrorMsg(err.message || (locale === 'ar' ? 'فشل تسجيل الدخول، يرجى التحقق من المدخلات' : 'Login failed, please check your inputs'))
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
          <img src={Main_Img} alt="Login_IMG" className="Main" />
        </div>

        <form className="login-form" onSubmit={handleLogin}>

          <img src={logo} alt="logo" className="logo" />

          <h1>{t('auth_login_title')}</h1>

          <div className="social-login">

            <button type="button" className="social-btn">
              <img src={gmailIcon} alt="" />
              {locale === 'ar' ? 'التسجيل عبر البريد الإلكتروني' : 'Register via Email'}
            </button>

            <button type="button" className="social-btn">
              <img src={googleIcon} alt="" />
              {locale === 'ar' ? 'تسجيل الدخول بواسطة جوجل' : 'Sign in with Google'}
            </button>

          </div>

          <div className="divider">
            <span></span>
            <p>{locale === 'ar' ? 'أو' : 'Or'}</p>
            <span></span>
          </div>

          {errorMsg && <div className="error-message" style={{ color: '#ef4444', marginBottom: '15px', fontWeight: 'bold', fontSize: '0.9rem' }}>{errorMsg}</div>}

          <input
            type="email"
            placeholder={t('auth_email_placeholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder={t('auth_password_placeholder')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? (locale === 'ar' ? 'جاري التحميل...' : 'Loading...') : t('auth_login_title')}
          </button>

          <button type="button" className="register-btn" onClick={() => navigate('/signup')}>
            {t('auth_signup_title')}
          </button>

          
          <p className="forgot-password" onClick={() => navigate('/forgot-password')}>
            {t('auth_forgot_password_link')}
          </p>

        </form>

      </div>
    </div>
  )
}

export default Login