import request from 'supertest';
import App from '@/app';
import DalleRoute from '@routes/dalle.route';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Get Images', () => {
  describe('[GET] /dalle', () => {
    it('response statusCode 200 / generate', () => {
      const response: any[] = [];
      const route = new DalleRoute();
      const app = new App([route]);

      return request(app.getServer()).get(`${route.path}`).expect(200, { data: response, message: 'findAll' });
    });
  });
});
