import { NextFunction, Request, Response } from 'express';

class DummyController {
  public resp404 = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const result = {};
    res.status(404).json(result);
  };

  public resp500 = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const result = {};
    res.status(500).json(result);
  };

  public resp403 = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const result = {};
    res.status(403).json(result);
  };
}

export default DummyController;
