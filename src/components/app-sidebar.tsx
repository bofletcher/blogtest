import { Key } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/live";
import { GalleryVerticalEnd } from "lucide-react";
import { CATEGORIES_QUERY } from "@/sanity/lib/queries";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export async function AppSidebar() {
  const { data: categories } = await sanityFetch({ query: CATEGORIES_QUERY });

  console.log(categories);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarHeader>
          <div className="flex size-6 items-center justify-center rounded-sm border">
            <GalleryVerticalEnd className="size-4 shrink-0" />
          </div>
          <>Application</>
        </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories
                .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity))
                .map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.slug?.current}>
                        <Key />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
