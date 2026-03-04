import { ArrowRightCircle, CheckCircle } from "lucide-react"

export default function GetStartedCta() {
    return (
        <section className="py-24 px-6 lg:px-12 bg-paper border-b border-stone-200">
            <div className="max-w-4xl mx-auto bg-white border border-stone-200 shadow-2xl shadow-stone-200/50 rounded-2xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                    <div className="p-10 md:p-12 flex flex-col justify-center gap-6">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-primary mb-2">Start Today</h2>
                            <p className="text-stone-500">Instant digital delivery. Read on any device.</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 text-sm text-stone-700">
                                <CheckCircle className="text-green-600 text-xl" />
                                <span>Instant PDF &amp; ePub Access</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-stone-700">
                                <CheckCircle className="text-green-600 text-xl" />
                                <span>Lifetime Content Updates</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-stone-700">
                                <CheckCircle className="text-green-600 text-xl" />
                                <span>Audiobook Version Included</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <button className="w-full btn-tactile h-14 bg-primary text-white text-lg font-bold rounded-sm shadow-xl flex items-center justify-center gap-2 group">
                                Purchase for $19.99
                                <ArrowRightCircle className="text-sm group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="text-center text-xs text-stone-400 mt-3">
                                Secure payment via Stripe. 30-day money-back guarantee.
                            </p>
                        </div>
                    </div>
                    <div className="bg-stone-100 flex items-center justify-center p-10 border-l border-stone-200/50 relative overflow-hidden">
                        <div className="absolute inset-0 bg-grain opacity-20"></div>
                        <div className="absolute w-64 h-64 bg-stone-200/50 rounded-full blur-3xl"></div>
                        <img
                            alt="Book Stack"
                            className="relative z-10 w-3/4 drop-shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0X5SpBoN3dFQuNH912j63_jqwONocndiklkP8CT2QYrvb9bfJyslNky6s8Op9gewsNILAMUUFdQFT9byHL4PB7y8jkEiI-Uwxpe8QGOSe2CxdljGLvAdmkf7QhCtaYBU5W2MdNsKCBQcaAnuxQOMxv9J4w59mOS2TNDy9j6Wti4zcBsThX9kc1wX_9XWa39wpSAtQ-rAkDeRi-tbWEHmoKCh9Yx9Plo-QYEhQJaFH8Dm7Djd_vwgLftRHIsKphhz8x3pPpIFMePEa"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
