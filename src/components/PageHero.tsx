import { Container } from "./Container";

export function PageHero({ title, intro }: { title: string; intro: string }) {
  return (
    <section className="border-b border-brand-100 bg-brand-50">
      <Container className="py-14">
        <h1 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">{intro}</p>
      </Container>
    </section>
  );
}
