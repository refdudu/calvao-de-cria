import { Button } from "../components";

export const PixPaymentPage = () => {
  return (
    <div className="w-full max-w-sm mx-auto bg-itemsBackground p-8 rounded-xl shadow-lg text-center">
      <div className="flex justify-center items-center gap-2 mb-6">
        <svg
          className="w-8 h-8 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
        <p className="font-semibold text-lg">
          Pague via Pix para garantir sua compra
        </p>
      </div>
      <div className="flex items-center border rounded-md p-2 mb-4">
        <input
          type="text"
          readOnly
          value="00020126540014br.gov.bcb.pix"
          className="text-sm text-textSecondary flex-grow outline-none"
        />
        <button className="text-primary font-semibold text-sm">Copiar</button>
      </div>
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=00020126540014br.gov.bcb.pix"
        alt="QR Code PIX"
        className="mx-auto my-4"
      />
      <div className="space-y-3">
        <Button href="/">Ver detalhes do pedido</Button>
        <Button variant="outline" href="/">
          Voltar à loja
        </Button>
      </div>
    </div>
  );
};
