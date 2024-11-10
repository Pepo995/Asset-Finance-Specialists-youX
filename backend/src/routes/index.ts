import express from 'express';
import userRouter from './users';
import applicationRouter from './applications';

const router = express.Router();

router.use('/users', userRouter);
router.use('/applications', applicationRouter);

export default router;
