import { createFileRoute } from "@tanstack/react-router"
import Hero from "./-components/sections/hero"
import Feature from "./-components/sections/feature"
import AboutAuthor from "./-components/sections/about-author"
import EssentialReading from "./-components/sections/essential-reading"
import Testimonials from "./-components/sections/testimonials"
import GetStartedCta from "./-components/sections/get-started-cta"

export const Route = createFileRoute("/_main/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <main className="flex-1 min-h-dvh pt-16">
            <Hero />
            <Feature />
            <AboutAuthor />
            <EssentialReading />
            <Testimonials />
            <GetStartedCta />
        </main>
    )
}
