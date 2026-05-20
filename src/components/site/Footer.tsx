import logo from "@/assets/logo.png";

const cols = [
  { title: "Product", items: ["Features", "Integrations", "Pricing"] },
  { title: "Company", items: ["About us", "Blog", "Careers", "Customers", "Brand"] },
  { title: "Resources", items: ["Community", "Contact", "DPA", "Terms of service"] },
];

export function Footer() {
  return (
    <footer className="bg-white shadow-[0px_-7px_10.45px_rgba(16,66,149,0.2)]">
      <div className="mx-auto max-w-7xl pt-20 pb-10 px-20">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#home">
              <img src={logo.src} alt="Umajeet Infratech" className="h-14 w-auto" />
            </a>
            <p className="mt-5 text-[18px] text-[#1a1a1a]">
              More Comfortable.
              <br />
              More Classy.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-[18px] font-bold text-black">{c.title}</h4>
              <ul className="mt-4 space-y-2">
                {c.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[16px] text-[#1a1a1a] transition hover:text-[#1D4ED8]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#1a1a1a] h-px w-full" />

        <div className="mt-6 flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
          <p className="text-[14px] text-[#1a1a1a]">© 2025 Umajeet Infratech. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="text-[14px] text-[#1a1a1a] hover:text-[#1D4ED8]">Terms of Service</a>
            <a href="#" className="text-[14px] text-[#1a1a1a] hover:text-[#1D4ED8]">Policy service</a>
            <a href="#" className="text-[14px] text-[#1a1a1a] hover:text-[#1D4ED8]">Cookie Policy</a>
            <a href="#" className="text-[14px] text-[#1a1a1a] hover:text-[#1D4ED8]">Partners</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
