import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { SignUpPage } from "./pages/SignUp";
import { ForgotPasswordPage } from "./pages/ForgotPassword";
import { ResetPasswordPage } from "./pages/ResetPasswordPage";
import { PixPaymentPage } from "./pages/PixPayment";
import Layout from "./components/Layout";
import AuthLayout from "./components/AuthLayout";
import { CheckoutLayout } from "./components/CheckoutLayout";
import { AddressPage } from "./pages/Addresses";
import { AddressFormPage } from "./pages/AddressForm";
import { ConfirmationCheckoutPage } from "./pages/ConfirmCheckout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas com Layout principal (Header + conteúdo) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/checkout" element={<CheckoutLayout />}>
          <Route index element={<AddressPage />} />
          <Route path="address/:id" element={<AddressFormPage />} />
          <Route path="address" element={<AddressFormPage />} />
          <Route path="confirm" element={<ConfirmationCheckoutPage />} />
        </Route>

        {/* Rotas de autenticação com layout centralizado */}
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
        </Route>

        {/* Rota de pagamento com layout centralizado */}
        <Route path="payment" element={<AuthLayout />}>
          <Route path="pix" element={<PixPaymentPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
