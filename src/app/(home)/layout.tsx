import Header01 from "@/components/header-01";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header01 />

      <div className="container mx-auto px-4 py-12">{children}</div>
    </div>
  );
}
