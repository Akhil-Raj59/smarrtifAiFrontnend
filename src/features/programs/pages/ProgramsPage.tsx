import { ProgramsHero} from "../components/programs-hero"
import { AvailablePrograms } from "../components/available-programs";
import { LearningDuration } from "../components/learning-duration";
import { ProgramsCTA } from "../components/programs-cta";

export const ProgramsPage = () => {
  return (
    <div className="bg-white">
      <ProgramsHero />
      <AvailablePrograms />
      {/* <LearningDuration /> */}
      <ProgramsCTA />
    </div>
  );
};
