import axios from 'axios';
import { ApplicationInterface } from '../interfaces/applications';

const applicationsApi = axios.create({
  baseURL: `http://localhost:5000/applications`,
});

export const getApplications = async () => {
  const { data } = await applicationsApi.get('/');
  return data;
};

export const createApplication = (applicationData: ApplicationInterface) =>
  applicationsApi.post('/create', applicationData);

export const updateApplication = (id: string, applicationData: ApplicationInterface) =>
  applicationsApi.put(`/${id}`, applicationData);

export const deleteApplication = (id: string) => applicationsApi.delete(`/${id}`);

applicationsApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);