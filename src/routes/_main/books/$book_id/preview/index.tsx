import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_main/books/$book_id/preview/")({
    component: RouteComponent,
})

function RouteComponent() {
    return <main className="flex-1 min-h-dvh pt-16">Hello "/_main/books/$book_id/preview/"!</main>
}
