import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockProducts } from "../data/mockData";
import { Button } from "../components/Button";
import { QuantityAddButton } from "../components/QuantityAddButton";

export const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = mockProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            Produto não encontrado
          </h2>
          <Button onClick={() => navigate("/")}>Voltar para Home</Button>
        </div>
      </div>
    );
  }

  const productImages = product.images || [product.image];

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-text-primary hover:text-primary transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Galeria de Imagens */}
          <div className="space-y-4">
            {/* Imagem Principal */}
            <div className="bg-items-bg rounded-lg p-8 aspect-square flex items-center justify-center">
              <img
                src={productImages[selectedImageIndex]}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Miniaturas */}
            {productImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 bg-items-bg rounded-lg p-2 border-2 transition-colors ${
                      selectedImageIndex === index
                        ? "border-primary"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Informações do Produto */}
          <div className="space-y-8">
            {/* Nome do Produto */}
            <h1 className="text-3xl font-bold text-text-primary leading-tight">
              {product.name}
            </h1>

            {/* Preço */}
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </div>
            </div>

            {/* Descrição do Produto */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-text-primary">
                Descrição do Produto
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {product.description || "Transforme a aparência e a textura dos seus cabelos com a Água Lamelar Haskell, um tratamento inovador que proporciona maciez e brilho instantâneos. Com uma fórmula leve e de rápida absorção, este produto é ideal para todos os tipos de cabelo, especialmente aqueles que necessitam de um cuidado extra."}
              </p>
            </div>

            {/* Botão Integrado com Quantidade */}
            <div className="space-y-6">
              <QuantityAddButton
                quantity={quantity}
                onQuantityChange={handleQuantityChange}
                onAdd={() => console.log("Produto adicionado ao carrinho")}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
