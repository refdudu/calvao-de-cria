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
          <div className="flex-grow overflow-y-auto p-4 space-y-3">
            {mockCartItems.map((item) => (
              <div key={item.id} className="relative bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                {/* Botão de remover no canto superior direito */}
                <button className="absolute top-3 right-3 text-textSecondary hover:text-red-500 w-6 h-6 flex items-center justify-center">
                  <CloseIcon />
                </button>
                
                <div className="flex items-center gap-4 pr-8">
                  {/* Imagem do produto */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain rounded-md"
                  />
                  
                  {/* Informações do produto */}
                  <div className="flex-grow">
                    <h3 className="text-sm font-medium text-text1 mb-3 leading-tight">
                      {item.name}
                    </h3>
                    
                    {/* Controles de quantidade e preço */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-300 rounded-full px-1 bg-white">
                        <button className="w-8 h-8 flex items-center justify-center text-lg hover:bg-gray-100 rounded-full">
                          −
                        </button>
                        <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button className="w-8 h-8 flex items-center justify-center text-lg hover:bg-gray-100 rounded-full">
                          +
                        </button>
                      </div>
                      
                      <span className="text-lg font-bold text-primary">
                        R$ {item.price.toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t bg-white space-y-4">
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
