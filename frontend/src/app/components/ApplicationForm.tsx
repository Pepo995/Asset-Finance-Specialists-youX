// src/components/ApplicationForm.tsx
import { FC, useState } from 'react';

interface ApplicationFormProps {
  initialData?: {
    name: string;
    amount: number;
  };
  onSubmit: (data: { name: string; amount: number }) => void;
}

const ApplicationForm: FC<ApplicationFormProps> = ({ initialData, onSubmit }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [amount, setAmount] = useState(initialData?.amount || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, amount });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-6 bg-white border border-gray-200 rounded-lg shadow">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          className="w-full p-3 mt-1 border rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button type="submit" className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default ApplicationForm;
