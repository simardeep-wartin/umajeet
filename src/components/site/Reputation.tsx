import { Headphones, Users, PenTool } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: Headphones, title: "Best Services", desc: "Delivering exceptional real estate solutions that go beyond expectations." },
  { icon: Users, title: "Best Teams", desc: "Our experienced professionals ensure precision and excellence in every project." },
  { icon: PenTool, title: "Best Designs", desc: "Innovative, functional, and future-ready designs that inspire trust and admiration." },
];

export function Reputation() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading>Our Reputation</SectionHeading>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="grid h-10 w-10 place-items-center rounded-md bg-[var(--brand-light)] text-[var(--brand-blue)] transition-colors group-hover:bg-[var(--brand-blue)] group-hover:text-white">
                <it.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-[var(--brand-navy)]">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
