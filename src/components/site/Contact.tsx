import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const subjects = ["General Inquiry", "Quotation", "Partnership", "Support"];

export function Contact() {
  const [subject, setSubject] = useState(subjects[0]);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading>Contact Us</SectionHeading>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Any question or remarks? Just write us a message!
        </p>

        <div className="mt-12 grid gap-6 rounded-xl bg-white p-2 shadow-sm md:grid-cols-[1fr_1.4fr]">
          {/* Info card */}
          <div className="relative overflow-hidden rounded-xl bg-[var(--brand-navy)] p-8 text-white md:p-10">
            <h3 className="text-xl font-bold">Contact Information</h3>
            <p className="mt-2 text-sm text-white/70">Say something to start a live chat!</p>

            <ul className="mt-10 space-y-6 text-sm">
              <li className="flex items-center gap-4"><Phone className="h-4 w-4" /> +1012 3456 789</li>
              <li className="flex items-center gap-4"><Mail className="h-4 w-4" /> demo@gmail.com</li>
              <li className="flex items-start gap-4"><MapPin className="mt-0.5 h-4 w-4" /> 132 Dartmouth Street Boston,<br />Massachusetts 02156 United States</li>
            </ul>

            <span className="pointer-events-none absolute -bottom-10 right-10 h-32 w-32 rounded-full bg-white/10" />
            <span className="pointer-events-none absolute bottom-10 right-32 h-16 w-16 rounded-full bg-[var(--brand-blue)]/40" />
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="p-4 md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="First Name" name="firstName" defaultValue="" placeholder="" />
              <Field label="Last Name" name="lastName" defaultValue="Doe" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone Number" name="phone" defaultValue="+1 012 3456 789" />
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold text-[var(--brand-navy)]">Select Subject?</p>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
                {subjects.map((s) => (
                  <label key={s} className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
                    <input
                      type="radio"
                      name="subject"
                      checked={subject === s}
                      onChange={() => setSubject(s)}
                      className="h-4 w-4 accent-[var(--brand-navy)]"
                    />
                    {s}
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <label className="text-xs font-semibold text-muted-foreground">Message</label>
              <textarea
                name="message"
                rows={3}
                maxLength={1000}
                placeholder="Write your message.."
                className="mt-1 w-full resize-none border-0 border-b border-border bg-transparent py-2 text-sm outline-none transition focus:border-[var(--brand-blue)]"
              />
            </div>

            <div className="mt-8 flex items-center justify-end gap-4">
              {sent && <span className="text-xs text-[var(--brand-blue)]">Message sent!</span>}
              <button
                type="submit"
                className="rounded-md bg-[var(--brand-navy)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-blue)] hover:shadow-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", required, defaultValue, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; defaultValue?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
        maxLength={120}
        className="mt-1 w-full border-0 border-b border-border bg-transparent py-2 text-sm text-[var(--brand-navy)] outline-none transition focus:border-[var(--brand-blue)]"
      />
    </div>
  );
}
