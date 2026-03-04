export default function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-20 pb-32">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col gap-8 text-center lg:text-left">
                    <div className="inline-flex items-center self-center lg:self-start gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        New Release: 2024 Edition
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl font-black leading-[1.1] text-charcoal">
                        The Focus Blueprint: A masterclass in <span className="italic text-primary">deep work.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-charcoal/60 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        The exact system used by high-performers to reclaim 4+ hours of focus every day.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="bg-primary text-white px-8 py-5 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl shadow-primary/25">
                            Get the Blueprint — $29
                        </button>
                        <button className="bg-white border border-charcoal/10 text-charcoal px-8 py-5 rounded-xl font-bold text-lg hover:bg-charcoal/5 transition-colors">
                            Read Free Sample
                        </button>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-charcoal/40 font-medium">
                        <span className="flex -space-x-2">
                            <div
                                className="w-8 h-8 rounded-full border-2 border-paper bg-gray-200"
                                data-alt="User avatar 1"
                                style={{
                                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_aTxXuPJD2bPVut9wKRQxL_AiKcnjb64eo-Grg6dS6L39hEKvF5yjdt6ibMce291rcxDgXYhzYypld2loIhNykECq6zO88B7CywWp4ieBNEag6_QGvNKRirQ4eY62sIZ2qGruVTxucsZfqW9--nWtvQB6lty0mr52r8a27vRTMbqMKvLIkMCI6Ml3Tbc4R0a9oXTyhpgbB8gwQorkTfYWtn-dVV8LM8DnApHanwDCDmq5XRFV83g9AqUMXjVcz6-Bq3Rir7q0FKOZ");`,
                                }}
                            ></div>
                            <div
                                className="w-8 h-8 rounded-full border-2 border-paper bg-gray-300"
                                data-alt="User avatar 2"
                                style={{
                                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBq9U0acqDNBnwiHmrTl-8lXLqgiDK-2YqzTssWbXHC2kTZyZSr-ewo5W8ch8p4ueWy3gLdCznFudyVqZy8hngDNrXyFpoVy1pTkytrS4eENisPQ8anjonq3bYXNULB_upRAFf1Yx9iPYf5fSB6E3OpxmSLU53iO9aPRo2sgIRwpFhM-cGxIKxJdWXmNI_HEi1VRu6Gu46pGIphvIS2fh8y_IuXVuQh4ghhox3cBv3eGMUjgV_JIFiCYEV1mXI1jfuumLv78QnznSRC");`,
                                }}
                            ></div>
                            <div
                                className="w-8 h-8 rounded-full border-2 border-paper bg-gray-400"
                                data-alt="User avatar 3"
                                style={{
                                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBgckXl77QLeKi4mjgHLCbFTw_su8ZG4b2HeGfKPxvzBaKYaSR-d1pDgd6LXkyh2HP-yQ0U5asmn5V5GEJCwoOCa17f3qPb-zsjORdq7G5P_HB0N0qXLFJ39_SQxqMsQjH2nRy3KHdCE2QD5v2RUQ-ugDX5BO-_QhU97-IQHXnVH5N23d7xjpHhxHKMT1ycSa4c4Y6LErhXwlgZfj5BTYmihYYj6bi_Jy0vShSW5DjNxYoHwaXPbSsTP_o_R_xpfs-wHxEmWX5CLAkq");`,
                                }}
                            ></div>
                        </span>
                        Joined by 12,000+ focused readers
                    </div>
                </div>
                <div className="relative flex justify-center">
                    <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl scale-75"></div>
                    <div className="relative group cursor-pointer">
                        <div
                            className="w-[320px] md:w-[420px] aspect-[3/4] bg-primary rounded-r-lg book-shadow transform -rotate-3 transition-transform group-hover:rotate-0 duration-700 overflow-hidden flex flex-col items-center justify-center text-white p-12 text-center"
                            data-alt="Professional 3D book cover for The Focus Blueprint showing a minimalist mountain peak"
                            style={{
                                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwnBdvGh_S5gslSTUEGHq1uTNBYbJmZafK9bqZVaD3eEa4IGPYVf4uh4b3J6nL5GBxDh__0EFD3QgG8eZix3wOS_gLRxytaxlnPgo53WihKA8IMDsVUdlrtRmycnHN_IeSER6OGTS_chV5uhhsTPVq4RQZwm4e3h97MxUvv7IC1GjbkooDxgmTh8inl-M6OPImiTy1ufTPK9f8CP_kApzU7TsUAEOy62K67PxFz35po90QLtGTZf2it0evLJ_2nJtNO-Skaiknlp5c");`,
                            }}
                        >
                            <div className="border-4 border-white/20 p-8 flex flex-col items-center gap-6">
                                <span className="material-symbols-outlined text-6xl opacity-50">adjust</span>
                                <h3 className="font-serif text-3xl font-bold">The Focus Blueprint</h3>
                                <p className="text-sm tracking-widest uppercase opacity-70">
                                    A Masterclass in Deep Work
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
