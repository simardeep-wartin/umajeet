import { useEffect, useState } from "react";
import hero from "@/assets/hero.jpg";

const slides = [
  { title: "Build Dreams Into Reality", subtitle: "With trusted real estate solutions" },
  { title: "Engineering Tomorrow's Skylines", subtitle: "End-to-end construction expertise" },
  { title: "Crafted With Precision", subtitle: "Quality that stands the test of time" },
  { title: "Your Vision, Our Foundation", subtitle: "Partner with industry leaders" },
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
      <img
        src={hero}
        alt="Construction skyline"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 md:px-8 md:pb-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            {slides[i].title}
          </h1>
          <p className="mt-4 text-base text-white/90 md:text-lg">{slides[i].subtitle}</p>
        </div>
        <div className="mt-8 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
