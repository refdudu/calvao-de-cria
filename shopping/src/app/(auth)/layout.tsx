import { AuthLayout } from "@/components";

export default function index({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
