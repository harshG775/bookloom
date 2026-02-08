import { BookOpen, CreditCard, Sparkles } from "lucide-react"

export function HowItWorksSection() {
    const steps = [
        {
            icon: BookOpen,
            title: "Browse ebooks",
            description: "Explore a curated collection of high-quality ebooks across multiple topics.",
        },
        {
            icon: CreditCard,
            title: "Buy once",
            description: "Pay once and get lifetime access. No subscriptions, no hidden fees.",
        },
        {
            icon: Sparkles,
            title: "Read anytime",
            description: "Access your library on any device and continue right where you left off.",
        },
    ]

    return (
        <section>
            <div className="container mx-auto px-4 py-20 space-y-12">
                {/* Header */}
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold">How it works</h2>
                    <p className="text-muted-foreground">Start reading in three simple steps</p>
                </div>

                {/* Steps */}
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <div key={index} className="rounded-xl border p-6 text-center space-y-4">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <step.icon className="h-6 w-6" />
                            </div>

                            <h3 className="text-lg font-semibold">{step.title}</h3>

                            <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
