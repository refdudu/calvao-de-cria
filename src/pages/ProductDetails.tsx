import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockProducts } from "../data/mockData";
import { Button } from "../components/Button";

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
        <div className="mb-6">
          <button
            onClick={() => navigate("/")}
            className="text-text-secondary hover:text-primary transition-colors"
          >
            ← Voltar para produtos
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Galeria de Imagens */}
          <div className="space-y-4">
            {/* Imagem Principal */}
            <div className="bg-items-bg rounded-lg p-6 aspect-square flex items-center justify-center">
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
          <div className="space-y-6">
            {/* Categoria e Marca */}
            <div className="space-y-1">
              {product.brand && (
                <p className="text-sm text-text-secondary">{product.brand}</p>
              )}
              {product.category && (
                <p className="text-xs text-primary font-semibold">
                  {product.category}
                </p>
              )}
            </div>

            {/* Nome do Produto */}
            <h1 className="text-2xl lg:text-3xl font-bold text-text-primary">
              {product.name}
            </h1>

            {/* Preços */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-primary">
                  R$ {product.price.toFixed(2).replace(".", ",")}
                </span>
                <div className="bg-secondary text-white px-2 py-1 rounded-md text-sm font-semibold">
                  {product.discount}% OFF
                </div>
              </div>
              <p className="text-text-secondary line-through">
                De: R$ {product.oldPrice.toFixed(2).replace(".", ",")}
              </p>
            </div>

            {/* Descrição */}
            {product.description && (
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Descrição
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {/* Características */}
            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  Características
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-text-secondary"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Seletor de Quantidade */}
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Quantidade
              </h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-10 h-10 bg-items-bg border border-text-secondary rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <span className="text-xl font-semibold text-text-primary min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-10 h-10 bg-items-bg border border-text-secondary rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="space-y-3 pt-4">
              <Button href="/checkout">
                Comprar Agora - R${" "}
                {(product.price * quantity).toFixed(2).replace(".", ",")}
              </Button>
              <Button variant="outline" onClick={() => console.log("Adicionar ao carrinho")}>
                Adicionar ao Carrinho
              </Button>
            </div>

            {/* Informações de Entrega */}
            <div className="bg-items-bg rounded-lg p-4 space-y-2">
              <h4 className="font-semibold text-text-primary">
                Informações de Entrega
              </h4>
              <p className="text-sm text-text-secondary">
                📦 Entrega grátis para compras acima de R$ 99,00
              </p>
              <p className="text-sm text-text-secondary">
                🚚 Entrega em até 7 dias úteis
              </p>
              <p className="text-sm text-text-secondary">
                🔄 Troca grátis em até 30 dias
              </p>
            </div>
          </div>
        </div>

        {/* Produtos Relacionados */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Produtos Relacionados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProducts
              .filter((p) => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-items-bg rounded-lg p-4 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <div className="aspect-square mb-3 flex items-center justify-center">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-sm text-text-primary mb-2 line-clamp-2">
                    {relatedProduct.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold">
                      R$ {relatedProduct.price.toFixed(2).replace(".", ",")}
                    </span>
                    <span className="text-xs bg-secondary text-white px-1 py-0.5 rounded">
                      {relatedProduct.discount}% OFF
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
