import { useNavigate } from "react-router-dom";
import {
  AuthPageWrapper,
  Input,
  UserIcon,
  LockIcon,
  EyeIcon,
  Button,
} from "../components";

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <AuthPageWrapper title="Entrar na sua conta">
      <Input icon={<UserIcon />} placeholder="Usuário" />
      <Input
        icon={<LockIcon />}
        rightIcon={<EyeIcon />}
        placeholder="Senha"
        type="password"
      />
      <Button onClick={() => navigate("/")}>Entrar</Button>
      <div className="text-center">
        <a
          onClick={() => navigate("/auth/forgot-password")}
          className="text-sm text-primary font-semibold cursor-pointer hover:underline"
        >
          Esqueci minha senha
        </a>
      </div>
      <div className="text-center mt-4">
        <p className="text-textSecondary text-sm mb-2">
          Ainda não tem uma conta?
        </p>
        <Button onClick={() => navigate("/auth/signup")} variant="secondary">
          Criar nova conta
        </Button>
      </div>
    </AuthPageWrapper>
  );
};
