import { createFileRoute, Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Save } from "lucide-react"

export const Route = createFileRoute("/admin/books/$book_id/edit/")({
    component: RouteComponent,
})
function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="space-y-2">
            <Label>{label}</Label>
            {children}
        </div>
    )
}

function RouteComponent() {
    // API response (existing book)
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
        <div className="max-w-(--breakpoint-lg) mx-auto p-3 sm:p-4 lg:p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <Button asChild variant="ghost" size="icon">
                        <Link
                            to="/admin/books/$book_id"
                            params={{
                                book_id: book.id,
                            }}
                        >
                            <ArrowLeft className="w-4 h-4" />
                        </Link>
                    </Button>
                    <div>
                        <h1 className="text-2xl font-semibold">Edit Book</h1>
                        <p className="text-sm text-muted-foreground">Update book information and assets</p>
                    </div>
                </div>

                <Button>
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                </Button>
            </div>

            {/* Basic Info */}
            <Card>
                <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                </CardHeader>

                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field label="Title">
                        <Input defaultValue={book.title} />
                    </Field>

                    <Field label="Subtitle">
                        <Input defaultValue={book.subtitle} />
                    </Field>

                    <Field label="Author">
                        <Input defaultValue={book.author} />
                    </Field>

                    <Field label="Language">
                        <Input defaultValue={book.language} />
                    </Field>

                    <Field label="Slug">
                        <Input defaultValue={book.slug} />
                    </Field>
                </CardContent>
            </Card>

            {/* Categories */}
            <Card>
                <CardHeader>
                    <CardTitle>Categories</CardTitle>
                </CardHeader>

                <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                        {book.categories.map((cat) => (
                            <Badge key={cat} variant="secondary">
                                {cat}
                            </Badge>
                        ))}
                    </div>

                    <Input placeholder="Add category and press Enter" />
                </CardContent>
            </Card>

            {/* Description */}
            <Card>
                <CardHeader>
                    <CardTitle>Description</CardTitle>
                </CardHeader>

                <CardContent>
                    <Textarea rows={4} defaultValue={book.description} />
                </CardContent>
            </Card>

            {/* Summary */}
            <Card>
                <CardHeader>
                    <CardTitle>Summary</CardTitle>
                </CardHeader>

                <CardContent>
                    <Textarea rows={4} defaultValue={book.summary} />
                </CardContent>
            </Card>

            {/* Assets */}
            <Card>
                <CardHeader>
                    <CardTitle>Assets</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                    <Field label="Cover Image">
                        <Input type="file" />
                        <p className="text-xs text-muted-foreground mt-1">Current: {book.assets.coverImage.name}</p>
                    </Field>

                    <Separator />

                    <Field label="Book File (PDF)">
                        <Input type="file" />
                        <p className="text-xs text-muted-foreground mt-1">Current: {book.assets.bookFile.name}</p>
                    </Field>
                </CardContent>
            </Card>
        </div>
    )
}
