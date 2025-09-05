import { useEffect, useState } from "react";
import { Filter } from "../components/Filter";

export const Home = () => {
  const [cats, setCats] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string>("");

  useEffect(() => {
    const main = async () => {
      const promises = Array.from({ length: 9 }, async () => {
        const response = await fetch("https://cataas.com/cat?json=true");
        const data = await response.json();
        console.log("🚀 ~ main ~ data:", data);
        return data.url;
      });
      setCats(await Promise.all(promises));
    };
    main();
  }, []);

  return (
    <div className="flex gap-16 ">
      <Filter selectedPrice={selectedPrice} onPriceChange={setSelectedPrice} />
      <div className="flex flex-col flex-1 gap-6">
        <span>
          <b className="font-bold">29</b> produtos encontrados
        </span>

        <div className="grid-cols-3  gap-6 grid flex-1">
          {cats.map((cat, index) => (
            <div
              key={index}
              className="bg-items-bg flex flex-col p-4 rounded-lg shadow-md"
            >
              <div className="max-w-62 h-32 overflow-hidden self-center">
                <img src={cat} className="object-cover" alt={`Cat ${index}`} />
              </div>
              <span>
                Haskell Máscara Líquida Lamelar Feat. Alan Vivian - 200ml
              </span>
              <span className="text-xs font-bold text-text-secondary">
                R$ 37,40
              </span>
              <div className="flex gap-2 items-center font-bold">
                <span className=" text-primary text-xl">R$ 37,40</span>
                <div className="text-xs bg-secondary rounded-lg  text-white h-5 flex justify-center items-center px-2">
                  <span>60% OFF</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
