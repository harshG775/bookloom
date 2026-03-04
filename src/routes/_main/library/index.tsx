import { createFileRoute } from "@tanstack/react-router"
import LibraryHeader from "./-components/library-header"
import PurchasedBooksGrid from "./-components/purchased-books-grid"
import EmptyState from "./-components/empty-state"

export const Route = createFileRoute("/_main/library/")({
    component: RouteComponent,
})

function RouteComponent() {
    // TODO: Replace with actual data from API
    const purchasedBooks = [
        {
            id: "1",
            title: "The Focus Blueprint",
            subtitle: "A masterclass in deep work",
            cover: "/books/focus-blueprint-cover.jpg",
            progress: 45,
            lastRead: "2 hours ago",
            purchasedAt: "Mar 5, 2026",
        },
        {
            id: "2",
            title: "Deep Work Habits",
            subtitle: "Build a fortress of solitude",
            cover: "/books/deep-work-cover.jpg",
            progress: 0,
            lastRead: null,
            purchasedAt: "Mar 1, 2026",
        },
        {
            id: "3",
            title: "The Mindful Leader",
            subtitle: "Empathy in high-pressure",
            cover: "/books/mindful-leader-cover.jpg",
            progress: 100,
            lastRead: "1 week ago",
            purchasedAt: "Feb 15, 2026",
        },
    ]

    return (
        <main className="flex-1 min-h-dvh pt-16 bg-[#FDFBF7]">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <LibraryHeader totalBooks={purchasedBooks.length} />
                
                {purchasedBooks.length > 0 ? (
                    <PurchasedBooksGrid books={purchasedBooks} />
                ) : (
                    <EmptyState />
                )}
            </div>
        </main>
    )
}