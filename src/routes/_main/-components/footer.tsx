export default function Footer() {
    return (
        <footer className="bg-white pt-20 pb-10 px-6 lg:px-12 border-t border-stone-200">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex items-center justify-center size-8 bg-primary text-white rounded-sm">
                                <span className="font-serif font-bold">A</span>
                            </div>
                            <span className="font-serif font-bold text-xl tracking-tight">Alex Rivers</span>
                        </div>
                        <p className="text-stone-500 text-sm leading-relaxed max-w-sm">
                            Distilling complex psychology into elegant systems for the modern intellectual. Based in New
                            York, read globally.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-6">Books</h4>
                        <ul className="space-y-4 text-sm text-stone-600">
                            <li>
                                <a className="hover:text-primary transition-colors" href="#">
                                    The Focus Blueprint
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-primary transition-colors" href="#">
                                    Deep Work Habits
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-primary transition-colors" href="#">
                                    The Mindful Leader
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-primary transition-colors" href="#">
                                    Bundles
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-widest text-primary mb-6">Connect</h4>
                        <ul className="space-y-4 text-sm text-stone-600">
                            <li>
                                <a className="hover:text-primary transition-colors" href="#">
                                    Twitter / X
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-primary transition-colors" href="#">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-primary transition-colors" href="#">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-primary transition-colors" href="#">
                                    Newsletter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
                    <p>© 2024 Alex Rivers Publishing. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a className="hover:text-stone-600" href="#">
                            Privacy Policy
                        </a>
                        <a className="hover:text-stone-600" href="#">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
