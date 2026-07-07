import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from '../models/User.js'

// Helper: Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'fallback_secret', {
    expiresIn: '30d'
  })
}

// Memory cache for verification codes (for demo purposes)
const resetCodes = {}

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
export const registerUser = async (req, res) => {
  const { email, password, firstName, lastName } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'يرجى تقديم البريد الإلكتروني وكلمة المرور' })
  }

  try {
    const userExists = await User.findOne({ email })
    if (userExists) {
      return res.status(400).json({ message: 'هذا البريد الإلكتروني مسجل بالفعل' })
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
      email,
      password: hashedPassword,
      firstName: firstName || '',
      lastName: lastName || ''
    })

    res.status(201).json({
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      token: generateToken(user._id)
    })
  } catch (error) {
    res.status(500).json({ message: error.message || 'حدث خطأ أثناء التسجيل' })
  }
}

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
// @access  Public
export const loginUser = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'يرجى تقديم البريد الإلكتروني وكلمة المرور' })
  }

  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' })
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' })
    }

    res.json({
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      token: generateToken(user._id)
    })
  } catch (error) {
    res.status(500).json({ message: 'حدث خطأ أثناء تسجيل الدخول' })
  }
}

// @desc    Request password reset code
// @route   POST /api/auth/forgot-password
// @access  Public
export const forgotPassword = async (req, res) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ message: 'يرجى تقديم البريد الإلكتروني' })
  }

  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: 'لا يوجد حساب مسجل بهذا البريد الإلكتروني' })
    }

    // Generate a 4-digit code (similar to the UI input layout which has 4 inputs)
    const code = Math.floor(1000 + Math.random() * 9000).toString()
    resetCodes[email] = code

    console.log(`[PASSWORD RESET] Code for ${email} is: ${code}`)

    res.json({ 
      message: 'تم إرسال رمز التأكيد بنجاح',
      demoCode: code // Send back for demo convenience so the user doesn't have to check console logs!
    })
  } catch (error) {
    res.status(500).json({ message: 'حدث خطأ ما' })
  }
}

// @desc    Verify password reset code
// @route   POST /api/auth/verify-code
// @access  Public
export const verifyCode = async (req, res) => {
  const { email, code } = req.body

  if (!email || !code) {
    return res.status(400).json({ message: 'يرجى تقديم البريد الإلكتروني ورمز التحقق' })
  }

  const savedCode = resetCodes[email]

  if (savedCode && savedCode === code) {
    res.json({ message: 'رمز التحقق صحيح' })
  } else {
    res.status(400).json({ message: 'رمز التحقق غير صحيح أو انتهت صلاحيته' })
  }
}

// @desc    Reset password
// @route   POST /api/auth/reset-password
// @access  Public
export const resetPassword = async (req, res) => {
  const { email, code, newPassword } = req.body

  if (!email || !code || !newPassword) {
    return res.status(400).json({ message: 'يرجى ملء جميع الحقول المطلوبة' })
  }

  const savedCode = resetCodes[email]

  if (!savedCode || savedCode !== code) {
    return res.status(400).json({ message: 'طلب إعادة تعيين غير صالح' })
  }

  try {
    // Hash new password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(newPassword, salt)

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: 'المستخدم غير موجود' })
    }

    // Update user password
    await User.update({ email }, { password: hashedPassword })

    // Clean up reset code
    delete resetCodes[email]

    res.json({ message: 'تم إعادة تعيين كلمة المرور بنجاح' })
  } catch (error) {
    res.status(500).json({ message: 'حدث خطأ أثناء إعادة تعيين كلمة المرور' })
  }
}
