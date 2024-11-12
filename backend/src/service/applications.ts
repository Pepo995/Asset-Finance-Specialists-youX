import { CreateApplicationParams, IApplication, UpdateApplicationParams } from '../interfaces/applications';
import { IUser } from '../interfaces/users';
import Application from '../models/Application';
import { User } from '../models/User';

export const getApplicationsByUser = async (userId: string) => {
  return await Application.find({ user: userId });
};

export const createApplication = async (userId: string, applicationData: CreateApplicationParams) => {
  const user = await User.findById(userId);

  if (!user) throw new Error('User not found');

  return await Application.create({ ...applicationData, user });
};

export const updateApplication = async (applicationId: string, updateParams: UpdateApplicationParams) => {
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
