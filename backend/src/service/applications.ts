import { IApplication } from '../interfaces/applications';
import Application from '../models/Application';
import { User } from '../models/User';

export const getApplicationsByUser = async (userId: string) => {
  return await Application.find({ user: userId });
};

export const createApplication = async (userId: string, applicationData: Omit<IApplication, 'user'>) => {
  const user = await User.findById(userId);

  if (!user) throw new Error('User not found');

  const application = new Application({ ...applicationData, user });
  return application.save();
};

export const updateApplication = async (applicationId: string, updateParams: Omit<IApplication, 'user'>) => {
  const application = await Application.findById(applicationId);

  if (!application) throw new Error('Application not found');

  Object.assign(application, updateParams);

  return application.save();
};

export const deleteApplication = async (applicationId: string) => {
  const application = await Application.findById(applicationId);

  if (!application) throw new Error('Application not found');

  await application.deleteOne();

  return true;
};
