import { ShieldCheck, Zap } from "lucide-react"

export default function CtaSection() {
    return (
        <section className="py-24 bg-paper">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white rounded-3xl p-16 text-center shadow-xl">
                    <h2 className="font-serif text-4xl font-black mb-6">Ready to find your focus?</h2>

                    <p className="text-xl text-gray-500 mb-10">
                        Join 12,000+ readers and reclaim your deep work potential.
                    </p>

                    <button className="w-full max-w-md mx-auto bg-primary text-primary-foreground py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:scale-102 active:scale-100 transition-all">
                        Start Reading Instantly <Zap size={18} />
                    </button>

                    <div className="flex justify-center gap-6 mt-6 text-sm text-charcoal/50">
                        <div className="flex items-center text-gray-600 gap-2">
                            <ShieldCheck size={18} className="text-green-500" />
                            30-day money back
                        </div>

                        <div className="flex items-center text-gray-600 gap-2">
                            <ShieldCheck size={18} className="text-primary" />
                            Secure Checkout
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
