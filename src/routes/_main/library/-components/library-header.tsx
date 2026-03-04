// /routes/_main/-components/library-header.tsx
import { Search, Filter } from "lucide-react"

interface LibraryHeaderProps {
    totalBooks: number
}

export default function LibraryHeader({ totalBooks }: LibraryHeaderProps) {
    return (
        <div className="mb-12">
            {/* Title Section */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3">My Library</h1>
                <p className="text-[#6B6B6B] text-lg">
                    {totalBooks} {totalBooks === 1 ? "book" : "books"} in your collection
                </p>
            </div>

            {/* Search & Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4">
                {/* Search Input */}
                <div className="flex-1 relative">
                    <Search
                        className="absolute left-4 top-1/2 -translate-y-1/2 
                                     w-5 h-5 text-[#6B6B6B]"
                    />
                    <input
                        type="text"
                        placeholder="Search your books..."
                        className="w-full pl-12 pr-4 py-3 bg-white border border-[#E8E4D9] 
                                 rounded-lg focus:outline-none focus:ring-2 
                                 focus:ring-[#1A1A1A] focus:border-transparent 
                                 text-[#1A1A1A] placeholder:text-[#6B6B6B]"
                    />
                </div>

                {/* Filter Dropdown */}
                <button
                    className="flex items-center gap-2 px-6 py-3 bg-white 
                                 border border-[#E8E4D9] rounded-lg 
                                 hover:bg-[#F5F3EF] transition-colors 
                                 text-[#1A1A1A] font-medium"
                >
                    <Filter className="w-5 h-5" />
                    <span>Filter</span>
                </button>

                {/* View Toggle (Optional) */}
                <div
                    className="flex bg-white border border-[#E8E4D9] rounded-lg 
                              overflow-hidden"
                >
                    <button
                        className="px-4 py-3 hover:bg-[#F5F3EF] 
                                     text-[#1A1A1A] border-r border-[#E8E4D9]"
                    >
                        Grid
                    </button>
                    <button
                        className="px-4 py-3 hover:bg-[#F5F3EF] 
                                     text-[#6B6B6B]"
                    >
                        List
                    </button>
                </div>
            </div>
        </div>
    )
}
