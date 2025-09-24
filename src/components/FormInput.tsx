import type { ReactNode } from "react";

interface FormInputProps {
  error?: string;
  Input: ReactNode;
}

export const FormInput = ({ error, Input }: FormInputProps) => {
  return (
    <div>
      {Input}
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};