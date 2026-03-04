// /routes/_main/-components/purchased-books-grid.tsx
import { BookOpen, Download, MoreVertical } from "lucide-react"

interface Book {
    id: string
    title: string
    subtitle: string
    cover: string
    progress: number
    lastRead: string | null
    purchasedAt: string
}

interface PurchasedBooksGridProps {
    books: Book[]
}

export default function PurchasedBooksGrid({ books }: PurchasedBooksGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>
    )
}

// Book Card Sub-Component
function BookCard({ book }: { book: Book }) {
    return (
        <div
            className="bg-white rounded-2xl border border-[#E8E4D9] 
                      overflow-hidden hover:shadow-lg transition-shadow 
                      duration-300 group"
        >
            {/* Book Cover */}
            <div className="relative aspect-[3/4] bg-[#F5F3EF] overflow-hidden">
                <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover 
                             group-hover:scale-105 transition-transform 
                             duration-300"
                />

                {/* Progress Badge (if reading) */}
                {book.progress > 0 && book.progress < 100 && (
                    <div
                        className="absolute top-3 right-3 bg-[#1A1A1A] 
                                  text-white text-xs font-bold px-3 py-1 
                                  rounded-full"
                    >
                        {book.progress}%
                    </div>
                )}

                {/* Completed Badge */}
                {book.progress === 100 && (
                    <div
                        className="absolute top-3 right-3 bg-[#2D5D2C] 
                                  text-white text-xs font-bold px-3 py-1 
                                  rounded-full"
                    >
                        Completed
                    </div>
                )}

                {/* Quick Actions Overlay */}
                <div
                    className="absolute inset-0 bg-black/60 opacity-0 
                              group-hover:opacity-100 transition-opacity 
                              duration-300 flex items-center justify-center 
                              gap-3"
                >
                    <button
                        className="p-3 bg-white rounded-full 
                                     hover:bg-[#F5F3EF] transition-colors"
                        title="Read"
                    >
                        <BookOpen className="w-5 h-5 text-[#1A1A1A]" />
                    </button>
                    <button
                        className="p-3 bg-white rounded-full 
                                     hover:bg-[#F5F3EF] transition-colors"
                        title="Download"
                    >
                        <Download className="w-5 h-5 text-[#1A1A1A]" />
                    </button>
                    <button
                        className="p-3 bg-white rounded-full 
                                     hover:bg-[#F5F3EF] transition-colors"
                        title="More"
                    >
                        <MoreVertical className="w-5 h-5 text-[#1A1A1A]" />
                    </button>
                </div>
            </div>

            {/* Book Info */}
            <div className="p-5">
                <h3
                    className="font-bold text-[#1A1A1A] text-lg mb-1 
                             line-clamp-1"
                >
                    {book.title}
                </h3>
                <p className="text-sm text-[#6B6B6B] mb-4 line-clamp-2">{book.subtitle}</p>

                {/* Progress Bar */}
                {book.progress > 0 && (
                    <div className="mb-4">
                        <div
                            className="flex justify-between text-xs 
                                      text-[#6B6B6B] mb-2"
                        >
                            <span>Progress</span>
                            <span>{book.progress}%</span>
                        </div>
                        <div
                            className="w-full h-2 bg-[#F5F3EF] rounded-full 
                                      overflow-hidden"
                        >
                            <div className="h-full bg-[#2D5D2C] rounded-full" style={{ width: `${book.progress}%` }} />
                        </div>
                    </div>
                )}

                {/* Last Read / Purchased Info */}
                <div
                    className="flex justify-between items-center text-xs 
                              text-[#6B6B6B] mb-4"
                >
                    {book.lastRead ? <span>Last read {book.lastRead}</span> : <span>Not started yet</span>}
                    <span>Purchased {book.purchasedAt}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    <button
                        className="flex-1 bg-[#1A1A1A] hover:bg-[#333333] 
                                     text-white font-medium py-2.5 px-4 
                                     rounded-lg transition-colors text-sm"
                    >
                        {book.progress > 0 ? "Continue Reading" : "Start Reading"}
                    </button>
                    <button
                        className="px-4 py-2.5 bg-white border 
                                     border-[#E8E4D9] hover:bg-[#F5F3EF] 
                                     text-[#1A1A1A] rounded-lg 
                                     transition-colors text-sm"
                    >
                        <Download className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}
