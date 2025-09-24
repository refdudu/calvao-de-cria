import { Button } from "../components";
import { MapPinAreaIcon } from "@phosphor-icons/react";

export const AddressFormPage = () => {
  return (
    <>
      <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
        <MapPinAreaIcon className="text-textSecondary w-6 h-6" /> Cadastrar novo
        endereço
      </h2>
      <div className="bg-itemsBackground p-6 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input placeholder="Nome do destinatário" className="col-span-2" />
        <Input placeholder="Nome do local" />
        <Input placeholder="CEP" />
        <Input placeholder="Rua" />
        <Input placeholder="Número" />
        <Input placeholder="Complemento" />
        <Input placeholder="Bairro" />
        <Input placeholder="Cidade" />
        <Input placeholder="Estado" />
      </div>
      <div className="flex gap-4 mt-6 justify-end">
        <Button size="small" variant="outline" href={`/checkout/`}>
          Voltar
        </Button>
        <Button size="small" href={`/checkout/`}>
          Salvar endereço
        </Button>
      </div>
    </>
  );
};
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={`p-2 outline-none focus-within:border-secondary border-b border-primary ${props.className}`}
    />
  );
};
