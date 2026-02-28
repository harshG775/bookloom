import { Button } from "@/components/ui/button"
import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/admin/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            <div>Hello "/admin/"!</div>
            <Button>
                <Link to="/admin/dashboard">Go To Dashboard</Link>
            </Button>
        </div>
    )
}
