import { SiteHeaderWithBreadcrumb } from "@/components/dashboard/site-header-with-breadcrumb";

export default function CatalogoPage() {
  return (
    <>
      <SiteHeaderWithBreadcrumb
        title="Catálogo"
        breadcrumbItems={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Produtos", href: "#" },
          { label: "Catálogo", isActive: true },
        ]}
      />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-4 lg:px-6">
              <h1 className="text-2xl font-bold">Catálogo de Produtos</h1>
              <p className="text-muted-foreground">
                Gerencie todos os produtos do seu catálogo aqui.
              </p>
              {/* Aqui você pode adicionar a tabela de produtos, filtros, etc. */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
