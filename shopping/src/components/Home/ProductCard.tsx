"use client";

import { useRouter } from "next/navigation";
import type { Product } from "../../types";
import { Button } from "../Button";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/libs/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();
  const { addToCart } = useCart();
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    try {
      await addToCart({
        productId: product.id,
        quantity: 1,
      });
    } catch (error) {
      console.error("Erro ao adicionar ao carrinho:", error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  const currentPrice =
    product.isPromotionActive && product.promotionalPrice
      ? product.promotionalPrice
      : product.price;

  return (
    <div className="bg-white flex flex-col p-4 rounded-lg shadow-md gap-2">
      <Link
        className="w-full h-40 flex items-center justify-center overflow-hidden self-center cursor-pointer"
        href={`/product/${product.id}`}
        // onClick={() => navigate(`/product/${product.id}`)}
      >
        <img
          src={product.mainImage}
          alt={product.name}
          className="max-h-full max-w-full object-contain hover:scale-105 transition-transform"
        />
      </Link>
      <Link
        href={`/product/${product.id}`}
        className="text-sm text-text1 cursor-pointer hover:text-primary transition-colors"
        // onClick={() => navigate(`/product/${product.id}`)}
      >
        {product.name}
      </Link>

      {product.isPromotionActive && product.promotionalPrice && (
        <span className="text-xs font-bold text-textSecondary line-through">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </span>
      )}

      <div className="flex gap-2 items-center font-bold">
        <span className="text-primary text-xl">
          R$ {currentPrice.toFixed(2).replace(".", ",")}
        </span>
        {product.isPromotionActive && product.discountPercentage && (
          <div className="text-xs bg-secondary rounded-md text-white h-5 flex justify-center items-center px-2">
            <span>{product.discountPercentage}% OFF</span>
          </div>
        )}
      </div>

      <div className="mt-2 space-y-2">
        <Button
          onClick={() => router.push(`/product/${product.id}`)}
          variant="outline"
        >
          Ver Detalhes
        </Button>
        <Button
          onClick={handleAddToCart}
          disabled={isAddingToCart || product.stockQuantity === 0}
        >
          {isAddingToCart
            ? "Adicionando..."
            : product.stockQuantity === 0
            ? "Fora de estoque"
            : "Adicionar ao carrinho"}
        </Button>
      </div>
    </div>
  );
};
