import dalleService from '@services/dalle.service';
import { NextFunction, Request, Response } from 'express';

class DalleController {
  service = new dalleService();

  public generate = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const text = 'donald trump';
    res.status(200).json(this.service.generate(text));
  };
}

export default DalleController;
