import { ShieldCheck } from "lucide-react";
import type { Locale } from "@/lib/site";
import { getDictionary } from "@/lib/dictionary";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";

export function AboutView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const about = dict.about;

  return (
    <>
      <PageHero title={about.title} intro={about.intro} />

      <section className="py-14">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900">{about.storyHeading}</h2>
            <div className="mt-4 space-y-4 text-slate-600">
              {about.storyBody.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <h2 className="mt-10 text-2xl font-bold text-slate-900">{about.proprietorHeading}</h2>
            <p className="mt-4 leading-relaxed text-slate-600">{about.proprietorBody}</p>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
              <div className="flex items-center gap-2 text-brand-800">
                <ShieldCheck className="h-5 w-5" aria-hidden />
                <h3 className="text-sm font-semibold uppercase tracking-wide">
                  {about.trustHeading}
                </h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {about.trustItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      <section className="bg-slate-50 py-14">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900">{about.valuesHeading}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {about.values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
