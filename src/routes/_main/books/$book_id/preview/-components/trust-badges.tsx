// /routes/_main/-components/trust-badges.tsx
import { cn } from "@/lib/utils"
import { Shield, RefreshCw, Headphones, Clock } from "lucide-react"

export default function TrustBadges({ className }: { className?: string }) {
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
        <div className={cn("bg-white rounded-2xl border border-primary/20 p-6 md:p-8", className)}>
            <h3 className="text-lg font-bold text-foreground mb-6 text-center">Why Buy From Us</h3>

            <div className="grid grid-cols-2 gap-4">
                {badges.map((badge, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center p-4 bg-background rounded-lg group"
                    >
                        <div className="size-12 rounded-full bg-primary/5 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white mb-3">
                            <badge.icon className="size-6" />
                        </div>
                        <h4 className="text-sm font-bold text-[#1A1A1A] mb-1">{badge.title}</h4>
                        <p className="text-xs text-[#6B6B6B]">{badge.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
