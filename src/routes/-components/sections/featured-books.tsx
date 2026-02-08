import { Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"

export function FeaturedbooksSection() {
    const books = [
        {
            id: "1",
            title: "Mastering React",
            author: "Jane Doe",
            cover: "https://placehold.co/300x420",
        },
        {
            id: "2",
            title: "Advanced TypeScript",
            author: "John Smith",
            cover: "https://placehold.co/300x420",
        },
        {
            id: "3",
            title: "Design Systems",
            author: "Alex Brown",
            cover: "https://placehold.co/300x420",
        },
        {
            id: "4",
            title: "Productive Dev",
            author: "Sam Wilson",
            cover: "https://placehold.co/300x420",
        },
    ]

    return (
        <section className="bg-muted/40">
            <div className="container mx-auto px-4 py-20 space-y-10">
                {/* Header */}
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold">Featured ebooks</h2>
                    <p className="text-muted-foreground">Hand-picked reads to level up your skills</p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {books.map((book) => (
                        <Link
                            key={book.id}
                            to="/books/$book_id"
                            params={{ book_id: book.id }}
                            className="group space-y-2"
                        >
                            <div className="aspect-[3/4] overflow-hidden rounded-lg border">
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
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex justify-center pt-6">
                    <Button size="lg" asChild>
                        <Link to="/books">View all ebooks</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
