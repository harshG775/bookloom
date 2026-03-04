import { cn } from "@/lib/utils"

export default function OrderSummary({ className }: { className?: string }) {
    const book = {
        title: "The Focus Blueprint",
        subtitle:
            "A comprehensive system to master your attention, eliminate distractions, and achieve peak cognitive performance in the digital age.",
        cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwnBdvGh_S5gslSTUEGHq1uTNBYbJmZafK9bqZVaD3eEa4IGPYVf4uh4b3J6nL5GBxDh__0EFD3QgG8eZix3wOS_gLRxytaxlnPgo53WihKA8IMDsVUdlrtRmycnHN_IeSER6OGTS_chV5uhhsTPVq4RQZwm4e3h97MxUvv7IC1GjbkooDxgmTh8inl-M6OPImiTy1ufTPK9f8CP_kApzU7TsUAEOy62K67PxFz35po90QLtGTZf2it0evLJ_2nJtNO-Skaiknlp5c",
        price: 29,
        currency: "$",
    }

    return (
        <div className={cn("bg-white rounded-2xl border border-[#E8E4D9] p-6 md:p-8 flex flex-col", className)}>
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-4 border-b border-primaru pb-4">Order Summary</h3>

            {/* Book Info */}
            <div className="flex-1 flex flex-col gap-6 mb-8 group">
                <div className="overflow-hidden w-full h-full ">
                    <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                    />
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-1">{book.title}</h2>
                    <p className="text-[#6B6B6B]">{book.subtitle}</p>
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
        </div>
    )
}
