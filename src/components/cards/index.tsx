import { Link } from "@tanstack/react-router"

type BookCardProps = {
    id: string
    title: string
    description: string
    price: string
    image: string
    alt: string
}

export function BookCard({ id, title, description, price, image, alt }: BookCardProps) {
    return (
        <div className="group">
            <Link to="/books/$book_id" params={{ book_id: id }} className="block cursor-pointer">
                <div className="relative bg-stone-50 aspect-3/4 mb-6 overflow-hidden flex items-center justify-center p-8">
                    <img
                        src={image}
                        alt={alt}
                        className="w-3/4 shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                </div>

                <h3 className="text-xl font-serif font-bold text-primary mb-1">{title}</h3>

                <p className="text-stone-500 text-sm mb-3">{description}</p>
            </Link>

            <div className="flex items-center justify-between">
                <span className="font-bold text-primary">{price}</span>

                {/* Buy Button → Checkout */}
                {/* <Link
                    to="/checkout/$book_id"
                    params={{ book_id: id }}
                    className="text-sm font-semibold underline decoration-stone-300 underline-offset-4 hover:decoration-primary transition-all"
                >
                    Buy Now
                </Link> */}
            </div>
        </div>
    )
}
