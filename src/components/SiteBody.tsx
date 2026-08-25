import type { ReactNode } from "react";
import type { Locale } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";
import { localBusinessJsonLd } from "@/lib/structuredData";
import { JsonLd } from "./JsonLd";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ChatBubble } from "./ChatBubble";

/** Shared page chrome (header, footer, structured data, WhatsApp chat
 * bubble) used inside the <body> of both locale root layouts. See
 * docs/i18n.md. */
export function SiteBody({ locale, children }: { locale: Locale; children: ReactNode }) {
  const dict = getDictionary(locale);

  return (
    <>
      <JsonLd data={localBusinessJsonLd(locale, dict)} />
      <Header locale={locale} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} dict={dict} />
      <ChatBubble
        greeting={dict.chat.greeting}
        closeLabel={dict.chat.close}
        ctaLabel={dict.contact.whatsappCta}
        buttonLabel={dict.nav.whatsapp}
      />
    </>
  );
}
