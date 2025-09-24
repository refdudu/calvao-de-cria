import { Outlet } from "react-router-dom";
import { AuthHeader } from "./AuthHeader";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <AuthHeader />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
