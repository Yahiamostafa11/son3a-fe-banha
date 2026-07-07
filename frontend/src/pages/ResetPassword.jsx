import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import { useLanguage } from '../context/LanguageContext'
import '../styles/ResetPassword.css'

import logo from '../assets/logo.png'
import Main_Img from '../assets/Main.png'

function ResetPassword() {
  const navigate = useNavigate()
  const { t, locale } = useLanguage()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const savedEmail = localStorage.getItem('bu_reset_email')
    const savedCode = localStorage.getItem('bu_reset_code')
    if (savedEmail) setEmail(savedEmail)
    if (savedCode) setCode(savedCode)
  }, [])

  const handleResetPassword = async (e) => {
    e.preventDefault()
    setErrorMsg('')

    if (password !== confirmPassword) {
      return setErrorMsg(locale === 'ar' ? 'كلمتا المرور غير متطابقتين' : 'Passwords do not match')
    }

    setLoading(true)

    try {
      await api.auth.resetPassword(email, code, password)
      
      // Clean up localStorage keys
      localStorage.removeItem('bu_reset_email')
      localStorage.removeItem('bu_reset_code')
      localStorage.removeItem('bu_reset_democode')
      
      alert(locale === 'ar' ? 'تم تغيير كلمة المرور بنجاح! يمكنك الآن تسجيل الدخول.' : 'Password changed successfully! You can log in now.')
      navigate('/login')
    } catch (err) {
      setErrorMsg(err.message || (locale === 'ar' ? 'فشل إعادة تعيين كلمة المرور، يرجى المحاولة مجدداً' : 'Reset password failed, please try again'))
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
          <img src={Main_Img} alt="ResetPassword_IMG" className="Main" />
        </div>

        <form className="login-form" onSubmit={handleResetPassword}>

          <img src={logo} alt="logo" className="logo" />

          <h1>{t('auth_reset_title')}</h1>

          {errorMsg && <div className="error-message" style={{ color: '#ef4444', marginBottom: '15px', fontWeight: 'bold', fontSize: '0.9rem' }}>{errorMsg}</div>}

          <input
            type="password"
            placeholder={locale === 'ar' ? 'كلمة مرور جديدة' : 'New Password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder={t('auth_confirm_password_placeholder')}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? (locale === 'ar' ? 'جاري التعديل...' : 'Updating...') : t('auth_reset_btn')}
          </button>

        </form>

      </div>

    </div>
  )
}

export default ResetPassword