import type { FaqItem } from "@/lib/schema";

export type ServiceItem = {
  title: string;
  text: string;
  href: string;
};

export type RouteItem = {
  id: string;
  from: string;
  to: string;
  note: string;
  href: string;
  tone: "saffron" | "teal" | "indigo" | "rose" | "stone" | "amber" | "emerald";
};

export const services: ServiceItem[] = [
  {
    title: "Indore airport pickup & drop",
    text: "Pickup and drop at Devi Ahilyabai Holkar Airport in Indore for travellers going to or leaving Ujjain. Early and late flights, 24/7.",
    href: "/indore-airport-taxi",
  },
  {
    title: "Ujjain railway station pickup",
    text: "On-time pickup from Ujjain railway station for hotels, Mahakaleshwar and the rest of the city.",
    href: "/#contact",
  },
  {
    title: "Local Ujjain city taxi",
    text: "City rides with clean cars and polite drivers. Share the pickup and drop and we will confirm on a call or WhatsApp.",
    href: "/#contact",
  },
  {
    title: "Mahakaleshwar darshan / Ujjain darshan",
    text: "Taxi for Mahakaleshwar and other Ujjain darshan visits, including pickup from the railway station or Indore airport.",
    href: "/mahakal-darshan-taxi",
  },
  {
    title: "Outstation trips",
    text: "Trips from Ujjain to Indore, Omkareshwar, Maheshwar, Mandu, Dewas and Baglamukhi (Nalkheda).",
    href: "/outstation-taxi-ujjain",
  },
  {
    title: "One-way taxi",
    text: "One-way taxi from Ujjain when you do not need the cab to wait for the return.",
    href: "/outstation-taxi-ujjain",
  },
  {
    title: "Corporate & group booking",
    text: "Flexible timings for office travel, events and family or group trips. Tell us how many people are travelling.",
    href: "/#contact",
  },
];

export const routes: RouteItem[] = [
  {
    id: "indore-airport",
    from: "Indore Airport",
    to: "Ujjain",
    note: "Devi Ahilyabai Holkar Airport pickup and drop",
    href: "/indore-airport-taxi",
    tone: "teal",
  },
  {
    id: "indore-city",
    from: "Ujjain",
    to: "Indore",
    note: "Both directions, city or airport",
    href: "/ujjain-to-indore-taxi",
    tone: "indigo",
  },
  {
    id: "omkareshwar",
    from: "Ujjain",
    to: "Omkareshwar",
    note: "Day trips and one-way taxi",
    href: "/ujjain-to-omkareshwar-taxi",
    tone: "saffron",
  },
  {
    id: "maheshwar",
    from: "Ujjain",
    to: "Maheshwar",
    note: "Outstation trip from Ujjain",
    href: "/outstation-taxi-ujjain",
    tone: "rose",
  },
  {
    id: "mandu",
    from: "Ujjain",
    to: "Mandu",
    note: "Outstation trip from Ujjain",
    href: "/outstation-taxi-ujjain",
    tone: "amber",
  },
  {
    id: "dewas",
    from: "Ujjain",
    to: "Dewas",
    note: "Outstation trip from Ujjain",
    href: "/outstation-taxi-ujjain",
    tone: "emerald",
  },
  {
    id: "baglamukhi",
    from: "Ujjain",
    to: "Baglamukhi (Nalkheda)",
    note: "Outstation trip from Ujjain",
    href: "/outstation-taxi-ujjain",
    tone: "stone",
  },
];

export const homeFaqs: FaqItem[] = [
  {
    question: "What is the Ujjain taxi number?",
    answer:
      "Call or WhatsApp +91 70246 01594. The brand is Car Taxi Service Ujjain. The Google Business Profile listing is ujjain darshan, at Mahakal Marg, Chourha, Ujjain, Madhya Pradesh 456006. Service is 24/7.",
  },
  {
    question: "Which airport do you pick up from?",
    answer:
      "Devi Ahilyabai Holkar Airport in Indore. Ujjain does not have a commercial airport. Airport pickup and drop means Indore airport to or from Ujjain.",
  },
  {
    question: "Which trips can I book?",
    answer:
      "Indore airport pickup and drop, Ujjain railway station pickup, local Ujjain city taxi, Mahakaleshwar darshan and Ujjain darshan, outstation trips, one-way taxi, and corporate and group booking. Routes include Indore, Omkareshwar, Maheshwar, Mandu, Dewas and Baglamukhi (Nalkheda).",
  },
  {
    question: "How much is the fare?",
    answer:
      "Call for best rate. Share your pickup, drop, date and time on a call, on WhatsApp, or in the booking form. We confirm the rate before you travel. Fares are not listed on this site.",
  },
];
