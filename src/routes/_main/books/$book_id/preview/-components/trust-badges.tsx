// /routes/_main/-components/trust-badges.tsx
import { Shield, RefreshCw, Headphones, Clock } from "lucide-react"

export default function TrustBadges() {
    const badges = [
        {
            icon: Shield,
            title: "Secure Payment",
            description: "256-bit SSL encryption",
        },
        {
            icon: RefreshCw,
            title: "30-Day Refund",
            description: "Money-back guarantee",
        },
        {
            icon: Headphones,
            title: "Support",
            description: "Email support available",
        },
        {
            icon: Clock,
            title: "Instant Access",
            description: "Get your book immediately",
        },
    ]

    return (
        <div className="bg-white rounded-2xl border border-[#E8E4D9] p-6 md:p-8">
            <h3 className="text-lg font-bold text-[#1A1A1A] mb-6 text-center">Why Buy From Us</h3>

            <div className="grid grid-cols-2 gap-4">
                {badges.map((badge, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center p-4 
                                 bg-[#F5F3EF] rounded-lg"
                    >
                        <badge.icon className="w-6 h-6 text-[#1A1A1A] mb-3" />
                        <h4 className="text-sm font-bold text-[#1A1A1A] mb-1">{badge.title}</h4>
                        <p className="text-xs text-[#6B6B6B]">{badge.description}</p>
                    </div>
                ))}
            </div>

            {/* Additional Trust Info */}
            <div className="mt-6 pt-6 border-t border-[#E8E4D9]">
                <div className="space-y-3">
                    <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2D5D2C] mt-2 flex-shrink-0" />
                        <p className="text-sm text-[#6B6B6B]">
                            <strong className="text-[#1A1A1A]">Instant Delivery:</strong> Access your book immediately
                            after payment confirmation
                        </p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2D5D2C] mt-2 flex-shrink-0" />
                        <p className="text-sm text-[#6B6B6B]">
                            <strong className="text-[#1A1A1A]">Multiple Formats:</strong> PDF, ePub, and Mobi formats
                            included
                        </p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2D5D2C] mt-2 flex-shrink-0" />
                        <p className="text-sm text-[#6B6B6B]">
                            <strong className="text-[#1A1A1A]">Lifetime Access:</strong> All future updates included at
                            no extra cost
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
