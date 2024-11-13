import axios from 'axios';
import { LoginValidationInterface, RegisterValidationInterface } from '../interfaces/user';

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const userApi = axios.create({
  baseURL: `${apiUrl}/users`,
});

export const createUser = (registerData: RegisterValidationInterface) => userApi.post('/register', registerData);

export const login = (loginData: LoginValidationInterface) => userApi.post('/login', loginData);
