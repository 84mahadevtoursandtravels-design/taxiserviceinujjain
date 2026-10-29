import type { FaqItem } from "@/lib/schema";

export type LandingLink = { href: string; label: string; text: string };

export type LandingContent = {
  path: `/${string}`;
  locale: "en" | "hi";
  title: string;
  absoluteTitle?: boolean;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string[];
  points: { title: string; text: string }[];
  steps: string[];
  faqs: FaqItem[];
  defaults: { pickup: string; drop: string };
  source: string;
  related: LandingLink[];
};

const sharedRelated: LandingLink[] = [
  {
    href: "/indore-airport-taxi",
    label: "Indore airport taxi",
    text: "Pickup and drop at Devi Ahilyabai Holkar Airport, Indore.",
  },
  {
    href: "/ujjain-to-indore-taxi",
    label: "Ujjain to Indore taxi",
    text: "City trips both ways between Ujjain and Indore.",
  },
  {
    href: "/ujjain-to-omkareshwar-taxi",
    label: "Ujjain to Omkareshwar",
    text: "Day trips and one-way taxi to Omkareshwar.",
  },
  {
    href: "/mahakal-darshan-taxi",
    label: "Mahakal darshan taxi",
    text: "Mahakaleshwar and Ujjain darshan by taxi.",
  },
  {
    href: "/outstation-taxi-ujjain",
    label: "Outstation taxi",
    text: "Maheshwar, Mandu, Dewas, Baglamukhi and one-way trips.",
  },
  {
    href: "/hi",
    label: "उज्जैन टैक्सी सर्विस",
    text: "हिंदी में सेवा, फोन नंबर और बुकिंग।",
  },
];

export const airportLanding: LandingContent = {
  path: "/indore-airport-taxi",
  locale: "en",
  title: "Indore Airport to Ujjain Taxi",
  description:
    "Pickup and drop at Devi Ahilyabai Holkar Airport, Indore, for Ujjain. 24/7 on-time taxi, clean cars and polite drivers. Call or WhatsApp +91 70246 01594.",
  h1: "Indore Airport to Ujjain Taxi",
  eyebrow: "24/7 airport pickup & drop",
  intro: [
    "Book a car taxi between Devi Ahilyabai Holkar Airport in Indore and Ujjain. We pick up arriving passengers and drop departing passengers, including early morning and late-night flights.",
    "Ujjain does not have a commercial airport. When you search for an airport taxi for Ujjain, the airport is Indore. Tell us the terminal plan, your flight time and the drop in Ujjain — a hotel, the railway station or Mahakaleshwar.",
  ],
  points: [
    {
      title: "On-time airport pickups",
      text: "Share the flight time on the call or on WhatsApp so the cab is planned around your landing or departure.",
    },
    {
      title: "Straight to Ujjain",
      text: "Drop at your hotel, guesthouse, Ujjain railway station or Mahakaleshwar. Pickup from those places back to Indore airport as well.",
    },
    {
      title: "Clean cars, polite drivers",
      text: "The same 24/7 car taxi used for city rides and darshan. Quick booking and a fast reply on WhatsApp.",
    },
    {
      title: "Call for best rate",
      text: "Fares are not listed here. Call or send pickup, drop and time and we will confirm the rate before you book.",
    },
  ],
  steps: [
    "Call +91 70246 01594 or send WhatsApp with your flight time.",
    "Tell us Indore airport and the Ujjain drop (or the reverse).",
    "We confirm the rate. Call for best rate.",
    "The driver picks you up. Service is 24/7.",
  ],
  faqs: [
    {
      question: "Is there an airport in Ujjain?",
      answer:
        "No. Ujjain does not have a commercial airport. Airport taxi for Ujjain means Devi Ahilyabai Holkar Airport in Indore, for pickup and drop.",
    },
    {
      question: "Can you collect me after a late flight?",
      answer:
        "Yes. The taxi service runs 24/7. Send the flight time when you call or WhatsApp so the pickup can be planned.",
    },
    {
      question: "Can I go from Indore airport to Mahakaleshwar?",
      answer:
        "Yes. Say so in the booking and we will drop you at Mahakaleshwar or at your hotel, then you can book darshan time as you need. We do not sell temple tickets.",
    },
    {
      question: "How do I know the fare?",
      answer:
        "Call for best rate. Share pickup, drop, date and time. We confirm the rate on the call or WhatsApp before the trip. No fare is printed on this page.",
    },
  ],
  defaults: {
    pickup: "Indore Airport (Devi Ahilyabai Holkar)",
    drop: "Ujjain",
  },
  source: "Indore Airport to Ujjain Taxi",
  related: sharedRelated.filter((item) => item.href !== "/indore-airport-taxi"),
};

