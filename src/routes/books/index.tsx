import * as React from "react"
import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/books/")({
    component: BooksPage,
})

function BooksPage() {
    const [query, setQuery] = React.useState("")
    const [page, setPage] = React.useState(1)

    const PAGE_SIZE = 8

    const allBooks = Array.from({ length: 30 }).map((_, i) => ({
        id: i + 1,
        title: `Ebook ${i + 1}`,
        author: "John Doe",
        cover: "https://placehold.co/300x420",
    }))

    const filteredBooks = allBooks.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()))

    const visibleBooks = filteredBooks.slice(0, page * PAGE_SIZE)
    const hasMore = visibleBooks.length < filteredBooks.length

    return (
        <div className="container mx-auto px-4 py-6 space-y-6">
            <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-2xl font-bold">Explore Ebooks</h1>

                <input
                    type="search"
                    placeholder="Search ebooks..."
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                        setPage(1)
                    }}
                    className="w-full sm:w-72 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </header>

            <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {visibleBooks.map((book) => (
                    <Link
                        key={book.id}
                        to="/books/$book_id"
                        params={{ book_id: String(book.id) }}
                        className="group space-y-2"
                    >
                        <article className="cursor-pointer">
                            <div className="aspect-3/4 overflow-hidden rounded-lg border">
                                <img
                                    src={book.cover}
                                    alt={book.title}
                                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                                />
                            </div>

                            <div>
                                <h3 className="font-medium leading-tight line-clamp-2">{book.title}</h3>
                                <p className="text-sm text-muted-foreground">{book.author}</p>
                            </div>
                        </article>
                    </Link>
                ))}
            </section>

            {hasMore && (
                <div className="flex justify-center">
                    <button
                        onClick={() => setPage((p) => p + 1)}
                        className="rounded-md border px-6 py-2 text-sm font-medium hover:bg-muted"
                    >
                        Load more
                    </button>
                </div>
            )}

            {!filteredBooks.length && <p className="text-center text-muted-foreground">No ebooks found.</p>}
        </div>
    )
}
