"use client";

import { useActionState, useEffect } from "react";

import { toast } from "sonner";
import Form from "next/form";
import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "@/hooks/use-translation";

import { loginAction } from "./login-action";

import SubmitButton from "../components/SubmitButton";
import GoogleButton from "../components/GoogleButton";

// Estado inicial do formulário
const initialState = null;

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { t } = useTranslation();
  const [state, formAction] = useActionState(loginAction, initialState);

  // Efeito para mostrar toast com base no estado
  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
    } else if (state?.message && !state?.success) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">{t("auth.login.title")}</h1>
        <p className="text-muted-foreground text-sm text-balance">
          {t("auth.login.subtitle")}
        </p>
      </div>

      <div className="grid gap-6">
        <Form action={formAction} className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="email">{t("auth.login.email")}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t("auth.login.emailPlaceholder")}
              required
              autoComplete="email"
              className={cn(
                state?.errors?.email &&
                  "border-destructive focus-visible:ring-destructive",
              )}
            />
            {state?.errors?.email && (
              <p className="text-destructive text-sm">{state.errors.email}</p>
            )}
          </div>

          <div className="grid gap-3">
            <div className="flex items-center">
              <Label htmlFor="password">{t("auth.login.password")}</Label>
              <a
                href="/forgot-password"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                {t("auth.login.forgotPassword")}
              </a>
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder={t("auth.login.passwordPlaceholder")}
              required
              autoComplete="current-password"
              className={cn(
                state?.errors?.password &&
                  "border-destructive focus-visible:ring-destructive",
              )}
            />
            {state?.errors?.password && (
              <p className="text-destructive text-sm">
                {state.errors.password}
              </p>
            )}
          </div>

          <SubmitButton />
        </Form>

        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            {t("auth.login.orContinueWith")}
          </span>
        </div>

        <GoogleButton />
      </div>

      <div className="text-center text-sm">
        {t("auth.login.noAccount")}{" "}
        <a href="/sign-up" className="underline underline-offset-4">
          {t("auth.login.signUp")}
        </a>
      </div>
    </div>
  );
}
