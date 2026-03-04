import { Outlet, createFileRoute } from "@tanstack/react-router"
import Header from "./_main/-components/header"
import Footer from "./_main/-components/footer"

export const Route = createFileRoute("/_main")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
