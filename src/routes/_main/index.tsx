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
            <Hero />                            {/* ✅ 1. Hook & Primary CTA */}
            {/* <SocialProofLogos/> !TODO*/}    {/* ✅ 2. Trust Validation */}
            <Feature />                         {/* ✅ 3. Value Proposition */}
            <AboutAuthor />                     {/* ✅ 4. Connection & Authority */}
            <Testimonials />                    {/* ✅ 5. Social Proof */}
            {/* <FAQ /> !TODO*/}                {/* ✅ 6. Objection Handling */}
            <GetStartedCta />                   {/* ✅ 7. Final Purchase Push */}
            <EssentialReading />                {/* ✅ 8. Cross-sell Catalog */}
            {/* <Newsletter/> !TODO*/}          {/* ✅ 9. Lead Capture */}
        </main>
    )
}
