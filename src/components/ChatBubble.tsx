"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { business } from "@/data/business";

const DISMISS_KEY = "bc-chat-dismissed";
const SHOW_DELAY_MS = 2000;
// Below this width the greeting popup is skipped entirely (see comment in
// the effect below) — matches Tailwind's `sm` breakpoint.
const MIN_WIDTH_FOR_GREETING = 640;

/** Floating WhatsApp chat bubble: icon button plus a one-time greeting
 * popup. No API/token involved — it's a plain `wa.me` deep link, same as
 * the button always was. The greeting auto-shows once per browser tab
 * (sessionStorage) rather than on every page — but only on screens wide
 * enough to fit it without covering page content, since on a phone-height
 * viewport the popup's ~230px footprint reliably overlapped whatever was at
 * the bottom of the current page (contact details, category lists, etc.) —
 * confirmed visually while building this. Below that width the button stays
 * a plain, always-tappable WhatsApp link with no auto-popup, same pattern
 * most mobile sites use for this. */
export function ChatBubble({
  greeting,
  closeLabel,
  ctaLabel,
  buttonLabel,
}: {
  greeting: string;
  closeLabel: string;
  ctaLabel: string;
  buttonLabel: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia(`(max-width: ${MIN_WIDTH_FOR_GREETING - 1}px)`).matches) {
      return;
    }

    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      // sessionStorage unavailable (privacy mode, etc.) — just show it.
    }
    if (dismissed) return;

    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setVisible(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // ignore
    }
  }

  const href = `https://wa.me/${business.whatsappNumber}`;

  return (
    <div
      className="fixed right-4 z-40 flex flex-col items-end gap-3 sm:right-5"
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
    >
      {visible && (
        <div className="relative max-w-[260px] rounded-2xl rounded-br-sm bg-white p-4 text-sm leading-relaxed text-slate-700 shadow-xl ring-1 ring-slate-200">
          <button
            type="button"
            onClick={dismiss}
            aria-label={closeLabel}
            className="absolute -top-2.5 -right-2.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-white shadow hover:bg-slate-900"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
          <p>{greeting}</p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#25D366] hover:underline"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            {ctaLabel}
          </a>
        </div>
      )}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={buttonLabel}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" aria-hidden />
      </a>
    </div>
  );
}
