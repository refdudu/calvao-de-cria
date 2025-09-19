import { useNavigate } from "react-router-dom";
import { Button, ChevronLeftIcon, CloseIcon } from ".";
import { mockCartItems } from "../data/mockData";
import type { CartItem } from "../types";

export const ShoppingCartDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const navigate = useNavigate();
  const total = mockCartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate("/checkout");
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-30 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      {/* Drawer Content */}
      <div
        className={`absolute top-0 right-0 h-full bg-itemsBackground w-full max-w-sm shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center p-4">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-text1 font-semibold cursor-pointer"
            >
              <ChevronLeftIcon />
              <span>Voltar</span>
            </button>
          </div>
          <div className="divide-y divide-textSecondary flex-grow bg-background overflow-y-auto p-4">
            {mockCartItems.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </div>
          <div className="p-4 bg-white space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-text1">Total</span>
              <span className="text-xl font-bold text-primary">
                R$ {total.toFixed(2).replace(".", ",")}
              </span>
            </div>
            <Button onClick={handleCheckout}>Finalizar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductItem = ({ item }: { item: CartItem }) => {
  return (
    <div className="text-text1 flex items-center gap-4 mb-4 pb-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-contain rounded-md"
      />

      <div className="flex-grow flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium leading-tight">{item.name}</h3>
          <button className="rounded-full">
            <CloseIcon />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <Counter />
          <span className="text-lg font-bold text-primary">
            R$ {item.price.toFixed(2).replace(".", ",")}
          </span>
        </div>
      </div>
    </div>
  );
};
const Counter = () => {
  return (
    <div className="flex items-center border w-24 justify-center border-text1 rounded px-1 bg-white">
      <button className="h-5 w-5 rounded-full hover:bg-background transition-color flex items-center justify-center">
        −
      </button>
      <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
        {/* {item.quantity} */}9
      </span>
      <button className="h-5 w-5 rounded-full hover:bg-background transition-color flex items-center justify-center">
        +
      </button>
    </div>
  );
};
