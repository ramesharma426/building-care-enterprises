import { business } from "@/data/business";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { MessengerIcon } from "./MessengerIcon";

/** Two separate floating buttons, bottom-right, stacked vertically, on
 * every page — WhatsApp and Messenger. Each is its own direct link, opened
 * in a new tab so the site stays open behind it. No shared toggle/expand
 * state, no API, token, or backend involved for either — plain `wa.me` /
 * `m.me` deep links. Server component (no interactivity needed). */
export function ChatBubble({
  whatsappLabel,
  messengerLabel,
}: {
  whatsappLabel: string;
  messengerLabel: string;
}) {
  const whatsappHref = `https://wa.me/${business.whatsappNumber}`;

  return (
    <div
      className="fixed right-4 z-40 flex flex-col items-end gap-3 sm:right-5"
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={business.messengerUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={messengerLabel}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessengerIcon className="h-6 w-6" />
      </a>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={whatsappLabel}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
