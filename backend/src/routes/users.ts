import express, { NextFunction, Request, Response } from 'express';
import { createUser, getUserById, login, register } from '../service/users';
import {
  createUserParams,
  CreateUserParams,
  getUserParams,
  loginUserParams,
  LoginUserParams,
} from '../interfaces/users';
import { authenticate } from '../middlewares';

const router = express.Router();

router.get(
  '/currentUser',
  authenticate.authenticate('jwt', { session: false }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = getUserParams.parse(req.user);
      const user = await getUserById(id);

      res.send(user);
    } catch (error: any) {
      next(error);
    }
  },
);

router.post('/register', async ({ body }: { body: CreateUserParams }, res: Response, next: NextFunction) => {
  try {
    const parsed = createUserParams.parse(body);
    const createdUser = await register(parsed);

    res.status(200).send(createdUser);
  } catch (error: any) {
    next(error);
  }
});

router.post('/login', async ({ body }: { body: LoginUserParams }, res: Response, next: NextFunction) => {
  try {
    const { email, password } = loginUserParams.parse(body);
    const tokenData = await login(email, password);

    res.status(200).send(tokenData);
  } catch (error: any) {
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
