import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DATA_DIR = path.join(__dirname, '../../data')

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true })
}

class JsonDb {
  constructor() {
    this.initCollection('users')
    this.initCollection('products')
    this.initCollection('orders')
  }

  initCollection(collection) {
    const filePath = path.join(DATA_DIR, `${collection}.json`)
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([], null, 2), 'utf-8')
    }
  }

  getFilePath(collection) {
    return path.join(DATA_DIR, `${collection}.json`)
  }

  read(collection) {
    const filePath = this.getFilePath(collection)
    try {
      const data = fs.readFileSync(filePath, 'utf-8')
      return JSON.parse(data)
    } catch (error) {
      console.error(`Error reading ${collection}.json:`, error)
      return []
    }
  }

  write(collection, data) {
    const filePath = this.getFilePath(collection)
    try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')
      return true
    } catch (error) {
      console.error(`Error writing to ${collection}.json:`, error)
      return false
    }
  }

  find(collection, query = {}) {
    const data = this.read(collection)
    return data.filter(item => {
      for (const key in query) {
        if (item[key] !== query[key]) {
          return false
        }
      }
      return true
    })
  }

  findOne(collection, query = {}) {
    const data = this.read(collection)
    return data.find(item => {
      for (const key in query) {
        if (item[key] !== query[key]) {
          return false
        }
      }
      return true
    })
  }

  insert(collection, document) {
    const data = this.read(collection)
    const newDoc = {
      _id: Math.random().toString(36).substring(2, 9) + Date.now().toString(36),
      createdAt: new Date().toISOString(),
      ...document
    }
    data.push(newDoc)
    this.write(collection, data)
    return newDoc
  }

  update(collection, query, updateFields) {
    const data = this.read(collection)
    let updatedCount = 0
    const updatedData = data.map(item => {
      let matches = true
      for (const key in query) {
        if (item[key] !== query[key]) {
          matches = false
          break
        }
      }
      if (matches) {
        updatedCount++
        return { ...item, ...updateFields, updatedAt: new Date().toISOString() }
      }
      return item
    })
    if (updatedCount > 0) {
      this.write(collection, updatedData)
    }
    return updatedCount > 0
  }
}

export const jsonDb = new JsonDb()
