import axios from 'axios';

class DalleService {
  public async generate(text: string): Promise<string[] | any> {
    let response;

    try {
      response = await axios.post(
        'https://bf.dallemini.ai/generate',
        {
          method: 'post',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          data: { prompt: text },
        },
        {
          timeout: 10000,
        },
      );
      response = await response.json();
      return response.images.map(r => 'data:image/png;base64,' + r);
    } catch (e) {
      return e;
    }
  }
}

export default DalleService;
