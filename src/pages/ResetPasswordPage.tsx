import { useNavigate } from "react-router-dom";
import {
  AuthPageWrapper,
  Button,
  EyeIcon,
  Input,
  LockIcon,
} from "../components";

export const ResetPasswordPage = () => {
  const navigate = useNavigate();

  return (
    <AuthPageWrapper title="Insira sua nova senha">
      <Input
        icon={<LockIcon />}
        rightIcon={<EyeIcon />}
        placeholder="Nova senha"
        type="password"
      />
      <Input
        icon={<LockIcon />}
        rightIcon={<EyeIcon />}
        placeholder="Confirmar nova senha"
        type="password"
      />
      <Button onClick={() => navigate("/auth/login")}>
        Confirmar nova senha
      </Button>
    </AuthPageWrapper>
  );
};
