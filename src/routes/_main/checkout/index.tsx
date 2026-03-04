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
        <main className="flex-1 min-h-dvh pt-16">
            <div className="max-w-(--breakpoint-lg) mx-auto px-4 py-12">
                {/* Checkout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-(--breakpoint-lg) mx-auto">
                    <OrderSummary className="order-2 lg:order-1 row-span-2" />
                    <div className="order-1 lg:order-2 space-y-6 ">
                        {/* Page Header */}
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3">
                                Complete Your Purchase
                            </h1>
                            <p className="text-[#6B6B6B] text-lg">
                                Secure your copy and start your transformation today.
                            </p>
                        </div>
                        <RazorpayButton />
                    </div>
                    <TrustBadges className="order-3 lg:order-3" />
                </div>
            </div>
        </main>
    )
}
