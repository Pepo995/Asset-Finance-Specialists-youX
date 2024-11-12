import { NextFunction, Request, Response, Router } from 'express';
import {
  createApplication,
  deleteApplication,
  getApplicationsByUser,
  updateApplication,
} from '../service/applications';
import { authenticate } from '../middlewares';
import { CreateApplicationParams, createApplicationParams, updateApplicationParams } from '../interfaces/applications';
import { getUserParams } from '../interfaces/users';

const router = Router();

router.get(
  '/',
  authenticate.authenticate('jwt', { session: false }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = getUserParams.parse(req.user);
      const applications = await getApplicationsByUser(id);

      res.status(200).send(applications);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/create',
  authenticate.authenticate('jwt', { session: false }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = getUserParams.parse(req.user);
      const parsed = createApplicationParams.parse(req.body);
      const application = await createApplication(id, parsed);

      res.status(201).send(application);
    } catch (error) {
      next(error);
    }
  },
);

router.put(
  '/:id',
  authenticate.authenticate('jwt', { session: false }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const parsed = updateApplicationParams.parse(req.body);
      const application = await updateApplication(id, parsed);

      res.status(200).send(application);
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  '/:id',
  authenticate.authenticate('jwt', { session: false }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const application = await deleteApplication(id);

      res.status(200).send(application);
    } catch (error) {
      next(error);
    }
  },
);

export default router;
