import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import { errormiddleware } from './middleware/error.js'
import reserverouter from './routes/reservation.routes.js'
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["POST", "GET"],
  credentials: true
}))
app.use(express.urlencoded({ extended: true }))
app.use('/api',reserverouter)

app.get('/', (req, res) => {
  res.send('API is running...')
})

mongoose.connect(process.env.MONGO_URI, {
  dbName: "Restaurent"
})
  .then(() => {
    console.log('MongoDB connected: Restaurent')
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`)
    })
  })
  .catch(err => console.error('MongoDB connection failed:', err.message))
app.use(errormiddleware)