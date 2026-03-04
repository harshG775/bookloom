import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_main/books/$book_id/preview/")({
    component: RouteComponent,
})

function RouteComponent() {
    return <main className="flex-1 min-h-dvh pt-16">Hello "/_main/books/$book_id/preview/"!</main>
}
// https://chat.qwen.ai/c/4d5507d9-5366-4387-81ef-687650c21c04

// https://chat.qwen.ai/s/ba7bfef3-17f2-4c7f-9815-2ea6824a1f7d?fev=0.2.9