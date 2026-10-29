import { Noto_Sans_Devanagari } from "next/font/google";

const noto = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export default function HindiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="hi" className={noto.className}>
      {children}
    </div>
  );
}
