import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import { connectDB } from './config/db.js'
import { Product } from './models/Product.js'
import { seedProducts } from './config/seedData.js'

// Import Routes
import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()

const app = express()

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
}))
app.use(express.json())

// Mount Routes
app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)

// Default Health Route
app.get('/', (req, res) => {
  res.json({ message: '🎓 Made in Banha API is running successfully!' })
})

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'حدث خطأ داخلي في الخادم' })
})

const PORT = process.env.PORT || 5000

// Initialize Database & Start Server
const startServer = async () => {
  // Connect DB (Mongo or local JSON fallback)
  await connectDB()

  // Seed Products if none exist
  try {
    const productCount = await Product.count()
    if (productCount === 0) {
      console.log('🌱 Seeding product catalog data...')
      await Product.createMany(seedProducts)
      console.log('✅ Seeding completed! 36 products loaded.')
    } else {
      console.log(`📊 Catalog database has ${productCount} products. Skipping seeding.`)
    }
  } catch (error) {
    console.error('Error seeding products:', error)
  }

  // Start listener
  app.listen(PORT, () => {
    console.log('\x1b[36m%s\x1b[0m', `🎉 Server is listening at http://localhost:${PORT}`)
  })
}

startServer()
