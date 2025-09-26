import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components";
import { addressService } from "../services/addressService";
import type { Address } from "../types";

import {
  MapPinIcon,
  PencilSimpleLineIcon,
  UserIcon,
  TrashIcon,
} from "@phosphor-icons/react";

export const AddressPage = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadAddresses();
  }, []);

  const loadAddresses = async () => {
    try {
      setIsLoading(true);
      const addressesData = await addressService.getAddresses();
      setAddresses(addressesData);
      
      // Se não há endereços, redirecionar para criar um novo
      if (addressesData.length === 0) {
        navigate('/checkout/address/');
        return;
      }
      
      // Selecionar o primeiro endereço
      const defaultAddress = addressesData[0];
      if (defaultAddress) {
        setSelectedAddressId(defaultAddress.addressId);
      }
    } catch (err) {
      console.error('Erro ao carregar endereços:', err);
      setError('Erro ao carregar endereços');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectAddress = (addressId: string) => {
    setSelectedAddressId(addressId);
  };

  const handleDeleteAddress = async (addressId: string) => {
    if (window.confirm('Tem certeza que deseja excluir este endereço?')) {
      try {
        await addressService.deleteAddress(addressId);
        
        // Verificar se era o último endereço
        if (addresses.length === 1) {
          // Se era o último endereço, redirecionar para criar um novo
          navigate('/checkout/address/');
          return;
        }
        
        await loadAddresses();
        
        // Se o endereço deletado era o selecionado, selecionar outro
        if (selectedAddressId === addressId) {
          const remainingAddresses = addresses.filter(addr => addr.addressId !== addressId);
          setSelectedAddressId(remainingAddresses[0]?.addressId || null);
        }
      } catch (err) {
        console.error('Erro ao deletar endereço:', err);
        alert('Erro ao deletar endereço');
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Carregando endereços...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>{error}</p>
        <Button size="small" onClick={loadAddresses} className="mt-4">
          Tentar novamente
        </Button>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-xl font-medium mb-6 flex items-center gap-2 text-text-primary">
        <MapPinIcon />
        Escolha um endereço para entregar
      </h2>

      {addresses.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-textSecondary mb-4">Você ainda não tem endereços cadastrados</p>
          <Button size="small" href="/checkout/address/">
            Cadastrar primeiro endereço
          </Button>
        </div>
      ) : (
        <>
          {/* Grid 2x2 dos endereços */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {addresses.map((addr) => (
              <AddressCard
                key={addr.addressId}
                address={addr}
                isSelected={selectedAddressId === addr.addressId}
                onSelect={() => handleSelectAddress(addr.addressId)}
                onEdit={() => navigate(`/checkout/address/${addr.addressId}`)}
                onDelete={() => handleDeleteAddress(addr.addressId)}
              />
            ))}
          </div>
          <div className="flex justify-end gap-4 mt-6">
            <Button size="small" variant="outline" href="/checkout/address/">
              Novo endereço
            </Button>
            <Button 
              size="small" 
              href="/checkout/confirm"
              disabled={!selectedAddressId}
            >
              Continuar
            </Button>
          </div>
        </>
      )}
    </>
  );
};
const AddressCard = ({
  address,
  isSelected,
  onSelect,
  onEdit,
  onDelete,
}: {
  address: Address;
  isSelected: boolean;
  onSelect: () => void;
  onEdit: () => void;
  onDelete: () => void;
}) => (
  <div className="relative">
    {/* Badge de selecionado */}
    {isSelected && (
      <div className="w-full absolute bg-primary text-white text-sm font-semibold px-4 py-1 z-10 border border-primary">
        Selecionado
      </div>
    )}

    <div
      className={`p-4 rounded border-1 h-42 flex flex-col justify-end bg-white transition-colors cursor-pointer ${
        isSelected ? "border-primary" : "border-gray-200 hover:border-primary"
      }`}
      onClick={onSelect}
    >
      <div className="flex justify-between items-start mb-3 mt-2">
        <div className="flex gap-3 items-center">
          <h3 className="font-semibold text-text-primary">{address.alias}</h3>
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
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <PencilSimpleLineIcon />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="text-red-500 hover:text-red-600 transition-colors"
          >
            <TrashIcon />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <UserIcon />
        <p className="text-sm text-textSecondary font-semibold">
          {address.recipientName}
        </p>
      </div>

      <p className="text-sm text-textSecondary leading-relaxed">
        {address.street}, {address.number}
        {address.complement && `, ${address.complement}`}
        <br />
        {address.neighborhood}, {address.city} - {address.state}
        <br />
        CEP: {address.cep}
        <br />
        Tel: {address.phone}
      </p>
    </div>
  </div>
);
