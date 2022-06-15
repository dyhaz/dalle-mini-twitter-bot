import DalleService from '@services/dalle.service';

describe('DalleSvc', () => {
  let service: DalleService;

  it('should create', async () => {
    service = new DalleService();
    const text = 'jokowi';
    const result = await service.generate(text);
    expect(result).toBeTruthy();
  });
});
