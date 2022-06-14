import { Routes } from '@interfaces/routes.interface';
import { Router } from 'express';
import DalleController from '@controllers/dalle.controller';

class DalleRoute implements Routes {
  public path = '/dalle';
  public router = Router();
  public controller = new DalleController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.controller.generate);
  }
}

export default DalleRoute;
