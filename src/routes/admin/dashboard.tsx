import { Outlet, createFileRoute } from "@tanstack/react-router"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

export const Route = createFileRoute("/admin/dashboard")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarHeader />
                <SidebarContent>
                    <SidebarGroup />
                    <SidebarGroup />
                </SidebarContent>
                <SidebarFooter />
            </Sidebar>
            <Outlet />
        </SidebarProvider>
    )
}
