// /routes/_main/checkout.tsx
import { createFileRoute } from "@tanstack/react-router"
import OrderSummary from "../books/$book_id/preview/-components/order-summary"
import RazorpayButton from "../books/$book_id/preview/-components/razorpay-button"
import TrustBadges from "../books/$book_id/preview/-components/trust-badges"


export const Route = createFileRoute("/_main/checkout/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <main className="flex-1 min-h-dvh pt-16 bg-[#FDFBF7]">
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Page Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3">Secure Checkout</h1>
                    <p className="text-[#6B6B6B] text-lg">Complete your purchase to get instant access</p>
                </div>

                {/* Checkout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <OrderSummary />
                    <div className="space-y-6">
                        <RazorpayButton />
                        <TrustBadges />
                    </div>
                </div>
            </div>
        </main>
    )
}
