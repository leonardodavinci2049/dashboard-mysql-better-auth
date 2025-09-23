import FooterAuth from "@/components/auth/common/FooterAuth";
import HeaderAuth from "@/components/auth/common/HeaderAuth";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Main Content */}
      <HeaderAuth />

      {/* Page Content */}
      <div className="flex flex-1 items-center justify-center">{children}</div>

      {/* Footer */}
      <FooterAuth />
    </div>
  );
}
