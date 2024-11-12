import { createApplication } from '@/app/api/applicationsApi';
import { ApplicationInterface, applicationSchema } from '@/app/interfaces/applications';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import TextInput from '../atoms/TextInput';
import { Button } from '../atoms/Button';

const CreateApplicationForm: FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationInterface>({
    resolver: zodResolver(applicationSchema),
  });

  const { mutate: createApplicationMutation, isLoading } = useMutation({
    mutationFn: createApplication,
    onSuccess: () => {
      reset();
    },
  });

  return (
    <form
      onSubmit={handleSubmit((values) => createApplicationMutation(values))}
      className="p-6 space-y-6 bg-white border border-gray-200 rounded-lg shadow"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Income</label>
        <TextInput
          register={register}
          placeholder="Income"
          name="income"
          error={!!errors.income}
          errorMessage={errors.income?.message}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Expenses</label>
        <TextInput register={register} placeholder="Expenses" name="expenses" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Assets</label>
        <TextInput register={register} placeholder="Assets" name="assets" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Liabilities</label>
        <TextInput register={register} placeholder="Liabilities" name="liabilities" />
      </div>

      <Button loading={isLoading} text="Loading...">
        Submit
      </Button>
    </form>
  );
};

export default CreateApplicationForm;
