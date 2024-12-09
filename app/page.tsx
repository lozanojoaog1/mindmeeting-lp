import { HeroSection } from '@/components/sections/hero-section';
import { HowItWorks } from '@/components/sections/how-it-works';
import { UseCases } from '@/components/sections/use-cases';
import { Features } from '@/components/sections/features';
import { IntegrationsSection } from '@/components/sections/integrations';
import { ROICalculator } from '@/components/sections/roi-calculator';
import { FAQ } from '@/components/sections/faq';
import { Pricing } from '@/components/sections/pricing';
import { SectionWrapper } from '@/components/ui/section-wrapper';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <SectionWrapper>
        <HeroSection />
      </SectionWrapper>
      <div className="space-y-8 sm:space-y-12 md:space-y-16">
        <SectionWrapper>
          <HowItWorks />
        </SectionWrapper>
        <SectionWrapper>
          <UseCases />
        </SectionWrapper>
        <SectionWrapper>
          <Features />
        </SectionWrapper>
        <SectionWrapper>
          <IntegrationsSection />
        </SectionWrapper>
        <SectionWrapper>
          <ROICalculator />
        </SectionWrapper>
        <SectionWrapper>
          <FAQ />
        </SectionWrapper>
        <SectionWrapper showScroll={false}>
          <Pricing />
        </SectionWrapper>
      </div>
    </main>
  );
}
