import { LocationIcon, LogoIcon } from "./Icons";

const step = 1;
export const CheckoutHeader = () => (
  <div className="w-full h-16 bg-primary shadow-md flex justify-center items-center">
    <div className="flex items-center gap-4 text-white font-semibold">
      <a href="#/home" className="absolute left-4 md:left-8 lg:left-16">
        <LogoIcon />
      </a>
      <div className="flex items-center gap-2">
        <LocationIcon
          className={`w-5 h-5 ${step >= 1 ? "text-white" : "text-gray-300"}`}
        />
        <span className={step >= 1 ? "text-white" : "text-gray-300"}>
          ENDEREÇO
        </span>
      </div>
      <span className="text-gray-300">{">"}</span>
      <div className="flex items-center gap-2">
        <svg
          className={`w-5 h-5 ${step >= 2 ? "text-white" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 6a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2v-4a2 2 0 00-2-2H4z"></path>
        </svg>
        <span className={step >= 2 ? "text-white" : "text-gray-300"}>
          PAGAMENTO
        </span>
      </div>
    </div>
  </div>
);
