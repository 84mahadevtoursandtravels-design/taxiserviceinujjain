import LandingView from "@/components/landing/LandingView";
import { hindiLanding } from "@/lib/landings";
import { HOME_LANGUAGES, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: hindiLanding.title,
  description: hindiLanding.description,
  path: hindiLanding.path,
  locale: "hi_IN",
  absoluteTitle: true,
  languages: HOME_LANGUAGES,
});

export default function Page() {
  return <LandingView page={hindiLanding} />;
}
