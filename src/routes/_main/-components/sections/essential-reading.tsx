import { ArrowRight } from "lucide-react"
import { BookCard } from "@/components/cards"

const books = [
    {
        id: "1",
        title: "Focus Mastery",
        description: "Reclaim your attention span.",
        price: "$19.99",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuU67MHpaGaWJdTNSH1Xrm9WfYud7cWx4lxbmviigWeoKNIO-nOGLMEs5UnP0JEn-7yOUMD-OD6HN5-nsRItvu6uINH4zHUB63rdC_pKx09Ey4jh7bn9WZYxNE0sZ-DykOob_5Y5NBw777rvTy1Be4KZMDzh5tY7i5IkZTtlonx3rjbOf7RJ1bCvXV8P8qoiPTkN0lTyM8lsnLuSbcf5CTerloFskJdMV3kXNuPzZI8J1OGTtGZTduvVx1Ge9nHKB0XrrBNAhvtM5Y",

        alt: "Focus Mastery Book Cover",
    },
    {
        id: "2",
        title: "Deep Work Habits",
        description: "Build a fortress of solitude.",
        price: "$24.99",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZI36Fikp0Cm4EaY6d_99wa_P67JRTo95wLxYn7AzR2eJDOilyq_uPKD66lFwJdkHeu1zqUUEQOqK2ICL1VK04KgKcfGlYCxAX331pDwKsIkdDQz08seKykO9XL_4_Pt_MMoHXEzy9RBBNPdHiDEq6ybmNTGTh7NyyctltF2PZyw7GjutaZuu2H7M1qk2uB9FxqYevk6dWqwXiBjf7OgOhnSuNMdaIYtxKMxEzef3u-bUwg2Forhu3WKSlvhmYOzrfFQfYgUrIQTWs",

        alt: "Deep Work Habits Book Cover",
    },
    {
        id: "3",
        title: "The Mindful Leader",
        description: "Empathy in high-pressure.",
        price: "$29.99",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUba9N4RfHjbGSQPB60VgamFs1UT8acnJA-nhUc6zjgmUTHMGgg_LFj-6P_pA91eAt5QIEbRlnBHIzyKs-qsURPWZStt45XKBxENWQQnZTOCobBXN-SV2rw2btHKKx6OGmFj1pdvZHwefgGbmVCFPoyUzl3jRZvEacknOQqQj_C4nQhPKwcXRFYPLzN5bZJWXGRdB90LbEn-YNoO6cl-uAFMpz6RZjVWd1wA0atEMzc-2Bj0XzP7gKOZHkloBeF2nyUqbsxovayV3f",

        alt: "The Mindful Leader Book Cover",
    },
]

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
                        href="#"
                        className="group flex items-center gap-1 text-sm font-bold text-stone-800 hover:text-stone-500 transition-colors"
                    >
                        View Full Catalogue
                        <ArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {books.map((book) => (
                        <BookCard key={book.title} {...book} />
                    ))}
                </div>
            </div>
        </section>
    )
}
