import express from 'express'
import { createOrder, getMyOrders } from '../controllers/orderController.js'
import { protect, decodeUserOptional } from '../middleware/auth.js'

const router = express.Router()

router.post('/', decodeUserOptional, createOrder)
router.get('/', protect, getMyOrders)

export default router
