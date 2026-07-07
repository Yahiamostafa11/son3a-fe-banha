const API_BASE = 'http://localhost:5000/api'

// Helper to make fetch calls easily
const request = async (endpoint, options = {}) => {
  const token = localStorage.getItem('bu_user_token')
  
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const config = {
    ...options,
    headers
  }

  try {
    const response = await fetch(`${API_BASE}${endpoint}`, config)
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.message || 'حدث خطأ ما')
    }
    
    return data
  } catch (error) {
    console.error(`API Error in ${endpoint}:`, error.message)
    throw error
  }
}

export const api = {
  // Authentication Endpoints
  auth: {
    register: (userData) => request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    }),
    
    login: (credentials) => request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    }),
    
    forgotPassword: (email) => request('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email })
    }),
    
    verifyCode: (email, code) => request('/auth/verify-code', {
      method: 'POST',
      body: JSON.stringify({ email, code })
    }),
    
    resetPassword: (email, code, newPassword) => request('/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ email, code, newPassword })
    })
  },

  // Products Endpoints
  products: {
    get: (department = '', category = 'all') => {
      let query = `?department=${department}`
      if (category && category !== 'all') {
        query += `&category=${category}`
      }
      return request(`/products${query}`)
    },
    
    getById: (id) => request(`/products/${id}`)
  },

  // Orders Endpoints
  orders: {
    create: (orderData) => request('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData)
    }),
    
    getMyHistory: () => request('/orders')
  }
}
