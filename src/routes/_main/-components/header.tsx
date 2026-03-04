import { useState } from "react"
import { Link } from "@tanstack/react-router"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { label: "Home", to: "/" },
        { label: "Books", to: "/books" },
    ]

    return (
        <>
            <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
                <nav>
                    <div className="mx-auto flex max-w-(--breakpoint-xl) items-center justify-between h-16 px-3 sm:px-6 lg:px-10">
                        <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-foreground">
                            Bookloom<span className="text-accent">.</span>
                        </Link>

                        <div className="hidden items-center gap-8 md:flex">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    activeProps={{ className: "text-foreground font-medium" }}
                                    inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                                    className="text-sm uppercase tracking-widest transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <div className="flex items-center gap-4 border-l border-border pl-8">
                                <Link
                                    to="."
                                    className={cn(
                                        buttonVariants({
                                            variant: "default",
                                        }),
                                    )}
                                >
                                    Get the Book
                                </Link>
                            </div>
                        </div>

                        <button
                            className="text-foreground md:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {isOpen && (
                        <div className="absolute top-16 left-0 w-full animate-in fade-in slide-in-from-top-5 border-b border-border bg-background p-6 md:hidden">
                            <div className="flex flex-col gap-6 text-center">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.to}
                                        to={link.to}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-serif italic text-foreground"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <hr className="border-border" />
                                <Link
                                    to="."
                                    className={cn(
                                        buttonVariants({
                                            variant: "default",
                                        }),
                                    )}
                                >
                                    Purchase Now
                                </Link>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
            {isOpen && <div className="fixed inset-0 bg-black/80 backdrop-blur-md" />}
        </>
    )
}
