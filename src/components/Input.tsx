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
  <div className="relative">
    {icon && (
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        {icon}
      </span>
    )}
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
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
