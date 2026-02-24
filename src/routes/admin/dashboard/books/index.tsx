import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getBooksServerFn } from "@/server-functions/book.serverFn"
import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/admin/dashboard/books/")({
    loader: async () => {
        const books = await getBooksServerFn({ page: 1, perPage: 10 })
        return { books }
    },
    pendingComponent: () => <div>Loading...</div>,
    component: RouteComponent,
})

function RouteComponent() {
    const { books } = Route.useLoaderData()
    console.log(books)
    return (
        <div className="px-3 sm:px-4 lg:px-6 py-6">
            <div className="flex gap-4 justify-between">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold tracking-tight">Books</h1>
                </div>
                <Link
                    to="/admin/dashboard/books/new"
                    className={cn(
                        buttonVariants({
                            variant: "default",
                        }),
                    )}
                >
                    Add New Book
                </Link>
            </div>
            <div className="mt-8 grid gap-3 gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {books.map((book) => (
                    <Link
                        key={book.id}
                        to="/admin/dashboard/books/$book_id"
                        params={{ book_id: String(book.id) }}
                        className="group space-y-2"
                    >
                        <article className="cursor-pointer">
                            <div className="aspect-3/4 overflow-hidden rounded-lg border">
                                {book.covers.map((cover) => (
                                    <img
                                        key={cover.id}
                                        src={cover.url}
                                        alt={book.title}
                                        className="bg-amber-300/80 shrink-0 h-full w-full object-cover transition-transform group-hover:scale-105"
                                    />
                                ))}
                            </div>

                            <div>
                                <h3 className="font-medium leading-tight line-clamp-2">{book.title}</h3>
                                <p className="text-sm text-muted-foreground">{book.author?.name || "Unknown Author"}</p>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    )
}
