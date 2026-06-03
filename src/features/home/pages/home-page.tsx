import { Hero } from "../components/hero";
import { FreeTools } from "../components/free-tools";
import { CorporateClients } from "../components/corporate-clients";
import { About } from "../components/about";
import { Workflow } from "../components/workflow";
import { Testimonials } from "../components/testimonials";
import { MarketInsights } from "../components/market-insights";
import { ProgramsGrid } from "../components/programs-grid";
import { CorporateTraining } from "../components/corporate-training";
import { ProductDevelopment } from "../components/product-development";
import { CareerServices } from "../components/career-services";
import { CareerPackage } from "../components/career-package";
import { CareerFeatures } from "../components/career-features";
import { FinalCTA } from "../components/final-cta";

export const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-[var(--brand-red)]/5 via-[var(--brand-orange)]/3 to-white/90">
      <Hero />
      <FreeTools />
      <CorporateClients />
      <About />
      <Workflow />
      <Testimonials />
      <MarketInsights />
      <ProgramsGrid />
      <CorporateTraining />
      <ProductDevelopment />
      <CareerServices />
      <CareerPackage />
      <CareerFeatures />
      <FinalCTA />
    </div>
  );
};
