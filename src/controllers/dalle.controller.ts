import dalleService from '@services/dalle.service';
import { NextFunction, Request, Response } from 'express';

class DalleController {
  service = new dalleService();

  public generate = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const text = 'donald trump';
    const result = await this.service.generate(text);
    res.status(200).json(result);
  };
}

export default DalleController;
