import { useNavigate } from "react-router-dom";
import type { ProductCardProps } from "../types";
import { Button } from "./Button";

export const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-items-bg flex flex-col p-4 rounded-lg shadow-md gap-2">
      <div 
        className="w-full h-40 flex items-center justify-center overflow-hidden self-center cursor-pointer"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain hover:scale-105 transition-transform"
        />
      </div>
      <span 
        className="text-sm text-text-primary cursor-pointer hover:text-primary transition-colors"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        {product.name}
      </span>
      <span className="text-xs font-bold text-text-secondary line-through">
        R$ {product.oldPrice.toFixed(2).replace(".", ",")}
      </span>
      <div className="flex gap-2 items-center font-bold">
        <span className="text-primary text-xl">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </span>
        <div className="text-xs bg-secondary rounded-md text-white h-5 flex justify-center items-center px-2">
          <span>{product.discount}% OFF</span>
        </div>
      </div>
      <div className="mt-2 space-y-2">
        <Button href={`/product/${product.id}`} variant="outline">
          Ver Detalhes
        </Button>
        <Button href="/checkout">Comprar</Button>
      </div>
    </div>
  );
};
