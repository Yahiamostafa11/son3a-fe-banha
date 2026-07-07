import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import { useLanguage } from '../context/LanguageContext'
import '../styles/SignUp.css'

import logo from '../assets/logo.png'
import gmailIcon from '../assets/gmail.png'
import googleIcon from '../assets/google.webp'
import Main_Img from '../assets/Main.png'

function SignUp() {
  const navigate = useNavigate()
  const { t, locale } = useLanguage()
  
  // State variables
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignUp = async (e) => {
    e.preventDefault()
    setErrorMsg('')

    if (password !== confirmPassword) {
      return setErrorMsg(locale === 'ar' ? 'كلمتا المرور غير متطابقتين' : 'Passwords do not match')
    }

    setLoading(true)

    try {
      const data = await api.auth.register({
        email,
        password,
        firstName,
        lastName
      })

      // Save user details
      localStorage.setItem('bu_user_token', data.token)
      localStorage.setItem('bu_user_email', data.email)
      localStorage.setItem('bu_user_name', `${data.firstName} ${data.lastName}`)

      navigate('/home')
    } catch (err) {
      setErrorMsg(err.message || (locale === 'ar' ? 'فشل إنشاء الحساب، يرجى المحاولة لاحقاً' : 'Registration failed, please try again later'))
    } finally {
      setLoading(false)
    }
  }

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
        <form className="login-form" onSubmit={handleSignUp}>

          <img src={logo} alt="logo" className="logo" />

          <h1>{t('auth_signup_title')}</h1>

          <div className="social-login">

            <button type="button" className="social-btn">
              <img src={gmailIcon} alt="gmail" />
              {locale === 'ar' ? 'التسجيل عبر البريد الإلكتروني' : 'Register via Email'}
            </button>

            <button type="button" className="social-btn">
              <img src={googleIcon} alt="google" />
              {locale === 'ar' ? 'تسجيل الدخول بواسطة جوجل' : 'Sign in with Google'}
            </button>

          </div>

          <div className="divider">
            <span></span>
            <p>{locale === 'ar' ? 'أو' : 'Or'}</p>
            <span></span>
          </div>

          {errorMsg && <div className="error-message" style={{ color: '#ef4444', marginBottom: '15px', fontWeight: 'bold', fontSize: '0.9rem' }}>{errorMsg}</div>}

          {/* First Row */}
          <div className="name-row">

            <input
              type="text"
              placeholder={t('auth_first_name_placeholder')}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder={t('auth_last_name_placeholder')}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />

          </div>

          {/* Second Row */}
          <div className="name-row">

            <input
              type="tel"
              placeholder={t('auth_phone_placeholder')}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              type="email"
              placeholder={t('auth_email_placeholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

          </div>

          {/* Password */}
          <input
            type="password"
            placeholder={t('auth_password_placeholder')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder={t('auth_confirm_password_placeholder')}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? (locale === 'ar' ? 'جاري إنشاء الحساب...' : 'Creating Account...') : t('auth_signup_title')}
          </button>

          <p className="forgot-password" onClick={() => navigate('/login')}>
            {t('auth_have_account')}
          </p>

        </form>

      </div>

    </div>
  )
}

export default SignUp