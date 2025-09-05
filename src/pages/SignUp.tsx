import { useNavigate } from "react-router-dom";
import {
  AuthPageWrapper,
  UserIcon,
  MailIcon,
  LockIcon,
  EyeIcon,
  Button,
} from "../components";
import { Input } from "../components/Input";

export const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <AuthPageWrapper
      title="Criar nova conta"
      subtitle="Ou"
      subtitleLink="entrar na sua conta"
      onSubtitleClick={() => navigate("/auth/login")}
    >
      <Input icon={<UserIcon />} placeholder="Nome de usuário" />
      <Input icon={<MailIcon />} placeholder="E-mail" type="email" />
      <Input
        icon={<LockIcon />}
        rightIcon={<EyeIcon />}
        placeholder="Senha"
        type="password"
      />
      <Button href="/">Criar conta</Button>
    </AuthPageWrapper>
  );
};
