import { AuthPageWrapper, Button, Input, MailIcon } from "../components";

export const ForgotPasswordPage = () => {
  return (
    <AuthPageWrapper title="Esqueci minha senha">
      <Input icon={<MailIcon />} placeholder="E-mail" type="email" />
      <Button href="/auth/reset-password">Gerar nova senha</Button>
      <div className="text-center mt-4">
        <Button href="/auth/login" variant="secondary">
          Voltar para login
        </Button>
      </div>
    </AuthPageWrapper>
  );
};
