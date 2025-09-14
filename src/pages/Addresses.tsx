import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EditIcon, LocationIcon, Button } from "../components";
import { ItemsSummary } from "../components";
import { CheckoutHeader } from "../components/CheckoutHeader";
import { mockAddresses, mockCartItems } from "../data/mockData";
import type { Address } from "../types";

export const AddressPage = () => {
  const navigate = useNavigate();
  const [selectedAddressId, setSelectedAddressId] = useState(
    mockAddresses.find((addr) => addr.selected)?.id || 1
  );

  const handleSelectAddress = (addressId: number) => {
    setSelectedAddressId(addressId);
  };

  return (
    <>
      <h2 className="text-xl font-medium mb-6 flex items-center gap-2 text-text-primary">
        <LocationIcon className="text-textSecondary w-6 h-6" />
        Escolha um endereço para entregar
      </h2>

      {/* Grid 2x2 dos endereços */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {mockAddresses.map((addr) => (
          <AddressCard
            key={addr.id}
            address={addr}
            isSelected={selectedAddressId === addr.id}
            onSelect={() => handleSelectAddress(addr.id)}
            onEdit={() => navigate(`/checkout/address/${addr.id}`)}
          />
        ))}
      </div>
      <div className="flex gap-4 mt-6">
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
  isSelected,
  onSelect,
  onEdit,
}: {
  address: Address;
  isSelected: boolean;
  onSelect: () => void;
  onEdit: () => void;
}) => (
  <div className="relative">
    {/* Badge de selecionado */}
    {isSelected && (
      <div className="absolute -top-2 left-4 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-md z-10">
        Selecionado
      </div>
    )}

    <div
      className={`p-4 rounded-lg border-2 bg-white transition-colors cursor-pointer ${
        isSelected ? "border-primary" : "border-gray-200 hover:border-primary"
      }`}
      onClick={onSelect}
    >
      <div className="flex justify-between items-start mb-3 mt-2">
        <div className="flex gap-3 items-center">
          <h3 className="font-semibold text-text-primary">{address.name}</h3>
          {!isSelected && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelect();
              }}
              className="text-primary font-medium text-sm hover:underline"
            >
              Selecionar
            </button>
          )}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
          className="text-primary hover:text-primary/80 transition-colors"
        >
          <EditIcon />
        </button>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <svg
          className="w-4 h-4 text-textSecondary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <p className="text-sm text-textSecondary">{address.recipient}</p>
      </div>

      <p className="text-sm text-textSecondary leading-relaxed">
        {address.address}
      </p>
    </div>
  </div>
);
