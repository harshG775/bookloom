import { Button } from "@/components/ui/button"
import { signOutFn } from "@/lib/supabase/auth"
import { useRouter } from "@tanstack/react-router"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_authed/projects")({
    component: RouteComponent,
})

function RouteComponent() {
    const router = useRouter()
    return (
        <div>
            Hello "/_authed/projects"!
            <Button
                onClick={async () => {
                    await signOutFn()
                    router.invalidate()
                }}
            >
                SignOut
            </Button>
        </div>
    )
}
