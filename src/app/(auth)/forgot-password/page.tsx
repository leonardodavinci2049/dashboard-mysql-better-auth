import type { Metadata } from "next";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Forgot password",
};

export default function ForgotPasswordPage() {
  return (
    <main className="from-muted/30 via-background to-muted/50 flex min-h-svh items-center justify-center bg-gradient-to-br px-4">
      <div className="w-full max-w-md">
        <Card className="border-border/50 bg-card/95 shadow-2xl backdrop-blur-sm">
          <CardContent className="p-8">
            <ForgotPasswordForm />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
