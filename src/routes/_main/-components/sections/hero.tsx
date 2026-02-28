import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-background flex flex-col items-center min-h-dvh mt-14">
            <div className="max-w-(--breakpoint-2xl) mx-auto w-full px-6 lg:px-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <div className="flex flex-col items-start">
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

                <div className="relative flex justify-center lg:justify-end">
                    <img
                        src="/images/hero.png"
                        alt="The Focus Blueprint Book Cover"
                        className="max-w-132 mx-auto h-auto w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
                    />
                </div>
            </div>
        </section>
    )
}
