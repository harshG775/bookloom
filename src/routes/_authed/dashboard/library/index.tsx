import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/_authed/dashboard/library/")({
    component: LibraryPage,
})

function LibraryPage() {
    const books = [
        {
            id: "1",
            title: "Mastering React",
            author: "Jane Doe",
            cover: "https://placehold.co/300x420",
            progress: 35,
        },
        {
            id: "2",
            title: "Advanced TypeScript",
            author: "John Smith",
            cover: "https://placehold.co/300x420",
            progress: 0,
        },
    ]

    return (
        <div className="container mx-auto px-4 py-6 space-y-6">
            <header className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">My Library</h1>
            </header>

            {!books.length && (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <p className="text-lg font-medium">No purchased books yet</p>
                    <p className="text-muted-foreground">Buy your first ebook to start reading</p>

                    <Link
                        to="/books"
                        className="mt-4 rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground"
                    >
                        Browse books
                    </Link>
                </div>
            )}

            {!!books.length && (
                <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {books.map((book) => (
                        <article key={book.id} className="group space-y-2">
                            <div className="relative overflow-hidden rounded-lg border">
                                <img src={book.cover} alt={book.title} className="aspect-3/4 w-full object-cover" />

                                {/* Hover overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                                    <Link
                                        to="/dashboard/library/$ebook"
                                        params={{ ebook: book.id }}
                                        className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black"
                                    >
                                        Read now
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-medium leading-tight line-clamp-2">{book.title}</h3>
                                <p className="text-sm text-muted-foreground">{book.author}</p>
                            </div>

                            {book.progress > 0 && (
                                <div className="h-1 w-full overflow-hidden rounded bg-muted">
                                    <div className="h-1 bg-primary" style={{ width: "${book.progress}%" }} />
                                </div>
                            )}
                        </article>
                    ))}
                </section>
            )}
        </div>
    )
}
