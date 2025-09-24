import { CreditCardIcon, MapPinAreaIcon } from "@phosphor-icons/react";
import { useLocation } from "react-router-dom";

export const CheckoutHeader = () => {
  const location = useLocation();

  const getStep = () => {
    const path = location.pathname;

    if (
      path.includes("/checkout/payment") ||
      path.includes("/checkout/confirm")
    ) {
      return 2;
    }
    if (path.includes("/checkout/address") || path.includes("/checkout")) {
      return 1;
    }
    return 1; // default
  };

  const step = getStep();

  return (
    <div className="w-full h-16 bg-primary shadow-md flex gap-4 justify-center items-center">
      <div className="flex items-center gap-4 text-white font-semibold">
        <Step isActive={step >= 1} icon={MapPinAreaIcon} label="ENDEREÇO" />
      </div>
      <span className="text-gray-300">{">"}</span>
      <div className="flex items-center gap-2">
        <Step isActive={step >= 2} icon={CreditCardIcon} label="PAGAMENTO" />
      </div>
    </div>
  );
};
const Step = ({
  isActive,
  icon: Icon,
  label,
}: {
  isActive: boolean;
  icon: React.ElementType;
  label: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      <Icon
        className={`w-6 h-6 ${isActive ? "text-textSpecial" : "text-gray-300"}`}
      />
      <span className={isActive ? "text-textSpecial" : "text-gray-300"}>
        {label}
      </span>
    </div>
  );
};
