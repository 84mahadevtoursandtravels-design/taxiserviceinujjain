"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_GREETING,
  WHATSAPP_GREETING_HI,
  whatsappHref,
} from "@/lib/config";
import { trackFormSubmit } from "@/lib/track";

type Locale = "en" | "hi";

const copy = {
  en: {
    title: "Book on WhatsApp",
    intro: "Send your name, phone, pickup, drop and time. We open WhatsApp with those details.",
    name: "Name",
    phone: "Phone",
    pickup: "Pickup",
    drop: "Drop",
    date: "Date",
    time: "Time",
    submit: "Send on WhatsApp",
    sending: "Opening WhatsApp...",
    again: "Send another enquiry",
    call: "Or call",
    blocked: "If WhatsApp did not open, use this link:",
    open: "Open WhatsApp",
    rate: "Call for best rate. No fare is charged by this form.",
    errors: {
      name: "Please enter your name.",
      phone: "Please enter a valid phone number.",
      pickup: "Please enter the pickup.",
      drop: "Please enter the drop.",
      date: "Please choose a date.",
      time: "Please choose a time.",
    },
  },
  hi: {
    title: "WhatsApp पर बुक करें",
    intro: "नाम, फोन, पिकअप, ड्रॉप और समय भरें। हम यही डिटेल WhatsApp पर खोलेंगे।",
    name: "नाम",
    phone: "फोन",
    pickup: "पिकअप",
    drop: "ड्रॉप",
    date: "तारीख",
    time: "समय",
    submit: "WhatsApp पर भेजें",
    sending: "WhatsApp खुल रहा है...",
    again: "एक और बुकिंग भेजें",
    call: "या कॉल करें",
    blocked: "अगर WhatsApp नहीं खुला, यह लिंक खोलें:",
    open: "WhatsApp खोलें",
    rate: "बेस्ट रेट के लिए कॉल करें। यह फॉर्म किराया नहीं काटता।",
    errors: {
      name: "कृपया नाम लिखें।",
      phone: "कृपया सही फोन नंबर लिखें।",
      pickup: "कृपया पिकअप लिखें।",
      drop: "कृपया ड्रॉप लिखें।",
      date: "कृपया तारीख चुनें।",
      time: "कृपया समय चुनें।",
    },
  },
} as const;

function makeSchema(locale: Locale) {
  const errors = copy[locale].errors;
  return z.object({
    name: z.string().trim().min(2, errors.name),
    phone: z
      .string()
      .trim()
      .refine((value) => value.replace(/\D/g, "").length >= 10, errors.phone),
    pickup: z.string().trim().min(2, errors.pickup),
    drop: z.string().trim().min(2, errors.drop),
    date: z.string().min(1, errors.date),
    time: z.string().min(1, errors.time),
  });
}

type FormValues = z.infer<ReturnType<typeof makeSchema>>;

export default function ContactForm({
  idPrefix = "booking",
  locale = "en",
  source = "Website",
  defaultPickup = "",
  defaultDrop = "",
}: {
  idPrefix?: string;
  locale?: Locale;
  source?: string;
  defaultPickup?: string;
  defaultDrop?: string;
}) {
  const t = copy[locale];
  const [schema] = React.useState(() => makeSchema(locale));
  const [waLink, setWaLink] = React.useState<string | null>(null);
  const [sent, setSent] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      pickup: defaultPickup,
      drop: defaultDrop,
      date: "",
      time: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    const greeting = locale === "hi" ? WHATSAPP_GREETING_HI : WHATSAPP_GREETING;
    const labels =
      locale === "hi"
        ? {
            name: "नाम",
            phone: "फोन",
            pickup: "पिकअप",
            drop: "ड्रॉप",
            date: "तारीख",
            time: "समय",
            page: "पेज",
          }
        : {
            name: "Name",
            phone: "Phone",
            pickup: "Pickup",
            drop: "Drop",
            date: "Date",
            time: "Time",
            page: "Page",
          };

    const message = [
      greeting,
      "",
      `${labels.name}: ${values.name}`,
      `${labels.phone}: ${values.phone}`,
      `${labels.pickup}: ${values.pickup}`,
      `${labels.drop}: ${values.drop}`,
      `${labels.date}: ${values.date}`,
      `${labels.time}: ${values.time}`,
      `${labels.page}: ${source}`,
    ].join("\n");

    const href = whatsappHref(message);
    trackFormSubmit(source);
    setWaLink(href);
    setSent(true);
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const field = (id: string) => `${idPrefix}-${id}`;

  return (
    <form
      className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <h2 className="text-lg font-semibold text-stone-950">{t.title}</h2>
      <p className="mt-1 text-sm leading-6 text-stone-600">
        {t.intro} {t.call}{" "}
        <a className="font-semibold text-stone-900" href={PHONE_TEL}>
          {PHONE_DISPLAY}
        </a>
        .
      </p>

      <div className="mt-4 grid gap-3">
        <Field label={t.name} htmlFor={field("name")} error={errors.name?.message}>
          <Input
            id={field("name")}
            autoComplete="name"
            placeholder={locale === "hi" ? "आपका नाम" : "Your name"}
            {...register("name")}
          />
        </Field>
        <Field label={t.phone} htmlFor={field("phone")} error={errors.phone?.message}>
          <Input
            id={field("phone")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder={locale === "hi" ? "आपका मोबाइल नंबर" : "Your mobile number"}
            {...register("phone")}
          />
        </Field>
        <Field label={t.pickup} htmlFor={field("pickup")} error={errors.pickup?.message}>
          <Input id={field("pickup")} autoComplete="off" {...register("pickup")} />
        </Field>
        <Field label={t.drop} htmlFor={field("drop")} error={errors.drop?.message}>
          <Input id={field("drop")} autoComplete="off" {...register("drop")} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label={t.date} htmlFor={field("date")} error={errors.date?.message}>
            <Input id={field("date")} type="date" {...register("date")} />
          </Field>
          <Field label={t.time} htmlFor={field("time")} error={errors.time?.message}>
            <Input id={field("time")} type="time" {...register("time")} />
          </Field>
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 h-12 w-full bg-emerald-700 text-base font-bold text-white hover:bg-emerald-800"
        size="lg"
      >
        {isSubmitting ? t.sending : sent ? t.again : t.submit}
      </Button>
      <p className="mt-2 text-xs leading-5 text-stone-500">{t.rate}</p>
      {waLink ? (
        <p className="mt-2 text-xs leading-5 text-stone-600">
          {t.blocked}{" "}
          <a className="font-semibold text-emerald-800" href={waLink} target="_blank" rel="noopener noreferrer">
            {t.open}
          </a>
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <label className="text-sm font-medium text-stone-900" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {error ? (
        <p className="text-xs text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
