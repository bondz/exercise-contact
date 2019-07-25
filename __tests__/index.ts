import request from 'supertest';

import app from '../src/app';

describe('Server', () => {
  test('Has a /api endpoint', () => {
    return request(app)
      .get('/api/contacts')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
