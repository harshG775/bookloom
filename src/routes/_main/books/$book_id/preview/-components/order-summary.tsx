// /routes/_main/-components/order-summary.tsx
import { BookOpen, Download, Mail } from "lucide-react"

export default function OrderSummary() {
    // TODO: Replace with actual book data from route params/context
    const book = {
        title: "The Focus Blueprint",
        subtitle: "A masterclass in deep work",
        cover: "/books/focus-blueprint-cover.jpg",
        price: 29,
        currency: "$",
    }

    return (
        <div className="bg-white rounded-2xl border border-[#E8E4D9] p-6 md:p-8">
            {/* Book Info */}
            <div className="flex gap-6 mb-8">
                <div className="w-32 h-48 flex-shrink-0 bg-[#F5F3EF] rounded-lg overflow-hidden">
                    <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-1">{book.title}</h2>
                    <p className="text-[#6B6B6B] mb-4">{book.subtitle}</p>

                    {/* What You Get */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm text-[#6B6B6B]">
                            <BookOpen className="w-4 h-4 text-[#2D5D2C]" />
                            <span>Full eBook Access (PDF, ePub, Mobi)</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-[#6B6B6B]">
                            <Download className="w-4 h-4 text-[#2D5D2C]" />
                            <span>Instant Download</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-[#6B6B6B]">
                            <Mail className="w-4 h-4 text-[#2D5D2C]" />
                            <span>Lifetime Updates</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Price Breakdown */}
            <div className="border-t border-[#E8E4D9] pt-6">
                <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-[#6B6B6B]">
                        <span>Book Price</span>
                        <span>
                            {book.currency}
                            {book.price.toFixed(2)}
                        </span>
                    </div>
                    <div className="flex justify-between text-[#6B6B6B]">
                        <span>Tax</span>
                        <span>{book.currency}0.00</span>
                    </div>
                    <div className="flex justify-between text-[#6B6B6B]">
                        <span>Discount</span>
                        <span className="text-[#2D5D2C]">- {book.currency}0.00</span>
                    </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center pt-4 border-t border-[#E8E4D9]">
                    <span className="text-lg font-bold text-[#1A1A1A]">Total</span>
                    <span className="text-2xl font-bold text-[#1A1A1A]">
                        {book.currency}
                        {book.price.toFixed(2)}
                    </span>
                </div>
            </div>

            {/* Email Input */}
            <div className="mt-6">
                <label htmlFor="email" className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-[#E8E4D9] rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] 
                             focus:border-transparent text-[#1A1A1A] bg-white"
                />
                <p className="text-xs text-[#6B6B6B] mt-2">Your book access link will be sent to this email</p>
            </div>
        </div>
    )
}
