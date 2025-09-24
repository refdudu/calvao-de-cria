import { EyeIcon, LockIcon } from "@phosphor-icons/react";
import {
  AuthPageWrapper,
  Button,
  Input,
} from "../components";
import { PasswordInput } from "@/components/Input";

export const ResetPasswordPage = () => {
  return (
    <AuthPageWrapper title="Insira sua nova senha">
      <PasswordInput/>
      <PasswordInput placeholder="Confirmar nova senha"/>
      <Button href="/auth/login">Confirmar nova senha</Button>
    </AuthPageWrapper>
  );
};
