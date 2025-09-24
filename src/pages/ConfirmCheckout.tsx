import { Link } from "react-router-dom";
import { Button } from "../components";
import { MapPinAreaIcon, PixLogoIcon } from "@phosphor-icons/react";

export const ConfirmationCheckoutPage = () => (
  <>
    <h2 className="text-xl font-medium mb-4">Revise e confirme sua compra</h2>
    <div className="space-y-6">
      <Card
        title="Detalhes do pedido"
        internal={{
          title: "Renan Fischer",
          description: "Santa rosa - 98910-000",
          icon: <MapPinAreaIcon className="text-primary mt-1 w-6 h-6" />,
          action: (
            <Link
              to="/checkout"
              className="ml-auto text-primary font-semibold text-sm whitespace-nowrap"
              onClick={() => {}}
            >
              Editar ou escolher outro
            </Link>
          ),
        }}
      />
      <Card
        title="Detalhes do pagamento"
        internal={{
          title: "Pix",
          description: "Você pagará R$ 90,00",
          icon: <PixLogoIcon className="text-primary mt-1 w-6 h-6" />,
        }}
      />
    </div>
    <div className="flex justify-end gap-4 mt-6">
      <Button size="small" variant="outline" href={`/checkout/`}>
        Voltar
      </Button>
      <Button size="small" href={`/payment/pix`}>
        Finalizar pedido
      </Button>
    </div>
  </>
);
const Card = ({
  internal,
  title,
}: {
  title: string;
  internal: {
    title: string;
    description: string;
    icon: React.ReactNode;
    action?: React.ReactNode;
  };
}) => {
  return (
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="bg-itemsBackground flex gap-2 items-center p-6 rounded-lg shadow-sm">
        <div className="flex items-start gap-4 flex-1">
          {internal.icon}
          <div>
            <p className="font-bold">{internal.title}</p>
            <p className="text-sm text-textSecondary">{internal.description}</p>
          </div>
        </div>
        {internal.action}
      </div>
    </div>
  );
};