export const omkareshwarLanding: LandingContent = {
  path: "/ujjain-to-omkareshwar-taxi",
  locale: "en",
  title: "Ujjain to Omkareshwar Taxi",
  description:
    "Book a Ujjain to Omkareshwar taxi with on-time pickup. Day trips and one-way cabs. Call for best rate on +91 70246 01594.",
  h1: "Ujjain to Omkareshwar Taxi",
  eyebrow: "Outstation cab from Ujjain",
  intro: [
    "Car taxi from Ujjain to Omkareshwar for a day trip or a one-way drop. Clean cars, polite drivers and on-time pickup from your hotel, Ujjain railway station or another point in the city.",
    "The same booking can add Maheshwar, Mandu, Dewas or Baglamukhi (Nalkheda) if you want more than one stop. Tell us the plan, the date and the time. Call for best rate.",
  ],
  points: [
    {
      title: "Day trip or one-way",
      text: "Ask for a return wait or a one-way taxi from Ujjain. We confirm which one you need before quoting.",
    },
    {
      title: "Pickup inside Ujjain",
      text: "Hotel, guesthouse, Mahakaleshwar area or Ujjain railway station. Indore airport pickup can be added if you are landing first.",
    },
    {
      title: "Other stops",
      text: "Omkareshwar pairs with Maheshwar and Mandu on many family trips. Mention every stop in the form.",
    },
    {
      title: "24/7 booking",
      text: "Call or WhatsApp +91 70246 01594 any time. You get a fast reply with the rate.",
    },
  ],
  steps: [
    "Send pickup in Ujjain, drop at Omkareshwar, and the date and time.",
    "Say if you need the cab to wait for darshan or only a one-way drop.",
    "Add any other stop, such as Maheshwar or Mandu.",
    "We reply with the rate. Call for best rate.",
  ],
  faqs: [
    {
      question: "Do you run a taxi from Ujjain to Omkareshwar?",
      answer:
        "Yes. Outstation trips from Ujjain to Omkareshwar are available, including day trips and one-way taxi.",
    },
    {
      question: "Can the same cab add Maheshwar or Mandu?",
      answer:
        "Yes. Tell us the stops when you call or WhatsApp. We also go to Maheshwar, Mandu, Dewas, Baglamukhi (Nalkheda) and Indore.",
    },
    {
      question: "Can you start from Indore airport?",
      answer:
        "Yes. We can pick up at Devi Ahilyabai Holkar Airport in Indore and go to Ujjain, or plan Omkareshwar into the trip. Ujjain itself has no commercial airport.",
    },
    {
      question: "What is the fare to Omkareshwar?",
      answer:
        "Call for best rate. The fare depends on the pickup, whether the cab waits, and any extra stops. Nothing on this page is a fixed price.",
    },
  ],
  defaults: {
    pickup: "Ujjain",
    drop: "Omkareshwar",
  },
  source: "Ujjain to Omkareshwar Taxi",
  related: sharedRelated.filter((item) => item.href !== "/ujjain-to-omkareshwar-taxi"),
};

