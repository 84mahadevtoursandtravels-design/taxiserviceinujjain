import LandingView from "@/components/landing/LandingView";
import { indoreLanding } from "@/lib/landings";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: indoreLanding.title,
  description: indoreLanding.description,
  path: indoreLanding.path,
});

export default function Page() {
  return <LandingView page={indoreLanding} />;
}
