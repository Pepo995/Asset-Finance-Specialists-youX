'use client';
import Link from 'next/link';

const applications = [
  { id: '1', name: 'Application 1', amount: 10000 },
  { id: '2', name: 'Application 2', amount: 15000 },
  { id: '3', name: 'Application 3', amount: 20000 },
];

const ApplicationPage = () => {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-gray-800">Applications</h1>
        <p className="mt-2 text-gray-600">View and manage your finance applications below.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {applications.map((application) => (
          <div
            key={application.id}
            className="p-6 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200"
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">{application.name}</h2>
            <p className="text-gray-500 mb-4">Amount: ${application.amount}</p>
            <Link href={`/applications/${application.id}`}>
              <button className="px-4 py-2 w-full text-white bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition duration-200">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>

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
