import { CareersHero } from "../components/CareersHero";
import { CareerStats } from "../components/CareerStats";
import { CareerValues } from "../components/CareerValues";
import { CareerBenefits } from "../components/CareerBenefits";
import { OpenPositions } from "../components/OpenPositions";
import { CareersCTA } from "../components/CareersCTA";

export const CareersPage = () => {
  return (
    <div className="bg-white">
      <CareersHero />
      <CareerStats />
      <CareerValues />
      <CareerBenefits />
      <OpenPositions />
      <CareersCTA />
    </div>
  );
};
