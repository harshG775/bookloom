// /routes/_main/-components/empty-state.tsx
import { createFileRoute, Link } from "@tanstack/react-router"
import { BookOpen, ShoppingBag } from "lucide-react"

export default function EmptyState() {
    return (
        <div className="text-center py-16">
            {/* Icon */}
            <div
                className="w-24 h-24 bg-[#F5F3EF] rounded-full 
                          flex items-center justify-center mx-auto mb-6"
            >
                <BookOpen className="w-12 h-12 text-[#6B6B6B]" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">Your library is empty</h2>

            {/* Description */}
            <p className="text-[#6B6B6B] text-lg mb-8 max-w-md mx-auto">
                Start building your collection by exploring our books
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                    to="/books"
                    className="inline-flex items-center justify-center gap-2 
                             bg-[#1A1A1A] hover:bg-[#333333] text-white 
                             font-bold py-4 px-8 rounded-lg 
                             transition-colors duration-200"
                >
                    <ShoppingBag className="w-5 h-5" />
                    Browse Books
                </Link>
                <Link
                    to="/"
                    className="inline-flex items-center justify-center 
                             bg-white hover:bg-[#F5F3EF] text-[#1A1A1A] 
                             font-bold py-4 px-8 rounded-lg 
                             border border-[#E8E4D9] 
                             transition-colors duration-200"
                >
                    Go to Home
                </Link>
            </div>

            {/* Featured Books Suggestion (Optional) */}
            <div className="mt-12 pt-12 border-t border-[#E8E4D9]">
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-6">Popular Books</h3>
                <p className="text-[#6B6B6B] mb-4">Check out these bestselling titles</p>
                <Link
                    to="/books"
                    className="text-[#1A1A1A] font-medium underline 
                             underline-offset-4 hover:text-[#6B6B6B]"
                >
                    View all books →
                </Link>
            </div>
        </div>
    )
}
