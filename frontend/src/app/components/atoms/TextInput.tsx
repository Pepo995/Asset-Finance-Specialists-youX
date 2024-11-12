import React from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface TextFieldProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  placeholder: string;
  hidden?: boolean;
  error?: boolean;
  errorMessage?: string;
}

const TextInput = <T extends FieldValues>({
  name,
  register,
  placeholder,
  hidden = false,
  error,
  errorMessage,
}: TextFieldProps<T>) => {
  return (
    <div className="flex flex-col gap-1">
      <input
        {...register(name)}
        type={hidden ? 'password' : 'text'}
        placeholder={placeholder}
        autoComplete="off"
        className={`w-full p-3 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500`}
      />
      {error && <p className="text-xs text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default TextInput;
