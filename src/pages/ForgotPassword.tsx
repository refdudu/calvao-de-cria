import { useNavigate } from "react-router-dom";
import { AuthPageWrapper, Button, Input, MailIcon } from "../components";

export const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  return (
    <AuthPageWrapper title="Esqueci minha senha">
      <Input icon={<MailIcon />} placeholder="E-mail" type="email" />
      <Button onClick={() => navigate("/auth/reset-password")}>
        Gerar nova senha
      </Button>
      <div className="text-center mt-4">
        <Button 
          variant="secondary" 
          onClick={() => navigate("/auth/login")}
        >
          Voltar para login
        </Button>
      </div>
    </AuthPageWrapper>
  );
};
