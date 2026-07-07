import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../services/api'
import { useLanguage } from '../context/LanguageContext'
import '../styles/Verification.css'

import logo from '../assets/logo.png'
import Main_Img from '../assets/Main.png'

function Verification() {
  const navigate = useNavigate()
  const { t, locale } = useLanguage()
  const [code, setCode] = useState('')
  const [email, setEmail] = useState('')
  const [demoCode, setDemoCode] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const savedEmail = localStorage.getItem('bu_reset_email')
    if (savedEmail) {
      setEmail(savedEmail)
    }
    const savedDemoCode = localStorage.getItem('bu_reset_democode')
    if (savedDemoCode) {
      setDemoCode(savedDemoCode)
    }
  }, [])

  const handleVerifyCode = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setLoading(true)

    try {
      await api.auth.verifyCode(email, code)
      localStorage.setItem('bu_reset_code', code)
      navigate('/reset-password')
    } catch (err) {
      setErrorMsg(err.message || (locale === 'ar' ? 'رمز التأكيد غير صحيح أو انتهت صلاحيته' : 'Incorrect or expired verification code'))
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
          <img src={Main_Img} alt="Verification_IMG" className="Main" />
        </div>

        <form className="login-form" onSubmit={handleVerifyCode}>

          <img src={logo} alt="logo" className="logo" />

          <h1>{t('auth_verify_title')}</h1>

          {demoCode && (
            <div className="demo-helper" style={{ background: '#f8fafc', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', marginBottom: '15px', color: '#1d2352', fontSize: '0.9rem', textAlign: 'center' }}>
              {locale === 'ar' ? 'الرمز التجريبي لإعادة التعيين: ' : 'Demo reset code: '}<strong>{demoCode}</strong>
            </div>
          )}

          {errorMsg && <div className="error-message" style={{ color: '#ef4444', marginBottom: '15px', fontWeight: 'bold', fontSize: '0.9rem' }}>{errorMsg}</div>}

          <input
            type="text"
            placeholder={locale === 'ar' ? 'رمز التأكيد' : 'Verification Code'}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? (locale === 'ar' ? 'جاري التحقق...' : 'Verifying...') : t('auth_verify_btn')}
          </button>

          <p className="verification-text">
            {t('auth_verify_resend')}
          </p>

        </form>

      </div>

    </div>
  )
}

export default Verification