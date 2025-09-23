"use client";
import Form from "next/form";
import { useActionState, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "@/hooks/use-translation";
import registerAction from "./registerAction";

const RegisterForm = () => {
  const { t } = useTranslation();
  const [state, formAction, isPending] = useActionState(registerAction, null);
  const [showMessage, setShowMessage] = useState(false);

  // Gerenciar visibilidade da mensagem
  useEffect(() => {
    if (state?.success !== undefined) {
      setShowMessage(true);

      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000); // 3 segundos

      return () => clearTimeout(timer); // Limpeza do temporizador ao desmontar
    }
  }, [state]);

  // Função para obter erro do campo específico
  const getFieldError = (fieldName: string) => {
    return state?.fieldErrors?.[fieldName];
  };

  return (
    <>
      {showMessage && state?.success === false && (
        <div
          className="relative mb-6 rounded border border-red-400 bg-red-100 px-4 py-3 text-xs text-red-700"
          role="alert"
        >
          <strong className="font-bold">{t("dashboard.common.error")}!</strong>
          <span className="mt-1 block">{state?.message}</span>
        </div>
      )}
      {showMessage && state?.success === true && (
        <div
          className="relative mb-6 rounded border border-green-400 bg-green-100 px-4 py-3 text-xs text-green-700"
          role="alert"
        >
          <strong className="font-bold">
            {t("dashboard.common.success")}!
          </strong>
          <span className="mt-1 block">{state?.message}</span>
        </div>
      )}

      <Form action={formAction}>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t("auth.signup.firstName")}</Label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder={t("auth.signup.firstNamePlaceholder")}
              className={
                getFieldError("name")
                  ? "border-red-500 focus:border-red-500"
                  : ""
              }
            />
            {getFieldError("name") && (
              <p className="mt-1 text-xs text-red-600">
                {getFieldError("name")}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t("auth.signup.email")}</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder={t("auth.signup.emailPlaceholder")}
              className={
                getFieldError("email")
                  ? "border-red-500 focus:border-red-500"
                  : ""
              }
            />
            {getFieldError("email") && (
              <p className="mt-1 text-xs text-red-600">
                {getFieldError("email")}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">{t("auth.signup.password")}</Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder={t("auth.signup.passwordPlaceholder")}
              className={
                getFieldError("password")
                  ? "border-red-500 focus:border-red-500"
                  : ""
              }
            />
            {getFieldError("password") && (
              <p className="mt-1 text-xs text-red-600">
                {getFieldError("password")}
              </p>
            )}
            <p className="text-muted-foreground mt-1 text-xs">
              A senha deve ter pelo menos 8 caracteres, incluindo letra
              maiúscula, minúscula e número.
            </p>
          </div>
          <div className="pt-2">
            <Button disabled={isPending} className="w-full" type="submit">
              {isPending ? "Cadastrando..." : t("auth.signup.createAccount")}
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default RegisterForm;
