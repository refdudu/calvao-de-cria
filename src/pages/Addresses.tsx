import { useNavigate } from "react-router-dom";
import { EditIcon, LocationIcon, Button } from "../components";
import { mockAddresses } from "../data/mockData";
import type { Address } from "../types";

export const AddressPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
        <LocationIcon className="text-textSecondary w-6 h-6" /> Escolha um
        endereço para entregar
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockAddresses.map((addr) => (
          <AddressCard
            onSelect={() => {}}
            key={addr.id}
            address={addr}
            onEdit={() => navigate(`/checkout/address/${addr.id}`)}
          />
        ))}
      </div>
      <div className="flex gap-4 mt-6">
        <Button href="/" variant="outline">
          Voltar às compras
        </Button>
        <Button variant="outline" href={`/checkout/address/`}>
          Novo endereço
        </Button>
        <Button href={`/checkout/confirm`}>Continuar</Button>
      </div>
    </>
  );
};
const AddressCard = ({
  address,
  onSelect,
  onEdit,
}: {
  address: Address;
  onSelect: () => void;
  onEdit: () => void;
}) => (
  <div
    className={`p-4 rounded-lg border-2 ${
      address.selected
        ? "border-primary bg-green-50"
        : "bg-itemsBackground border-transparent"
    }`}
  >
    <div className="flex justify-between items-start mb-2">
      <div className="flex gap-2 items-center">
        <p className="font-bold">{address.name}</p>
        {address.selected ? (
          <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
            Selecionado
          </span>
        ) : (
          <button
            onClick={onSelect}
            className="text-primary font-bold text-sm hover:underline"
          >
            Selecionar
          </button>
        )}
      </div>
      <button onClick={onEdit} className="text-primary">
        <EditIcon />
      </button>
    </div>
    <p className="text-sm text-textSecondary">{address.recipient}</p>
    <p className="text-sm text-textSecondary">{address.address}</p>
  </div>
);
