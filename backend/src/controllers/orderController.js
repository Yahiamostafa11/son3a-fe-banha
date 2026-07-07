import { Order } from '../models/Order.js'

// @desc    Create a new order
// @route   POST /api/orders
// @access  Public/Private (Supports anonymous checkouts & logged in accounts)
export const createOrder = async (req, res) => {
  const { 
    orderNumber, 
    email, 
    shippingAddress, 
    items, 
    wrapProduct, 
    subtotal, 
    shippingCost, 
    total 
  } = req.body

  if (!email || !items || items.length === 0 || !subtotal || !total) {
    return res.status(400).json({ message: 'الرجاء تقديم تفاصيل الطلب الكاملة' })
  }

  try {
    const orderData = {
      orderNumber: orderNumber || Math.floor(10000000000 + Math.random() * 90000000000).toString(),
      email,
      shippingAddress,
      items,
      wrapProduct: !!wrapProduct,
      subtotal,
      shippingCost: shippingCost || 100,
      total
    }

    // Attach user ID if logged in (token provided)
    if (req.user) {
      orderData.user = req.user.id
    }

    const order = await Order.create(orderData)
    res.status(201).json(order)
  } catch (error) {
    res.status(500).json({ message: 'حدث خطأ أثناء إتمام الطلب' })
  }
}

// @desc    Get user's order history
// @route   GET /api/orders
// @access  Private
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
    res.json(orders)
  } catch (error) {
    res.status(500).json({ message: 'حدث خطأ أثناء تحميل سجل الطلبات' })
  }
}
