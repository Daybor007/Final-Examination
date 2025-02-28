require('dotenv').config()

const express = require('express')

const connectDB = require('./config/db')

const authRoutes = require('./routes/authRoutes')

const postRoutes = require('./routes/postRoutes')

const kycRoutes = require('./routes/kycRoutes')

connectDB()


const app = express()

app.use(express.json())

app.use('/api', authRoutes)

app.use('/api/posts', postRoutes)

app.use('/api/kyc', kycRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

