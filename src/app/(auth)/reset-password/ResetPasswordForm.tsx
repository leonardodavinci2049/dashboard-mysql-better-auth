"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "@/hooks/use-translation";

interface ResetPasswordFormProps {
  token: string;
}

const ResetPasswordForm = ({ token }: ResetPasswordFormProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">{t("auth.resetPassword.title")}</h1>
        <p className="text-muted-foreground text-sm text-balance">
          {t("auth.resetPassword.subtitle")}
        </p>
      </div>

      <form className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="newPassword">
            {t("auth.resetPassword.newPassword")}
          </Label>
          <Input
            id="newPassword"
            type="password"
            placeholder={t("auth.login.passwordPlaceholder")}
            required
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="confirmPassword">
            {t("auth.resetPassword.confirmPassword")}
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder={t("auth.signup.confirmPasswordPlaceholder")}
            required
          />
        </div>

        <Button type="submit" className="w-full">
          {t("auth.resetPassword.resetButton")}
        </Button>

        <div className="text-center">
          <a
            href="/sign-in"
            className="hover:text-primary text-sm underline underline-offset-4"
          >
            {t("auth.forgotPassword.backToLogin")}
          </a>
        </div>
      </form>

      {/* Token oculto para debugging */}
      <input type="hidden" value={token} />
    </div>
  );
};

export default ResetPasswordForm;
