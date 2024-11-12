'use client';
import CreateApplicationForm from '@/app/components/organisms/CreateApplicationForm';
import { usePathname, useRouter } from 'next/navigation';

const NewApplicationPage = () => {
  const router = useRouter();
  const pathname = usePathname().split('/');
  const id = pathname[pathname.length - 1];

  const handleFormSubmit = (data: { name: string; amount: number }) => {
    console.log('Updated data:', data);
    router.push('/applications');
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <div className="flex items-center justify-between mb-8 p-4 bg-white shadow-md rounded-lg border border-gray-200">
        <h1 className="text-3xl font-semibold text-gray-800">Create a new Application</h1>
        <button
          onClick={() => router.push('/applications')}
          className="px-6 py-2 text-sm font-medium text-blue-600 transition-all duration-200 transform bg-gray-100 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white hover:scale-105"
        >
          Back to Applications
        </button>
      </div>

      <div className="p-8 bg-white shadow-lg rounded-lg border border-gray-200">
        <CreateApplicationForm />
      </div>
    </div>
  );
};

export default NewApplicationPage;
