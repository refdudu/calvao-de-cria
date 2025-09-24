import { useNavigate } from "react-router-dom";
import {
  AuthPageWrapper,
  //   UserIcon,
  //   MailIcon,
  //   LockIcon,
  //   EyeIcon,
  Button,
} from "../components";
import { Input, PasswordInput } from "../components/Input";
import {
  EnvelopeIcon,
  EyeIcon,
  LockIcon,
  UserIcon,
} from "@phosphor-icons/react";

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
      <Input icon={<EnvelopeIcon />} placeholder="E-mail" type="email" />
      <PasswordInput />
      <Button href="/">Criar conta</Button>
    </AuthPageWrapper>
  );
};