export const mahakalLanding: LandingContent = {
  path: "/mahakal-darshan-taxi",
  locale: "en",
  title: "Mahakal Darshan Taxi in Ujjain",
  description:
    "Taxi for Mahakaleshwar darshan and Ujjain temple visits. Railway station and Indore airport pickup, 24/7. Call or WhatsApp +91 70246 01594.",
  h1: "Mahakal Darshan Taxi in Ujjain",
  eyebrow: "Mahakaleshwar & Ujjain darshan",
  intro: [
    "Book a taxi for Mahakaleshwar darshan and Ujjain darshan. Local city rides for pilgrims and families, with clean cars, polite drivers and on-time pickups.",
    "We can start at your hotel, at Ujjain railway station, or at Devi Ahilyabai Holkar Airport in Indore and come straight to Ujjain. This is a taxi booking only. Temple tickets and passes are not sold here.",
  ],
  points: [
    {
      title: "Temple visits by taxi",
      text: "Use the cab for Mahakaleshwar and the rest of your Ujjain darshan plan. Tell us the order of stops.",
    },
    {
      title: "Railway station pickup",
      text: "Meet the driver at Ujjain railway station. Share your train time for an on-time pickup.",
    },
    {
      title: "Indore airport to Mahakal",
      text: "Land at Indore airport and go to your Ujjain hotel or towards Mahakaleshwar. Airport means Indore, not Ujjain.",
    },
    {
      title: "Family and group booking",
      text: "Corporate and group booking is available. Send the number of people with the pickup and time.",
    },
  ],
  steps: [
    "Call or WhatsApp your pickup and darshan plan.",
    "Add the date and time, and whether you are coming from the station or Indore airport.",
    "We confirm the rate. Call for best rate.",
    "The driver arrives for the local ride or the pickup.",
  ],
  faqs: [
    {
      question: "Can I book a taxi for Mahakaleshwar darshan?",
      answer:
        "Yes. Car Taxi Service Ujjain books local taxis for Mahakaleshwar darshan and Ujjain darshan.",
    },
    {
      question: "Do you pick up from the railway station or Indore airport?",
      answer:
        "Yes. Ujjain railway station pickup and Indore airport pickup and drop are both available, 24/7. The airport is Devi Ahilyabai Holkar Airport in Indore.",
    },
    {
      question: "Do you arrange darshan tickets?",
      answer:
        "No. We provide the taxi only. Book any temple ticket or pass yourself, and tell us when you want the cab.",
    },
    {
      question: "Can a group travel together?",
      answer:
        "Yes. Group booking is available. Call or WhatsApp with the number of people, the pickup and the plan. Call for best rate.",
    },
  ],
  defaults: {
    pickup: "Ujjain railway station",
    drop: "Mahakaleshwar",
  },
  source: "Mahakal Darshan Taxi",
  related: sharedRelated.filter((item) => item.href !== "/mahakal-darshan-taxi"),
};

export const indoreLanding: LandingContent = {
  path: "/ujjain-to-indore-taxi",
  locale: "en",
  title: "Ujjain to Indore Taxi",
  description:
    "Ujjain to Indore and Indore to Ujjain taxi, with Indore airport pickup and drop. Clean cars, polite drivers, 24/7. Call for best rate.",
  h1: "Ujjain to Indore Taxi",
  eyebrow: "Both directions · 24/7",
  intro: [
    "Taxi between Ujjain and Indore, in either direction. On-time pickup, clean cars and polite drivers for city drops, railway connections and airport transfers.",
    "Need only the airport? Use the Indore airport taxi page. This page covers Ujjain–Indore travel, and the airport is Devi Ahilyabai Holkar Airport in Indore. Ujjain does not have its own commercial airport.",
  ],
  points: [
    {
      title: "Ujjain to Indore",
      text: "Pickup anywhere in Ujjain, including the railway station and hotel areas, and drop in Indore.",
    },
    {
      title: "Indore to Ujjain",
      text: "Start in Indore city or at the airport and come to Ujjain for darshan, a hotel or the station.",
    },
    {
      title: "One-way or return",
      text: "Ask for a one-way taxi or a return. Corporate and group booking is available with flexible timings.",
    },
    {
      title: "Call for best rate",
      text: "Send pickup, drop, date and time. We reply on WhatsApp or you can call +91 70246 01594.",
    },
  ],
  steps: [
    "Choose the direction: Ujjain to Indore, or Indore to Ujjain.",
    "Add the exact pickup and drop, plus date and time.",
    "Mention Indore airport if the trip starts or ends there.",
    "We confirm the rate before you travel.",
  ],
  faqs: [
    {
      question: "Do you cover both Ujjain to Indore and Indore to Ujjain?",
      answer:
        "Yes. Both directions, including a drop or pickup at Indore airport (Devi Ahilyabai Holkar Airport).",
    },
    {
      question: "Is this page only for the airport?",
      answer:
        "No. Use it for Ujjain–Indore city trips as well. For a page focused on airport pickup and drop, open the Indore airport taxi page. There is no commercial airport in Ujjain.",
    },
    {
      question: "Can you pick me up at Ujjain railway station and go to Indore?",
      answer:
        "Yes. Railway station pickup is available. Share the train time with the drop in Indore.",
    },
    {
      question: "How is the fare decided?",
      answer:
        "Call for best rate. Tell us pickup, drop, date and time, and whether the cab is one-way. We confirm on the call or WhatsApp.",
    },
  ],
  defaults: {
    pickup: "Ujjain",
    drop: "Indore",
  },
  source: "Ujjain to Indore Taxi",
  related: sharedRelated.filter((item) => item.href !== "/ujjain-to-indore-taxi"),
};

