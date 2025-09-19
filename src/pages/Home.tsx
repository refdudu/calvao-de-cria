import { useEffect, useState } from "react";
import { Filter } from "../components/Filter";
import { Link } from "react-router-dom";
import { api } from "@/utils/api";
import type { Product } from "@/types";

export const Home = () => {
  //   const [cats, setCats] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    const {
      data: { data },
    } = await api.get("products");
    console.log("🚀 ~ getProducts ~ data:", data);
    // const data = await response.json();

    setProducts(data);
  };
  useEffect(() => {
    // const main = async () => {
    //   const promises = Array.from({ length: 9 }, async () => {
    //     const response = await fetch("https://cataas.com/cat?json=true");
    //     const data = await response.json();
    //     console.log("🚀 ~ main ~ data:", data);
    //     return data.url;
    //   });
    //   setCats(await Promise.all(promises));
    // };
    // main();
    getProducts();
  }, []);

  return (
    <div className="flex gap-16 ">
      <Filter selectedPrice={selectedPrice} onPriceChange={setSelectedPrice} />
      <div className="flex flex-col flex-1 gap-6">
        <span>
          <b className="font-bold">29</b> produtos encontrados
        </span>

        <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid flex-1">
          {products.map((product) => (
            <ListProductCard key={product.id} {...{ product }} />
          ))}
        </div>
      </div>
    </div>
  );
};
const ListProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      to={`/product/${product}`}
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
            R$ {product.promotionalPrice.toFixed(2)}
          </span>
          <div className="text-xs bg-secondary rounded-lg  text-white h-5 flex justify-center items-center px-2">
            <span>{product.discountPercentage}% OFF</span>
          </div>
        </div>
      )}
    </Link>
  );
};
