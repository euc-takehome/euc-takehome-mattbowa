import request from 'supertest'
import app from './src/app'

describe('POST /users', () => {
  describe('when a get request to obtain patient data', () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app).get('/api/patient/1').send()
      expect(response.statusCode).toBe(200)
      expect(response.body.firstName).toBeDefined()
      expect(response.body.lastName).toBeDefined()
      expect(response.body.allergies).toBeDefined()
      expect(response.body.medications).toBeDefined()
    })
  })
})
