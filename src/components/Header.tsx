import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import ShoppingCartIcon from "../assets/ShoppingCart.svg";
import UserIcon from "../assets/User.svg";
import { LogoIcon } from "./LogoIcon";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";

export const Header = ({ toggleDrawer }: { toggleDrawer: () => void }) => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const { cart } = useCart();

  // Calcular total de itens no carrinho
  const cartItemsCount = cart?.items?.reduce((total, item) => total + item.quantity, 0) || 0;

  const handleUserIconClick = () => {
    if (isAuthenticated) {
      navigate("/profile/settings");
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <div className="p-4 w-full h-16 bg-primary shadow-md flex justify-center">
      <div className="w-full max-w-7xl flex justify-between items-center">
        <div>
          <Link to="/">
            <LogoIcon />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Tabs />
        </div>
        <div className="flex gap-4 items-center">
          <button onClick={handleUserIconClick} className="relative">
            <img className="h-10" src={UserIcon} alt="User" />
            {isAuthenticated && user && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full"></div>
            )}
          </button>
          <button onClick={toggleDrawer} className="relative">
            <img className="h-10" src={ShoppingCartIcon} alt="Cart" />
            {cartItemsCount > 0 && (
              <div className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemsCount > 9 ? '9+' : cartItemsCount}
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
interface LineI {
  left: number;
  width: number;
}
interface TabI {
  key: string;
  name: string;
}
function Tabs() {
  const headerTabs: TabI[] = [
    { name: "Produtos", key: "products" },
    {
      name: "Promoções",
      key: "offers",
    },
  ];
  const [activeTabKey, setActiveTabKey] = useState<string>("club");
  const activeTabRef = useRef<HTMLButtonElement>(null);
  const [line, setLine] = useState<LineI>({ left: 0, width: 0 });

  function handleSetLine(): void {
    if (!activeTabRef.current) return;
    const { clientWidth, offsetLeft } = activeTabRef.current;
    setLine({
      left: offsetLeft,
      width: clientWidth,
    });
  }
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    handleSetLine();
  }, [activeTabKey]);
  return (
    <div className="flex relative items-center gap-12">
      {headerTabs.map(({ name, key }) => {
        const isActiveKey = key === activeTabKey;
        return (
          <button
            type="button"
            onClick={() => setActiveTabKey(key)}
            ref={isActiveKey ? activeTabRef : null}
            key={key}
            className="text-white cursor-pointer"
          >
            <span>{name}</span>
          </button>
        );
      })}
      <div
        style={{
          width: line.width,
          left: line.left,
        }}
        className="absolute -bottom-2 h-[2px] bg-white transition-all duration-300 "
      />
    </div>
  );
}

