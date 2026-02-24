import { createFileRoute, Link } from "@tanstack/react-router"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { FileText, ImageIcon, Pencil, ExternalLink } from "lucide-react"

export const Route = createFileRoute("/admin/dashboard/books/$book_id/")({
    component: RouteComponent,
})

function Info({ label, value }: { label: string; value: React.ReactNode }) {
    return (
        <div className="space-y-1">
            <p className="text-muted-foreground text-sm">{label}</p>
            <div className="font-medium">{value}</div>
        </div>
    )
}

function Asset({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
    return (
        <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
                {icon}
                <span>{label}</span>
            </div>

            {href ? (
                <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 font-medium hover:underline"
                >
                    {value}
                    <ExternalLink className="w-3 h-3" />
                </a>
            ) : (
                <span className="font-medium">{value}</span>
            )}
        </div>
    )
}

function RouteComponent() {
    const book = {
        id: "book_001",
        title: "Bhagavad Gita",
        subtitle: "The Song of the Divine",
        author: "Vyasa",
        language: "Sanskrit",
        slug: "bhagavad-gita",
        categories: ["Spiritual", "Philosophy", "Hinduism"],
        description:
            "A sacred dialogue between Lord Krishna and Arjuna, revealing profound spiritual wisdom, duty, and the path to liberation.",
        summary:
            "The Bhagavad Gita presents timeless teachings on life, purpose, and devotion, structured as a philosophical conversation on the battlefield of Kurukshetra.",
        assets: {
            coverImage: {
                name: "cover-image.jpg",
                url: "https://cdn.example.com/books/bhagavad-gita/cover.jpg",
            },
            bookFile: {
                name: "bhagavad-gita.pdf",
                url: "https://cdn.example.com/books/bhagavad-gita/book.pdf",
            },
        },
    }

    return (
        <div className="max-w-(--breakpoint-xl) mx-auto p-3 sm:p-4 lg:p-6 space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold">{book.title}</h1>
                    <p className="text-muted-foreground text-sm">{book.subtitle}</p>
                </div>

                <Button asChild size="sm" variant="outline">
                    <Link to="/admin/books/$book_id/edit" params={{ book_id: book.id }}>
                        <Pencil className="w-4 h-4 mr-2" />
                        Edit Book
                    </Link>
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Book Information</CardTitle>
                </CardHeader>

                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <Info label="Author" value={book.author} />
                    <Info label="Language" value={book.language} />
                    <Info label="Slug" value={book.slug} />
                    <Info
                        label="Categories"
                        value={
                            <div className="flex flex-wrap gap-2">
                                {book.categories.map((cat) => (
                                    <Badge key={cat}>{cat}</Badge>
                                ))}
                            </div>
                        }
                    />
                </CardContent>
            </Card>

            {/* Description */}
            <Card>
                <CardHeader>
                    <CardTitle>Description</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-muted-foreground">{book.description}</CardContent>
            </Card>

            {/* Summary */}
            <Card>
                <CardHeader>
                    <CardTitle>Summary</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed">{book.summary}</CardContent>
            </Card>

            {/* Assets */}
            <Card>
                <CardHeader>
                    <CardTitle>Assets</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                    <Asset
                        icon={<ImageIcon className="size-12" />}
                        label="Cover Image"
                        value={book.assets.coverImage.name}
                        href={book.assets.coverImage.url}
                    />

                    <Separator />

                    <Asset
                        icon={<FileText className="size-12" />}
                        label="Book File"
                        value={book.assets.bookFile.name}
                        href={book.assets.bookFile.url}
                    />
                </CardContent>
            </Card>
        </div>
    )
}
