import { useState } from "react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080b18]/85 backdrop-blur-xl">
      <nav className="container-shell flex h-[76px] items-center justify-between">

        <a href="#home" className="font-display text-2xl font-bold text-white">
          devu<span className="text-cyan-300">.</span>
        </a>

        <button
          className="rounded-lg border border-white/15 px-3 py-2 text-sm text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-[76px] flex-col gap-5 border-b border-white/10 bg-[#080b18] px-6 py-6 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm text-slate-300 transition hover:text-cyan-300"
            >
              {label}
            </a>
          ))}

          <a href="#contact" className="button-outline">
            Let's talk ↗
          </a>
        </div>

      </nav>
    </header>
  );
}