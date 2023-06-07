import dotenv from 'dotenv'
import express from 'express'

import contactForm from './src_tmp/routes/contact-form.js'
import users from './src_tmp/routes/users.js'
import errorHandler from './src_tmp/middleware/error-handler.js'
dotenv.config()
// Default port is 3000, if no Environment Variable set
const port = process.env.PORT || 3000
const app = express()
app.use(express.json())

app.use('/contact_form', contactForm)
app.use('/users', users)
app.use(errorHandler)

app.listen(port, () =>
  console.log(`API server ready on http://localhost:${port}`)
)
