import React from 'react';

interface ButtonProps {
  loading: boolean;
  text: string;
  children: React.ReactNode;
}

export const Button = ({ loading, text, children }: ButtonProps) => {
  return loading ? (
    <div className="py-2 px-4 bg-blue-500 text-white rounded-md font-semibold">{text}</div>
  ) : (
    <button
      type="submit"
      className="py-2 px-4 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors"
    >
      {children}
    </button>
  );
};
