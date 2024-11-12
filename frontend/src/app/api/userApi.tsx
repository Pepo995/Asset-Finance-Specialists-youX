import axios from 'axios';
import { LoginValidationInterface, RegisterValidationInterface } from '../interfaces/user';

const userApi = axios.create({
  baseURL: `http://localhost:5000/users`,
});

export const createUser = (registerData: RegisterValidationInterface) => userApi.post('/register', registerData);

export const login = (loginData: LoginValidationInterface) => userApi.post('/login', loginData);
