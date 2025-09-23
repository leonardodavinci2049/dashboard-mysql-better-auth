import FooterAuth from "@/components/auth/common/FooterAuth";
import HeaderAuth from "@/components/auth/common/HeaderAuth";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Main Content */}
      <HeaderAuth />

      {/* Page Content */}
      <div>{children}</div>

      {/* Footer */}
      <FooterAuth />
    </div>
  );
}
