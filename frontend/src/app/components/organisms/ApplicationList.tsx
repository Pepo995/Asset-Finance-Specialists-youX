import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { getApplications } from '@/app/api/applicationsApi';
import { Application } from '@/app/interfaces/applications';

const ApplicationList: FC<{ initialData: { applications: Application[] } }> = ({ initialData }) => {
  const [applicationsList, setApplicationsList] = useState<Application[]>([]);

  const { isLoading, data } = useQuery<{ applications: Application[] }>(['applications'], getApplications, {
    initialData,
  });

  useEffect(() => {
    if (data?.applications) setApplicationsList(data.applications);
  }, [data?.applications]);

  if (isLoading || !data) return <p>Loading ... </p>;

  return (
    <div className="grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
      {data.applications.map((application, index) => (
        <div
          key={index}
          className="p-4 transition-shadow bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg"
        >
          <h3 className="text-lg font-semibold text-gray-800">Application {index + 1}</h3>

          <p className="mt-2 text-gray-600">
            Income: <span className="font-medium">${application.income}</span>
          </p>

          <p className="mt-2 text-gray-600">
            Expenses: <span className="font-medium">${application.expenses}</span>
          </p>

          <p className="mt-2 text-gray-600">
            Assets: <span className="font-medium">${application.assets}</span>
          </p>

          <p className="mt-2 text-gray-600">
            Liabilities: <span className="font-medium">${application.liabilities}</span>
          </p>

          <Link href={`/applications/${application._id}`} passHref>
            <button className="px-4 py-2 mt-4 text-sm font-medium text-white transition-colors bg-blue-600 rounded hover:bg-blue-700">
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ApplicationList;
