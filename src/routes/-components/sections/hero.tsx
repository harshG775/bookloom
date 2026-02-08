import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"

export function HeroSection() {
    return (
        <section className="relative overflow-hidden">
            <div className="container mx-auto px-4 py-24">
                <div className="mx-auto max-w-3xl text-center space-y-6">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        Read smarter.
                        <span className="block text-primary">Build better.</span>
                    </h1>

                    <p className="text-lg text-muted-foreground">
                        Bookloom is a modern ebook platform for developers, designers, and curious minds. Buy once. Read
                        forever.
                    </p>

                    <div className="flex justify-center gap-4 pt-4">
                        <Button size="lg" asChild>
                            <Link to="/books">Explore ebooks</Link>
                        </Button>

                        <Button size="lg" variant="outline" asChild>
                            <Link to="/dashboard/library">My library</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
