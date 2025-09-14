import type { ItemsSummaryProps } from '../types';
import { CloseIcon } from './Icons';

export const ItemsSummary = ({ items, showHeader = true }: ItemsSummaryProps) => {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="w-full md:w-80 lg:w-96 bg-white rounded-lg shadow-md border border-gray-200 flex-shrink-0">
      {showHeader && (
        <div className="bg-primary text-white text-lg font-semibold p-4 rounded-t-lg">
          Itens
        </div>
      )}
      <div className="p-4 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="relative">
            <button className="absolute top-0 right-0 text-textSecondary hover:text-red-500 w-6 h-6 flex items-center justify-center">
              <CloseIcon />
            </button>
            
            <div className="flex items-center gap-4 pr-8">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-contain rounded-md"
              />
              <div className="flex-grow">
                <h3 className="text-sm font-medium text-text-primary mb-2 leading-tight">
                  {item.name}
                </h3>
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
      <div className="p-4 border-t bg-white rounded-b-lg flex justify-between items-center">
        <span className="text-xl font-bold text-text-primary">Total</span>
        <span className="text-xl font-bold text-primary">
          R$ {total.toFixed(2).replace(".", ",")}
        </span>
      </div>
    </div>
  );
};
