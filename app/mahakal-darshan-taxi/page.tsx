import LandingView from "@/components/landing/LandingView";
import { mahakalLanding } from "@/lib/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: mahakalLanding.title,
  description: mahakalLanding.description,
  path: mahakalLanding.path,
});

export default function Page() {
  return <LandingView page={mahakalLanding} />;
}
