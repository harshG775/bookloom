import { createFileRoute } from "@tanstack/react-router"
import HeroSection from "./-components/sections/hero-section"
import ChaptersSection from "./-components/sections/chapters-section"
import ReviewsSection from "./-components/sections/reviews-section"
import SpecsSection from "./-components/sections/specs-section"
import CtaSection from "./-components/sections/cta-section"

export const Route = createFileRoute("/_main/books/$book_id/")({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <main className="flex-1 min-h-dvh pt-16">
            <HeroSection />             {/* Hook + Primary CTA */}
            <ChaptersSection />         {/* What's Inside */}
            <ReviewsSection />          {/* Social Proof */}
            <SpecsSection />            {/* Product Details */}
            {/* <FaqSection /> */}      {/* !TODO - Objection Handling */}
            <CtaSection />              {/* Final Purchase Push */}
            {/* <RelatedBooks /> */}    {/* !TODO - Cross-sell */}
        </main>
    )
}
