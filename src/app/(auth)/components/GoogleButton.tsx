import { useTranslation } from '@/contexts/i18n-context';
import React from 'react'
import { loginGoogleAction } from '../sign-in/login-action';
import { Button } from '@/components/ui/button';
import { GoogleIcon } from './GoogleIcon';
import { toast } from 'sonner';
import { authClient } from '@/lib/auth-client';



// Componente do botão do Google com estado de loading
const GoogleButton = () => {
  const { t } = useTranslation();

  const handleGoogleLogin = async () => {
    try {
      const result = await loginGoogleAction();
      if (result?.success) {
        toast.success(result.message);
      } else if (result?.message) {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Google login error:", error);
      toast.error("Erro ao conectar com Google. Tente novamente.");
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full"
      onClick={handleGoogleLogin}
    >
      <GoogleIcon width="0.98em" height="1em" />
      {t("auth.login.loginWithGoogle")}
    </Button>
  );
}

export default GoogleButton