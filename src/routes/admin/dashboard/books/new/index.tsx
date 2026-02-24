import { createFileRoute } from "@tanstack/react-router"
import { CreateBookForm } from "./-components/create-book-form"
import { SidebarInset } from "@/components/ui/sidebar"

export const Route = createFileRoute("/admin/dashboard/books/new/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <SidebarInset>
            <div className="px-3 lg:px-6">
                <div className="max-w-(--breakpoint-lg) mx-auto p-4 sm:p-8 lg:p-10">
                    <CreateBookForm />
                </div>
            </div>
        </SidebarInset>
    )
}
