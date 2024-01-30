import request from 'supertest';
import app from '../app.js';

describe('GET /', () => {
    it('should return 200 OK', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
    });
  });