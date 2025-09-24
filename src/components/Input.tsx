import { EyeIcon, LockIcon } from "@phosphor-icons/react";
import { useState } from "react";

interface InputProps {
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  placeholder: string;
  type?: string;
}

export const Input = ({
  icon,
  rightIcon,
  placeholder,
  type = "text",
}: InputProps) => (
  <div className="relative group">
    {icon && (
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 transition-colors duration-200 group-focus-within:text-primary">
        {icon}
      </span>
    )}
    <input
      type={type}
      placeholder={placeholder}
      className={`bg-white w-full py-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
        icon ? "pl-10" : "pl-3"
      } ${rightIcon ? "pr-10" : "pr-3"}`}
    />
    {rightIcon && (
      <span className="absolute inset-y-0 right-0 flex items-center pr-3">
        {rightIcon}
      </span>
    )}
  </div>
);
interface PasswordInputProps {
  placeholder?: string;
  icon?: React.ReactNode;
}

export const PasswordInput = ({
  placeholder = "Senha",
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Input
      icon={<LockIcon />}
      rightIcon={<EyeIcon className="cursor-pointer" onClick={togglePasswordVisibility} />}
      placeholder={placeholder}
      type={showPassword ? "text" : "password"}
    />
  );
};
