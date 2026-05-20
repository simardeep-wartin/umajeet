import { Building2 } from "lucide-react";

const cols = [
  { title: "Product", items: ["Features", "Integrations", "Pricing"] },
  { title: "Company", items: ["About us", "Blog", "Careers", "Customers", "Brand"] },
  { title: "Resources", items: ["Community", "Contact", "DPA", "Terms of service"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-[var(--brand-blue)] text-white">
                <Building2 className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-lg font-bold text-[var(--brand-navy)]">Umajeet</span>
                <span className="block text-[10px] tracking-wide text-muted-foreground">
                  Infratech Private Limited
                </span>
              </span>
            </a>
            <p className="mt-5 text-sm text-muted-foreground">
              More Comfortable.
              <br />
              More Classy.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-[var(--brand-navy)]">{c.title}</h4>
              <ul className="mt-4 space-y-2">
                {c.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-muted-foreground transition hover:text-[var(--brand-blue)]">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© 2025 Umajeet Infratech. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-[var(--brand-blue)]">Terms of Service</a>
            <a href="#" className="hover:text-[var(--brand-blue)]">Policy service</a>
            <a href="#" className="hover:text-[var(--brand-blue)]">Cookie Policy</a>
            <a href="#" className="hover:text-[var(--brand-blue)]">Partners</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
