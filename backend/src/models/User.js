import mongoose from 'mongoose'
import { jsonDb } from '../config/jsonDb.js'

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  createdAt: { type: Date, default: Date.now }
})

// Prevent duplicate model compiling errors in dev mode
const MongoUser = mongoose.models.User || mongoose.model('User', UserSchema)

class UserModel {
  async create(userData) {
    if (global.isMongoConnected) {
      try {
        return await MongoUser.create(userData)
      } catch (err) {
        throw new Error(err.message)
      }
    } else {
      // Check duplicate email in JSON mode
      const existing = jsonDb.findOne('users', { email: userData.email })
      if (existing) {
        throw new Error('Email already exists')
      }
      return jsonDb.insert('users', userData)
    }
  }

  async findOne(query) {
    if (global.isMongoConnected) {
      return await MongoUser.findOne(query)
    } else {
      return jsonDb.findOne('users', query)
    }
  }

  async findById(id) {
    if (global.isMongoConnected) {
      return await MongoUser.findById(id)
    } else {
      return jsonDb.findOne('users', { _id: id })
    }
  }

  async update(query, updateFields) {
    if (global.isMongoConnected) {
      return await MongoUser.updateOne(query, updateFields)
    } else {
      return jsonDb.update('users', query, updateFields)
    }
  }
}

export const User = new UserModel()
