class DalleService {
  public async generate(text: string) {
    let response;

    try {
      response = await fetch('https://bf.dallemini.ai/generate', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: text }),
      });
      response = await response.json();
      return response.images.map(r => 'data:image/png;base64,' + r);
    } catch (e) {
      return e;
    }
  }
}

export default DalleService;
