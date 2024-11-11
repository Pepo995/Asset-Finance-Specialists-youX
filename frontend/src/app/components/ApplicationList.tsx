// src/components/ApplicationList.tsx
import { FC } from 'react';
import Link from 'next/link';

interface Application {
  id: string;
  name: string;
  amount: number;
}

const applications: Application[] = [
  { id: '1', name: 'Application 1', amount: 5000 },
  { id: '2', name: 'Application 2', amount: 12000 },
  { id: '3', name: 'Application 3', amount: 8000 },
];

const ApplicationList: FC = () => (
  <div className="grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
    {applications.map((app) => (
      <div
        key={app.id}
        className="p-4 transition-shadow bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg"
      >
        <h3 className="text-lg font-semibold text-gray-800">{app.name}</h3>
        <p className="mt-2 text-gray-600">
          Amount: <span className="font-medium">${app.amount}</span>
        </p>
        <Link href={`/applications/${app.id}`} passHref>
          <button className="px-4 py-2 mt-4 text-sm font-medium text-white transition-colors bg-blue-600 rounded hover:bg-blue-700">
            View Details
          </button>
        </Link>
      </div>
    ))}
  </div>
);

export default ApplicationList;
