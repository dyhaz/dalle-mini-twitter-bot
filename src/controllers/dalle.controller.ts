import dalleService from '@services/dalle.service';

class DalleController {
  service = new dalleService();

  generate(text = 'donald trump') {
    return this.service.generate(text);
  }
}

export default DalleController;
