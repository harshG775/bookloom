export default function Testimonials() {
    return (
        <section className="py-24 px-6 lg:px-12 bg-stone-900 text-stone-200">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-serif font-medium text-white mb-6">Impact Stories</h2>
                    <div className="w-20 h-[1px] bg-stone-700 mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-stone-800/50 p-8 rounded-sm relative border border-stone-800">
                        <span className="absolute top-4 left-6 font-serif text-6xl text-stone-700 leading-none">“</span>
                        <p className="relative z-10 text-stone-300 text-lg leading-relaxed mb-8 pt-6">
                            I've read dozens of productivity books, but 'The Focus Blueprint' is the only one that
                            actually stuck. It treats focus as an asset className, not a chore.
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
                        <span className="absolute top-4 left-6 font-serif text-6xl text-stone-700 leading-none">“</span>
                        <p className="relative z-10 text-stone-300 text-lg leading-relaxed mb-8 pt-6">
                            Straight to the point. No fluff. Just actionable advice that you can implement the moment
                            you put the book down. A modern classic.
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
                                <p className="text-xs uppercase tracking-wider text-stone-500">Senior Eng, Stripe</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-stone-800/50 p-8 rounded-sm relative border border-stone-800">
                        <span className="absolute top-4 left-6 font-serif text-6xl text-stone-700 leading-none">“</span>
                        <p className="relative z-10 text-stone-300 text-lg leading-relaxed mb-8 pt-6">
                            The chapter on 'Deep Work Habits' completely transformed how I manage my mornings. I have
                            reclaimed 20 hours a week easily.
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
        </section>
    )
}
