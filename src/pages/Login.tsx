import {
  AuthPageWrapper,
  Input,
  UserIcon,
  LockIcon,
  EyeIcon,
  Button,
} from "../components";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <AuthPageWrapper title="Entrar na sua conta">
      <Input icon={<UserIcon />} placeholder="Usuário" />
      <Input
        icon={<LockIcon />}
        rightIcon={<EyeIcon />}
        placeholder="Senha"
        type="password"
      />
      <Button href="/">Entrar</Button>
      <div className="text-center">
        <Link
          to="/auth/forgot-password"
          className="text-sm text-primary font-semibold cursor-pointer hover:underline"
        >
          Esqueci minha senha
        </Link>
      </div>
      <div className="text-center mt-4">
        <p className="text-textSecondary text-sm mb-2">
          Ainda não tem uma conta?
        </p>
        <Button href="/auth/signup" variant="secondary">
          Criar nova conta
        </Button>
      </div>
    </AuthPageWrapper>
  );
};
