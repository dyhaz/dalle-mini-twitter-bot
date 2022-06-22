import App from '@/app';

describe('App', () => {
  let service: App;
  it('should create', async () => {
    service = new App([]);
    await service.initializeTwt();
  });
});
