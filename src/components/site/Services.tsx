import interior from "@/assets/svc-interior.jpg";
import curing from "@/assets/svc-curing.jpg";
import civil from "@/assets/svc-civil.jpg";
import roads from "@/assets/svc-roads.jpg";
import horti from "@/assets/svc-horticulture.jpg";
import elec from "@/assets/svc-electrical.jpg";
import vent from "@/assets/svc-ventilation.jpg";
import fire from "@/assets/svc-firealarm.jpg";
import pipe from "@/assets/svc-pipework.jpg";
import { SectionHeading } from "./SectionHeading";

function Card({ img, title, className = "" }: { img: string; title: string; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-xl shadow-sm ${className}`}>
      <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-x-0 bottom-0 bg-[var(--brand-navy)]/95 px-5 py-4 text-center">
        <span className="text-sm font-semibold text-white md:text-base">{title}</span>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading>Services We Offer</SectionHeading>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <Card img={interior} title="Interior & Exterior" className="h-56 md:h-64" />
          <Card img={curing} title="Curing & Finishing" className="h-56 md:h-64" />
          <div className="sm:col-span-2">
            <Card img={civil} title="Civil Construction & Contracting (Residential, Commercial, Industrial)" className="h-64 md:h-80" />
          </div>
          <Card img={roads} title="Roads & Highways" className="h-56 md:h-64" />
          <Card img={horti} title="Horticulture" className="h-56 md:h-64" />
          <Card img={elec} title="Electrical Bus Duct Installation" className="h-56 md:h-64" />
          <Card img={vent} title="Ventilation Panel Installation" className="h-56 md:h-64" />
          <Card img={fire} title="Fire Alarm Work" className="h-56 md:h-64" />
          <Card img={pipe} title="Pipe Work Installation" className="h-56 md:h-64" />
        </div>
      </div>
    </section>
  );
}
