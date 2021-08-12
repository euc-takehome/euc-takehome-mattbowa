import * as dotenv from 'dotenv'
import app from './app'

const PORT: number = parseInt(process.env.PORT as string, 10)

dotenv.config()
if (!process.env.PORT) {
  process.exit(1)
}

// app.listen(8080, () => 'Listening on port 8080')
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
