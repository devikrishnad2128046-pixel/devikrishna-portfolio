export default function Hero() {
  return (
    <section id="home" className="hero-bg min-h-screen flex items-center pt-24">
      <div className="container-shell grid items-center gap-12 md:grid-cols-2">

        <div>
          <p className="mb-5 text-cyan-300">
            ✨ Available for opportunities
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Hello, I'm <span className="gradient-text">Devu.</span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-slate-300">
            Frontend Developer
          </h2>

          <p className="mt-5 max-w-lg leading-8 text-slate-400">
            I build beautiful, modern and user-friendly websites
            using React JS, JavaScript and Tailwind CSS.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="button-primary">
              Explore My Work ↗
            </a>

            <a href="#contact" className="button-outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-art">
            <div className="art-ring"></div>
            <div className="art-ring ring-b"></div>
            <div className="art-initial">
              D<span>.</span>
            </div>
          </div>

          <h2 className="text-center text-2xl font-bold">
            Devikrishna
          </h2>

          <p className="mt-3 text-center text-slate-400">
            Creative Frontend Developer ✨
          </p>
        </div>

      </div>
    </section>
  );
}
