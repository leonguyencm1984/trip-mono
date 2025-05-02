import { Application, Request, Response } from 'express';
import { IndexController } from '../controllers/index';

const indexController = new IndexController();

export const setRoutes = (app: Application) => {
  app.get('/', (req: Request, res: Response) => {
    indexController.getIndex(req, res);
  });
};