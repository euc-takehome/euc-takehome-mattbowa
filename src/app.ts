import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { router } from './router'

dotenv.config()
if (!process.env.PORT) {
  process.exit(1)
}

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use('/api/patient', router)

export default app
