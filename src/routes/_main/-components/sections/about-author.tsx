export default function AboutAuthor() {
    return (
        <section className="py-24 px-6 lg:px-12 bg-paper relative overflow-hidden" id="letter">
            <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none"></div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 font-serif">
                        <div className="mb-8">
                            <h2 className="text-sm font-bold tracking-widest uppercase text-stone-400 mb-2 font-display">
                                From the desk of Alex Rivers
                            </h2>
                            <h3 className="text-4xl text-primary font-medium italic">"Why I wrote this book."</h3>
                        </div>
                        <div className="prose prose-lg prose-stone text-stone-700 leading-loose">
                            <p className="first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:font-bold first-letter:text-stone-900">
                                We are living in an age of infinite distraction. The tools meant to connect us have
                                fragmented our ability to think deeply. I spent fifteen years watching brilliant minds
                                burn out—not from lack of talent, but from lack of focus.
                            </p>
                            <p>
                                <em>The Focus Blueprint</em> isn't a collection of hacks. It's a personal philosophy I
                                developed while working with top executives who were drowning in noise. It is about
                                reclaiming the sanctity of your own mind.
                            </p>
                            <p>
                                I wrote this for the quiet ambitious. For those who know they are capable of more, if
                                only the world would stop buzzing for a moment.
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
        </section>
    )
}