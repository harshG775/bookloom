import { CheckCircle, Zap, BookMarked, Laptop } from "lucide-react"

export function WhyBookloomSection() {
    const features = [
        {
            icon: BookMarked,
            title: "Lifetime access",
            description: "Buy once and keep your ebooks forever. No subscriptions required.",
        },
        {
            icon: Zap,
            title: "Distraction-free reading",
            description: "Clean reading experience designed to help you focus and learn faster.",
        },
        {
            icon: Laptop,
            title: "Read anywhere",
            description: "Access your library on desktop, tablet, or mobile anytime.",
        },
        {
            icon: CheckCircle,
            title: "High-quality content",
            description: "Carefully curated ebooks written by experienced authors.",
        },
    ]

    return (
        <section className="bg-muted/40">
            <div className="container mx-auto px-4 py-20 space-y-12">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold">Why Bookloom?</h2>
                    <p className="text-muted-foreground">Everything you need for a better reading experience</p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                    {features.map((feature, index) => (
                        <div key={index} className="rounded-xl border bg-background p-6 space-y-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <feature.icon className="h-5 w-5" />
                            </div>

                            <h3 className="font-semibold">{feature.title}</h3>

                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
