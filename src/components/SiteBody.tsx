import type { ReactNode } from "react";
import type { Locale } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";
import { localBusinessJsonLd } from "@/lib/structuredData";
import { JsonLd } from "./JsonLd";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ChatBubble } from "./ChatBubble";
import { LoadingScreen } from "./LoadingScreen";

/** Shared page chrome (header, footer, structured data, WhatsApp/Messenger
 * chat bubbles) used inside the <body> of both locale root layouts. See
 * docs/i18n.md. */
export function SiteBody({ locale, children }: { locale: Locale; children: ReactNode }) {
  const dict = getDictionary(locale);

  return (
    <>
      <LoadingScreen />
      <JsonLd data={localBusinessJsonLd(locale, dict)} />
      <Header locale={locale} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} dict={dict} />
      <ChatBubble
        whatsappLabel={dict.contact.whatsappCta}
        messengerLabel={dict.chat.messengerCta}
      />
    </>
  );
}
