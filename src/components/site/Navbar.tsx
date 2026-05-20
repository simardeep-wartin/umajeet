import { useEffect, useState } from "react";
import { Menu, X, Building2 } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Leaders", href: "#leaders" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["home", "about", "services", "leaders", "contact"];
      const mid = window.scrollY + window.innerHeight / 3;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid && el.offsetTop + el.offsetHeight > mid) {
          setActive("#" + id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/95 backdrop-blur shadow-sm"
          : "bg-white/90 backdrop-blur md:bg-transparent md:shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
        <a href="#home" onClick={(e) => { e.preventDefault(); go("#home"); }} className="flex items-center gap-2">
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

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); go(l.href); }}
              className={`text-sm font-medium transition-colors hover:text-[var(--brand-blue)] ${
                active === l.href ? "text-[var(--brand-blue)]" : "text-[var(--brand-navy)]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            onClick={() => go("#contact")}
            className="rounded-md bg-[var(--brand-blue)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-navy)] hover:shadow-md"
          >
            Get Quotation
          </button>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md text-[var(--brand-navy)] md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-white md:hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); go(l.href); }}
              className="rounded-md px-3 py-2 text-sm font-medium text-[var(--brand-navy)] hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => go("#contact")}
            className="mt-2 rounded-md bg-[var(--brand-blue)] px-4 py-2.5 text-sm font-semibold text-white"
          >
            Get Quotation
          </button>
        </nav>
      </div>
    </header>
  );
}