export const outstationLanding: LandingContent = {
  path: "/outstation-taxi-ujjain",
  locale: "en",
  title: "Outstation Taxi from Ujjain",
  description:
    "One-way and outstation taxi from Ujjain to Omkareshwar, Maheshwar, Mandu, Dewas, Baglamukhi and Indore. 24/7. Call for best rate.",
  h1: "Outstation Taxi from Ujjain",
  eyebrow: "One-way and return trips",
  intro: [
    "Outstation taxi from Ujjain for weekends, holidays and family trips. Routes we run: Indore, Omkareshwar, Maheshwar, Mandu, Dewas and Baglamukhi (Nalkheda).",
    "One-way taxi is available when you do not need the driver to wait. Corporate and group booking uses the same 24/7 number. Clean cars, polite drivers, on-time pickups. Call for best rate.",
  ],
  points: [
    {
      title: "Omkareshwar, Maheshwar, Mandu",
      text: "Temple and town trips from Ujjain. Combine stops in one booking if you tell us the order.",
    },
    {
      title: "Dewas and Baglamukhi (Nalkheda)",
      text: "Both are regular outstation drops from Ujjain. Send the place name in the form.",
    },
    {
      title: "Indore and the airport",
      text: "Indore city and Devi Ahilyabai Holkar Airport are on the same service. Ujjain has no commercial airport.",
    },
    {
      title: "Flexible timings",
      text: "Weekends, holidays, early darshan and late returns. Call or WhatsApp any time.",
    },
  ],
  steps: [
    "Tell us the destination and every stop.",
    "Say one-way or return, and the date and time.",
    "Add the pickup in Ujjain, or Indore airport if you are landing there.",
    "We confirm the rate on WhatsApp or by phone.",
  ],
  faqs: [
    {
      question: "Which outstation routes do you run from Ujjain?",
      answer:
        "Indore, Omkareshwar, Maheshwar, Mandu, Dewas and Baglamukhi (Nalkheda). For other places, call and ask — do not assume a route that is not listed here.",
    },
    {
      question: "Do you offer a one-way taxi?",
      answer:
        "Yes. Ask for a one-way taxi from Ujjain when you book, or a return if you need the cab to stay.",
    },
    {
      question: "Can a company book for a group?",
      answer:
        "Yes. Corporate and group booking is available, with flexible timings. Send the number of people and the plan.",
    },
    {
      question: "Where are the prices?",
      answer:
        "Call for best rate. This site does not publish fares. Share pickup, drop, date and time for a rate on call or WhatsApp.",
    },
  ],
  defaults: {
    pickup: "Ujjain",
    drop: "Omkareshwar",
  },
  source: "Outstation Taxi from Ujjain",
  related: sharedRelated.filter((item) => item.href !== "/outstation-taxi-ujjain"),
};

