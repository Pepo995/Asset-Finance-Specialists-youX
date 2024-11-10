import { User } from '../models/User';

const createInitialUser = async () => {
  const existingUsers = await User.find();

  if (existingUsers.length === 0) {
    const user = [{ name: 'John Doe', email: 'johndoe@email.com', password: 'john1234' }];

    await User.insertMany(user);
    console.log('Initial data created: User Added');
  }
};

export default createInitialUser;
