import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/admin")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="flex flex-col pl-0 lg:pl-64">
            {/*<div className="absolute left-0 top-0 bottom-0 w-64 bg-sidebar p-2">sidebar</div>*/}
            <Outlet />
        </div>
    )
}
