import { Download, FileText, Globe, Menu } from "lucide-react"

export default function SpecsSection() {
    const specs = [
        { icon: <FileText size={24} />, label: "Formats", value: "PDF, ePub, Mobi" },
        { icon: <Menu size={24} />, label: "Length", value: "240 Pages" },
        { icon: <Download size={24} />, label: "Delivery", value: "Instant Access" },
        { icon: <Globe size={24} />, label: "Language", value: "English" },
    ]

    return (
        <section className="py-16 border-t">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
                {specs.map((s, i) => (
                    <div key={i} className="flex flex-col items-center text-center gap-3">
                        <div className="text-primary">{s.icon}</div>
                        <p className="font-bold text-sm uppercase tracking-widest">{s.label}</p>
                        <p className="text-gray-500 text-sm">{s.value}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}