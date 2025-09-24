import { PixLogoIcon } from "@phosphor-icons/react";
import { Button } from "../components";

export const PixPaymentPage = () => {
  return (
    <div className="w-full max-w-sm mx-auto bg-itemsBackground p-8 rounded-xl shadow-lg">
      <div className="flex  gap-2 mb-6">
        <PixLogoIcon className="text-primary mt-1 w-10 h-10" />
        <p className="font-semibold text-lg">
          Pague via Pix para garantir sua compra
        </p>
      </div>
      <div className="flex items-center border border-primary rounded-md p-2 mb-4">
        <input
          type="text"
          readOnly
          value="00020126540014br.gov.bcb.pix"
          className="text-sm  text-textSecondary flex-grow outline-none"
        />
        <button className="text-primary font-semibold text-sm">Copiar</button>
      </div>
      <div className="flex-1 flex justify-center items-center h-[200px] mb-6">
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=00020126540014br.gov.bcb.pix"
          alt="QR Code PIX"
          className="mx-auto  h-full my-4"
        />
      </div>
      <div className="space-y-3">
        <Button href="/">Ver detalhes do pedido</Button>
        <Button variant="outline" href="/">
          Voltar à loja
        </Button>
      </div>
    </div>
  );
};