export const hindiLanding: LandingContent = {
  path: "/hi",
  locale: "hi",
  title: "उज्जैन टैक्सी सर्विस | Car Taxi Service Ujjain",
  absoluteTitle: true,
  description:
    "उज्जैन में 24/7 कार टैक्सी। इंदौर एयरपोर्ट पिकअप, रेलवे स्टेशन, महाकाल दर्शन और आउटस्टेशन। कॉल या WhatsApp +91 70246 01594।",
  h1: "उज्जैन टैक्सी सर्विस",
  eyebrow: "24/7 कार टैक्सी · Ujjain",
  intro: [
    "उज्जैन में सुरक्षित, तेज़ और किफायती कार टैक्सी। लोकल शहर की सवारी, उज्जैन रेलवे स्टेशन पिकअप, महाकालेश्वर दर्शन और आउटस्टेशन यात्रा। साफ गाड़ियां, अच्छे ड्राइवर और समय पर पिकअप।",
    "एयरपोर्ट का मतलब इंदौर का देवी अहिल्याबाई होल्कर एयरपोर्ट है। उज्जैन में कमर्शियल एयरपोर्ट नहीं है। किराया यहाँ नहीं लिखा है। बेस्ट रेट के लिए कॉल करें: +91 70246 01594।",
  ],
  points: [
    {
      title: "इंदौर एयरपोर्ट पिकअप और ड्रॉप",
      text: "देवी अहिल्याबाई होल्कर एयरपोर्ट, इंदौर। सुबह और देर रात की फ्लाइट, 24/7।",
    },
    {
      title: "रेलवे स्टेशन और लोकल टैक्सी",
      text: "उज्जैन रेलवे स्टेशन से होटल या महाकालेश्वर तक। शहर के अंदर लोकल टैक्सी भी।",
    },
    {
      title: "महाकाल दर्शन",
      text: "महाकालेश्वर और उज्जैन दर्शन के लिए टैक्सी। मंदिर का टिकट हम नहीं बेचते, सिर्फ गाड़ी।",
    },
    {
      title: "आउटस्टेशन और वन-वे",
      text: "इंदौर, ओंकारेश्वर, माहेश्वर, मांडू, देवास और बागलामुखी (नालखेड़ा)। कॉर्पोरेट और ग्रुप बुकिंग भी।",
    },
  ],
  steps: [
    "कॉल या WhatsApp करें: +91 70246 01594।",
    "पिकअप, ड्रॉप, तारीख और समय भेजें।",
    "हम रेट बताएंगे। बेस्ट रेट के लिए कॉल करें।",
    "ड्राइवर बताए हुए समय पर पिकअप करेगा। सेवा 24/7 है।",
  ],
  faqs: [
    {
      question: "उज्जैन टैक्सी नंबर क्या है?",
      answer:
        "कॉल या WhatsApp +91 70246 01594। नाम: Car Taxi Service Ujjain। Google Business Profile पर लिस्टिंग का नाम ujjain darshan है। पता: Mahakal Marg, Chourha, Ujjain, Madhya Pradesh 456006। सेवा 24/7 है।",
    },
    {
      question: "क्या उज्जैन में एयरपोर्ट है?",
      answer:
        "नहीं। उज्जैन में कमर्शियल एयरपोर्ट नहीं है। एयरपोर्ट पिकअप और ड्रॉप इंदौर के देवी अहिल्याबाई होल्कर एयरपोर्ट से होता है।",
    },
    {
      question: "कौन सी सेवाएं मिलेंगी?",
      answer:
        "इंदौर एयरपोर्ट पिकअप और ड्रॉप, उज्जैन रेलवे स्टेशन पिकअप, लोकल सिटी टैक्सी, महाकालेश्वर दर्शन, आउटस्टेशन, वन-वे टैक्सी, और कॉर्पोरेट व ग्रुप बुकिंग। रूट: इंदौर, ओंकारेश्वर, माहेश्वर, मांडू, देवास, बागलामुखी (नालखेड़ा)।",
    },
    {
      question: "किराया कितना है?",
      answer:
        "इस साइट पर किराया नहीं है। बेस्ट रेट के लिए कॉल करें। पिकअप, ड्रॉप, तारीख और समय बताएं, रेट कॉल या WhatsApp पर कन्फर्म होगा।",
    },
  ],
  defaults: {
    pickup: "उज्जैन",
    drop: "महाकालेश्वर",
  },
  source: "उज्जैन टैक्सी सर्विस",
  related: [
    {
      href: "/",
      label: "English homepage",
      text: "Taxi Service in Ujjain – 24/7 Car Taxi.",
    },
    ...sharedRelated.filter((item) => item.href !== "/hi"),
  ],
};

export const landings = {
  airport: airportLanding,
  omkareshwar: omkareshwarLanding,
  mahakal: mahakalLanding,
  indore: indoreLanding,
  outstation: outstationLanding,
  hindi: hindiLanding,
} as const;
