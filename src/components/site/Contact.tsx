"use client";

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
        <p className="mt-4 text-center text-[18px] text-[#717171] font-[family-name:var(--font-poppins)]">
          Any question or remarks? Just write us a message!
        </p>

        <div className="mt-12 grid rounded-xl shadow-sm overflow-hidden md:grid-cols-[1fr_1.6fr]">
          {/* Info panel */}
          <div className="relative overflow-hidden bg-[#0c1b2e] px-10 py-12 text-white">
            <h3 className="font-[family-name:var(--font-poppins)] text-[28px] font-semibold text-white">
              Contact Information
            </h3>
            <p className="mt-2 font-[family-name:var(--font-poppins)] text-[18px] text-[#c9c9c9]">
              Say something to start a live chat!
            </p>

            <ul className="mt-10 space-y-8 font-[family-name:var(--font-poppins)]">
              <li className="flex items-center gap-5 text-[16px] text-white">
                <Phone className="h-5 w-5 shrink-0" />
                +1012 3456 789
              </li>
              <li className="flex items-center gap-5 text-[16px] text-white">
                <Mail className="h-5 w-5 shrink-0" />
                demo@gmail.com
              </li>
              <li className="flex items-start gap-5 text-[16px] text-white">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                <span>132 Dartmouth Street Boston,<br />Massachusetts 02156 United States</span>
              </li>
            </ul>

            {/* Decorative circles */}
            <span className="pointer-events-none absolute -bottom-16 -right-8 h-52 w-52 rounded-full border border-white/20 bg-white/5" />
            <span className="pointer-events-none absolute -bottom-4 right-20 h-36 w-36 rounded-full border border-white/20 bg-white/10" />
          </div>

          {/* Form panel */}
          <form
            onSubmit={onSubmit}
            className="bg-white p-8 md:p-10 font-[family-name:var(--font-poppins)]"
          >
            {/* Name row */}
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="First Name" name="firstName" />
              <Field label="Last Name" name="lastName" defaultValue="Doe" />
            </div>

            {/* Email / Phone row */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone Number" name="phone" defaultValue="+1 012 3456 789" />
            </div>

            {/* Subject */}
            <div className="mt-8">
              <p className="text-[14px] font-semibold text-[#0c1b2e]">Select Subject?</p>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
                {subjects.map((s) => (
                  <label
                    key={s}
                    className="flex cursor-pointer items-center gap-2 text-[14px] text-[#666666]"
                  >
                    <input
                      type="radio"
                      name="subject"
                      checked={subject === s}
                      onChange={() => setSubject(s)}
                      className="h-4 w-4 accent-[#0c1b2e]"
                    />
                    {s}
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="mt-8">
              <label className="text-[14px] font-semibold text-[#666666]">Message</label>
              <textarea
                name="message"
                rows={3}
                maxLength={1000}
                placeholder="Write your message.."
                className="mt-1 w-full resize-none border-b border-[#d9d9d9] bg-transparent pb-3 text-[14px] focus:outline-none focus:border-[#0c1b2e]"
              />
            </div>

            {/* Submit */}
            <div className="mt-8 flex items-center justify-end gap-4">
              {sent && (
                <span className="text-[14px] text-[#1D4ED8]">Message sent!</span>
              )}
              <button
                type="submit"
                className="bg-[#0c1b2e] text-white px-12 py-4 rounded-[5px] text-[16px] font-semibold transition hover:opacity-90"
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
  label,
  name,
  type = "text",
  required,
  defaultValue,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-[14px] font-semibold text-[#666666]">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
        maxLength={120}
        className="mt-1 w-full border-b border-[#d9d9d9] bg-transparent pb-3 text-[14px] text-[#0c1b2e] focus:outline-none focus:border-[#0c1b2e]"
      />
    </div>
  );
}
