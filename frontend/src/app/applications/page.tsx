'use client';
import Link from 'next/link';
import ApplicationList from '../components/organisms/ApplicationList';
import { getApplications } from '../api/applicationsApi';
import { Application } from '../interfaces/applications';

const ApplicationPage = async () => {
  const applications: Application[] = await getApplications();

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-gray-800">Applications</h1>
        <p className="mt-2 text-gray-600">View and manage your finance applications below.</p>
      </div>

      <ApplicationList initialData={{ applications }} />

      <div className="mt-10 flex justify-center">
        <Link href="/applications/new">
          <button className="px-6 py-3 text-white bg-green-600 rounded-lg font-medium text-lg hover:bg-green-700 transition duration-200">
            Add New Application
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ApplicationPage;
