// /routes/_main/-components/razorpay-button.tsx
import { Lock } from "lucide-react"

export default function RazorpayButton() {
    // TODO: Integrate with actual Razorpay checkout
    const handleCheckout = async () => {
        // Razorpay integration logic here
        console.log("Initiating Razorpay checkout...")
    }

    return (
        <div className="bg-white rounded-2xl border border-[#E8E4D9] p-6 md:p-8">
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-4">Payment Method</h3>

            {/* Razorpay Button */}
            <button
                onClick={handleCheckout}
                className="w-full bg-[#1A1A1A] hover:bg-[#333333] 
                         text-white font-bold py-4 px-6 rounded-lg
                         transition-colors duration-200 flex items-center 
                         justify-center gap-3 mb-4"
            >
                <Lock className="w-5 h-5" />
                <span>Pay with Razorpay</span>
            </button>

            {/* Payment Methods Info */}
            <div className="bg-[#F5F3EF] rounded-lg p-4 mb-4">
                <p className="text-sm text-[#6B6B6B] text-center mb-3">Accepting all major payment methods</p>
                <div className="flex justify-center gap-4 opacity-60">
                    {/* Payment Method Icons (Replace with actual SVGs) */}
                    <div className="h-8 w-12 bg-white rounded border border-[#E8E4D9]" />
                    <div className="h-8 w-12 bg-white rounded border border-[#E8E4D9]" />
                    <div className="h-8 w-12 bg-white rounded border border-[#E8E4D9]" />
                    <div className="h-8 w-12 bg-white rounded border border-[#E8E4D9]" />
                </div>
            </div>

            {/* Secure Checkout Note */}
            <div className="flex items-center justify-center gap-2 text-sm text-[#6B6B6B]">
                <Lock className="w-4 h-4" />
                <span>Secure 256-bit SSL encrypted payment</span>
            </div>
        </div>
    )
}
