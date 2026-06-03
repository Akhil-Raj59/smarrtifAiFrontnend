import { TeamHero } from "../components/TeamHero";
import { TeamStats } from "../components/TeamStats";
import { Leadership } from "../components/Leadership";
import { TeamDepartments } from "../components/TeamDepartments";
import { TeamCTA } from "../components/TeamCTA";

export const TeamPage = () => {
  return (
    <div className="bg-white">
      <TeamHero />
      <TeamStats />
      <Leadership />
      <TeamDepartments />
      <TeamCTA />
    </div>
  );
};
