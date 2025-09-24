import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { SignUpPage } from "./pages/SignUp";
import { ForgotPasswordPage } from "./pages/ForgotPassword";
import { ResetPasswordPage } from "./pages/ResetPasswordPage";
import { PixPaymentPage } from "./pages/PixPayment";
import { ProductDetailsPage } from "./pages/ProductDetails";
import Layout from "./components/Layout";
import AuthLayout from "./components/AuthLayout";
import { CheckoutLayout } from "./components/Checkout/CheckoutLayout";
import { AddressPage } from "./pages/Addresses";
import { AddressFormPage } from "./pages/AddressForm";
import { ConfirmationCheckoutPage } from "./pages/ConfirmCheckout";
import { ProfileSettingsPage } from "./pages/ProfileSettings";
import { ProfileOrdersPage } from "./pages/ProfileOrders";
import SettingsLayout from "./components/SettingsLayout";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
      <Routes>
        {/* Rotas com Layout principal (Header + conteúdo) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetailsPage />} />
          <Route path="profile" element={<SettingsLayout />}>
            <Route path="settings" element={<ProfileSettingsPage />} />
            <Route path="orders" element={<ProfileOrdersPage />} />
          </Route>
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
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
