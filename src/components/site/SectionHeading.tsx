export function SectionHeading({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className={`h-px w-10 ${light ? "bg-white/60" : "bg-[var(--brand-navy)]"}`} />
      <h2 className={`text-2xl font-bold md:text-3xl ${light ? "text-white" : "text-[var(--brand-navy)]"}`}>
        {children}
      </h2>
      <span className={`h-px w-10 ${light ? "bg-white/60" : "bg-[var(--brand-navy)]"}`} />
    </div>
  );
}
