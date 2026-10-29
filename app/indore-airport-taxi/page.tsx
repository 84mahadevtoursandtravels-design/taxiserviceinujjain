import LandingView from "@/components/landing/LandingView";
import { airportLanding } from "@/lib/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: airportLanding.title,
  description: airportLanding.description,
  path: airportLanding.path,
});

export default function Page() {
  return <LandingView page={airportLanding} />;
}
