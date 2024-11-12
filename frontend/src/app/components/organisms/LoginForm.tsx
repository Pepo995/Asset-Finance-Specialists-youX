import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import TextInput from '../atoms/TextInput';
import { Button } from '../atoms/Button';
import { LoginValidationInterface, loginValidationSchema } from '@/app/interfaces/user';
import { login } from '@/app/api/userApi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginValidationInterface>({
    resolver: zodResolver(loginValidationSchema),
  });

  const router = useRouter();

  const { mutate: loginMutation, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem('token', data.data.token);
      router.push('/applications');
      router.refresh();
    },
  });

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="w-full sm:w-3/4 lg:w-1/2 flex flex-col gap-6 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome Back!</h2>
        <p className="text-gray-600 text-sm">Please confirm your information to log in.</p>

        <form
          onSubmit={handleSubmit((values) => {
            loginMutation(values);
            reset();
          })}
          className="flex flex-col gap-4 mt-6"
        >
          <TextInput
            register={register}
            placeholder="Email"
            name="email"
            error={!!errors.email}
            errorMessage={errors.email?.message}
          />
          <TextInput
            register={register}
            placeholder="Password"
            name="password"
            hidden
            error={!!errors.password}
            errorMessage={errors.password?.message}
          />
          <Button loading={isLoading} text="Loading...">
            Login
          </Button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">Don’t have an account?</p>
          <Link href="/register" className="text-blue-600 font-semibold">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
