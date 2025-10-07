import { CheckoutLayoutContent } from "@/components/Checkout/CheckoutLayout";

export default function index({ children }: { children: React.ReactNode }) {
  return <CheckoutLayoutContent>{children}</CheckoutLayoutContent>;
}
