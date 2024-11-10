import mongoose from 'mongoose';
import createInitialUser from '../seeders';

const connectionString = process.env.CONNECTION_STRING || '';

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(connectionString);
    console.log(`MongoDB connected: ${connection.connection.host}`);

    await createInitialUser();
  } catch (error) {
    console.log(`Error connecting MongoDB: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
