import { Button } from "@/components/ui/button"
import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            Hello "/"!
            <Button>
                <Link to="/projects">Get started</Link>
            </Button>
        </div>
    )
}
