import * as React from "react"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_authed/dashboard/library/$ebook")({
    component: ReaderPage,
})

function ReaderPage() {
    const { ebook } = Route.useParams()
    const contentRef = React.useRef<HTMLDivElement>(null)
    const [progress, setProgress] = React.useState(0)

    const book = {
        id: ebook,
        title: "Mastering React",
        author: "Jane Doe",
        content: `
      <h2>Introduction</h2>
      <p>React is a powerful library for building user interfaces...</p>
      <p>In this book, you’ll learn how to build scalable apps...</p>
      <h2>Chapter 1</h2>
      <p>Components are the building blocks of React...</p>
    `,
    }

    // reading progress
    React.useEffect(() => {
        const el = contentRef.current
        if (!el) return

        const onScroll = () => {
            const total = el.scrollHeight - el.clientHeight
            const current = el.scrollTop
            setProgress(Math.round((current / total) * 100))
        }

        el.addEventListener("scroll", onScroll)
        return () => el.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <div className="flex h-screen flex-col">
            {/* Header */}
            <header className="flex items-center justify-between border-b px-6 py-3">
                <div>
                    <h1 className="text-lg font-semibold">{book.title}</h1>
                    <p className="text-xs text-muted-foreground">{book.author}</p>
                </div>

                <span className="text-sm text-muted-foreground">{progress}%</span>
            </header>

            {/* Progress bar */}
            <div className="h-1 w-full bg-muted">
                <div className="h-1 bg-primary transition-all" style={{ width: "${progress}%" }} />
            </div>

            {/* Reader */}
            <main className="flex-1 overflow-hidden">
                <div
                    ref={contentRef}
                    className="mx-auto h-full max-w-3xl overflow-y-auto px-6 py-8 prose prose-neutral dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: book.content }}
                />
            </main>
        </div>
    )
}
