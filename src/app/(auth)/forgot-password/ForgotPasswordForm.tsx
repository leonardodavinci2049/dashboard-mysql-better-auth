"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "@/hooks/use-translation";

const ForgotPasswordForm = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">{t("auth.forgotPassword.title")}</h1>
        <p className="text-muted-foreground text-sm text-balance">
          {t("auth.forgotPassword.subtitle")}
        </p>
      </div>

      <form className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">{t("auth.forgotPassword.email")}</Label>
          <Input
            id="email"
            type="email"
            placeholder={t("auth.login.emailPlaceholder")}
            required
          />
        </div>

        <Button type="submit" className="w-full">
          {t("auth.forgotPassword.sendInstructions")}
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
    </div>
  );
};

export default ForgotPasswordForm;
