import { createFileRoute } from "@tanstack/react-router"
import { HeroSection } from "./-components/sections/hero"
import { FeaturedbooksSection } from "./-components/sections/featured-books"
import { HowItWorksSection } from "./-components/sections/how-it-works"
import { WhyBookloomSection } from "./-components/sections/why-book-loom"
import { ReadingExperienceSection } from "./-components/sections/reading-experience"
import { FinalCTASection } from "./-components/sections/final-cta"
import { FooterSection } from "./-components/sections/footer"

export const Route = createFileRoute("/")({
    component: HomePage,
})

function HomePage() {
    return (
        <div className="flex-1">
            <main>
                <HeroSection />
                <FeaturedbooksSection />
                <HowItWorksSection />
                <WhyBookloomSection />
                <ReadingExperienceSection />
                <FinalCTASection />
            </main>
            <FooterSection />
        </div>
    )
}
