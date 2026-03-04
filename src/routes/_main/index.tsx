import { createFileRoute } from "@tanstack/react-router"
import Header from "./-components/header"
import Hero from "./-components/sections/hero"
import { Feature } from "./-components/sections/feature"
import Footer from "./-components/footer"

export const Route = createFileRoute("/_main/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <>
            <Header />
            <main className="grow pt-16">
                <Hero />
                <Feature />
                <section id="about-author" className="min-h-dvh">
                    Author Introduction Section
                </section>
                <section id="shop" className="min-h-dvh">
                    Product Catalog / Essential Reading Section
                </section>
                <section id="testimonials" className="min-h-dvh">
                    Testimonials Section
                </section>
                <section id="cta">Final Call to Action Section</section>

                {/* <section className="py-20 px-6 lg:px-12 bg-white border-y border-stone-100">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl lg:text-4xl font-serif font-medium text-primary mb-4">
                                Engineering Your Attention
                            </h2>
                            <p className="text-stone-500 text-lg">
                                A system built on neuroscience, not willpower. Here is what is inside the blueprint.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
                            <div className="md:col-span-2 lg:col-span-2 row-span-2 bg-stone-50 rounded-xl p-8 lg:p-10 border border-stone-100 hover:border-stone-300 transition-colors group grid-grain flex flex-col justify-between">
                                <div className="size-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm border border-stone-100 group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-symbols-outlined text-3xl text-stone-800">
                                        psychology_alt
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif font-bold text-primary mb-3">Mental Models</h3>
                                    <p className="text-stone-600 leading-relaxed">
                                        Cognitive frameworks derived from behavioral psychology. Learn to visualize your
                                        attention as a finite resource and allocate it with military precision. Includes
                                        the famous 'Box Breathing' decision matrix.
                                    </p>
                                </div>
                            </div>
                            <div className="md:col-span-1 bg-primary text-paper rounded-xl p-8 border border-stone-800 grid-grain flex flex-col justify-between">
                                <div className="size-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-2xl text-white">grid_view</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif font-bold mb-2">Actionable Systems</h3>
                                    <p className="text-stone-400 text-sm">
                                        Not just theory. Get plug-and-play Notion templates and daily planners.
                                    </p>
                                </div>
                            </div>
                            <div className="md:col-span-1 bg-stone-50 rounded-xl p-8 border border-stone-100 hover:border-stone-300 transition-colors grid-grain flex flex-col justify-between group">
                                <div className="size-12 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm border border-stone-100 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-2xl text-stone-800">
                                        history_edu
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif font-bold text-primary mb-2">
                                        Expert Case Studies
                                    </h3>
                                    <p className="text-stone-500 text-sm">
                                        Deep dives into the routines of 15 Fortune 500 CEOs.
                                    </p>
                                </div>
                            </div>
                            <div className="md:col-span-3 lg:col-span-2 bg-[#e6e2dd] rounded-xl p-8 border border-stone-200/50 hover:border-stone-400/50 transition-colors grid-grain flex items-center gap-6 group">
                                <div className="shrink-0 size-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:rotate-12 transition-transform duration-500">
                                    <span className="material-symbols-outlined text-3xl text-stone-800">
                                        all_inclusive
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif font-bold text-primary mb-1">
                                        Lifetime Access &amp; Updates
                                    </h3>
                                    <p className="text-stone-600 text-sm">
                                        The digital edition is a living document. You receive every new chapter and
                                        revised edition forever, at no extra cost.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section className="py-24 px-6 lg:px-12 bg-paper relative overflow-hidden" id="letter">
                    <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none"></div>
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1 font-serif">
                                <div className="mb-8">
                                    <h2 className="text-sm font-bold tracking-widest uppercase text-stone-400 mb-2 font-display">
                                        From the desk of Alex Rivers
                                    </h2>
                                    <h3 className="text-4xl text-primary font-medium italic">
                                        "Why I wrote this book."
                                    </h3>
                                </div>
                                <div className="prose prose-lg prose-stone text-stone-700 leading-loose">
                                    <p className="first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:font-bold first-letter:text-stone-900">
                                        We are living in an age of infinite distraction. The tools meant to connect us
                                        have fragmented our ability to think deeply. I spent fifteen years watching
                                        brilliant minds burn out—not from lack of talent, but from lack of focus.
                                    </p>
                                    <p>
                                        <em>The Focus Blueprint</em> isn't a collection of hacks. It's a personal
                                        philosophy I developed while working with top executives who were drowning in
                                        noise. It is about reclaiming the sanctity of your own mind.
                                    </p>
                                    <p>
                                        I wrote this for the quiet ambitious. For those who know they are capable of
                                        more, if only the world would stop buzzing for a moment.
                                    </p>
                                </div>
                                <div className="mt-12">
                                    <svg
                                        className="h-16 w-auto text-primary"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 200 60"
                                    >
                                        <path d="M10,40 c20,-30 40,10 40,0 c0,-10 -10,-20 -20,-10 c-10,10 10,20 20,20 c20,0 40,-30 60,-30 c10,0 20,10 20,20 c0,10 -10,20 -20,10 m60,-10 c10,-10 20,10 30,0"></path>
                                    </svg>
                                    <p className="text-sm font-display text-stone-500 mt-2">Alex Rivers, New York</p>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                                <div className="relative w-full max-w-[400px]">
                                    <div className="absolute inset-0 border border-stone-300 translate-x-4 translate-y-4"></div>
                                    <img
                                        alt="Alex Rivers Portrait"
                                        className="relative w-full aspect-[4/5] object-cover grayscale contrast-125 brightness-110 shadow-xl"
                                        data-alt="Black and white candid portrait of Alex Rivers looking thoughtful"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVDeW9ft31TZbnrW2vMuHb30Fwkrv052eWMZjaOH6ZXWw-yd3IIf7S6Yt6zGgo6iiDck4DdFIRoyJsMIrVvUOioPw3v3u8utUieMSR3Vz4sUGcrxjNNpe26TF20oxDr1nnr5T1awZU0-k42NZWEXAqSkE8XGEJEOgl26we7NH6KHZ42xeF5-9c9ZQMWAuzCF1WST8GFWxmjTE-WKbECqhJIutap3uspnoDNtwtXOGlJB-oIHf7K-kQ90YJGfFopSuuPMAz960xoD3L"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section className="py-20 px-6 lg:px-12 bg-white border-y border-stone-100" id="books">
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
                </section> */}
                {/* <section className="py-24 px-6 lg:px-12 bg-stone-900 text-stone-200">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-serif font-medium text-white mb-6">
                                Impact Stories
                            </h2>
                            <div className="w-20 h-[1px] bg-stone-700 mx-auto"></div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-stone-800/50 p-8 rounded-sm relative border border-stone-800">
                                <span className="absolute top-4 left-6 font-serif text-6xl text-stone-700 leading-none">
                                    “
                                </span>
                                <p className="relative z-10 text-stone-300 text-lg leading-relaxed mb-8 pt-6">
                                    I've read dozens of productivity books, but 'The Focus Blueprint' is the only one
                                    that actually stuck. It treats focus as an asset className, not a chore.
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        alt="Sarah J."
                                        className="size-10 rounded-full object-cover grayscale"
                                        data-alt="Avatar of a woman"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIJhyegZSb6iqi_iynmSJgLf1-N5a_dlnZTLVYYnAJJDOPzGDSOoz9vhCtDrWWVrT6X8wtd5XS8w-NBwNLypfTAFaAwk8nAn8Hk4KvryGqIa-qZapKNkQehS8sSeANQXr0rxZ7FFzHjZkH-juDx517st4bg88ztAv-99jrU_FHUaMvui86rww44rw7hIJJmmkId5d2M90ie0wAEhNx0gt1XVMgQ6brOqeanh3pYAkz4rxEKilC1jujYk81iLFv-VEbU5EYeF_tF6jj"
                                    />
                                    <div>
                                        <p className="font-serif text-white text-lg">Sarah Jenkins</p>
                                        <p className="text-xs uppercase tracking-wider text-stone-500">
                                            Creative Director, Vogue
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-stone-800/50 p-8 rounded-sm relative border border-stone-800">
                                <span className="absolute top-4 left-6 font-serif text-6xl text-stone-700 leading-none">
                                    “
                                </span>
                                <p className="relative z-10 text-stone-300 text-lg leading-relaxed mb-8 pt-6">
                                    Straight to the point. No fluff. Just actionable advice that you can implement the
                                    moment you put the book down. A modern classic.
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        alt="Mark T."
                                        className="size-10 rounded-full object-cover grayscale"
                                        data-alt="Avatar of a man"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7ohZO6zxs9W6UhXI6Q5fL-pSe_5CW4X2NW17rqsUCRthcN20fB2ULm0Ugs3qI18S2AWwqFD4wsXGD9NzHxaMsJ6XpNs9PudBWzet2cdFRCLL7TPHeX_3AFggHKEyzWycyU2lzvBLUKF2--Yobvg4v2GZW_QEyrPr8nOEUYKsLPjbqbFOAFIYY-Be3GzQhXNPdxIhCFs3ipcqLPMeSzHU0f925pNrPwrF3C0mbLWKHTpYt0fM1VWFh2R0o5CSre3L6n5v30uwDeHNv"
                                    />
                                    <div>
                                        <p className="font-serif text-white text-lg">Mark Thompson</p>
                                        <p className="text-xs uppercase tracking-wider text-stone-500">
                                            Senior Eng, Stripe
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-stone-800/50 p-8 rounded-sm relative border border-stone-800">
                                <span className="absolute top-4 left-6 font-serif text-6xl text-stone-700 leading-none">
                                    “
                                </span>
                                <p className="relative z-10 text-stone-300 text-lg leading-relaxed mb-8 pt-6">
                                    The chapter on 'Deep Work Habits' completely transformed how I manage my mornings. I
                                    have reclaimed 20 hours a week easily.
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        alt="Elena R."
                                        className="size-10 rounded-full object-cover grayscale"
                                        data-alt="Avatar of a woman"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSk7e2TmqlRj4MRH9NLhnmafN2QinXwhdsCl7XqVJterYW4797iHU7n2WFLMzBRwLn7ZQD_U3fcUl6MLxukxqQ3Iyrm-OlTqxAFzHNIVpn6RoaqMJHJb2MvKxvidrN-M7Gzdu-dCHm-ycvgo4_f0dyA4LbVkWkgQHa1eBpDDVJCt1zIzaxm13E8RkcG51JFojrqcEPsc3ENA3ngrahB05qbZw81RQYJvB_Iitc1Drin0WMXFeNewQjLuyWmPMFu4IwHwKhSLZVLFeB"
                                    />
                                    <div>
                                        <p className="font-serif text-white text-lg">Elena Rodriguez</p>
                                        <p className="text-xs uppercase tracking-wider text-stone-500">Founder, Aura</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section className="py-24 px-6 lg:px-12 bg-paper border-b border-stone-200">
                    <div className="max-w-4xl mx-auto bg-white border border-stone-200 shadow-2xl shadow-stone-200/50 rounded-2xl overflow-hidden">
                        <div className="grid md:grid-cols-2">
                            <div className="p-10 md:p-12 flex flex-col justify-center gap-6">
                                <div>
                                    <h2 className="text-3xl font-serif font-bold text-primary mb-2">Start Today</h2>
                                    <p className="text-stone-500">Instant digital delivery. Read on any device.</p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3 text-sm text-stone-700">
                                        <span className="material-symbols-outlined text-green-600 text-xl">
                                            check_circle
                                        </span>
                                        <span>Instant PDF &amp; ePub Access</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-stone-700">
                                        <span className="material-symbols-outlined text-green-600 text-xl">
                                            check_circle
                                        </span>
                                        <span>Lifetime Content Updates</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-stone-700">
                                        <span className="material-symbols-outlined text-green-600 text-xl">
                                            check_circle
                                        </span>
                                        <span>Audiobook Version Included</span>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <button className="w-full btn-tactile h-14 bg-primary text-white text-lg font-bold rounded-sm shadow-xl flex items-center justify-center gap-2 group">
                                        Purchase for $19.99
                                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                                            arrow_forward
                                        </span>
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
                </section> */}
            </main>
            <Footer />
        </>
    )
}
