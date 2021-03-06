import app from '@/main/config/app'
import { noCache } from '@/main/middlewares'
import request from 'supertest'

describe('NoCahce Middleware', () => {
  test('should disable cache', async () => {
    app.get('/test_no_cache', noCache, (req, res) => {
      res.send()
    })
    await request(app)
      .get('/test_no_cache')
      .expect('cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
      .expect('pragma', 'no-cache')
      .expect('expires', '0')
      .expect('surrogate-Control', 'no-store')
  })
})
