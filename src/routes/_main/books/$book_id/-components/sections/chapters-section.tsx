export default function ChaptersSection() {
    return (
        <section className="py-24 bg-background" id="chapters">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Inside the Blueprint</h2>
                        <p className="text-xl text-gray-600">
                            A comprehensive roadmap to cognitive dominance, divided into four tactical phases.
                        </p>
                    </div>
                    {/* <button className="text-primary font-bold flex items-center gap-2 group">
                        Download full table of contents Download TOC <ArrowRight size={18} />
                    </button> */}
                </div>
                <div className="grid md:grid-cols-2 gap-px bg-gray-50 border border-gray-50 rounded-2xl overflow-hidden">
                    <div className="bg-white p-10 hover:bg-muted transition-colors group">
                        <span className="text-primary font-serif italic text-2xl mb-6 block">01</span>
                        <h3 className="text-2xl font-bold mb-3">The Architecture of Focus</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Master your physical and digital environment to minimize friction and automate entry into
                            high-concentration zones.
                        </p>
                    </div>
                    <div className="bg-white p-10 hover:bg-muted transition-colors group">
                        <span className="text-primary font-serif italic text-2xl mb-6 block">02</span>
                        <h3 className="text-2xl font-bold mb-3">Digital Minimalism 2.0</h3>
                        <p className="text-gray-600 leading-relaxed">
                            A ruthless system for auditing your digital life, eliminating algorithmic dopamine loops,
                            and reclaiming your attention.
                        </p>
                    </div>
                    <div className="bg-white p-10 hover:bg-muted transition-colors group">
                        <span className="text-primary font-serif italic text-2xl mb-6 block">03</span>
                        <h3 className="text-2xl font-bold mb-3">The Flow State Engine</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Neurological triggers and biochemical protocols to induce the flow state on command,
                            regardless of external chaos.
                        </p>
                    </div>
                    <div className="bg-white p-10 hover:bg-background transition-colors group">
                        <span className="text-primary font-serif italic text-2xl mb-6 block">04</span>
                        <h3 className="text-2xl font-bold mb-3">Sustainable Performance</h3>
                        <p className="text-gray-600 leading-relaxed">
                            How to maintain peak cognitive output for years, not days, through strategic rest and
                            neurological recovery.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
