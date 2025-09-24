import { useEffect, useState } from "react";
import { Filter } from "../components/Filter";
import { Link, useSearchParams } from "react-router-dom";
import { productService } from "../services/productService";
import type { Product, ProductFilters, ProductsResponse } from "@/types";
import { Pagination } from "@/components/Pagination";

export const Home = () => {
  const [searchParams] = useSearchParams();
  const [selectedPrice, setSelectedPrice] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productDetails, setProductDetails] = useState<ProductsResponse>();
  const [isLoading, setIsLoading] = useState(true);

  // Capturar termo de busca da URL
  useEffect(() => {
    const urlSearchTerm = searchParams.get('search');
    if (urlSearchTerm) {
      setSearchTerm(urlSearchTerm);
      setCurrentPage(1); // Reset para primeira página ao buscar
    }
  }, [searchParams]);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const filters: ProductFilters = {
        page: currentPage,
        limit: 12,
      };

      // Adicionar filtros de preço se selecionado
      if (selectedPrice) {
        const [min, max] = selectedPrice.split('-').map(Number);
        filters.minPrice = min;
        filters.maxPrice = max;
      }

      // Adicionar busca se houver termo
      if (searchTerm.trim()) {
        filters.search = searchTerm.trim();
      }

      const data = await productService.getProducts(filters);
      console.log("🚀 ~ getProducts ~ data:", data);
      setProductDetails(data);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, [selectedPrice, searchTerm, currentPage]);

  return (
    <div className="flex gap-16 ">
      <Filter selectedPrice={selectedPrice} onPriceChange={setSelectedPrice} />
      <div className="flex flex-col flex-1 gap-6">
        {/* Barra de busca local */}
        <div className="flex gap-4 items-center">
          <div className="flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Buscar produtos na página atual..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm("");
                setCurrentPage(1);
              }}
              className="px-4 py-2 text-textSecondary hover:text-text1 transition-colors"
            >
              Limpar
            </button>
          )}
        </div>
        
        {isLoading ? (
          <>Carregando...</>
        ) : productDetails ? (
          <>
            <div className="flex items-center justify-between">
              <span>
                <b className="font-bold">{productDetails?.data?.length || 0}</b>{" "}
                produtos encontrados
                {searchTerm && (
                  <span className="text-textSecondary ml-2">
                    para "{searchTerm}"
                  </span>
                )}
              </span>
              {productDetails?.pagination && (
                <span className="text-sm text-textSecondary">
                  Página {productDetails.pagination.currentPage} de {productDetails.pagination.totalPages}
                </span>
              )}
            </div>

            <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid flex-1">
              {productDetails?.data?.map((product: Product) => (
                <ListProductCard key={product.id} {...{ product }} />
              ))}
            </div>
            <div className="max-w-[500px] w-full self-center">
              <Pagination
                changePageIndex={setCurrentPage}
                current={currentPage}
                total={productDetails?.pagination?.totalPages || 1}
              />
            </div>
          </>
        ) : (
          <>Nenhum produto encontrado</>
        )}
      </div>
    </div>
  );
};
const ListProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white flex flex-col p-4 rounded-lg shadow-md"
    >
      <div className="max-w-62 h-64 overflow-hidden self-center">
        <img
          src={product.mainImage}
          className="object-cover"
          alt={product.name}
        />
      </div>
      <span>{product.name}</span>
      <span className="text-xs font-bold text-textSecondary">
        R$ {product.price.toFixed(2)}
      </span>
      {product.isPromotionActive && (
        <div className="flex gap-2 items-center font-bold">
          <span className=" text-primary text-xl">
            R$ {product.promotionalPrice?.toFixed(2)}
          </span>
          <div className="text-xs bg-secondary rounded-lg  text-white h-5 flex justify-center items-center px-2">
            <span>{product.discountPercentage}% OFF</span>
          </div>
        </div>
      )}
    </Link>
  );
};
