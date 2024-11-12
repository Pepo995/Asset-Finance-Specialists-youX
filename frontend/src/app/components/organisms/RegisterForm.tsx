import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import TextInput from '../atoms/TextInput';
import { Button } from '../atoms/Button';
import { RegisterValidationInterface, registerValidationSchema } from '@/app/interfaces/user';
import { createUser } from '@/app/api/userApi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Register = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterValidationInterface>({
    resolver: zodResolver(registerValidationSchema),
  });

  const { mutate: registerMutation, isLoading } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      reset();
      router.push('/login');
    },
  });

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="w-full sm:w-3/4 lg:w-1/2 flex flex-col gap-6 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Create an Account</h2>

        <p className="text-gray-600 text-sm">Please complete your details to register.</p>

        <form onSubmit={handleSubmit((values) => registerMutation(values))} className="flex flex-col gap-4 mt-6">
          <TextInput register={register} placeholder="Name" name="name" />

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
            Register
          </Button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">Already have an account?</p>
          <Link href="/login" className="text-blue-600 font-semibold">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
