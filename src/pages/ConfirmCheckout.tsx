import { Link } from "react-router-dom";
import { LocationIcon, Button } from "../components";

export const ConfirmationCheckoutPage = () => (
  <>
    <h2 className="text-xl font-medium mb-4">Revise e confirme sua compra</h2>
    <div className="space-y-6">
      <div className="bg-itemsBackground p-6 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-2">Detalhes do envio</h3>
        <div className="flex items-start gap-4">
          <LocationIcon className="text-primary mt-1 w-6 h-6" />
          <div>
            <p className="font-bold">Renan Fischer</p>
            <p className="text-sm text-textSecondary">
              Rua dos cafundó - Santa Rosa - 98910-000
            </p>
          </div>
          <Link
            to="/checkout"
            className="ml-auto text-primary font-semibold text-sm whitespace-nowrap"
            onClick={() => {}}
          >
            Editar ou escolher outro
          </Link>
        </div>
      </div>
      <div className="bg-itemsBackground p-6 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-2">Detalhes do pagamento</h3>
        <div className="flex items-start gap-4">
          <svg
            className="w-6 h-6 text-primary mt-1"
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
          <div>
            <p className="font-bold">Pix</p>
            <p className="text-sm text-textSecondary">Você pagará R$ 90,00</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex gap-4 mt-6">
      <Button variant="outline" onClick={() => {}}>
        Voltar
      </Button>
      <Button onClick={() => {}}>Finalizar pedido</Button>
    </div>
  </>
);
