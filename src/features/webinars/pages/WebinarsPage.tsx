import { WebinarsHero } from "../components/WebinarsHero";
import { WebinarStats } from "../components/WebinarStats";
import { UpcomingWebinars } from "../components/UpcomingWebinars";
import { PastWebinars } from "../components/PastWebinars";
import { WebinarNewsletter } from "../components/WebinarNewsletter";

export const WebinarsPage = () => {
  return (
    <div className="bg-white">
      <WebinarsHero />
      <WebinarStats />
      <UpcomingWebinars />
      <PastWebinars />
      <WebinarNewsletter />
    </div>
  );
};
