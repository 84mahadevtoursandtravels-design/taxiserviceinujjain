import LandingView from "@/components/landing/LandingView";
import { outstationLanding } from "@/lib/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: outstationLanding.title,
  description: outstationLanding.description,
  path: outstationLanding.path,
});

export default function Page() {
  return <LandingView page={outstationLanding} />;
}
