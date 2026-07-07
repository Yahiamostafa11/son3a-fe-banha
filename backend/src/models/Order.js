import mongoose from 'mongoose'
import { jsonDb } from '../config/jsonDb.js'

const OrderSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Optional if anonymous checkout
  email: { type: String, required: true },
  shippingAddress: {
    country: String,
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    zipCode: String
  },
  items: [
    {
      productId: String,
      title: String,
      price: Number,
      qty: Number
    }
  ],
  wrapProduct: { type: Boolean, default: false },
  subtotal: { type: Number, required: true },
  shippingCost: { type: Number, default: 100 },
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
})

const MongoOrder = mongoose.models.Order || mongoose.model('Order', OrderSchema)

class OrderModel {
  async create(orderData) {
    if (global.isMongoConnected) {
      try {
        return await MongoOrder.create(orderData)
      } catch (err) {
        throw new Error(err.message)
      }
    } else {
      return jsonDb.insert('orders', orderData)
    }
  }

  async find(query = {}) {
    if (global.isMongoConnected) {
      return await MongoOrder.find(query).sort({ createdAt: -1 })
    } else {
      // JSON Mode: sort descending by date manually
      const data = jsonDb.find('orders', query)
      return data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }
  }

  async findOne(query) {
    if (global.isMongoConnected) {
      return await MongoOrder.findOne(query)
    } else {
      return jsonDb.findOne('orders', query)
    }
  }
}

export const Order = new OrderModel()
