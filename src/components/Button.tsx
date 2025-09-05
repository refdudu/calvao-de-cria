import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
}

export const Button = ({
  children,
  onClick,
  href,
  variant = "primary",
}: ButtonProps) => {
  const baseClasses =
    "w-full block text-center py-2.5 rounded-md font-semibold transition-opacity duration-200 hover:opacity-90";
  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    outline: "bg-transparent text-text-secondary border border-text-secondary",
  };

  if (href) {
    return (
      <Link to={href} className={`${baseClasses} ${variants[variant]}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  );
};
