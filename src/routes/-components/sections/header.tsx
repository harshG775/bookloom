import { Link, useRouter } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { signOutFn } from "@/server-functions/auth.serverFn"

export function Header() {
    const router = useRouter()

    return (
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link to="/" className="text-lg font-bold">
                    Bookloom
                </Link>

                {/* Nav links */}
                <nav className="hidden items-center gap-6 md:flex">
                    <Link to="/books" className="text-sm text-muted-foreground hover:text-foreground">
                        Browse
                    </Link>

                    <Link to="/dashboard/library" className="text-sm text-muted-foreground hover:text-foreground">
                        Library
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <Button variant="ghost" asChild>
                        <Link to="/login">Sign in</Link>
                    </Button>
                    <Button
                        onClick={async () => {
                            await signOutFn()
                            router.invalidate()
                        }}
                    >
                        SignOut
                    </Button>

                    <Button asChild>
                        <Link to="/books">Get started</Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
