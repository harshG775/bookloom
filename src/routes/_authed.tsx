import LoginOrSignUp from "@/components/auth/login-or-signup"
import { getUserFn } from "@/server-functions/auth.serverFn"
import { createFileRoute, Outlet, useRouteContext } from "@tanstack/react-router"

export const Route = createFileRoute("/_authed")({
    beforeLoad: async (ctx) => {
        try {
            const { user } = await getUserFn()
            return {
                isLoggedIn: user.email,
            }
        } catch (_) {
            return {
                isLoggedIn: false,
            }
        }
    },
    component: RouteComponent,
})

function RouteComponent() {
    const { isLoggedIn } = useRouteContext({
        from: "/_authed",
    })

    if (!isLoggedIn) {
        return <LoginOrSignUp />
    }
    return (
        <div>
            Hello "/_authed"!
            <Outlet />
        </div>
    )
}
