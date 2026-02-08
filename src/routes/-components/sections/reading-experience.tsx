import { Moon, Sun, Bookmark, Gauge } from "lucide-react"

export function ReadingExperienceSection() {
    const features = [
        {
            icon: Moon,
            title: "Dark mode",
            description: "Comfortable reading anytime, day or night.",
        },
        {
            icon: Gauge,
            title: "Reading progress",
            description: "Always know how far you’ve read and what’s next.",
        },
        {
            icon: Bookmark,
            title: "Bookmarks",
            description: "Save your place and continue anytime.",
        },
        {
            icon: Sun,
            title: "Focus mode",
            description: "Distraction-free layout for deep reading.",
        },
    ]

    return (
        <section>
            <div className="container mx-auto px-4 py-20 grid gap-12 md:grid-cols-2 items-center">
                {/* Text */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">A reading experience you’ll love</h2>

                    <p className="text-muted-foreground">
                        Bookloom is designed to help you stay focused and enjoy every page, whether you’re reading for
                        learning or leisure.
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                                    <feature.icon className="h-5 w-5" />
                                </div>

                                <div>
                                    <h3 className="font-medium">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Preview */}
                <div className="relative">
                    <div className="aspect-[3/4] rounded-xl border bg-muted flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">Reader preview</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
