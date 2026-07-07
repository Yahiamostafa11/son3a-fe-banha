import jwt from 'jsonwebtoken'
import { User } from '../models/User.js'

export const protect = async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret')

      // Get user from model
      const user = await User.findById(decoded.id)
      
      if (!user) {
        return res.status(401).json({ message: 'User not found, unauthorized' })
      }

      // Attach user object to request
      req.user = {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      }

      next()
    } catch (error) {
      console.error('Auth verification error:', error)
      res.status(401).json({ message: 'Not authorized, token failed' })
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token provided' })
  }
}

export const decodeUserOptional = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      const token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret')
      const user = await User.findById(decoded.id)
      if (user) {
        req.user = {
          id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName
        }
      }
    } catch (error) {
      // Silence token decode errors for optional auth checkouts
    }
  }
  next()
}
