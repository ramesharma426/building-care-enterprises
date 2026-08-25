import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import { SITE_NAME, SITE_URL, GOOGLE_SITE_VERIFICATION } from "@/lib/site";
import { SiteBody } from "@/components/SiteBody";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | हेटौँडामा निर्माण सामग्री, स्यानिटरी तथा मेसिनरी औजार`,
    template: `%s | ${SITE_NAME}`,
  },
  ...(GOOGLE_SITE_VERIFICATION
    ? { verification: { google: GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export default function NepaliRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ne" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex min-h-screen flex-col bg-white text-slate-900 antialiased">
        <SiteBody locale="ne">{children}</SiteBody>
      </body>
    </html>
  );
}
