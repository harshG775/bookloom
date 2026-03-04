import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_main/books/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <main className="flex-1 min-h-dvh pt-16">
            <section>Hello "/_main/books/"!</section>
        </main>
    )
}
