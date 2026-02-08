import { Link } from "@tanstack/react-router"

export function FooterSection() {
    return (
        <footer className="border-t">
            <div className="container mx-auto px-4 py-10 space-y-6">
                {/* Top */}
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                    <div>
                        <h3 className="text-lg font-semibold">Bookloom</h3>
                        <p className="text-sm text-muted-foreground">A modern ebook platform for curious minds.</p>
                    </div>

                    <nav className="flex gap-6 text-sm">
                        <Link to="/books" className="hover:underline">
                            Browse
                        </Link>
                        <Link to="/dashboard/library" className="hover:underline">
                            Library
                        </Link>
                        <Link to="/" className="hover:underline">
                            About
                        </Link>
                    </nav>
                </div>

                {/* Bottom */}
                <div className="border-t pt-4 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Bookloom. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
