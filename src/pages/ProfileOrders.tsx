const OrderItem = () => (
  <div className="flex items-center justify-between py-2">
    <div className="flex items-center gap-4">
      <img
        src="https://cataas.com/cat/CadqOVVQzGpArZS2?position=center"
        alt="Haskell Máscara"
        className="w-16 h-16 object-contain rounded-md border"
      />
      <div>
        <p className="text-sm text-text-primary">
          Haskell Máscara Líquida Lamelar Feat. Alan Vivian - 200ml
        </p>
        <p className="text-xs text-text-secondary">Quantidade: 3 x R$ 30,00</p>
      </div>
    </div>
    <span className="font-bold text-primary">R$ 30,00</span>
  </div>
);

const OrderCard = () => (
  <div className="border-b pb-6 mb-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <div>
        <h3 className="text-sm text-text-secondary">Pedido realizado em</h3>
        <p className="font-semibold">29/07/2025, 21:28</p>
      </div>
      <div>
        <h3 className="text-sm text-text-secondary">Total</h3>
        <p className="font-semibold">R$ 1.721,00</p>
      </div>
      <div>
        <h3 className="text-sm text-text-secondary">Endereço de entrega</h3>
        <a href="#" className="font-semibold text-primary underline">
          UNIJUI
        </a>
      </div>
    </div>
    <h4 className="font-semibold text-text-primary mb-2">Itens do pedido</h4>
    <div className="space-y-2">
      <OrderItem />
      <OrderItem />
      <OrderItem />
    </div>
    <div className="flex justify-end items-center mt-4 pt-4 border-t">
      <span className="text-text-secondary mr-4">Total</span>
      <span className="text-xl font-bold text-text-primary">R$ 90,00</span>
    </div>
  </div>
);

export const ProfileOrdersPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold text-text-primary border-b pb-4 mb-4">
        Meus pedidos
      </h2>
      <div>
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
};
