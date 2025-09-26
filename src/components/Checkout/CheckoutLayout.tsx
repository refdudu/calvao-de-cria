import { Outlet } from "react-router-dom";
import "react-drawer/lib/react-drawer.css";
import { CheckoutHeader } from "./CheckoutHeader";
import { ItemsSummary } from "./ItemsSummary";
import { mockCartItems } from "../../data/mockData";
import { useCart } from "@/contexts/CartContext";

export const CheckoutLayout = () => {
  return (
    <div className="min-h-screen text-text-primary bg-background">
      <CheckoutHeader />

      <main className="h-[calc(100vh-4rem)] overflow-auto flex-1">
        <div className="max-w-7xl mx-auto py-12">
          <div className="flex md:flex-row gap-8 lg:gap-16">
            <div className="flex-grow">
              <Outlet />
            </div>
            <aside className="w-full md:w-auto">
              <ItemsSummary />
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};
