import story from "@/assets/story.jpg";
import vision from "@/assets/vision.jpg";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading>About Us</SectionHeading>

        <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <img src={story} alt="Our story" width={800} height={800} loading="lazy" className="h-72 w-full object-cover md:h-80" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[var(--brand-navy)]">Our Story</h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-[15px]">
              Umajeet Infratech Pvt. Ltd., established in 2025, is a forward-looking infrastructure
              and construction company committed to delivering high quality, sustainable, and
              innovative solutions in the rapidly evolving infrastructure sector. With a strong
              foundation built on integrity, excellence, and reliability, we provide end-to-end
              services in construction, infrastructure development, and consultancy.
            </p>
          </div>
        </div>

        <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-[var(--brand-navy)]">Our Vision</h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-[15px]">
              Our vision is to be a pioneering force in civil engineering and infrastructure
              development across India, recognized for delivering projects that combine quality,
              safety, and innovation. We aspire to create sustainable, modern, and resilient
              spaces—from structural works to turnkey solutions—that uplift communities and enable
              growth. Through the integration of cutting-edge technology, eco-friendly practices,
              and digital transformation, we aim to redefine the standards of construction
              efficiency, cost-effectiveness, and client satisfaction.
            </p>
          </div>
          <div className="order-1 overflow-hidden rounded-xl border border-border shadow-sm md:order-2">
            <img src={vision} alt="Our vision" width={800} height={600} loading="lazy" className="h-72 w-full object-cover md:h-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
