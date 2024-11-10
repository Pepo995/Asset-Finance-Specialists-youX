import express, { NextFunction, Request, Response } from 'express';
import { createUser, getUsers } from '../service/users';

const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await getUsers();

    res.send(users);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

export default router;
