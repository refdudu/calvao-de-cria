import { Button } from "../components/Button";
import { Input } from "../components/Input";

export const ProfileSettingsPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold text-text-primary border-b pb-4">
        Meus dados
      </h2>
      <div className="space-y-4">
        <Input placeholder="Nome do Usuário" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="CPF" />
        <Input placeholder="Data Nascimento" type="date" />
        <Input placeholder="Numero de Telefone" type="tel" />
      </div>
      <div className="mt-4 flex justify-end">
        <div className="w-full md:w-auto md:max-w-xs">
          <Button>Salvar dados</Button>
        </div>
      </div>
    </div>
  );
};

