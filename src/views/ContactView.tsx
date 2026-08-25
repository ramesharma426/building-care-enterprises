import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Locale } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";
import { business } from "@/data/business";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { FacebookIcon } from "@/components/FacebookIcon";

const MAP_QUERY = `Building Care Enterprises, ${business.address.line1}, ${business.address.city}, ${business.address.district}, Nepal`;
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;

export function ContactView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const contact = dict.contact;

  return (
    <>
      <PageHero title={contact.title} intro={contact.intro} />

      <section className="py-14">
        <Container className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="flex items-center gap-2 text-brand-700">
                <MapPin className="h-5 w-5" aria-hidden />
                <p className="text-sm font-semibold uppercase tracking-wide">
                  {contact.addressHeading}
                </p>
              </div>
              <p className="mt-2 text-slate-700">
                {business.address.line1}
                <br />
                {business.address.city}, {business.address.district}
                <br />
                {business.address.country}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="flex items-center gap-2 text-brand-700">
                <Phone className="h-5 w-5" aria-hidden />
                <p className="text-sm font-semibold uppercase tracking-wide">
                  {contact.phoneHeading}
                </p>
              </div>
              <a
                href={`tel:${business.phoneE164}`}
                className="mt-2 block text-lg font-semibold text-slate-900 hover:text-brand-700"
              >
                {business.phoneDisplay}
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <div className="flex items-center gap-2 text-brand-700">
                <Mail className="h-5 w-5" aria-hidden />
                <p className="text-sm font-semibold uppercase tracking-wide">
                  {contact.emailHeading}
                </p>
              </div>
              <a
                href={`mailto:${business.email}`}
                className="mt-2 block break-all text-lg font-semibold text-slate-900 hover:text-brand-700"
              >
                {business.email}
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
                {contact.hoursHeading}
              </p>
              <p className="mt-2 text-sm text-slate-600">{contact.hoursNote}</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`https://wa.me/${business.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                {contact.whatsappCta}
              </a>
              <a
                href={`tel:${business.phoneE164}`}
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {contact.callCta}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-brand-200 px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50"
              >
                <Mail className="h-4 w-4" aria-hidden />
                {contact.emailCta}
              </a>
              <a
                href={business.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-brand-200 px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50"
              >
                <FacebookIcon className="h-4 w-4" />
                {dict.common.facebookLabel}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-700">
              {contact.mapHeading}
            </p>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title={contact.mapHeading}
                src={MAP_SRC}
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
