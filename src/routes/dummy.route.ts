import { Routes } from '@interfaces/routes.interface';
import { Router } from 'express';
import DummyController from '@controllers/dummy.controller';

class DummyRoute implements Routes {
  public path = '/dummy';
  public router = Router();
  public controller = new DummyController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.controller.resp404);
    this.router.get(`${this.path}/500`, this.controller.resp500);
    this.router.get(`${this.path}/403`, this.controller.resp403);
  }
}

export default DummyRoute;
