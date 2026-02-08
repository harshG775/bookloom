import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"

export function FinalCTASection() {
    return (
        <section className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 py-24 text-center space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold">Start reading today</h2>

                <p className="mx-auto max-w-xl text-primary-foreground/80">
                    Discover high-quality ebooks designed to help you learn faster and stay focused. Your next great
                    read is waiting.
                </p>

                <div className="flex justify-center gap-4 pt-4">
                    <Button size="lg" variant="secondary" asChild>
                        <Link to="/books">Explore ebooks</Link>
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                        className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                        asChild
                    >
                        <Link to="/dashboard/library">My library</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
