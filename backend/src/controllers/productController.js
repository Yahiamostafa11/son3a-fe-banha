import { Product } from '../models/Product.js'

// @desc    Get all products (with optional department/category filters)
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res) => {
  const { department, category } = req.query
  const filter = {}

  if (department) {
    filter.department = department.toLowerCase()
  }

  if (category && category !== 'all') {
    filter.category = category.toLowerCase()
  }

  try {
    const products = await Product.find(filter)
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: 'حدث خطأ أثناء تحميل المنتجات' })
  }
}

// @desc    Get single product by ID
// @route   GET /api/products/:id
// @access  Public
export const getProductById = async (req, res) => {
  const { id } = req.params

  try {
    const product = await Product.findOne({ _id: id })
    if (!product) {
      return res.status(404).json({ message: 'المنتج غير موجود' })
    }
    res.json(product)
  } catch (error) {
    res.status(500).json({ message: 'حدث خطأ أثناء تحميل تفاصيل المنتج' })
  }
}
