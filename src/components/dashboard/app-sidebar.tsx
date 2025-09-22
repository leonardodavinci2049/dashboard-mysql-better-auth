"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  HelpCircle,
  Map,
  PieChart,
  Search,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/dashboard/common/sidebar/nav-main";
import { NavProjects } from "@/components/dashboard/common/sidebar/nav-projects";
import { NavSecondary } from "@/components/dashboard/common/sidebar/nav-secondary";
import { NavUser } from "@/components/dashboard/common/sidebar/nav-user";
import { TeamSwitcher } from "@/components/dashboard/common/sidebar/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Admin",
    email: "admin@dashboard.com",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Produtos",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Catalogo",
          url: "/dashboard/catalogo",
        },
        {
          title: "Detalhe do Produto",
          url: "#",
        },
        {
          title: "Novo Produto",
          url: "#",
        },
      ],
    },
    {
      title: "Categorias",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Lista de Categorias",
          url: "#",
        },
        {
          title: "Editar Categorias",
          url: "#",
        },
        {
          title: "Nova Categoria",
          url: "#",
        },
      ],
    },
    {
      title: "Clientes",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Lsita de Clientes",
          url: "#",
        },
        {
          title: "Editar Cliente",
          url: "#",
        },
        {
          title: "Novo Cliente",
          url: "#",
        },
        {
          title: "Relatórios",
          url: "#",
        },
      ],
    },
    {
      title: "Pedidos",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Lista de Pedidos",
          url: "#",
        },
        {
          title: "Detalhes do Pedido",
          url: "#",
        },
        {
          title: "Relatórios de vendas",
          url: "#",
        },
        {
          title: "Ultimos pedidos",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Get Help",
      url: "#",
      icon: HelpCircle,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
