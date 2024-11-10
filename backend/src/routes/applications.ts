import { NextFunction, Request, Response, Router } from 'express';
import {
  createApplication,
  deleteApplication,
  getApplicationsByUser,
  updateApplication,
} from '../service/applications';

const router = Router();

router.get('/:userId', async ({ params }: Request, res: Response, next: NextFunction) => {
  try {
    const applications = await getApplicationsByUser(params.userId);

    res.status(200).send(applications);
  } catch (error) {
    next(error);
  }
});

router.post('/:userId', async ({ params, body }: Request, res: Response, next: NextFunction) => {
  try {
    const application = await createApplication(params.userId, body);

    res.status(201).send(application);
  } catch (error) {
    next(error);
  }
});

router.put('/:userId', async ({ body, params }: Request, res: Response, next: NextFunction) => {
  try {
    const application = await updateApplication(params.userId, body);

    res.status(200).send(application);
  } catch (error) {
    next(error);
  }
});

router.delete('/:userId', async ({ params }: Request, res: Response, next: NextFunction) => {
  try {
    const application = await deleteApplication(params.userId);

    res.status(200).send(application);
  } catch (error) {
    next(error);
  }
});

export default router;
