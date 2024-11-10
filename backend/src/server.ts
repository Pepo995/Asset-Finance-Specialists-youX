import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectDB from './db';
import router from './routes';
import { errorLogger, errorResponder } from './middlewares/error';

const app = express();
const port = process.env.PORT || '5000';

app.use(cors());

app.use('/', express.json(), router, errorLogger, errorResponder);

const connectServer = async () => {
  try {
    connectDB()
      .then((db) => db)
      .catch((error) => console.error(error));

    app.listen(port, () => console.log(`App listening on port ${port}`));
  } catch (error) {
    console.error('Unable to connect:', error);
  }
};

connectServer();
