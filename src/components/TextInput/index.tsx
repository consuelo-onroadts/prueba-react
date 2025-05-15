import React from 'react';

interface TextInputProps {
  id: string;
  label: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  error?: string | boolean;
  required?: boolean;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  value,
  onChange,
  onBlur,
  placeholder = '',
  error = false,
  required = false,
  className = '',
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}{required && <span className="text-red-500"> (*)</span>}
      </label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        className="w-full px-3 py-2 border border-gray-200 rounded-4xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
        {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
    </div>
  );
};

export default TextInput;
