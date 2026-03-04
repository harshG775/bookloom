export default function EssentialReading() {
    return (
        <section className="py-20 px-6 lg:px-12 bg-white border-y border-stone-100" id="books">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-12 border-b border-stone-100 pb-6">
                    <div>
                        <h2 className="text-3xl font-serif font-medium text-primary">Essential Reading</h2>
                        <p className="text-stone-500 mt-2">Complete your productivity library.</p>
                    </div>
                    <a
                        className="group flex items-center gap-1 text-sm font-bold text-stone-800 hover:text-stone-500 transition-colors"
                        href="#"
                    >
                        View Full Catalogue
                        <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                            arrow_forward
                        </span>
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="group cursor-pointer">
                        <div className="relative bg-stone-50 aspect-[3/4] mb-6 overflow-hidden flex items-center justify-center p-8">
                            <img
                                alt="Focus Mastery Book Cover"
                                className="w-3/4 shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out"
                                data-alt="Minimalist book cover design"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuU67MHpaGaWJdTNSH1Xrm9WfYud7cWx4lxbmviigWeoKNIO-nOGLMEs5UnP0JEn-7yOUMD-OD6HN5-nsRItvu6uINH4zHUB63rdC_pKx09Ey4jh7bn9WZYxNE0sZ-DykOob_5Y5NBw777rvTy1Be4KZMDzh5tY7i5IkZTtlonx3rjbOf7RJ1bCvXV8P8qoiPTkN0lTyM8lsnLuSbcf5CTerloFskJdMV3kXNuPzZI8J1OGTtGZTduvVx1Ge9nHKB0XrrBNAhvtM5Y"
                            />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-primary mb-1">Focus Mastery</h3>
                        <p className="text-stone-500 text-sm mb-3">Reclaim your attention span.</p>
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-primary">$19.99</span>
                            <button className="text-sm font-semibold underline decoration-stone-300 underline-offset-4 hover:decoration-primary transition-all">
                                Buy Now
                            </button>
                        </div>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="relative bg-stone-50 aspect-[3/4] mb-6 overflow-hidden flex items-center justify-center p-8">
                            <img
                                alt="Deep Work Habits Book Cover"
                                className="w-3/4 shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out"
                                data-alt="Abstract geometric book cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZI36Fikp0Cm4EaY6d_99wa_P67JRTo95wLxYn7AzR2eJDOilyq_uPKD66lFwJdkHeu1zqUUEQOqK2ICL1VK04KgKcfGlYCxAX331pDwKsIkdDQz08seKykO9XL_4_Pt_MMoHXEzy9RBBNPdHiDEq6ybmNTGTh7NyyctltF2PZyw7GjutaZuu2H7M1qk2uB9FxqYevk6dWqwXiBjf7OgOhnSuNMdaIYtxKMxEzef3u-bUwg2Forhu3WKSlvhmYOzrfFQfYgUrIQTWs"
                            />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-primary mb-1">Deep Work Habits</h3>
                        <p className="text-stone-500 text-sm mb-3">Build a fortress of solitude.</p>
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-primary">$24.99</span>
                            <button className="text-sm font-semibold underline decoration-stone-300 underline-offset-4 hover:decoration-primary transition-all">
                                Buy Now
                            </button>
                        </div>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="relative bg-stone-50 aspect-[3/4] mb-6 overflow-hidden flex items-center justify-center p-8">
                            <img
                                alt="The Mindful Leader Book Cover"
                                className="w-3/4 shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out"
                                data-alt="Clean typographical book cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUba9N4RfHjbGSQPB60VgamFs1UT8acnJA-nhUc6zjgmUTHMGgg_LFj-6P_pA91eAt5QIEbRlnBHIzyKs-qsURPWZStt45XKBxENWQQnZTOCobBXN-SV2rw2btHKKx6OGmFj1pdvZHwefgGbmVCFPoyUzl3jRZvEacknOQqQj_C4nQhPKwcXRFYPLzN5bZJWXGRdB90LbEn-YNoO6cl-uAFMpz6RZjVWd1wA0atEMzc-2Bj0XzP7gKOZHkloBeF2nyUqbsxovayV3f"
                            />
                        </div>
                        <h3 className="text-xl font-serif font-bold text-primary mb-1">The Mindful Leader</h3>
                        <p className="text-stone-500 text-sm mb-3">Empathy in high-pressure.</p>
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-primary">$29.99</span>
                            <button className="text-sm font-semibold underline decoration-stone-300 underline-offset-4 hover:decoration-primary transition-all">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
