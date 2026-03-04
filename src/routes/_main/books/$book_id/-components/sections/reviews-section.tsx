import { Star } from "lucide-react"

export default function ReviewsSection() {
    return (
        <section className="py-24 bg-white text-center">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="flex justify-center gap-1 text-primary mb-8">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-5" />
                    ))}
                </div>

                <blockquote className="font-serif text-3xl md:text-4xl italic font-bold text-charcoal leading-snug mb-10">
                    "This isn't just another productivity book. It's a fundamental rewire of how you approach work in
                    the 21st century. It changed everything for my team."
                </blockquote>
                <div className="flex flex-col items-center gap-4">
                    <div
                        className="w-20 h-20 rounded-full bg-paper border-2 border-primary/20"
                        data-alt="Portrait of a high-profile business leader"
                        style={{
                            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDlZMglbEya5h6DRCc2hzPAQ9_MqoWg6RtgkffZg1tmCmnfH1A3G_ArfBIApRbqMTqzM6HPHKogof7RK0xZs_aDSBaRHcxblDwerBmrQiAhfP-HwwP57dM_tLayRdU1dKj55bXuO3aVJgSWHku6gbfmHptkockuUN8HT7vElExp4sNPMpaxi8bktDBfD40-Ro4TWOpEzSNylJiFZD4Xb_1svN4tu-8eb6nVlfXhpGlE7Yx8J2CGhheNt4toPILwWg0J1zvYwYWSZxpI");`,
                        }}
                    ></div>
                    <div>
                        <p className="font-bold text-lg">Dr. Elena Rodriguez</p>
                        <p className="text-gray-500 text-sm uppercase tracking-widest">CTO at Stellar Systems</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
