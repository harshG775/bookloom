import { MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Hero({ className }: { className?: string }) {
    return (
        <section
            className={cn(
                "flex-1 w-full relative bg-background flex flex-col justify-center min-h-dvh overflow-hidden py-8 lg:py-0",
                className,
            )}
        >
            <div className="max-w-(--breakpoint-xl) mx-auto w-full px-6 lg:px-12 grid items-center lg:grid-cols-2 gap-8 lg:gap-20">
                <div className="order-2 lg:order-1 flex flex-col items-start">
                    <div className="mb-6 flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/70">
                            Best Seller 2024
                        </span>
                    </div>

                    <h1 className="max-w-xl font-serif text-5xl font-medium leading-[1.1] text-foreground md:text-7xl lg:text-8xl">
                        The Focus <br />
                        <span className="italic">Blueprint</span>
                    </h1>

                    <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
                        A definitive guide for modern thinkers to master deep work without the fluff. Reclaim your
                        attention in a distracted world.
                    </p>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 w-full max-w-lg gap-4">
                        <Button className="w-full px-8! h-14 font-bold uppercase">Start Reading Now</Button>
                        <Button className="w-full px-8! h-14 font-bold uppercase group" variant={"secondary"}>
                            Read Sample Chapter
                            <MoveRight className="transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>

                    {/* Social Proof / Logos */}
                    <div className="mt-16">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
                            Trusted by thinkers from
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-8 opacity-40 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                            <span className="font-serif text-xl font-bold tracking-tighter">FORBES</span>
                            <span className="font-sans text-xl font-black italic tracking-tighter">WIRED</span>
                            <span className="font-serif text-2xl font-light italic">The New Yorker</span>
                        </div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end perspective-dramatic">
                    <div className="absolute inset-0 bg-muted/50 rounded-full blur-[100px] transform translate-x-12 translate-y-12"></div>
                    <div className="relative z-10 w-full max-w-md mx-auto transform transition-all duration-700 hover:scale-[1.02] hover:-rotate-1">
                        <div className="relative aspect-3/4 shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.3)] rounded-r-2xl rounded-l-lg bg-[#fdfdfd] overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-3 bg-linear-to-r from-stone-300 to-stone-100 z-20"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-[#F5F5F0] text-primary">
                                <div className="w-full h-full border border-stone-800/10 flex flex-col justify-between p-6 relative">
                                    <div className="text-xs font-bold tracking-[0.2em] uppercase text-center border-b border-stone-800 pb-4">
                                        Alex Rivers
                                    </div>
                                    <div className="flex-1 flex flex-col items-center justify-center gap-4">
                                        <h1 className="font-serif text-5xl text-center leading-[0.9] font-medium">
                                            The
                                            <br />
                                            <span className="italic font-light">Focus</span>
                                            <br />
                                            Blueprint
                                        </h1>
                                        <div className="w-8 h-px bg-stone-800 mt-4"></div>
                                    </div>
                                    <div className="text-xs font-serif italic text-center text-stone-500">
                                        "A masterpiece of clarity."
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none mix-blend-multiply"></div>
                                <div className="absolute inset-0 bg-linear-to-l from-black/5 via-transparent to-black/10 pointer-events-none"></div>
                            </div>
                        </div>
                        <div
                            className="absolute top-[2%] bottom-[2%] -right-4.5 w-5 bg-[#f5f5f5] transform skew-y-45 z-[-1] border-l border-stone-200"
                            style={{
                                background: "repeating-linear-linear(90deg, #fff 0px, #eee 1px, #fff 2px)",
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
