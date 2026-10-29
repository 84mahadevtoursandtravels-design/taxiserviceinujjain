import LandingView from "@/components/landing/LandingView";
import { omkareshwarLanding } from "@/lib/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: omkareshwarLanding.title,
  description: omkareshwarLanding.description,
  path: omkareshwarLanding.path,
});

export default function Page() {
  return <LandingView page={omkareshwarLanding} />;
}
