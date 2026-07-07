import express from 'express'
import {
  registerUser,
  loginUser,
  forgotPassword,
  verifyCode,
  resetPassword
} from '../controllers/authController.js'

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/forgot-password', forgotPassword)
router.post('/verify-code', verifyCode)
router.post('/reset-password', resetPassword)

export default router
