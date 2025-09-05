import type { ItemsSummaryProps } from '../types';
import { CloseIcon } from './Icons';

export const ItemsSummary = ({ items, showHeader = true }: ItemsSummaryProps) => {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="w-full md:w-80 lg:w-96 bg-items-bg rounded-lg shadow-md flex-shrink-0">
      {showHeader && (
        <div className="bg-primary text-white text-lg font-semibold p-4 rounded-t-lg">
          Itens
        </div>
      )}
      <div className="p-4 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-contain rounded-md border"
            />
            <div className="flex-grow">
              <p className="text-sm text-text-primary">{item.name}</p>
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
            <button className="text-text-secondary hover:text-red-500">
              <CloseIcon />
            </button>
          </div>
        ))}
      </div>
      <div className="p-4 border-t flex justify-between items-center">
        <span className="text-lg font-bold text-text-primary">Total</span>
        <span className="text-2xl font-bold text-primary">
          R$ {total.toFixed(2).replace(".", ",")}
        </span>
      </div>
    </div>
  );
};
