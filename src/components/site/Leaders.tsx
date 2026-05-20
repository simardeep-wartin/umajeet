import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import leader from "@/assets/leader.jpg";

const leaders = [
  {
    name: "Mr. Ajeet",
    role: "Managing Director",
    bio: "Mr. Ajeet is a visionary leader who combines strategic foresight with a meticulous commitment to quality and service excellence. With a proven track record in the infrastructure sector, he brings to the organization not only innovative business strategies but also a strong ability to translate vision into actionable results.\n\nHis forward-thinking mindset allows him to anticipate industry shifts and adapt proactively, ensuring that Umajeet Infratech remains ahead of market trends. By conceptualizing and leading projects with precision, he addresses the evolving needs of clients and communities—whether through modern construction practices, sustainable development, or advanced project management techniques.",
  },
  {
    name: "Mrs. Uma",
    role: "Director",
    bio: "Mrs. Uma drives operational excellence and people-first leadership at Umajeet Infratech. Her hands-on approach to project governance, vendor management, and client relationships ensures every engagement delivers measurable value.\n\nWith deep expertise in compliance, sustainability and stakeholder management, she champions a culture of accountability, safety and continuous improvement across all verticals of the company.",
  },
];

export function Leaders() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % leaders.length);
  const prev = () => setI((v) => (v - 1 + leaders.length) % leaders.length);
  const l = leaders[i];

  return (
    <section id="leaders" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Intro banner */}
        <div className="rounded-xl bg-[var(--brand-light)] px-6 py-10 md:px-12 md:py-14">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[var(--brand-navy)]">
                — OUR LEADERS
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[var(--brand-navy)] md:text-4xl">
                Invested in your success
              </h2>
            </div>
            <div>
              <p className="text-sm leading-7 text-[var(--brand-navy)]/80">
                As owners, we are more accountable to you and more invested in your success. Across
                all levels of our organization, our experienced, innovative solution providers put
                our culture of ownership to work for you. When you succeed, we succeed.
              </p>
              <a href="#contact" className="mt-4 inline-block text-sm font-semibold text-[var(--brand-navy)] underline-offset-4 hover:underline">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Leader card */}
        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold text-[var(--brand-navy)]">{l.name}</h3>
            <p className="mt-1 text-sm font-medium text-muted-foreground">{l.role}</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground md:text-[15px]">
              {l.bio.split("\n\n").map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex gap-3">
                <button onClick={prev} aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-full border border-border text-[var(--brand-navy)] transition hover:bg-[var(--brand-navy)] hover:text-white">
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button onClick={next} aria-label="Next" className="grid h-10 w-10 place-items-center rounded-full border border-border text-[var(--brand-navy)] transition hover:bg-[var(--brand-navy)] hover:text-white">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="flex gap-2">
                {leaders.map((_, idx) => (
                  <span key={idx} className={`h-2 rounded-full transition-all ${idx === i ? "w-6 bg-[var(--brand-blue)]" : "w-2 bg-border"}`} />
                ))}
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl bg-[var(--brand-navy)]">
            <img src={leader} alt={l.name} width={800} height={900} loading="lazy" className="h-[420px] w-full object-cover md:h-[520px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
