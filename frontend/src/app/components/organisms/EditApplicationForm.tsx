import { createApplication, updateApplication, deleteApplication } from '@/app/api/applicationsApi';
import { ApplicationInterface, applicationSchema } from '@/app/interfaces/applications';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import TextInput from '../atoms/TextInput';
import { Button } from '../atoms/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

interface EditApplicationFormProps {
  id: string;
}

const EditApplicationForm: FC<EditApplicationFormProps> = ({ id }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationInterface>({
    resolver: zodResolver(applicationSchema),
  });

  const { mutate: updateApplicationMutation, isLoading: isUpdating } = useMutation({
    mutationFn: (data: ApplicationInterface) => updateApplication(id, data),
    onSuccess: () => {
      reset();
      toast.success('Application updated successfully!');
    },
  });

  const { mutate: deleteApplicationMutation, isLoading: isDeleting } = useMutation({
    mutationFn: () => deleteApplication(id),
    onSuccess: () => {
      toast.success('Application deleted successfully!');
      setTimeout(() => {
        router.push('/applications');
      }, 1500);
    },
  });

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit((values) => updateApplicationMutation(values))}
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

        <div className="flex justify-between">
          <Button loading={isUpdating} text="Loading...">
            Submit
          </Button>
          <button
            onClick={() => deleteApplicationMutation()}
            className="bg-red-500 hover:bg-red-600 text-white px-2 rounded-2"
          >
            Delete
          </button>
        </div>
      </form>
    </>
  );
};

export default EditApplicationForm;
