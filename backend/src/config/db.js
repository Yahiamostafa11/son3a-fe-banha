import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

global.isMongoConnected = false

export const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI

  if (!mongoUri) {
    console.log('\x1b[33m%s\x1b[0m', '⚠️ No MONGO_URI provided in .env. Running in LOCAL JSON database mode.')
    global.isMongoConnected = false
    return
  }

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000 // Timeout fast if cannot connect
    })
    console.log('\x1b[32m%s\x1b[0m', '🚀 MongoDB Connected Successfully!')
    global.isMongoConnected = true
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', `❌ MongoDB Connection Failed: ${error.message}`)
    console.log('\x1b[33m%s\x1b[0m', '⚠️ Falling back to LOCAL JSON database mode.')
    global.isMongoConnected = false
  }
}
