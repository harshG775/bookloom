import { cn } from "@/lib/utils"

export default function OrderSummary({ className }: { className?: string }) {
    const book = {
        title: "The Focus Blueprint",
        subtitle:
            "A comprehensive system to master your attention, eliminate distractions, and achieve peak cognitive performance in the digital age.",
        cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuArIZT4kbiiPn7scbABbfgx46nzy3R5_xGrdYfurhEHWaLDy7Pds21elAEm6vgmD4GKT_sN2EZFmX1InQCuYvq7F8C3p3huw2MTqg3vANM56mrs7Vih4L9lUvGpS8K8JwZFzTImBWSkLtv7PTPFbrPd4MsgxzREtwtVM_iSW2KNr7_7Ngzidp9g58Z7SA2gei__zAL_Xet_SBg9BK97mIuw-ZIs3z-eh36FE3Cm1WVIewmLuUl8PkAc_0cId7XlFrZ0sMxL6A8bvlB5",
        price: 29,
        currency: "$",
    }

    return (
        <div className={cn("bg-white rounded-2xl border border-[#E8E4D9] p-6 md:p-8 flex flex-col", className)}>
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-4 border-b border-primaru pb-4">Order Summary</h3>

            {/* Book Info */}
            <div className="flex-1 flex flex-col gap-6 mb-8">
                <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
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
