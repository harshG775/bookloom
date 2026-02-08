import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/books/$book_id")({
    component: BookPage,
})

function BookPage() {
    const { book_id } = Route.useParams()

    const book = {
        id: book_id,
        title: "Mastering React",
        author: "Jane Doe",
        description: "A complete guide to building scalable and high-performance React applications.",
        cover: "https://placehold.co/400x560",
        price: "₹399",
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid gap-8 md:grid-cols-[300px_1fr]">
                <div className="mx-auto w-full max-w-75">
                    <img src={book.cover} alt={book.title} className="w-full rounded-lg border" />
                </div>

                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">{book.title}</h1>
                    <p className="text-muted-foreground">by {book.author}</p>

                    <p className="leading-relaxed">{book.description}</p>

                    <div className="flex items-center gap-4 pt-4">
                        <span className="text-2xl font-semibold">{book.price}</span>

                        <button className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
                            Buy now
                        </button>

                        <button className="rounded-md border px-6 py-2 text-sm font-medium hover:bg-muted">
                            Preview
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
