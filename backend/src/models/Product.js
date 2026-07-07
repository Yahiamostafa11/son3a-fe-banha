import mongoose from 'mongoose'
import { jsonDb } from '../config/jsonDb.js'

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String },
  price: { type: Number, required: true },
  rating: { type: Number, default: 5 },
  imgName: { type: String, required: true }, // Store name of image key to dynamically reference on front-end
  category: { type: String, required: true },
  department: { type: String, required: true, enum: ['tech', 'agri', 'art'] },
  createdAt: { type: Date, default: Date.now }
})

const MongoProduct = mongoose.models.Product || mongoose.model('Product', ProductSchema)

class ProductModel {
  async find(query = {}) {
    if (global.isMongoConnected) {
      return await MongoProduct.find(query)
    } else {
      return jsonDb.find('products', query)
    }
  }

  async findOne(query) {
    if (global.isMongoConnected) {
      return await MongoProduct.findOne(query)
    } else {
      return jsonDb.findOne('products', query)
    }
  }

  async count() {
    if (global.isMongoConnected) {
      return await MongoProduct.countDocuments()
    } else {
      return this.find().then(data => data.length)
    }
  }

  async createMany(productsList) {
    if (global.isMongoConnected) {
      return await MongoProduct.insertMany(productsList)
    } else {
      const results = []
      for (const prod of productsList) {
        // Avoid duplicate seeding
        const existing = jsonDb.findOne('products', { title: prod.title, department: prod.department })
        if (!existing) {
          results.push(jsonDb.insert('products', prod))
        }
      }
      return results
    }
  }
}

export const Product = new ProductModel()
