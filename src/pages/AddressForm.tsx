import { LocationIcon, Button } from "../components";

export const AddressFormPage = () => {
  return (
    <>
      <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
        <LocationIcon className="text-textSecondary w-6 h-6" /> Cadastrar novo
        endereço
      </h2>
      <div className="bg-itemsBackground p-6 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          placeholder="Nome do destinatário"
          className="col-span-2 p-2 border rounded"
        />
        <input placeholder="CEP" className="p-2 border rounded" />
        <input placeholder="Rua" className="p-2 border rounded" />
        <input placeholder="Número" className="p-2 border rounded" />
        <input placeholder="Complemento" className="p-2 border rounded" />
        <input placeholder="Bairro" className="p-2 border rounded" />
        <input placeholder="Cidade" className="p-2 border rounded" />
        <input placeholder="Estado" className="p-2 border rounded" />
      </div>
      <div className="flex gap-4 mt-6">
        <Button href="/" variant="outline">
          Voltar
        </Button>
        <Button href="/checkout">Salvar endereço</Button>
      </div>
    </>
  );
};
