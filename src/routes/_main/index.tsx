import { createFileRoute } from "@tanstack/react-router"
import Header from "./-components/header"
import Hero from "./-components/sections/hero"
import { Feature } from "./-components/sections/feature"

export const Route = createFileRoute("/_main/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <>
            <Header />

            <main>
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
            </main>

            <footer>
                <section>Footer Content</section>
            </footer>
        </>
    )
}
