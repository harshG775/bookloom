import { Link, createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

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
