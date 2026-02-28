import { Brain, LayoutGrid, FileText, Infinity } from "lucide-react"

export function Feature() {
    return (
        <section className="bg-zinc-50 flex flex-col justify-center min-h-dvh">
            <div className="max-w-(--breakpoint-2xl) mx-auto px-3 sm:px-6 lg:px-10">
                <div className="mb-16 text-center lg:mb-24">
                    <h2 className="font-serif text-3xl font-medium text-foreground md:text-5xl">
                        Engineering Your Attention
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
                        A system built on neuroscience, not willpower. Here is what is inside the blueprint.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
                    {/* Left: Mental Models (Tall Card) */}
                    <div className="flex flex-col justify-between rounded-2xl bg-secondary/40 p-8 transition-all hover:shadow-sm lg:p-12">
                        <div>
                            <div className="mb-12 flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-white shadow-sm">
                                <Brain className="text-foreground" size={28} />
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-foreground md:text-3xl">Mental Models</h3>
                            <p className="mt-6 text-muted-foreground leading-relaxed md:text-lg">
                                Cognitive frameworks derived from behavioral psychology. Learn to visualize your
                                attention as a finite resource and allocate it with military precision. Includes the
                                famous 'Box Breathing' decision matrix.
                            </p>
                        </div>
                    </div>

                    {/* Right Column Container */}
                    <div className="flex flex-col gap-4 lg:gap-6">
                        {/* Top Row: Two Smaller Cards */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                            {/* Actionable Systems (The Dark Accent Card) */}
                            <div className="rounded-2xl bg-primary p-8 text-primary-foreground shadow-xl">
                                <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                                    <LayoutGrid size={20} />
                                </div>
                                <h4 className="font-serif text-xl font-bold">Actionable Systems</h4>
                                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
                                    Not just theory. Get plug-and-play Notion templates and daily planners.
                                </p>
                            </div>

                            {/* Expert Case Studies */}
                            <div className="rounded-2xl bg-secondary/40 p-8 border border-transparent transition-colors hover:border-border">
                                <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white shadow-sm">
                                    <FileText className="text-foreground" size={20} />
                                </div>
                                <h4 className="font-serif text-xl font-bold text-foreground">Expert Case Studies</h4>
                                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                                    Deep dives into the routines of 15 Fortune 500 CEOs.
                                </p>
                            </div>
                        </div>

                        {/* Bottom: Lifetime Access (Wide Card) */}
                        <div className="flex flex-col items-start gap-6 rounded-2xl bg-secondary p-8 sm:flex-row sm:items-center lg:p-10">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-md">
                                <Infinity className="text-foreground" size={26} />
                            </div>
                            <div>
                                <h4 className="font-serif text-xl font-bold text-foreground">
                                    Lifetime Access & Updates
                                </h4>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    The digital edition is a living document. You receive every new chapter and revised
                                    edition forever, at no extra cost.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
