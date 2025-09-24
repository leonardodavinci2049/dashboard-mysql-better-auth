"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "@/hooks/use-translation";
import { GoogleIcon } from "../_components/GoogleIcon";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { t } = useTranslation();

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">{t("auth.login.title")}</h1>
        <p className="text-muted-foreground text-sm text-balance">
          {t("auth.login.subtitle")}
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">{t("auth.login.email")}</Label>
          <Input
            id="email"
            type="email"
            placeholder={t("auth.login.emailPlaceholder")}
            required
          />
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
            type="password"
            placeholder={t("auth.login.passwordPlaceholder")}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          {t("auth.login.loginButton")}
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            {t("auth.login.orContinueWith")}
          </span>
        </div>
        <Button variant="outline" className="w-full">
          <GoogleIcon width="0.98em" height="1em" />
          {t("auth.login.loginWithGoogle")}
        </Button>
      </div>
      <div className="text-center text-sm">
        {t("auth.login.noAccount")}{" "}
        <a href="/sign-up" className="underline underline-offset-4">
          {t("auth.login.signUp")}
        </a>
      </div>
    </form>
  );
}
