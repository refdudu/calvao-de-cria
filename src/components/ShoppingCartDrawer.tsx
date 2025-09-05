import { useNavigate } from "react-router-dom";
import { Button, ChevronLeftIcon, CloseIcon } from ".";
import { mockCartItems } from "../data/mockData";

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
          <div className="flex items-center p-4 border-b">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-text1 font-semibold"
            >
              <ChevronLeftIcon />
              <span>Voltar</span>
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {mockCartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain rounded-md border"
                />
                <div className="flex-grow">
                  <p className="text-sm text-text1">{item.name}</p>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center border rounded-md">
                      <button className="px-2 py-1 text-lg">-</button>
                      <span className="px-3 py-1 text-sm">{item.quantity}</span>
                      <button className="px-2 py-1 text-lg">+</button>
                    </div>
                    <p className="font-bold text-primary">
                      R$ {item.price.toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                </div>
                <button className="text-textSecondary hover:text-red-500">
                  <CloseIcon />
                </button>
              </div>
            ))}
          </div>
          <div className="p-4 border-t space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-text1">Total</span>
              <span className="text-2xl font-bold text-primary">
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
