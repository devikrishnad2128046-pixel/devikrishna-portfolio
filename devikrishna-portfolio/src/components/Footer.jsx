export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">

      <div className="container-shell flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">

        <a
          href="#home"
          className="font-display text-xl font-bold text-white"
        >
          devu<span className="text-cyan-300">.</span>
        </a>

        <p>
          © {new Date().getFullYear()} Devu. All Rights Reserved.
        </p>

        <a
          href="#home"
          className="transition hover:text-cyan-300"
        >
          Back to top ↑
        </a>

      </div>

    </footer>
  );
}